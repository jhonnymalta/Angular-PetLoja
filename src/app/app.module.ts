import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { LoginpageComponent } from './page/loginpage/loginpage.component';
import { LoggedpagesComponent } from './page/loggedpages/loggedpages.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { CartComponent } from './page/cart/cart.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LoginpageComponent, LoggedpagesComponent, HomepageComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
