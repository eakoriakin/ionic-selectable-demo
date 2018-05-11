import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppComponent } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalPage } from '../pages/modal/modal';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { PortService } from '../services';
import { PortsComponent } from '../components/ports/ports';

let components = [AppComponent, HomePage, ModalPage, PortsComponent];

@NgModule({
    declarations: components,
    imports: [
        BrowserModule,
        IonicModule.forRoot(AppComponent),
        SelectSearchableModule
    ],
    bootstrap: [IonicApp],
    entryComponents: components,
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        PortService
    ]
})
export class AppModule { }
