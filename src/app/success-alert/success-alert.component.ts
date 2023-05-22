import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
  // styles: [
  //   `
  //     p {
  //       color: white;
  //       padding: 10px;
  //       background-color: green;
  //     }
  //   `,
  // ],
})
export class SuccessAlertComponent {
  name = '';
  nameCreationStatus = 'No name has been added';
  updateInput(event: Event): void {
    this.name = (<HTMLInputElement>event.target).value;
  }
  OnClickLaunchButton() {
    if (this.name.length > 0) {
      this.nameCreationStatus = `${this.name} has been added`;
    } else {
      this.nameCreationStatus = `No new name was added`;
    }
  }
}
