import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NearByComponent } from './near-by.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:NearByComponent}
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [NearByComponent]
})
export class NearByModule { }
