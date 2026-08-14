import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGrid } from './employee-grid.component';

describe('EmployeeGrid', () => {
  let component: EmployeeGrid;
  let fixture: ComponentFixture<EmployeeGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
