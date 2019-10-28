import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaFoodsComponent } from './sea-foods.component';

describe('SeaFoodsComponent', () => {
  let component: SeaFoodsComponent;
  let fixture: ComponentFixture<SeaFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
