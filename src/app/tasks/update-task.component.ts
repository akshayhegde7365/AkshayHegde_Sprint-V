import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetails } from '../models/project.model';
import { TasktDetails } from '../models/task.model';
import { TasktStatus } from '../models/taskstatus.model';
import { UserDetails } from '../models/user-details.model';
import { ProjectService } from '../service/project.service';
import { TaskService } from '../service/task.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-task.component.html'
})
export class UpdateTaskComponent implements OnInit {
  id: number;
  task: TasktDetails;
  users: UserDetails[] = [];
  projects: ProjectDetails[] = [];
  Status: TasktStatus[] = [{
    id: 1,
    name: 'New'
  },
  {
    id: 2,
    name: 'In-Progress'
  },
  {
    id: 3,
    name: 'In-QA'
  },
  {
    id: 4,
    name: 'Completed'
  }];;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private projectService: ProjectService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.task = new TasktDetails();
    this.id = this.route.snapshot.params['id'];
    this.taskService.getProductByProductId(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.task = data;
        this.projectService.fetchAllProducts()
          .subscribe((data: any) => {
            this.projects = data;
          }, (error) => console.log(error));

        this.userService.fetchAllProducts()
          .subscribe((data: any) => {
            this.users = data;
          }, (error) => console.log(error));
      },
      (error) => console.log(error)
    );
    // this.userService.fetchAllProducts().subscribe((data: any) => {
    //   this.users = data;
    // });
    // this.projectService.fetchAllProducts().subscribe((data: any) => {
    //   this.projects = data;
    // });
  }

  updateTask() {
    this.taskService.updateProduct(this.id, this.task).subscribe(
      (data) => {
        this.task = new TasktDetails();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateTask();
  }
  gotoList() {
    this.router.navigate(['/dashboard/tasks']);
  }
  ChangeProjectId(data: any) {
    this.task.projectId = Number(data.value);
  }
  ChangeUserId(data: any) {
    this.task.assignedToUserId = Number(data.value);
  }
  ChangeStatus(data: any) {
    this.task.status = Number(data.value);
  }
  DeleteProduct() {
    this.taskService.DeleteProduct(this.id).subscribe(
      (data) => {
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }
}
