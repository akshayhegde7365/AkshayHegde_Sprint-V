import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserDetails } from '../models/user-details.model';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`.bg-login-image { background-size: cover;background-position: center;}`],
})
export class LoginComponent implements OnInit, OnDestroy {
    loginForm: FormGroup;
    submitted = false;
    loginSubscription: Subscription;
    user: UserDetails[] = [];
    errorMessage: string = "";
    constructor(
        private router: Router,
        private authService: AuthService,
        private userService: UserService
    ) {
        this.userService.fetchAllProducts().subscribe((response: any) => {
            this.user = response;
        },
            (error) => {
                console.log(error.message);
            })
    }

    ngOnDestroy(): void { }

    ngOnInit(): void {
        this.authService.redirectIfLoggedIn();
        this.initForm();
    }

    login() {
        this.submitted = true;
        if (this.loginForm.valid) this.submitData(this.loginForm.value);
    }

    submitData(formData: any) {
        let userDet = this.user.filter(f => f.emailId == formData.username)[0];
        if (userDet != undefined) {
            this.router.navigate(['/dashboard']);
            this.authService.login(userDet);
        }
        else {
            this.errorMessage = "User Not Found";
        }
    }

    initForm() {
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
        });
    }
}