import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainService } from './main.service';
import { RouterModule, Routes } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
=======
import { ARtickerComponent } from './articker/articker.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
>>>>>>> 381e70802b3a681e243bc77280a8e6627acf0297
import { environment } from 'src/environments/environment';
import { AddPortComponent } from './add-port/add-port.component';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    ARtickerComponent,
    HomeComponent,
    AddPortComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule
  ],
  providers: [MainService, { provide: LocationStrategy, useClass: HashLocationStrategy }], 
  bootstrap: [AppComponent]
})
export class AppModule { }
