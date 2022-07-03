import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './page/cart/cart.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { LoggedpagesComponent } from './page/loggedpages/loggedpages.component';
import { LoginpageComponent } from './page/loginpage/loginpage.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedpagesComponent,
    children: [
      { path: '', component: HomepageComponent },
      {
        path: 'cart',
        component: CartComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
