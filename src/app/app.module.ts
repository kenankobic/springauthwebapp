import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
          MatMenuModule,
          MatIconModule,
          MatButtonModule,
          MatTableModule,
          MatDividerModule,
          MatProgressSpinnerModule,
          MatInputModule,
          MatCardModule,
          MatSlideToggleModule,
          MatSelectModule,
          MatOptionModule,
          MatFormField,
          MatFormFieldModule
} from '@angular/material';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';
import { LogoutComponent } from './components/logout/logout.component';
import { InsideGuard, RoleGuard } from './guards';
import { AuthService } from './services/auth.service';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './components/game/game.component';

let Components = [
  LoginComponent,
  LogoutComponent,
  HomeComponent,
  GameComponent,
  PageNotFoundComponent
];

let MaterialModules = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    Components
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules
  ],
  providers: [
    AuthService,
    InsideGuard,
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
