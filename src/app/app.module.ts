import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BreadcrumbModule} from 'xng-breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { WishSpotModule } from './wish-spot/wish-spot.module';

@NgModule({
  imports: [       
    // CommonModule, 
    BrowserModule, 
    BreadcrumbModule,    
    AppRoutingModule,
    WishSpotModule
  ],
  declarations: [
    AppComponent,
    MainComponent       
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
