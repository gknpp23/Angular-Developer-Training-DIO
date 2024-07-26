import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardGameButtonComponent } from './big-card-game-button.component';

describe('BigCardGameButtonComponent', () => {
  let component: BigCardGameButtonComponent;
  let fixture: ComponentFixture<BigCardGameButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCardGameButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCardGameButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
