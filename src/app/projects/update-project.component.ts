import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetails } from '../models/project.model';
import { TasktDetails } from '../models/task.model';
import { ProjectService } from '../service/project.service';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html'
})
export class UpdateProjectComponent implements OnInit {
  id: number;
  project: ProjectDetails;
  task: TasktDetails[] = [];
  errorMsg: string = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: ProjectService,
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.project = new ProjectDetails();
    this.id = this.route.snapshot.params['id'];
    this.taskService.fetchAllProducts().subscribe((data: any) => {
      this.task = data;
    });
    this.service.getProductByProductId(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.project = data;
      },
      (error) => console.log(error)
    );
  }

  updateProject() {
    this.service.updateProduct(this.id, this.project).subscribe(
      (data) => {
        this.project = new ProjectDetails();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateProject();
  }
  gotoList() {
    this.router.navigate(['/dashboard/projects']);
  }
  DeleteProduct() {
    let taskList = this.task.filter(f => f.projectId == this.id);
    if (taskList != undefined && taskList.length > 0) {
      this.errorMsg = "Cannot Delete Project , Since it's related Task exist.";
    }
    else {
      this.service.DeleteProduct(this.id).subscribe(
        (data) => {
          this.gotoList();
        },
        (error) => console.log(error)
      );
    }
  }
}
