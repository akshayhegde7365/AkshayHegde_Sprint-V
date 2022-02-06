import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigator/navigation.component';
import { AddProjectComponent } from './projects/add-project.component';
import { ListProjectComponent } from './projects/list-project.component';
import { AddTaskComponent } from './tasks/add-task.component';
import { ListTaskComponent } from './tasks/list-task.component';
import { AddUserComponent } from './users/add-user.component';
import { ListUsersComponent } from './users/list-user.component';
import { UpdateUserComponent } from './users/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProjectComponent } from './projects/update-project.component';
import { UpdateTaskComponent } from './tasks/update-task.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    FooterComponent,
    ListProjectComponent,
    ListTaskComponent,
    ListUsersComponent,
    AddProjectComponent,
    AddTaskComponent,
    AddUserComponent,
    UpdateUserComponent,
    UpdateProjectComponent,
    UpdateTaskComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
