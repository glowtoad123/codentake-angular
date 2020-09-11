import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { PreviewsComponent } from './previews/previews.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NewComponent } from './new/new.component';
import { EnterComponent } from './enter/enter.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreviewsComponent,
    NewComponent,
    EnterComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDEYXAgLTtU15zxWUOSy8s2P2ecmj5ofLg',
      authDomain: 'https://console.firebase.google.com/project/codentake-angular/firestore/',
      databaseURL: 'https://codentake-angular.firebaseio.com',
      projectId: 'codentake-angular',
      storageBucket: '',
      messagingSenderId: ''
    }),
    /* AngularFireModule.initializeApp(environment.firebase), */
    AngularFirestoreModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
