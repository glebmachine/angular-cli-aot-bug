import { AngularCliAotBugPage } from './app.po';

describe('angular-cli-aot-bug App', () => {
  let page: AngularCliAotBugPage;

  beforeEach(() => {
    page = new AngularCliAotBugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
