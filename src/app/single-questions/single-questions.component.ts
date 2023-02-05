import { Component } from '@angular/core';
import questions from '../../assets/questions.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-single-questions',
  templateUrl: './single-questions.component.html',
  styleUrls: ['./single-questions.component.scss'],
})
export class SingleQuestionsComponent {
  private _jsonURL = '../../assets/questions.json';
}
