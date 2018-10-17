import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { ServicesProvider } from '../providers/services/services';
import { ListServicesPageModule } from '../pages/list-services/list-services.module';
import { ServicesPageModule } from '../pages/services/services.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDZGn5SmVVNomrqyAwGe0y97aTRyXAonbE",
      authDomain: "app-faculdade.firebaseapp.com",
      databaseURL: "https://app-faculdade.firebaseio.com",
      projectId: "app-faculdade",
      storageBucket: "app-faculdade.appspot.com",
      messagingSenderId: "966853610003"
    }),
    AngularFireDatabaseModule,
    ListServicesPageModule,
    ServicesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesProvider
  ]
})
export class AppModule {}
