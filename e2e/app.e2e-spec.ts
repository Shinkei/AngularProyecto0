import { Proyecto0Page } from './app.po';

describe('proyecto0 App', () => {
  let page: Proyecto0Page;

  beforeEach(() => {
    page = new Proyecto0Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
