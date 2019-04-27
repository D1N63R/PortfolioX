import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainService } from './main.service';

import { AppComponent } from './app.component';
import { ResearchComponent } from './research/research.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ARtickerComponent } from './articker/articker.component';


@NgModule({
  declarations: [
    AppComponent,
    ResearchComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    ARtickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
