import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafHuchasComponent } from './graf-huchas.component';

describe('GrafHuchasComponent', () => {
  let component: GrafHuchasComponent;
  let fixture: ComponentFixture<GrafHuchasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafHuchasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafHuchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
