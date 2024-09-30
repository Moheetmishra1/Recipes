import { Routes } from '@angular/router';
import { HomeComponent } from './Components/pages/home/home.component';
import { LoginComponent } from './Components/pages/login/login.component';
import { SignupComponent } from './Components/pages/signup/signup.component';
import { PnFComponent } from './Components/pages/pn-f/pn-f.component';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    }, 
     {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'**',
        component:PnFComponent
    },
];
