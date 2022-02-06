import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDetails } from '../models/project.model';
import { TasktDetails } from '../models/task.model';
import { UserDetails } from '../models/user-details.model';
import { ProjectService } from '../service/project.service';
import { TaskService } from '../service/task.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent implements OnInit {
  task: TasktDetails;
  users: UserDetails[] = [];
  projects: ProjectDetails[] = [];
  constructor(private router: Router,
    private userService: UserService,
    private projectService: ProjectService,
    private taskService: TaskService) { this.task = new TasktDetails(); }

  ngOnInit(): void {
    this.userService.fetchAllProducts().subscribe((data: any) => {
      this.users = data;
    });
    this.projectService.fetchAllProducts().subscribe((data: any) => {
      this.projects = data;
    });
  }
  addTask() {
    this.taskService.addProduct(this.task).subscribe((res) => {
      this.router.navigate(['/dashboard/tasks']);
    });
  }
  ChangeProjectId(data:any){
    this.task.projectId = Number(data.value);
  }
  ChangeUserId(data:any){
    this.task.assignedToUserId = Number(data.value);
  }
  RedirectToList(){
    this.router.navigate(['/dashboard/tasks']);
  }
}