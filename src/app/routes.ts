import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { InsideGuard } from './guards';
import { GameComponent } from './components/game/game.component';

export const AppRoutes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    {
      path:      'logout',
      pathMatch: 'full',
      component: LogoutComponent
    },
    {
      path: '',
      component: HomeComponent,
      canActivate: [InsideGuard],
      data: { title: 'Home' }
    },
    {
      path: 'game',
      component: GameComponent,
    },
    {
      path:       '**',
      redirectTo: ''
  }
];