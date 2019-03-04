import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocatairesComponent } from './list-locataires.component';

describe('ListLocatairesComponent', () => {
  let component: ListLocatairesComponent;
  let fixture: ComponentFixture<ListLocatairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLocatairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLocatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
