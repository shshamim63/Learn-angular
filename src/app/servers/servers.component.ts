import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowStatus = false;
  constructor() {
    setTimeout(() => {
      this.allowStatus = true;
    }, 2000);
  }
  
  ngOnInit(): void {
  }

}
