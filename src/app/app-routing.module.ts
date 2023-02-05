import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { MenuComponent } from './menu/menu.component';
import { SingleQuestionsComponent } from './single-questions/single-questions.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'single-questions', component: SingleQuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
