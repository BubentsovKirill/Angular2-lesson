import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../../index';

@Component({
  selector: 'fa-view-child-host',
  templateUrl: './view-child-host.component.html',
  styleUrls: ['./view-child-host.component.css']
})
export class ViewChildHostComponent implements OnInit {

  @ViewChild(ViewChildComponent)
  block: ViewChildComponent;

  showMessage(){
    this.block.show()
  }

  hideMessage(){
    this.block.hide()
  }
  constructor() { }

  ngOnInit() {
  }

}
