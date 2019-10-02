import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TreeDataService } from '../app/tree-data.service';
import { AppModule } from './app.module';
import { HttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  let appComponent : AppComponent;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule],
      providers: [ AppComponent, TreeDataService ],
    })
    



    appComponent = TestBed.get(AppComponent);
  }));

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });


});
