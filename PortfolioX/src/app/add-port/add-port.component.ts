import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio';
import { FireDBService } from '../fire-db.service';

@Component({
  selector: 'app-add-port',
  templateUrl: './add-port.component.html',
  styleUrls: ['./add-port.component.css']
})
export class AddPortComponent implements OnInit {

  port: Portfolio = {
    id: 0,
    name: '',
    age: 0
  }

  constructor(private portService: FireDBService) { }

  ngOnInit() {
  }

  onSumbit(){
    if(this.port.id != 0 && this.port.name != '' && this.port.age != 0)
      this.portService.addPortfolio(this.port);
    this.port.id = 0;
    this.port.name = '';
    this.port.age = 0;
  }
}
