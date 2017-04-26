import { Component } from '@angular/core';

@Component({
  selector: 'fa-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {

  private visible:boolean = false;

  show(){
    this.visible = true;
  }

  hide(){
    this.visible = false;
  }

}
