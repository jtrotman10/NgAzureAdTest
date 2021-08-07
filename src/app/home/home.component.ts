import { Component, OnInit } from '@angular/core';
import { WindowUtils } from 'msal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  href = window.location.href;
  hostname = window.location.hostname;
  protocol = window.location.protocol;
  port = window.location.port;
  redirectUrl = this.protocol ? this.protocol + '//' + this.hostname + '/' : this.protocol + '//' + this.hostname + ':' + this.port + '/';


  constructor() { }

  ngOnInit() {
  }

}
