import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStoriesComponent } from './case-stories.component';

describe('CaseStoriesComponent', () => {
  let component: CaseStoriesComponent;
  let fixture: ComponentFixture<CaseStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
