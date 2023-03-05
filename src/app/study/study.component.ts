import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as data from '../../assets/questions.json';
@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss'],
})
export class StudyComponent {
  questions = data;
  question: any;
  n: number = 0;

  constructor() {
    this.question = this.questions[this.n];
  }
  increase() {
    if (this.n < 518) {
      this.n++;
      this.question = this.questions[this.n];
    } else {
      alert('518 to ostatnie pytanie!');
    }
  }

  decrease() {
    if (this.n >= 1) {
      this.n--;
      this.question = this.questions[this.n];
    } else {
      alert('Numer pytanie nie może być mniejszy niż 1!');
    }
  }

  goToQuestion() {
    if (this.n < 519) {
      this.question = this.questions[this.n - 1];
    } else {
      alert('Podaj liczbę od 1 do 518');
    }
  }
}
