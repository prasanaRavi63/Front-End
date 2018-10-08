import { Component, OnInit } from '@angular/core';
import { APIService }  from '../auth.service';
import { Router } from '@angular/router';
import { Login } from '../login';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  constructor(private postUserDetails: APIService, 
    private router: Router) { }

    ngOnInit() {
    }

   loginuser(username:string,password:string)  { // without type info
    var user = {
      "username": username,
      "password": password
    }
    const newUser: Login = { username, password } as Login;
    this.postUserDetails.getUser(newUser)
    .subscribe((response) => {
      console.log(response);
  },
  (err) => {
    console.log(err);
  }
  );
  // this.postUserDetails.getUser(user);
  }
}
