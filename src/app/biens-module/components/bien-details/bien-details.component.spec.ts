import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienDetailsComponent } from './bien-details.component';

describe('BienDetailsComponent', () => {
  let component: BienDetailsComponent;
  let fixture: ComponentFixture<BienDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
