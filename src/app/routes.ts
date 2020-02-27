import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const AppRoutes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    {
      path: 'home',
      component: HomeComponent,
      data: { title: 'Home' }
    },
    { path: '**', component: PageNotFoundComponent }
];