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
export class SuccessAlertComponent{
  name = 'Ram Ram';

  updateInput(event: Event): void {
    this.name = (<HTMLInputElement>event.target).value;
    // console.log(event.target.value);
  }
}
