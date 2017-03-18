import {AngularCustomValidatorPage} from "./app.po";

describe('angular-custom-validator App', () => {
  let page: AngularCustomValidatorPage;

  beforeEach(() => {
    page = new AngularCustomValidatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
