import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TreeDataService } from '../tree-data.service';
import { DetailsComponent } from './details.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

const TEST_NODE = {
    "name" : "TEST_NODE",
    "id" : 10,
    "field" : "value"
}


describe('DetailsComponent', () => {
  let fixture, detailsComponent, element;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
        providers: [ TreeDataService ],
        declarations: [DetailsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    detailsComponent = fixture.componentInstance;  
    element = fixture.nativeElement;    
  }));

    it('should create component', () => {
        expect(detailsComponent).toBeTruthy();
    });

    it('should have special title without selected node', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => { 
            expect(element.querySelector('h2').innerText).toBe('Выберите узел');
        });
    });

    it('should have correct values with special node', () => {
        detailsComponent.node = TEST_NODE;
        fixture.detectChanges();
        fixture.whenStable().then(() => { 
            expect(element.querySelector('h2').innerText).toBe("Подробности об узле 'TEST_NODE'");
            expect(element.querySelector('li').innerText).toBe("field : value");
        });
    });
});
