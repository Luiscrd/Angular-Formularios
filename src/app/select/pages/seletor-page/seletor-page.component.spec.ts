import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorPageComponent } from './seletor-page.component';

describe('SeletorPageComponent', () => {
  let component: SeletorPageComponent;
  let fixture: ComponentFixture<SeletorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeletorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeletorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
