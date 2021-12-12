import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  formdata: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
       uname: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(6)
       ])),
       passwd: new FormControl("", this.passwordvalidation())
    });
  }

  passwordvalidation() {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value.length < 5 ? {passwd: true} : null
    };
  }

   onClickSubmit(data: any) {
      console.log(data.uname);
      if (data.uname == "freetuts_audience" && data.passwd == "freetuts.net") {
         alert("Login Successful");
         this.router.navigate(['app-mainpage'])
      }
   }

}
