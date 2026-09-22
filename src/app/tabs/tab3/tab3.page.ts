import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  IonAvatar,
  IonChip,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  mailOutline,
  callOutline,
  locationOutline,
  syncOutline,
  checkmarkCircle,
  pauseCircle,
} from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
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
    IonAvatar,
    IonChip,
    IonList,
    IonItem,
    IonLabel,
  ],
})
export class Tab3Page {
  // Student Profile Data
  public fullName: string = 'Carlos Mendoza';
  public roleTitle: string = 'Desarrollador Móvil Jr.';
  public emailAddress: string = 'carlos.mendoza@universidad.edu';
  public phoneNumber: string = '+52 55 1234 5678';
  public locationCity: string = 'Campus Central / Remoto';
  public avatarImageUrl: string = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&crop=faces';
  
  // Interactive state requested in assignment: "Disponible" vs "Ocupado"
  public isAvailable: boolean = true;

  constructor() {
    addIcons({
      mailOutline,
      callOutline,
      locationOutline,
      syncOutline,
      checkmarkCircle,
      pauseCircle,
    });
  }

  /**
   * Toggles student availability state dynamically between "Disponible" and "Ocupado".
   */
  public toggleAvailability(): void {
    this.isAvailable = !this.isAvailable;
  }
}
