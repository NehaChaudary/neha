import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferFriendComponent } from './refer-friend.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:ReferFriendComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReferFriendComponent]
})
export class ReferFriendModule { }
