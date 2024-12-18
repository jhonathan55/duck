import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'galery',
    loadComponent: () => import('./pages/galery/galery.page').then( m => m.GaleryPage)
  },
  {
    path: 'image-detail/:image',
    loadComponent: () => import('./pages/image-detail/image-detail.page').then( m => m.ImageDetailPage)
  },
  { path: '', redirectTo: 'gallery', pathMatch: 'full' }
];
