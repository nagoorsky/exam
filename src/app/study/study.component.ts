import { Component } from '@angular/core';
import * as data from '../../assets/questions.json';
@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss'],
})
export class StudyComponent {
  questions = data;
  question: any;
  n = 0;
  constructor() {
    this.question = this.questions[this.n];
  }
  increase() {
    this.n++;
  }
  decrease() {
    this.n--;
  }
}
