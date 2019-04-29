import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio';
import { FireDBService } from '../fire-db.service';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-add-port',
  templateUrl: './add-port.component.html',
  styleUrls: ['./add-port.component.css']
})
export class AddPortComponent implements OnInit {

  port: Portfolio = {
    id: '',
    name: '',
    age: ''
  }

  constructor(private portService: FireDBService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.port.id != '' && this.port.name != '' && this.port.age != '')
      this.portService.addPortfolio(this.port);
    this.port.id = '';
    this.port.name = '';
    this.port.age = '';
  }
}
