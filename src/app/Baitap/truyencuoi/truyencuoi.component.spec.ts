import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruyencuoiComponent } from './truyencuoi.component';

describe('TruyencuoiComponent', () => {
  let component: TruyencuoiComponent;
  let fixture: ComponentFixture<TruyencuoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruyencuoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruyencuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
