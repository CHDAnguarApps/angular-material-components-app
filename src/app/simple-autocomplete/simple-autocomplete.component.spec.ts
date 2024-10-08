import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAutocompleteComponent } from './simple-autocomplete.component';

describe('SimpleAutocompleteComponent', () => {
  let component: SimpleAutocompleteComponent;
  let fixture: ComponentFixture<SimpleAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
