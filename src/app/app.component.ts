import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { TabsPage } from "../pages/tabs/tabs";
import { TranslateService } from "ng2-translate/ng2-translate";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    translateService: TranslateService
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      translateService.use("zh-cn");
    });
  }
}
