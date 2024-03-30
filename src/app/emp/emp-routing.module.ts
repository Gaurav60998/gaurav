import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DasboardComponent},
  {path:'employee',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpRoutingModule { }
