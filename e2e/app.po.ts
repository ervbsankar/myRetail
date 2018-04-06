import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("http://localhost:3000/");
  }

  getParagraphText() {
    return element(by.id("title")).getText();
  }
}
