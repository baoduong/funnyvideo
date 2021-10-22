import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { UserGuestComponent } from './components/user-guest/user-guest.component';
import { UserSignInComponent } from './components/user-sign-in/user-sign-in.component';
import { HomeComponent } from './@pages/home/home.component';
import { ShareLinkComponent } from './@pages/share-link/share-link.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserManagementService } from './@services/user-management.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserGuestComponent,
    UserSignInComponent,
    HomeComponent,
    ShareLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    UserManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
