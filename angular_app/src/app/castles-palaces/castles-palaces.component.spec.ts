import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastlesPalacesComponent } from './castles-palaces.component';

describe('CastlesPalacesComponent', () => {
  let component: CastlesPalacesComponent;
  let fixture: ComponentFixture<CastlesPalacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastlesPalacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastlesPalacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
