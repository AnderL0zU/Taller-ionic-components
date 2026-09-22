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
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, removeOutline, refreshOutline } from 'ionicons/icons';

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
  ],
})
export class Tab2Page {
  public counterValue: number = 5;

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
