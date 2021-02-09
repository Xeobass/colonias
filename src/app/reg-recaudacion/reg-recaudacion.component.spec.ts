import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegRecaudacionComponent } from './reg-recaudacion.component';

describe('RegRecaudacionComponent', () => {
  let component: RegRecaudacionComponent;
  let fixture: ComponentFixture<RegRecaudacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegRecaudacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegRecaudacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
