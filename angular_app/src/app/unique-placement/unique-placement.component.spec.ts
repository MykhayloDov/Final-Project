import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniquePlacementComponent } from './unique-placement.component';

describe('UniquePlacementComponent', () => {
  let component: UniquePlacementComponent;
  let fixture: ComponentFixture<UniquePlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniquePlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniquePlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
