import { Component } from '@angular/core';

@Component({
  selector: 'fa-timer-host',
  templateUrl: './timer-host.component.html',
  styleUrls: ['./timer-host.component.css']
})
export class TimerHostComponent  {
    tickHeadler1(value){
        console.log(`headler 1 = ${value}`)
    }

    tickHeadler2(value){
        console.log(`headler 2 = ${value}`)
    }
}
