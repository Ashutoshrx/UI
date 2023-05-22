import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Enact UI';
  disableAlert: boolean = true;
  showSuccessAlert: boolean = false;
  showErrorAlert: boolean = false;
  showThirdProjectAlert: boolean = false;

  cards: Boolean[] = [];

  constructor() {
    setTimeout(() => {
      this.disableAlert = false;
    }, 3000);
  }
  showSuccessMsg() {
    this.showSuccessAlert = true;
  }
  showErrorMsg() {
    this.showErrorAlert = true;
  }
  showThirdProject() {
    this.showThirdProjectAlert = true;
    this.cards.push(this.showThirdProjectAlert);
  }
}
