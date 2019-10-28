import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastronomyTraditionsComponent } from './gastronomy-traditions.component';

describe('GastronomyTraditionsComponent', () => {
  let component: GastronomyTraditionsComponent;
  let fixture: ComponentFixture<GastronomyTraditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastronomyTraditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastronomyTraditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
