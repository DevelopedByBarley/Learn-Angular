import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  choosedColor = 'red';
  constructor() {
   setTimeout(() => {
    this.choosedColor = 'blue'
   }, 1500)
  }
}
