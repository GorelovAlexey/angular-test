import { Component } from '@angular/core';

import { TreeDataService } from '../app/tree-data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // Используется для связи дерева с компонетном детали
  activeNode;

  // Обрабатывает событие клика по узлу дерева в компоненте дерево
  setActiveNode(n) {
    this.activeNode = n;
  }

  constructor( private treeData : TreeDataService) {}

}
