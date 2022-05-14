import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  serverName = '';
  allowNewServer = false;
  serverCreationStatus = 'No server was created.'
  

  userName = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = this.serverName + ' was created!';
  }

  onCreateUser() {
    this.userName = '';
  }
}
