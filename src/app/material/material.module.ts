import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//cl
import { registerLocaleData } from '@angular/common';
import localeEsCL from '@angular/common/locales/es-CL';
registerLocaleData(localeEsCL, 'es-CL');
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonCol,
  IonGrid,
  IonRow,
  IonTab,
  IonTabButton,
  IonBadge,
  IonMenu,
  IonMenuToggle,
  IonSelectOption,
  IonList,
  IonThumbnail,
  IonCardSubtitle,
  IonNote,
     IonSpinner,
     IonInfiniteScroll

} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

const FRM = [FormsModule, ReactiveFormsModule, RouterLink];

const IONIC_COMPONENTS = [
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonButtons,
  IonButton,
  IonHeader,
  IonBackButton,
  IonIcon,
  IonCol,
  IonGrid,
  IonRow,
  IonTab,
  IonTabButton,
  IonBadge,
  IonMenu,
  IonMenuToggle,
  IonSelectOption,
  IonList,
  IonThumbnail,
  IonCardSubtitle,
  IonNote,
  IonSpinner,
  IonInfiniteScroll
];

@NgModule({
  declarations: [],
  imports: [FRM, IONIC_COMPONENTS, CommonModule],
  exports: [FRM, IONIC_COMPONENTS, CommonModule],
})
export class MaterialModule {}
