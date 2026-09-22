import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, bookOutline, timeOutline, checkmarkDoneCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
  ],
})
export class Tab1Page {
  // Dynamic student greeting state
  public studentFullName: string = 'Carlos Mendoza';
  public academicDegree: string = 'Ingeniería en Sistemas Computacionales';
  public welcomeMessage: string = 'Bienvenido a la sesión de Ionic y Angular';

  constructor() {
    addIcons({ arrowBackOutline, bookOutline, timeOutline, checkmarkDoneCircleOutline });
  }
}
