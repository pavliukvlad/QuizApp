import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { TestComponent } from './components/test/test.component';
import { EditTestComponent } from './components/edit-test/edit-test.component';
import { QuestionComponent } from './components/question/question.component';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { CreateTestComponent } from './components/create-test/create-test.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
    { path: 'create_test', component: CreateTestComponent, canActivate: [AuthGuard] },
    { path: 'edit_test/:testId', component: EditTestComponent, canActivate: [AuthGuard]},
    { path: 'tests', component: TestComponent, canActivate: [AuthGuard] },
    { path: 'create_question', component: CreateQuestionComponent, canActivate: [AuthGuard] },
    { path: 'questions/:testGuid', component: QuestionComponent, canActivate: [AuthGuard] },
    { path: 'editQuestion/:questionGuid', component: EditQuestionComponent, canActivate: [AuthGuard] }
  ] }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
