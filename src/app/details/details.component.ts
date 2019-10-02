import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { TreeDataService } from '../tree-data.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() node;

  addFieldForm;

  constructor(
    private treeData : TreeDataService,
    private formBuilder : FormBuilder) {
      this.addFieldForm = this.formBuilder.group({
        'field' : '',
        'value' : ''
      });    
  }

  ngOnInit() {
  }

  // Разбивает поля обьекта на массив обьектов {name: value:}
  split(node) {    
    console.log('split');
    let fieldsAndValues;
    if (!node) return undefined;

    fieldsAndValues = Object.keys(this.node)
      .map(x => { return {"name" : x, "value" : node[x]}})
      .filter(x => { return x.name != "name" && x.name != "id" && x.name != "children" && x.name != "parentId"});
    return fieldsAndValues;    
  }

  // Добавляет новое поле если оно не меняет важные поля
  submit(fieldData) {
    this.addFieldForm.reset();
    let {field, value} = fieldData;
    if (field == "name" || field == "id" || field == "children" || field == "parentId" || !(field)) return;
    this.node[field] = value;    
  }
}