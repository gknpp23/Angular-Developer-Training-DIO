import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardGameValueComponent } from './big-card-game-value.component';

describe('BigCardGameValueComponent', () => {
  let component: BigCardGameValueComponent;
  let fixture: ComponentFixture<BigCardGameValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCardGameValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCardGameValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
