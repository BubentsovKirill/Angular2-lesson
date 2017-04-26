import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgOnInitComponent,
  NgOnInitHostComponent,
  NgOnChanges1Component,
  NgOnChanges1HostComponent,
  HookEventsComponent,
  HookEventsHostComponent
} from './index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgOnInitComponent,
    NgOnInitHostComponent,
    NgOnChanges1Component,
    NgOnChanges1HostComponent,
    HookEventsComponent,
    HookEventsHostComponent
  ]
})
export class LifecicleModule { }
