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
  IonBadge,
  IonActionSheet
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, removeOutline, refreshOutline } from 'ionicons/icons';
import { IonCol, IonGrid, IonRow } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
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
    IonBadge,
    IonActionSheet
  ],
})
export class Tab2Page {
  public studentFullName: string = 'Anderson Lozano';
  public counterValue: number = 5;

  //!ACTION SHEET
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor() {
    addIcons({ addOutline, removeOutline, refreshOutline });
  }

  public increaseValue(): void {
    this.counterValue++;
  }

  public decreaseValue(): void {
    if (this.counterValue > 0) {
      this.counterValue--;
    }
  }

  public resetValue(): void {
    this.counterValue = 0;
  }
}




  
  
