import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../models/user-details.model';
import { UserService } from '../service/user.service';

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styles: [
        `
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


  `
    ]
})
export class ListUsersComponent implements OnInit {

    users: UserDetails[] = [];
    //role;

    constructor(
        public service : UserService,
        private router: Router,
        // private authService: AuthService
    ) { }

    ngOnInit(): void {
        //this.role = this.authService.getRole();
          this.service.fetchAllProducts().subscribe((data: any) => {
            this.users = data;
          });
    }

    navigate(): void {
        this.router.navigate(['/dashboard/adduser']);
    }

    updateProduct(user: UserDetails) {
      console.log(user);
      
      this.router.navigate(['/dashboard/updateuser', user.id]);
    }
}