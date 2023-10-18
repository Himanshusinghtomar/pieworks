import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogElementsExampleComponent } from './dialog-elements-example.component';

describe('DialogElementsExampleComponent', () => {
  let component: DialogElementsExampleComponent;
  let fixture: ComponentFixture<DialogElementsExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogElementsExampleComponent]
    });
    fixture = TestBed.createComponent(DialogElementsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
