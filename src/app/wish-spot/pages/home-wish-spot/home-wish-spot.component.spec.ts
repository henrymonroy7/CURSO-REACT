import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWishSpotComponent } from './home-wish-spot.component';

describe('HomeWishSpotComponent', () => {
  let component: HomeWishSpotComponent;
  let fixture: ComponentFixture<HomeWishSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWishSpotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWishSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
