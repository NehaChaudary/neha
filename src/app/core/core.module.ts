import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ImagePlaceholderComponent } from './image-placeholder/image-placeholder.component';
import { HeaderService } from './header/header.service';


@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, MenuItemComponent, ImagePlaceholderComponent],
  exports:[HeaderComponent,FooterComponent],
  providers:[HeaderService]
})
export class CoreModule { }
