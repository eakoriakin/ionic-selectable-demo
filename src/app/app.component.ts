import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';
// import { HomePage } from '../pages/home/home';
import { FindPortsPage } from '../pages/find-ports/find-ports';

@Component({
    templateUrl: 'app.html'
})
export class AppComponent {
    rootPage: any = FindPortsPage;

    constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
