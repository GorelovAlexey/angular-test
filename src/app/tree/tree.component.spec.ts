import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';

import { TreeDataService } from '../tree-data.service';
import { TreeComponent } from './tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { Observable } from 'rxjs';

const TEST_DATA = {
    "data" : [{
        "id": 0,
        "parentId": null,
        "name": "o0",
        "Описание": "Лучший узел во всем дереве", 
        "Цена": "$100"
      },
      {
        "id": 1,
        "parentId": 0,
        "name": "o1",
        "Вес" : "120"
      },
      {
        "id": 2,
        "parentId": 0,
        "name": "o2",
        "Обьем" : "1000"
      },
      {
        "id": 3,
        "parentId": null,
        "name": "o3",      
        "Возраст" : "251"
      },
      {
        "id": 4,
        "parentId": 1,
        "name": "o4",
        "Цвет" : "Красный",
        "Код" : "#FF0000"
      },
      {
        "id": 900,
        "parentId": 3,
        "name": "o900",
        "Описание": "Лучший узел во всем дереве после первого узла"
      },
      {
        "id": 7,
        "parentId": 900,
        "name": "o7"
      }]
}

const FAKE_OBSERVABLE = new Observable(observer => {
    observer.next(TEST_DATA);
})




describe('TreeComponent', () => {
  let fixture, treeComponent, element;
  


  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ RouterTestingModule, HttpClientTestingModule, MatTreeModule, MatIconModule],
        providers: [ TreeDataService ],
        declarations: [TreeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TreeComponent);
    treeComponent = fixture.componentInstance;  
    element = fixture.nativeElement;    
  }));

    it('should create component', () => {
        expect(treeComponent).toBeTruthy();
    });

    it('should build correct tree without any elements', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => { 
            expect(element.querySelector('h2').innerText).toBe('Дерево');
        });
    });

    it('should build tree with correct first element', () => {
        treeComponent.data = FAKE_OBSERVABLE;
        fixture.detectChanges();
        fixture.whenStable().then(() => { 
            expect(element.querySelector('a').innerText).toBe(TEST_DATA.data[0].name);
        });
    });



});
