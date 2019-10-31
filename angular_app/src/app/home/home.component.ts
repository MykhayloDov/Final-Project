import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../user';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  visibility = false;
  loginForm: FormGroup;
  isSubmitted = false;
  private email: string;
  private password: string;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    if (localStorage.getItem('Admin') !== null) {
      this.router.navigateByUrl('/Admin');
      this.visibility = !this.visibility;
    } else {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required, Validators.email],
        password: ['', Validators.required]
      });
    }
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    this.isSubmitted = true;
    if (!this.loginForm.invalid) {
      this.authService.login(this.loginForm.value);
      this.visibility = !this.visibility;
      this.router.navigateByUrl('/admin');
    } else {
      return ;
    }
    // if (!this.authService.isLoggedIn()) {
    //   this.router.navigateByUrl('/login');
    //   return false;
    // }
    // return true;
    // if (this.email === 'myk.nadia@gmail.com' && this.password === '12345') {
    //   this.router.navigateByUrl('/admin');
    // }
  }
}


