import { Component } from '@angular/core';

@Component({
  selector: 'fa-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {
  visible:boolean = true;
  hide(){
    return this.visible = false;
  }
}
