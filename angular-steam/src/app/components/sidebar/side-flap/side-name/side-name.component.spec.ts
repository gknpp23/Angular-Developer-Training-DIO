import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNameComponent } from './side-name.component';

describe('SideNameComponent', () => {
  let component: SideNameComponent;
  let fixture: ComponentFixture<SideNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
