import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  let component: HeroSectionComponent;
  let fixture: ComponentFixture<HeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have appropriate dropdown values', () => {
    expect(fixture.componentInstance.income).toHaveSize(2);
    expect(fixture.componentInstance.purchasedItems).toHaveSize(2);
    expect(fixture.componentInstance.Manufacturers).toHaveSize(2);
  });
  it('should have `Buyer Demographics by Product` as header', () => {
    expect(fixture.componentInstance.header).toEqual("Buyer Demographics by Product");
  });
});
