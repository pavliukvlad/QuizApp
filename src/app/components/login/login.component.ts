import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginModel } from '../../models/view_models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    })
  }

  submit(){
    this.authService.signIn(this.getLoginModel())
      .subscribe(() => this.router.navigate(["admin/tests"]));

  }

  getLoginModel(): LoginModel{
    var controls = this.loginForm.getRawValue();
    var loginModel = new LoginModel(controls.username, controls.password);
    return loginModel;
  }

}
