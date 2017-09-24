import { SettingsPage } from "./../settings/settings";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-about",
  templateUrl: "about.html",
})
export class AboutPage {
  constructor(public navCtrl: NavController) {}

  openSettings() {
    this.navCtrl.push(SettingsPage);
  }
}
