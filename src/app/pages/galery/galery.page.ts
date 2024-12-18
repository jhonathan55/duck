import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInfiniteScroll, IonInfiniteScrollContent, IonCol, IonCard, IonGrid, IonRow } from '@ionic/angular/standalone';
import { QuackService } from '../../services/quack.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonCard, IonCol, IonInfiniteScrollContent, IonInfiniteScroll, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GaleryPage implements OnInit,OnDestroy {
  private _subscription = new Subscription();
  private _quackSvc = inject(QuackService);
  private _router = inject(Router);
  images: string[] = []; // Lista completa de imágenes
  displayedImages: string[] = []; // Imágenes mostradas actualmente
  page = 0; // Página actual para la carga paginada
  pageSize = 20; // Cantidad de imágenes por página
  hasMore = true; // Bandera para determinar si hay más imágenes para cargar
  constructor() { }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  ngOnInit() {
    this.loadImages();
  }

  loadImages(event?: any) {
    if (!this.hasMore) {
      if (event) {
        event.target.complete();
      }
      return;
    }

    // Simular paginación
    const startIndex = this.page * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this._subscription.add(
      this._quackSvc.getListQuack().subscribe((data) => {
        this.images = data.images; // Obtener la lista de imágenes
        const newImages = this.images.slice(startIndex, endIndex);
        this.displayedImages = [...this.displayedImages, ...newImages];
        this.page++;

        // Verificar si hay más imágenes para cargar
        this.hasMore = this.displayedImages.length < this.images.length;

        if (event) {
          event.target.complete(); // Finalizar el evento de scroll infinito
        }
      })
    );
  }
  onImageClick(image: string) {
    this._router.navigate(['/image-detail', image]);
  }
  
}
