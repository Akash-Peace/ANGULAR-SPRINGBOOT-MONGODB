import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMyStuffComponent } from './find-my-stuff.component';

describe('FindMyStuffComponent', () => {
  let component: FindMyStuffComponent;
  let fixture: ComponentFixture<FindMyStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMyStuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindMyStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
