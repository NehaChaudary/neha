import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
menu : any[];
logourl : string;

 /* menu:any[]=[
    {
    DisplayName:'home',
    url:'home'
  },
  
  {
    DisplayName:'contact-us',
    url:'contact-us'
  },
  {
    DisplayName:'login',
    url:'login'
  }

 

  ]

  logourl:string="assets/n.jpg";
  */
  
  constructor(private hearderservices:HeaderService) {

    this.menu = this.hearderservices.getMenus();
    this.logourl = this.hearderservices.getlogourl();

   }

  ngOnInit() {
    
  }

}
