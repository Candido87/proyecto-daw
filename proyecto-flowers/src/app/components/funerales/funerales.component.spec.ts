import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuneralesComponent } from './funerales.component';

describe('FuneralesComponent', () => {
  let component: FuneralesComponent;
  let fixture: ComponentFixture<FuneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuneralesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
