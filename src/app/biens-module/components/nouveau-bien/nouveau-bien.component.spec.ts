import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauBienComponent } from './nouveau-bien.component';

describe('NouveauBienComponent', () => {
  let component: NouveauBienComponent;
  let fixture: ComponentFixture<NouveauBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
