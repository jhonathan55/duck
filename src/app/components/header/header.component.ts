import {
  Component,
  inject,
  OnDestroy,
  OnInit,

} from '@angular/core';

import { addIcons } from 'ionicons';
import { menu, menuOutline } from 'ionicons/icons';
import { ToolbarService } from '../../services/toolbar.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _toolbarSvc = inject(ToolbarService);

  toolbarOptions$ = this._toolbarSvc.toolbarState;
 
  
  constructor() {
    addIcons({ menu, menuOutline });
  }
  ngOnDestroy(): void {
   
  }

  ngOnInit() {
   
  }

 

 
}
