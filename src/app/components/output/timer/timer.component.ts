import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fa-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent {
    private currentValue: number = 0;
    private intervalObject: any;

    @Input() interval: number = 1000;

    @Output() tick:EventEmitter<number> = new EventEmitter();

    start(){
        if(this.intervalObject) return;
        this.intervalObject = setInterval(() => {this.callback()}, this.interval)
    }

    stop(){
        if(!this.intervalObject) return;
        clearInterval(this.intervalObject);
        this.intervalObject = false;
    }

    private callback(){
        this.currentValue++;
        this.tick.emit(this.currentValue);
    }

}
