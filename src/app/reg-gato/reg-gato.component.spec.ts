import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegGatoComponent } from './reg-gato.component';

describe('RegGatoComponent', () => {
  let component: RegGatoComponent;
  let fixture: ComponentFixture<RegGatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegGatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
