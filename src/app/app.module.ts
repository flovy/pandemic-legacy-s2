import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InfectionTrackerPage } from '../pages/infection-tracker/infection-tracker';
import { InfectionDeckBuilderPage } from '../pages/infection-deck-builder/infection-deck-builder';
import { InfectionDeckService } from './service/infection-deck-service';
import { IonicStorageModule } from '@ionic/storage';
import { DeckNameValidatorDirective } from './directive/deckname-validator.directive';

@NgModule({
  declarations: [
    MyApp,
    InfectionDeckBuilderPage,
    InfectionTrackerPage,
    DeckNameValidatorDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfectionDeckBuilderPage,
    InfectionTrackerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InfectionDeckService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
