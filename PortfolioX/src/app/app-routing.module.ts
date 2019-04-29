import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { ResearchComponent } from './research/research.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ARtickerComponent } from './articker/articker.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'research', component: ResearchComponent},

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
