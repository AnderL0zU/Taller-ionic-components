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
  IonGrid, 
  IonRow,   
  IonCol,
  IonBadge,
  IonThumbnail,
  IonToggle
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  mailOutline,
  callOutline,
  locationOutline,
  syncOutline,
  checkmarkCircle,
  pauseCircle,
  logoGithub,       
  newspaperOutline  
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
    IonGrid,
    IonRow,
    IonCol,
    IonBadge,
    IonThumbnail,
    IonToggle
  ],
})
export class Tab3Page {
  // Student Profile Data
  public fullName: string = 'Anderson Lozano';
  public roleTitle: string = 'CEO';
  public emailAddress: string = 'anderson.lozano@universidad.edu';
  public phoneNumber: string = '+52 55 1234 5678';
  public locationCity: string = 'Campus Central / Remoto';
  public github: string = 'github.com/AnderL0zU/';
  public portfolio: string = '4nderL0zu.com';
  public avatarImageUrl: string = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&crop=faces';
  
  public fullName2: string = 'Brais Moure';
  public roleTitle2: string = 'CTO';
  public emailAddress2: string = 'braismoure@gmail.dev';
  public phoneNumber2: string = '+52 54 1234 5678';
  public locationCity2: string = 'Remoto';
  public github2: string = 'github.com/BraisMoure/';
  public portfolio2: string = 'moure.dev';
  public avatarImageUrl2: string = 'https://imagenes.businessinsider.es/files/image_640_360/uploads/imagenes/2023/10/11/68bff6a5a72fe.jpeg';

  
  public isAvailable: boolean = true;
  public isAvailable2: boolean = false;

  constructor() {
    addIcons({
      mailOutline,
      callOutline,
      locationOutline,
      syncOutline,
      checkmarkCircle,
      pauseCircle,
      logoGithub,
      newspaperOutline
    });
  }

  /**
   * Toggles student availability state dynamically between "Disponible" and "Ocupado".
   */
  public toggleAvailability(): void {
    this.isAvailable = !this.isAvailable;
  }

  public toggleAvailability2(): void {
    this.isAvailable2 = !this.isAvailable2;
  }
}