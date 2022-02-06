import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddProjectComponent } from './projects/add-project.component';
import { ListProjectComponent } from './projects/list-project.component';
import { UpdateProjectComponent } from './projects/update-project.component';
import { AddTaskComponent } from './tasks/add-task.component';
import { ListTaskComponent } from './tasks/list-task.component';
import { UpdateTaskComponent } from './tasks/update-task.component';
import { AddUserComponent } from './users/add-user.component';
import { ListUsersComponent } from './users/list-user.component';
import { UpdateUserComponent } from './users/update-user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ListUsersComponent,
      },
      {
        path: 'users',
        component: ListUsersComponent,
      },
      {
        path: 'tasks',
        component: ListTaskComponent,
      },
      {
        path: 'projects',
        component: ListProjectComponent,
      },
      {
        path: 'adduser',
        component: AddUserComponent,
      },
      {
        path: 'addtask',
        component: AddTaskComponent,
      },
      {
        path: 'addproject',
        component: AddProjectComponent,
      },
      {
        path: 'updateuser/:id',
        component: UpdateUserComponent,
      },
      {
        path: 'updateproject/:id',
        component: UpdateProjectComponent
      },
      {
        path: 'updatetask/:id',
        component: UpdateTaskComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
