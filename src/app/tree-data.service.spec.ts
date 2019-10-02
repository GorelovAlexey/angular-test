import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TreeDataService } from './tree-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppModule } from './app.module';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('TreeDataService', () => {
  let treeDataService : TreeDataService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers : [TreeDataService]
    });

    treeDataService = TestBed.get(TreeDataService);
  }));

  it('should create service', () => {
    expect(treeDataService).toBeTruthy();
  });

  it(`should return data`, () => {
    let data = treeDataService.data;
    expect(data).toBeTruthy();
  });


  it(`should load data`, () => {
    let data = treeDataService.data;
    let realData;
    data.subscribe(x => {
      expect(x).toBeTruthy();      
    });
  });
  
  it(`should return correct first element`, () => {
    let data = treeDataService.data;
    let expected = {
      "id": 0,
      "parentId": null,
      "name": "o0",
      "Описание": "Лучший узел во всем дереве", 
      "Цена": "$100"
    };
    data.subscribe(x => {
      expect(x[0]).toBe(expected);      
    });
  });
  

});
