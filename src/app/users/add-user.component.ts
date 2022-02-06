import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../models/user-details.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {
  user: UserDetails;
  constructor(private router: Router , public service : UserService) {this.user = new UserDetails(); }

  ngOnInit(): void {
  }
  addUser() {
    this.service.addProduct(this.user).subscribe((res) => {
      this.router.navigate(['/dashboard/users']);
    });
  }
  RedirectToList(){
    this.router.navigate(['/dashboard/users']);
  }
}
