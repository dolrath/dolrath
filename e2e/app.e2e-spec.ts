import { DolrathPage } from './app.po';

describe('dolrath App', function() {
  let page: DolrathPage;

  beforeEach(() => {
    page = new DolrathPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
