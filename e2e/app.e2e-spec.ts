import { VoteAppFEPage } from './app.po';

describe('vote-app-fe App', () => {
  let page: VoteAppFEPage;

  beforeEach(() => {
    page = new VoteAppFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
