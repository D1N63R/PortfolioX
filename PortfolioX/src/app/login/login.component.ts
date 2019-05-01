import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: 'user',
    password: 'pass'
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(userinput, password){
    if(userinput = this.user.username) {
      this.router.navigateByUrl('/home');
    }
  }
}
