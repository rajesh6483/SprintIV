import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginComponent implements OnInit {
  UserId:any;
  Password:any;

  constructor() { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    UserName: new FormControl(''),
    Password: new FormControl(''),
});

UserValidation()
{
   if(this.UserId=="Admin" && this.Password=="Admin123")
   {
     console.log("Welcome");
   }
}
}
