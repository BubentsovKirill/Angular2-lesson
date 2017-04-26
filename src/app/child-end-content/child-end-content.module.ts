import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ViewChildComponent,
    ViewChildHostComponent,
    ViewChildrenComponent,
    ViewChildrenHostComponent,
    ItemComponent,
    ListComponent,
    ListHostComponent
} from './index';


@NgModule({
  imports: [
      CommonModule,
  ],
  declarations: [
      ViewChildComponent,
      ViewChildHostComponent,
      ViewChildrenComponent,
      ViewChildrenHostComponent,
      ItemComponent,
      ListComponent,
      ListHostComponent
  ]
})
export class ChildEndContentModule { }
