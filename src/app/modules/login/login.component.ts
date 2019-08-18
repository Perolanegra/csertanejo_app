import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppController } from '../core/appController';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    // this.criarLoginForm();
    console.log('Login Component Redirect!');
  }

  criarLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['', Validators.required]
    });
  }
  

}
