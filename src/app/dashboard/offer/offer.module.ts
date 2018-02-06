import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:OfferComponent}
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [OfferComponent]
})
export class OfferModule { }
