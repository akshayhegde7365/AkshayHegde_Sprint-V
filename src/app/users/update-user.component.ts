import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from '../models/user-details.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html'
})
export class UpdateUserComponent implements OnInit {
  id: number;
  user: UserDetails;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service : UserService
  ) {}

  ngOnInit(): void {
    this.user = new UserDetails();
    this.id = this.route.snapshot.params['id'];
    this.service.getProductByProductId(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.user = data;
      },
      (error) => console.log(error)
    );
  }

  updateUser() {
    this.service.updateProduct(this.id ,this.user).subscribe(
      (data) => {
        this.user = new UserDetails();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateUser();
  }
  gotoList() {
    this.router.navigate(['/dashboard/users']);
  }
  
  DeleteProduct(){
    this.service.DeleteProduct(this.id).subscribe(
      (data) => {
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }
}
