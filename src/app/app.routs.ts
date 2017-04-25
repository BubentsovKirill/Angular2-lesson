import { BookComponent } from './components/index';

export const routs = [
    {path: 'style', component : BookComponent },
    {path: '', redirectTo: 'style', pathMatch: 'full'}
]