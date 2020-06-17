import { Component, OnInit } from '@angular/core';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowStatus: boolean = true;
  serverIsListening: string = 'Server Is not listening press the button to enable';
  serverName: string = 'Initial Name';
  constructor() {
    setTimeout(() => {
      this.allowStatus = false;
    }, 2000);

  }
  
  ngOnInit(): void {
  }

  onServerListening() {
    this.serverIsListening = 'Server is listening...';
  }
}
