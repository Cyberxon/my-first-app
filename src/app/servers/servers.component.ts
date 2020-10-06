import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  canCreateServer = false;
  serverCreated = 'No server was created!'

  constructor() { 
    setTimeout(() => {
      this.canCreateServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = "A server was Created!";
  }
}
