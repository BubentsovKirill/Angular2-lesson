import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent, ChapterComponent } from './index';
import { CounterComponent } from './input/counter/counter.component';
import { CounterHostComponent } from './input/counter-host/counter-host.component';
import { TimerComponent } from './output/timer/timer.component';
import { TimerHostComponent } from './output/timer-host/timer-host.component';
import { NameCardComponent } from './componentProps/name-card/name-card.component';
import { NameCardHostComponent } from './componentProps/name-card-host/name-card-host.component';
import { MessageBoxComponent } from './projection/message-box/message-box.component';
import { MessageBoxHostComponent } from './projection/message-box-host/message-box-host.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookComponent, ChapterComponent, CounterComponent, CounterHostComponent, CounterComponent, CounterHostComponent, TimerComponent, TimerHostComponent, NameCardComponent, NameCardHostComponent, MessageBoxComponent, MessageBoxHostComponent],
  exports : [BookComponent, ChapterComponent]
})

export class ComponentsModule { }
