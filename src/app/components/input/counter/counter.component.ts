import { Component, Input } from '@angular/core';

@Component({
  selector: 'fa-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
    @Input() name: string = 'default name';
    @Input() counterValue: number = 0;
    @Input() counterStep: number = 1;
    increment(){
        this.counterValue = this.counterValue + this.counterStep;
    }
}
