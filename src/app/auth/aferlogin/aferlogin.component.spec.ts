import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AferloginComponent } from './aferlogin.component';

describe('AferloginComponent', () => {
  let component: AferloginComponent;
  let fixture: ComponentFixture<AferloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AferloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AferloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
