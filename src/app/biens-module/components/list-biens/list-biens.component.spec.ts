import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBiensComponent } from './list-biens.component';

describe('ListBiensComponent', () => {
  let component: ListBiensComponent;
  let fixture: ComponentFixture<ListBiensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBiensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
