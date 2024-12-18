import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { QuackService } from '../services/quack.service';
import { catchError, Subscription, takeUntil, tap } from 'rxjs';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:true,
  imports: [MaterialModule],
})
export class HomePage implements OnInit,OnDestroy {
  private _subscription=new Subscription();
  private _quackSvc=inject(QuackService);
  randomImage: string | null = null;
  isLoading: boolean = false;
  constructor() {}
 
  ngOnInit(): void {
    this.onGetRandonQuack();
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
   }
   onGetRandonQuack() {
    this.isLoading = true; // Inicia el estado de carga
    this._subscription.add(
      this._quackSvc
      .getRandonQuack()
      .pipe(
        tap((quack) => {
          this.randomImage = quack.url;
          this.isLoading = false; // Detiene el estado de carga
        }),
        catchError((error) => {
          this.isLoading = false; // Detiene el estado de carga en caso de error
          console.error('Error fetching random duck:', error);
          return [];
        }),
        
      )
      .subscribe()
    )
    
  }
}
