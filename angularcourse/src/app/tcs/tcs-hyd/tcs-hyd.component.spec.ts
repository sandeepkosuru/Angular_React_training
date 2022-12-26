import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcsHydComponent } from './tcs-hyd.component';

describe('TcsHydComponent', () => {
  let component: TcsHydComponent;
  let fixture: ComponentFixture<TcsHydComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcsHydComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcsHydComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
