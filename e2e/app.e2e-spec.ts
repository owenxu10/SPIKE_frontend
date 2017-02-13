import { CustomerQaPage } from './app.po';

describe('customer-qa App', function() {
  let page: CustomerQaPage;

  beforeEach(() => {
    page = new CustomerQaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
