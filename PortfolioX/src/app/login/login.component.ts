import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router, UrlSerializer } from '@angular/router';
import { data} from './data'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    name: 'user',
    pword: 'pass'
  }
  constructor(private router: Router) { }da

  ngOnInit() {
  }

  onSubmit(username,password) {
    
    for(let user of data)
    {
    if(username == user.name && password == user.pword) {
      this.router.navigateByUrl('/home');
      
    }

    localStorage.setItem('MyApp_User', JSON.stringify(username));

  }
  }
}
