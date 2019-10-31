import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  // loginForm: FormGroup;
  // isSubmitted = false;
  //
  // constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
  // }
  //
  // ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }
  //
  // get formControls() {
  //   return this.loginForm.controls;
  // }
  //
  // login() {
  //   console.log(this.loginForm.value);
  //   this.isSubmitted = true;
  //   if (this.loginForm.invalid) {
  //     alert('Invalid credentials');
  //     return;
  //   }
  //   this.authService.login(this.loginForm.value);
  //   this.router.navigateByUrl('/admin');
  //   if (!this.authService.isLoggedIn()) {
  //     this.router.navigateByUrl('/login');
  //     return false;
  //   }
  //   return true;
  // }
}
////////////////////////////////////////
// export class LoginComponent {
//   angForm: FormGroup;
//
//   constructor(private formBuilder: FormBuilder) {
//     this.createForm();
//   }
//
//   createForm() {
//     this.angForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]],
//     });
//   }

//   signing() {
//     alert(this.angForm.value);
//   }
// }
