import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fa-ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrls: ['./ng-on-init.component.css']
})
export class NgOnInitComponent implements OnInit{

  @Input() name:string;

  ngOnInit() {
    console.log(this.name + 'inicilizited');
  }

}
