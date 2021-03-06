import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {DBManager} from "../providers/db-manager";

import {HomePage} from "../pages/home/home";
import {MapsPage} from "../pages/maps/maps";
import {PessoaListPage} from "../pages/pessoas/list";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public dbManager: DBManager) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Acelerômetro', component: HomePage},
      {title: 'Maps', component: MapsPage},
      {title: 'Pessoas', component: PessoaListPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.dbManager.initDB();
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
