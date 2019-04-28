import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { ResearchComponent } from './research/research.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ARtickerComponent } from './articker/articker.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'research', component: ResearchComponent},

  { path: '',   redirectTo: '/Research', pathMatch: 'full' },
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent, ResearchComponent];
