import { TePage } from './app.po';

describe('te App', () => {
  let page: TePage;

  beforeEach(() => {
    page = new TePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
