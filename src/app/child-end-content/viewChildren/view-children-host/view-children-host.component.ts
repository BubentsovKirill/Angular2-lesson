import {Component, ViewChildren, QueryList} from '@angular/core';
import { ViewChildrenComponent } from '../../index';

@Component({
  selector: 'fa-view-children-host',
  templateUrl: './view-children-host.component.html',
  styleUrls: ['./view-children-host.component.css']
})
export class ViewChildrenHostComponent {
  @ViewChildren(ViewChildrenComponent) blocks:QueryList<ViewChildrenComponent>;

  showAll(){
    this.blocks.forEach( x => x.show());
  }
  hideAll(){
      this.blocks.forEach( x => x.hide());
  }
}
