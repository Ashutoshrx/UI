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
  constructor() {
    setTimeout(() => {
      // console.log("Buttons Enabled");    
      this.disableAlert = false;
    }, 3000);
  }
  showSuccessMsg(){
    // console.log("Success message clicked");
    this.showSuccessAlert = true;    
  }
  showErrorMsg(){
    this.showErrorAlert = true;
    // console.log("Warning message clicked");
}
}
