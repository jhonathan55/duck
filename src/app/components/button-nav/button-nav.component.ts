import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { homeOutline, cubeOutline, cartOutline, toggleOutline, logOutOutline, imagesOutline} from 'ionicons/icons';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-button-nav',
  templateUrl: './button-nav.component.html',
  styleUrls: ['./button-nav.component.scss'],
  standalone:true,
  imports:[
    MaterialModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]


})
export class ButtonNavComponent  implements OnInit {
 
  constructor() {
    addIcons({ homeOutline, cubeOutline, cartOutline, toggleOutline, logOutOutline,imagesOutline });
   }

  ngOnInit() {}

}
