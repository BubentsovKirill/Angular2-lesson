import {
    BookComponent,
    CounterHostComponent,
    TimerHostComponent,
    NameCardHostComponent,
    MessageBoxHostComponent,

} from './components/index';

import {
    NgOnInitHostComponent,
    NgOnChanges1HostComponent
} from './lifecicle/index';

export const routs = [
    {path: 'style', component : BookComponent },
    {path: 'input', component: CounterHostComponent},
    {path: 'output', component: TimerHostComponent},
    {path: 'componentProps', component: NameCardHostComponent},
    {path: 'projection', component: MessageBoxHostComponent},
    {path: 'ngOnInit', component: NgOnInitHostComponent},
    {path: 'ngOnChanges1', component: NgOnChanges1HostComponent},
    {path: '', redirectTo: 'style', pathMatch: 'full'}
]