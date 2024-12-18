import { Component, inject, OnDestroy } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderModule } from './components/header/header.module';
import { ButtonNavComponent } from './components/button-nav/button-nav.component';
import { NavigationEnd, Router } from '@angular/router';
import { ToolbarService } from './services/toolbar.service';
import { filter, Subscription, tap } from 'rxjs';
import { ToolbarOptionsI } from './interface/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,HeaderModule,ButtonNavComponent],
})
export class AppComponent implements OnDestroy {
  private _router=inject(Router);
  private _toolbarSvc = inject(ToolbarService);
  private _subscription:Subscription=new Subscription();
 
  showBottomNav = true; 
   // Configuración de toolbar basada en rutas
   private toolbarConfigs: { [key: string]: Partial<ToolbarOptionsI> } = {
    '/home': { title: 'Inicio', showBackButton: false, showHamburgerMenu: true },
    '/galery': { title: 'Galery', showBackButton: false, showHamburgerMenu: true },
    '/image-detail': { title: 'Image Detail', showBackButton: true, showHamburgerMenu: false },
    
  };
  constructor() {
    this._subscription.add(
      this._router.events
        .pipe(
          filter(event => event instanceof NavigationEnd), // Detecta solo cuando la navegación termina
          tap(() => this.checkRouteAndToolbar())
        )
        .subscribe()
    );
  }
  ngOnDestroy(): void {
   this._subscription.unsubscribe();
  }
  checkRouteAndToolbar() {
    // Configuración de rutas que ocultan el BottomNav
    const hiddenRoutes: string[] = ['/login', '/register'];
    this.showBottomNav = !hiddenRoutes.some((route) =>
      this._router.url.startsWith(route)
    );

    // Configura el toolbar según la ruta actual
    const currentRoute = Object.keys(this.toolbarConfigs).find((route) =>
      this._router.url.startsWith(route)
    );

    const config = this.toolbarConfigs[currentRoute || ''] || this._toolbarSvc.defaultOptions;

    this._toolbarSvc.setConfig(config);
  }

  
}
