import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { UpdateComponent } from './CRUDpages/update/update.component';
import { DeleteComponent } from './CRUDpages/delete/delete.component';
import { AddComponent } from './CRUDpages/add/add.component';
import { ViewComponent } from './CRUDpages/view/view.component';

const routes: Routes = [
  { path: '', component: EmployeesListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add', component: AddComponent },
  { path: 'update/:ID', component: UpdateComponent },
  { path: 'delete/:ID', component: DeleteComponent },
  { path: 'view/:ID', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
