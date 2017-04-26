import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  data: number;

  changeData(){
    this.data = new Date().getFullYear();
  }

  constructor() { }

  ngOnInit() {
  }

}
