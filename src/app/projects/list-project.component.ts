import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDetails } from '../models/project.model';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styles: [`
    table {
    width: 100%;
    }

    div {
    margin-bottom: 16px;
    }

    mat-card {
    border-radius: 0px;
    }

    .spinner-container {
    text-align-last: center;
    }
    `]
})
export class ListProjectComponent implements OnInit {
    projects: ProjectDetails[] = [];

    constructor(
        private service: ProjectService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.service.fetchAllProducts().subscribe((data: any) => {
            this.projects = data;
          });
    }

    navigate(): void {
        this.router.navigate(['/dashboard/addproject']);
    }

    updateProduct(project: ProjectDetails) {
      console.log(project);
      
      this.router.navigate(['/dashboard/updateproject', project.id]);
    }
}