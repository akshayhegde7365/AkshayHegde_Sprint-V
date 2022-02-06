import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDetails } from '../models/project.model';
import { TasktDetails } from '../models/task.model';
import { UserDetails } from '../models/user-details.model';
import { ProjectService } from '../service/project.service';
import { TaskService } from '../service/task.service';
import { UserService } from '../service/user.service';

@Component({
    selector: 'app-list-task',
    templateUrl: './list-task.component.html',
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
export class ListTaskComponent implements OnInit {

    tasks: TasktDetails[] = [];
    constructor(
        private service: TaskService,
        private userService: UserService,
        private projectService: ProjectService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.service.fetchAllProducts().subscribe((data: any) => {
            this.tasks = data;
            this.tasks.forEach(element => {
                this.projectService.getProductByProductId(element.projectId)
                    .subscribe((data: any) => {
                        element.project = data.name;
                    }, (error) => console.log(error));

                this.userService.getProductByProductId(element.assignedToUserId)
                    .subscribe((data: any) => {
                        element.assignedToUser = data.firstName + " " + data.lastName;
                    }, (error) => console.log(error));
            });
        });
    }

    navigate(): void {
        this.router.navigate(['/dashboard/addtask']);
    }
    updateProduct(task: TasktDetails) {
        console.log(task);

        this.router.navigate(['/dashboard/updatetask', task.id]);
    }

}