import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeAfterComponent } from './before-after.component';

describe('BeforeAfterComponent', () => {
  let component: BeforeAfterComponent;
  let fixture: ComponentFixture<BeforeAfterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforeAfterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeforeAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
