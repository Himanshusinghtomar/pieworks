import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaRegionComponent } from './india-region.component';

describe('IndiaRegionComponent', () => {
  let component: IndiaRegionComponent;
  let fixture: ComponentFixture<IndiaRegionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiaRegionComponent]
    });
    fixture = TestBed.createComponent(IndiaRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
