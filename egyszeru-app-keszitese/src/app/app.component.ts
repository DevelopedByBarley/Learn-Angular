import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isItGrabbed = false;
  XPos = 0;
  YPos = 0;

  boxDragStart() {
    this.isItGrabbed = true;
  };

  boxDragOver() {
    this.isItGrabbed = false;
  };

  boxDragInProcess(event: any) {
    

    if(this.isItGrabbed) {
      this.XPos = event.clientX - 150;
      this.YPos = event.clientY - 100; 
      console.log(event.clientX, event.clientY)
    }
  }
}
