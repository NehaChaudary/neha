import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoreModule } from './core/core.module';

import {RouterModule,Routes}from'@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthServiceImpl } from './auth.service';





const routes:Routes=[
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:'home',loadChildren:'app/home/home.module#HomeModule'},
  {path:'login',loadChildren:'app/login/login.module#LoginModule'},
  {path:'contact-us',loadChildren:'app/contact-us/contact-us.module#ContactUsModule'},
  {path:'dashboard',loadChildren:'app/dashboard/dashboard.module#DashboardModule'},
  {path: 'registration', loadChildren:'app/registration/registration.module#RegistrationModule'},
  {path:'**',component:PageNotFoundComponent}
  
]


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,CoreModule,
    

    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    
  
  ],
  providers:[AuthServiceImpl],
  bootstrap: [AppComponent]
})
export class AppModule  { }
