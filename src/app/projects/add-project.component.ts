import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDetails } from '../models/project.model';
import { ProjectService } from '../service/project.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html'
})
export class AddProjectComponent implements OnInit {
  project: ProjectDetails;
  constructor(private router: Router,public service: ProjectService) {this.project = new ProjectDetails(); }

  ngOnInit(): void {
  }
  addProject() {
    this.service.addProduct(this.project).subscribe((res) => {
      this.router.navigate(['/dashboard/projects']);
    });
  }
  RedirectToList(){
    this.router.navigate(['/dashboard/projects']);
  }
}