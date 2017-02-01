import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginGroup: any;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginGroup = this.formBuilder.group({
      username: ['a@a.com', Validators.compose([Validators.required, EmailValidator.isValidMailFormat])],
      password: ['cwxad', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    console.dir(this.loginGroup.value);
    if (this.authService.login(this.loginGroup.value.username, this.loginGroup.value.password)) {
      this.router.navigate(['home']);
    } else {
      this.errorMessage = 'Invalid Username of password!';
    }
  }

}

class EmailValidator {

   static isValidMailFormat(control: FormControl){
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "Please provide a valid email": true };
        }

        return null;
    }

}