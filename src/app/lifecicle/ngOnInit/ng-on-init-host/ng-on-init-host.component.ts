import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'fa-ng-on-init-host',
  templateUrl: './ng-on-init-host.component.html',
  styleUrls: ['./ng-on-init-host.component.css']
})
export class NgOnInitHostComponent implements  OnDestroy {
  ngOnDestroy(){
    console.log('Destroy Component');

  }
}
