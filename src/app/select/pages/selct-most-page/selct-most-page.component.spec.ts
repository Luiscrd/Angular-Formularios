import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelctMostPageComponent } from './selct-most-page.component';

describe('SelctMostPageComponent', () => {
  let component: SelctMostPageComponent;
  let fixture: ComponentFixture<SelctMostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelctMostPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelctMostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
