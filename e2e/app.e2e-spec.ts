import { Ng2GithubFetchPage } from './app.po';

describe('ng2-github-fetch App', function() {
  let page: Ng2GithubFetchPage;

  beforeEach(() => {
    page = new Ng2GithubFetchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
