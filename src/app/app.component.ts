import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Evolution-office-add-in';
  routeLinks: any[];
  activeLinkIndex = -1;
  constructor() { }
}
