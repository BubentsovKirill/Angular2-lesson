import { Component } from '@angular/core';

@Component({
  selector: 'fa-ng-on-changes1-host',
  templateUrl: './ng-on-changes1-host.component.html',
  styleUrls: ['./ng-on-changes1-host.component.css']
})
export class NgOnChanges1HostComponent  {
    counter:number = 0;

    increment(){
        this.counter++
    }
}
