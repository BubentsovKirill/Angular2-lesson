import {
    Component,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
} from '@angular/core';

@Component({
  selector: 'fa-hook-events',
  templateUrl: './hook-events.component.html',
  styleUrls: ['./hook-events.component.css']
})
export class HookEventsComponent implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
    ngOnChanges(){
        console.log('ngOnChanges')
    }
    ngOnInit() {
        console.log('ngOnInit')
    }
    ngDoCheck(){
        console.log('ngDoCheck')
    }
    ngAfterContentInit(){
        console.log('ngAfterContentInit')
    }
    ngAfterContentChecked(){
        console.log('ngAfterContentChecked')
    }
    ngAfterViewChecked(){
        console.log('ngAfterViewChecked')
    }
    ngAfterViewInit(){
        console.log('ngAfterViewInit')
    }
    ngOnDestroy(){
        console.log('ngOnDestroy')
    }
    test(){
        console.log('test')
    }
}
