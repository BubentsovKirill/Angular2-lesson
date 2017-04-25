import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOnInitComponent } from './ngOnInit/ng-on-init/ng-on-init.component';
import { NgOnInitHostComponent } from './ngOnInit/ng-on-init-host/ng-on-init-host.component';
import { NgOnChanges1Component } from './ngOnChanges1/ng-on-changes1/ng-on-changes1.component';
import { NgOnChanges1HostComponent } from './ngOnChanges1/ng-on-changes1-host/ng-on-changes1-host.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgOnInitComponent, NgOnInitHostComponent, NgOnChanges1Component, NgOnChanges1HostComponent]
})
export class LifecicleModule { }
