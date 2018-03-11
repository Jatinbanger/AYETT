import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidatorFn  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router'
import { ServiceService } from '../service.service';
import { TokenPayLoad } from '../app-interface';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  model = {
    left: true,
    middle: false,
    right: false
  };
  tokenPayLoad : TokenPayLoad = {
    email:'',
    password:''
  }

  public error: string;
  constructor(private authService: AuthenticationService, private service: ServiceService, private router: Router, private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {

  }

  createForm() {

    this.loginForm = new FormGroup({
      // tslint:disable-next-line
      email: new FormControl('', [Validators.required, this.patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', Validators.required),
    });

  }

  login() {

  this.tokenPayLoad.email = this.loginForm.controls.email.value;
  this.tokenPayLoad.password = this.loginForm.controls.password.value;    
    this.authService.loginMe(this.tokenPayLoad).subscribe(() => {
      this.router.navigate(['/home']);
    },(err)=> {
      console.error(err);
    });
  //   this.service.afterLogin = true;
  }

  patternValidator(regexp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = control.value;
      if (value === '') {
        return null;
      }
      return !regexp.test(value) ? { 'patternInvalid': { regexp } } : null;
    };
  }
}
