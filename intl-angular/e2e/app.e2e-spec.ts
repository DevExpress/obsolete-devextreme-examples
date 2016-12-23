import { IntlAngularPage } from './app.po';

describe('intl-angular App', function() {
  let page: IntlAngularPage;

  beforeEach(() => {
    page = new IntlAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
