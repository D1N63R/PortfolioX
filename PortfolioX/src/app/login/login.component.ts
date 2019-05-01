import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.user.password != '' && this.user.username != '')
    this.user.username = '';
    this.user.password = '';
    console.log("it works?")
  }
}
