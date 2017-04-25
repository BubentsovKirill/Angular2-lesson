import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'fa-ng-on-changes1',
  templateUrl: './ng-on-changes1.component.html',
  styleUrls: ['./ng-on-changes1.component.css']
})
export class NgOnChanges1Component implements OnChanges{
  @Input() value: number;

  ngOnChanges(){
      console.log('ngOnChenges called');
  }
}
