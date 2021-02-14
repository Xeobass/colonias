import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraDatosColoniaComponent } from './muestra-datos-colonia.component';

describe('MuestraDatosColoniaComponent', () => {
  let component: MuestraDatosColoniaComponent;
  let fixture: ComponentFixture<MuestraDatosColoniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraDatosColoniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraDatosColoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
