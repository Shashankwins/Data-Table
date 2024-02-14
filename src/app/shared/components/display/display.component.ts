import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  @Input() user : any;
  visible: boolean = false;


  showDialog() {
    this.visible = true;
  }

}
