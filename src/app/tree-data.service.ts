import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class TreeDataService {
  data : Observable<any>;
  loaded;

  constructor( private http : HttpClient ) { 
    this.data = this.http.get('../assets/data.json');
    this.data.subscribe(x => this.loaded = x.data);
  }

  getNode(id : Number) {
    let z = this.loaded.filter(y => y.id == id);
    return z ? z[0] : z
  }

}