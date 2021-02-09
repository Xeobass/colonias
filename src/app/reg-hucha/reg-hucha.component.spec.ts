import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegHuchaComponent } from './reg-hucha.component';

describe('RegHuchaComponent', () => {
  let component: RegHuchaComponent;
  let fixture: ComponentFixture<RegHuchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegHuchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegHuchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
