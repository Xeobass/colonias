import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaColoniaComponent } from './actualiza-colonia.component';

describe('ActualizaColoniaComponent', () => {
  let component: ActualizaColoniaComponent;
  let fixture: ComponentFixture<ActualizaColoniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizaColoniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizaColoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
