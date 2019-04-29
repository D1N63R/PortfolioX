import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { Portfolio } from './portfolio';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {
  
  portfolios: Observable<Portfolio[]>;
  portfolioCollection : AngularFirestoreCollection;

  portfolioDoc: AngularFirestoreDocument<Portfolio>;
      
  constructor(public afs: AngularFirestore){
      this.portfolios = afs.collection('employees').valueChanges();
      this.portfolioCollection = this.afs.collection('employees');
  }

  getPortfolios():Observable<Portfolio[]>{
          
      console.log(this.portfolios);
      return this.portfolios;

  }

  addPortfolio(port: Portfolio){
      this.portfolioCollection.add(port) ;
  }
}
