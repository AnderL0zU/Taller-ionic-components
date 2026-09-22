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
  IonBadge,
  IonChip,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  removeCircleOutline,
  refreshOutline,
  personCircleOutline,
  hardwareChipOutline,
  checkmarkCircle,
  closeCircle,
  arrowForwardOutline,
} from 'ionicons/icons';

/**
 * HomePage Component
 * Designed for Block 3 practical demonstration:
 * Explains TypeScript typed state, interpolation {{ }}, and (click) event binding.
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
    IonBadge,
    IonChip,
    IonList,
    IonItem,
    IonLabel,
  ],
})
export class HomePage {
  // Strongly-typed state variables for student demonstration
  public studentName: string = 'Carlos Mendoza';
  public studentCode: string = 'DEV-2024-8842';
  public subjectTitle: string = 'Programación de Dispositivos Móviles';
  public unitName: string = 'Unidad 3: Desarrollo Móvil Multiplataforma';
  
  // Interactive counter state
  public counter: number = 0;
  
  // Boolean state toggle demo
  public isServiceActive: boolean = true;
  
  // Execution timestamp
  public lastUpdated: string = new Date().toLocaleTimeString();

  constructor() {
    // Register icons used in template to support standalone tree-shaking
    addIcons({
      addCircleOutline,
      removeCircleOutline,
      refreshOutline,
      personCircleOutline,
      hardwareChipOutline,
      checkmarkCircle,
      closeCircle,
      arrowForwardOutline,
    });
  }

  /**
   * Increments the counter state and updates the timestamp.
   */
  public incrementCounter(): void {
    this.counter++;
    this.refreshTimestamp();
  }

  /**
   * Decrements the counter state with zero-floor validation.
   */
  public decrementCounter(): void {
    if (this.counter > 0) {
      this.counter--;
      this.refreshTimestamp();
    }
  }

  /**
   * Resets counter back to initial state.
   */
  public resetCounter(): void {
    this.counter = 0;
    this.refreshTimestamp();
  }

  /**
   * Toggles the boolean state to demonstrate reactive template updates.
   */
  public toggleServiceStatus(): void {
    this.isServiceActive = !this.isServiceActive;
    this.refreshTimestamp();
  }

  /**
   * Internal helper to keep UI time fresh upon interaction.
   */
  private refreshTimestamp(): void {
    this.lastUpdated = new Date().toLocaleTimeString();
  }
}
