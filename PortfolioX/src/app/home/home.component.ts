import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio';
import { FireDBService } from '../fire-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  portfolios: Portfolio[] = [];

  constructor(private portService: FireDBService) { }

  ngOnInit() {
    this.portService.getPortfolios().subscribe(data => {
      this.portfolios = data
    console.log(data);
    
  });
  }


  


}
