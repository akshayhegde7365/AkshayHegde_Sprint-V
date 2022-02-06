import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../models/user-details.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  public user: UserDetails;
  paths = [
    {
    route: '/dashboard/users',
    class: 'fas fa-users',
    label: 'Manage Users'
    },
    {
      route: '/dashboard/projects',
      class: 'fas fa-boxes',
      label: 'Manage Projects'
    },
    {
      route: '/dashboard/tasks',
      class: 'fas fa-boxes',
      label: 'Manage Tasks'
    }   
  ];
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.fetchFromSessionStorage() !== null)
      this.user = this.authService.fetchFromSessionStorage();
    else this.router.navigateByUrl('/login');
    // if (this.user.role === 'User')
    //   this.paths = this.paths.filter((path) => path.role === this.user.role);
  }

  signOut() {
    this.authService.logout();
  }
}
