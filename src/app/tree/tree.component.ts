import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {Input} from '@angular/core';

import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';

import { Observable } from 'rxjs';

interface TreeNode {
  name : string,
  children? : TreeNode[],
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  _data : Observable<any>;
  root : TreeNode[] = [];

  @Input()
  set data(data : Observable<any>) {
    console.log('data', data);
    data.subscribe(x => this.loadTree(x.data));
  }  


  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  @Output() selectedNode = new EventEmitter();

  constructor() {}  

  ngOnInit() {    
  }

  private loadTree(data) {
    // Можно обойтись и без Map, но она нужна чтобы id мог быть любым
    // Например у первого элемента id 1000

    let m = new Map();
    for (let d of data) {
      m.set(d.id, d);
    }
    for (let d of data) {
      if (d.parentId != null) {
        let parent = m.get(d.parentId);
        parent.children ? parent.children.push(d) : parent.children = [d];
      }
      else {
        this.root.push(d);
      }
    }
    this.dataSource.data = this.root;
  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  clickedNode(n) {
    this.selectedNode.emit(n);
  }

}