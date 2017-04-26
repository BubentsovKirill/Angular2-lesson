import {
    BookComponent,
    CounterHostComponent,
    TimerHostComponent,
    NameCardHostComponent,
    MessageBoxHostComponent,
} from './components/index';

import {
    NgOnInitHostComponent,
    NgOnChanges1HostComponent,
    HookEventsHostComponent
} from './lifecicle/index';

import {
    ViewChildHostComponent,
    ViewChildrenHostComponent,
    ListHostComponent
} from './child-end-content/index';

export const routs = [
    {path: 'style', component : BookComponent },
    {path: 'input', component: CounterHostComponent},
    {path: 'output', component: TimerHostComponent},
    {path: 'componentProps', component: NameCardHostComponent},
    {path: 'projection', component: MessageBoxHostComponent},
    {path: 'ngOnInit', component: NgOnInitHostComponent},
    {path: 'ngOnChanges1', component: NgOnChanges1HostComponent},
    {path: 'allEvents', component: HookEventsHostComponent},
    {path: 'viewChild', component: ViewChildHostComponent },
    {path: 'viewChildren', component: ViewChildrenHostComponent},
    {path: 'viewContent', component: ListHostComponent},
    {path: '', redirectTo: 'style', pathMatch: 'full'}
]