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
    portfolioN: '',
    tickers: []
  }
  portfolios: Portfolio[] = [];

  constructor(private portService: FireDBService) { }

  ngOnInit() { this.portService.getPortfolios().subscribe(data => {
    this.portfolios = data
  console.log(data);

  
  
});
  }

  onSubmit(){
    if(this.port.portfolioN != '' && this.port.tickers != [])
      this.portService.addPortfolio(this.port);
    
    this.port.portfolioN = '';
    this.port.tickers = [];
  }

  deletePortfolio(event, portfolio: Portfolio)
  {
    this.portService.deletePortfolio(portfolio);
    
  }
}
