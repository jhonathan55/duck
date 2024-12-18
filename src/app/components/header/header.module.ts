import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { MaterialModule } from '../../material/material.module';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HeaderModule { }
