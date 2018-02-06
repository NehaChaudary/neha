import { Injectable } from '@angular/core';


export class HeaderService  {

  constructor() { }

  menu:any[]=[
    {
    DisplayName:'Home',
    url:'home'
  },
  
  {
    DisplayName:'Contact-us',
    url:'contact-us'
  },
  {
    DisplayName:'Login',
    url:'login'
  },

  {
    DisplayName:'Dashboard',
    url:'dashboard'
  },
  {

    DisplayName: 'Registration',
    url : 'registration'
  }

  ]

 
  logourl:string="assets/n.jpg";


getMenus()
{
return this.menu;
}
getlogourl()
{
return this.logourl;
}
}
