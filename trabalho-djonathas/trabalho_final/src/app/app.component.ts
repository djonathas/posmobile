import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MapsPage } from '../pages/maps/maps';
import { PessoasPage } from '../pages/pessoas/pessoas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Acelerômetro', component: HomePage },
      { title: 'Maps', component: MapsPage },
      { title: 'Pessoas', component: PessoasPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      let db;
      // Abrindo o banco de dados
      let request = window.indexedDB.open("myDB", 1);
      request.onerror = function(event) {
        alert("Database error: " + request.error.toString());
      };
      request.onsuccess = function(event) {
        db = request.result;
      };

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}