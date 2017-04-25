import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent, ChapterComponent } from './index';
import { CounterComponent } from './input/counter/counter.component';
import { CounterHostComponent } from './input/counter-host/counter-host.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookComponent, ChapterComponent, CounterComponent, CounterHostComponent],
  exports : [BookComponent, ChapterComponent]
})

export class ComponentsModule { }
