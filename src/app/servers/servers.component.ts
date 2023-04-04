import { Component } from '@angular/core';

@Component({
  // selct by tag
  // selector: 'app-servers',

  //select by attribute
  selector: '[app-servers]',

  //selct by class
  // selector: '.app-servers',

  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [`
    p { color: dodgerblue; }
  `]
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
