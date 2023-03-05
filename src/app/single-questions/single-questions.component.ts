import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as data from '../../assets/questions.json';
@Component({
  selector: 'app-single-questions',
  templateUrl: './single-questions.component.html',
  styleUrls: ['./single-questions.component.scss'],
})
export class SingleQuestionsComponent {
  questions = data;
  question: any;
  showAnswear$ = new BehaviorSubject(false);

  constructor() {
    this.question =
      this.questions[Math.floor(Math.random() * this.questions.length)];
  }

  showAnswear() {
    this.showAnswear$.next(true);
  }

  getNewQuestion() {
    this.question =
      this.questions[Math.floor(Math.random() * this.questions.length)];
  }

  getNextQuestion() {
    this.getNewQuestion();
    this.showAnswear$.next(false);
  }
}
