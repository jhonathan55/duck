import { Injectable } from '@angular/core';
import { ToolbarOptionsI } from '../interface/toolbar';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

   defaultOptions: ToolbarOptionsI = {
    title: 'Chile Pasajes',
    showBackButton: false,
    backButtonText: 'Atrás',
    showHamburgerMenu: false,
  };

  // BehaviorSubject para mantener el estado y emitir cambios
  private toolbarState$ = new BehaviorSubject<ToolbarOptionsI>(this.defaultOptions);
  
  constructor() {}

  get toolbarState():Observable<ToolbarOptionsI> {
    return this.toolbarState$.asObservable();
  }
  // Método para establecer la configuración del toolbar
  setConfig(config: Partial<ToolbarOptionsI>) {
    this.toolbarState$.next({ ...this.defaultOptions, ...config });
  }

  // Restablece el toolbar a la configuración por defecto
  reset() {
    this.toolbarState$.next(this.defaultOptions);
  }
  
}
