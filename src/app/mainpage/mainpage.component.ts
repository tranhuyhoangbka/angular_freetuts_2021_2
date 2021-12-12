import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import {HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  formdata: any;
  cutomerdata:any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.formdata = new FormGroup({
       name: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(3)
       ])),
       phone: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(3)
       ])),
       address:new FormControl(""),
       message:new FormControl("")
    });

  }

  onClickSubmit(data: any) {
    const custtable = document.getElementById("custtable");
    if (custtable) {
      custtable.style.display="";
    }

      var row = {
          "name" : data.name,
          "phone" : data.phone,
          "address" : data.address,
          "message" : data.message
      };

      this.cutomerdata.push(row);
      console.log(this.cutomerdata);
  }

}
