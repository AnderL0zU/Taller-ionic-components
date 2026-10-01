import { Component } from '@angular/core';
// Importa TODO desde @ionic/angular/standalone
import { 
  IonTabs, 
  IonTabBar, 
  IonTabButton, 
  IonIcon, 
  IonLabel 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  homeOutline, 
  calculatorOutline, 
  personOutline, 
  caretDownOutline, 
  chevronUpOutline, 
  peopleOutline, 
  logoGithub, 
  newspaperOutline 
} from 'ionicons/icons';

/**
 * TabsPage Component
 * Manages bottom navigation tabs for the independent challenge.
 */
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  // Removidos IonGrid, IonRow e IonCol si no se usan en tabs.page.html
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  constructor() {
    addIcons({
      homeOutline,
      calculatorOutline,
      personOutline,
      caretDownOutline,
      chevronUpOutline,
      peopleOutline,
      logoGithub,
      newspaperOutline
    });
  }
}
