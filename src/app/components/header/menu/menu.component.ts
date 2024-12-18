import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, cubeOutline, cartOutline, toggleOutline, logOutOutline} from 'ionicons/icons';
import { ToolbarService } from '../../../services/toolbar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone:false
})
export class MenuComponent  implements OnInit {
  private _menuCtrl=inject(MenuController);
  private _router=inject(Router);
  private _toolbarSvc=inject(ToolbarService); 
  constructor() { 
    addIcons({  homeOutline, cubeOutline, cartOutline, toggleOutline, logOutOutline });
  }

  ngOnInit() {}
  
  logout() {
    // Lógica para cerrar sesión
    this._router.navigateByUrl('/login');
    //this._toolbarSvc.resetToolbar();
    this._menuCtrl.close();
  }

  toggleTheme() {
    // Lógica para cambiar el tema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    document.body.classList.toggle('dark', !prefersDark.matches);
  }
}
