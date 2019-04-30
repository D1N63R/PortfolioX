import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainService } from './main.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { ResearchComponent } from './research/research.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ARtickerComponent } from './articker/articker.component';
import { environment } from 'src/environments/environment';
import { AddPortComponent } from './add-port/add-port.component';




@NgModule({
  declarations: [
    AppComponent,
    ResearchComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    ARtickerComponent,
    AddPortComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
