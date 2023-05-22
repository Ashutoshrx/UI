import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId: number;
  serverStatus: string = 'offline';
  constructor() {
    this.serverId = parseInt(Math.random().toExponential(10));
    this.serverId % 2 === 0
      ? (this.serverStatus = 'online')
      : (this.serverStatus = 'offline');
  }
  getColor(): string[] {
    return this.serverStatus === 'online'
      ? ['green', 'white']
      : ['red', 'yellow'];
  }
}
