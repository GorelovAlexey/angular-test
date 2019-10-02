import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { DetailsComponent } from './details/details.component';
import { TreeDataService } from './tree-data.service';

import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [  
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule, 
    
    MatTreeModule, 
    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ],
  declarations: [ AppComponent, TreeComponent, DetailsComponent ],  
  providers:    [ TreeDataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
