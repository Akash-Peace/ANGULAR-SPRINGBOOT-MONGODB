import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOverviewComponent } from './chart-overview.component';

describe('ChartOverviewComponent', () => {
  let component: ChartOverviewComponent;
  let fixture: ComponentFixture<ChartOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
