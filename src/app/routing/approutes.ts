import { Routes } from '@angular/router';
import {NewComponent} from '../new/new.component';
import {RoutingComponent} from './routing.component';
import {HomeComponent} from '../homepage/homepage.component';
import { NextComponent } from '../next/next.component';

export const approute:Routes=[
    {
        path: 'apppath', component: NewComponent
    },
    {
        path: 'apppath/:id/:name', component: NewComponent

    },
    {
        path: 'routingpath', component: RoutingComponent
    },
    {
        path: 'homepath', component: HomeComponent
    },
    {
        path: 'nextpath', component: NextComponent
    }
];

