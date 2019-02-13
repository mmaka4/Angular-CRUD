import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './public/signin/signin.component';
import { SignupComponent} from './public/signup/signup.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign_in',
    pathMatch: 'full'
  },
  {
    path: 'sign_in',
    component: SigninComponent
  },
  {
    path: 'sign_up',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
