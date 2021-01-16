import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardcodedAuthenService} from './../service/hardcoded-authen.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username='reeti'
  password=''
  errorMsg='Invalid Credentials'
  invalidLogin=false

  constructor(private router: Router,public hardcode: HardcodedAuthenService) { }

  ngOnInit(): void {
  }
  handleLogin()
  {
    // console.log(this.username);
    //if(this.username==="reeti" && this.password==="123")
    if(this.hardcode.authenticate(this.username,this.password))
    {
      this.invalidLogin=false
      this.router.navigate(['welcome',this.username])
    }
    else{this.invalidLogin=true}
  }

}
