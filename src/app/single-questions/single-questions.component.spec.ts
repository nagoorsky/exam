import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuestionsComponent } from './single-questions.component';

describe('SingleQuestionsComponent', () => {
  let component: SingleQuestionsComponent;
  let fixture: ComponentFixture<SingleQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
