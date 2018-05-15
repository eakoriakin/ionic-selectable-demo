import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { PortsComponent } from '../components/ports/ports';
import { PortsItemTemplateDirective } from '../components/ports/ports-item-template';
import { PortsTitleTemplateDirective } from '../components/ports/ports-title-template';
import { PortsValueTemplateDirective } from '../components/ports/ports-value-template';
import { FindPortsPage, HomePage, ModalPage } from '../pages';
import { PortService } from '../services';
import { AppComponent } from './app.component';

let components = [AppComponent, HomePage, ModalPage, FindPortsPage, PortsComponent];

@NgModule({
    declarations: [...components, PortsItemTemplateDirective, PortsValueTemplateDirective, PortsTitleTemplateDirective],
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
