import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule,Routes } from '@angular/router';
import{FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthService, AuthServiceImpl } from '../auth.service';


const routes : Routes=[
  {path:'', component:RegistrationComponent}


]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  declarations: [RegistrationComponent],
  providers:[AuthServiceImpl]
})

export class RegistrationModule { }
