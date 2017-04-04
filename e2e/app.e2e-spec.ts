import { LanugSitePage } from './app.po';

describe('lanug-site App', () => {
  let page: LanugSitePage;

  beforeEach(() => {
    page = new LanugSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
