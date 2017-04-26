import { Component, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { ItemComponent } from '../../index';
@Component({
  selector: 'fa-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements  AfterContentInit{

  counter: number = 0;
  @ContentChildren(ItemComponent)
  items: QueryList<ItemComponent>;

  ngAfterContentInit(){
      this.counter = this.items.length;
      this.items.forEach(x => x.changeData())
  }
}
