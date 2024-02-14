import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent{
  @Input() user : any;
  @Input() option : any;
  @Input() label : string = '';
  @Input() field : string = '';
}
