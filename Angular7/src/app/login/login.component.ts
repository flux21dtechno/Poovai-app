import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
    selector: 'validate-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(private location: Location) { }
    ngOnInit() {
        console.log(Validators);
      this.loginForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        otp: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
      });
    }
   
    public hasError = (controlName: string, errorName: string) =>{
      return this.loginForm.controls[controlName].hasError(errorName);
    }
    public onSearch = (e)=>{
        console.log(e);
    }
}