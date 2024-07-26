import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardGameSystemIconComponent } from './big-card-game-system-icon.component';

describe('BigCardGameSystemIconComponent', () => {
  let component: BigCardGameSystemIconComponent;
  let fixture: ComponentFixture<BigCardGameSystemIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCardGameSystemIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCardGameSystemIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
