import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponentComponent } from './card-component.component';

describe('CardComponentComponent', () => {
  let component: CardComponentComponent;
  let fixture: ComponentFixture<CardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 4 @input data such as buyingType, manufacturerName, dataType, incomeData', () => {
    expect(fixture.componentInstance.buyingType).toEqual("");
    expect(fixture.componentInstance.manufacturerName).toEqual("");
    expect(fixture.componentInstance.dataType).toEqual("");
    expect(fixture.componentInstance.incomeData).toEqual({});
  });
});
