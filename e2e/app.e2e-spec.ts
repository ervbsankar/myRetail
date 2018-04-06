import { AppPage } from "./app.po";

describe("my App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should have title", () => {
    page.navigateTo();
    expect(page.getParagraphText()).not.toEqual("");
  });
});
