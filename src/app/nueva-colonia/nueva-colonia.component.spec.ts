import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaColoniaComponent } from './nueva-colonia.component';

describe('NuevaColoniaComponent', () => {
  let component: NuevaColoniaComponent;
  let fixture: ComponentFixture<NuevaColoniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaColoniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaColoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
