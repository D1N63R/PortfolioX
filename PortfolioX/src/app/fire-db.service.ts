import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { Portfolio } from './portfolio';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class FireDBService {
  
  portfolios: Observable<Portfolio[]>;
  portfolioCollection : AngularFirestoreCollection;

  portfolioDoc: AngularFirestoreDocument<Portfolio>;
      
  constructor(public afs: AngularFirestore){
      
      

  }

  getPortfolios():Observable<Portfolio[]>{

    this.portfolioCollection = this.afs.collection('Rosey', ref => ref.orderBy('PortfolioN','asc'));


      this.portfolios = this.afs.collection('Rosey').snapshotChanges().pipe(map(changes => {
        return changes.map(a=>{
          const data = a.payload.doc.data() as Portfolio
          data.id = a.payload.doc.id;
          return data;
        });
      }));
          
      console.log(this.portfolios);
      return this.portfolios;

  }

  addPortfolio(port: Portfolio){
      this.portfolioCollection.add(port) ;
  }

  deletePortfolio(port: Portfolio){
    this.portfolioDoc = this.afs.doc(`Rosey/${port.id}`)
    this.portfolioDoc.delete();
  }

}
