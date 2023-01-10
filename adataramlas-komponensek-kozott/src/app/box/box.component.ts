import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent {
  isItGrabbed = false;

  @Input()
  XPos = 0;
  @Input()
  YPos = 0;
  @Input()
  choosedColor = ''

  boxDragStart() {
    this.isItGrabbed = true;
  }

  boxDragOver() {
    this.isItGrabbed = false;
  }

  boxDragInProcess(event: any) {
    if (this.isItGrabbed) {
      this.XPos = event.clientX - 150;
      this.YPos = event.clientY - 100;
      console.log(event.clientX, event.clientY);
    }
  }
}
