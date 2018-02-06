import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:HomeComponent}
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent],
  
})
export class HomeModule { }
