import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackChartComponent } from './stack-chart.component';

describe('StackChartComponent', () => {
  let component: StackChartComponent;
  let fixture: ComponentFixture<StackChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
