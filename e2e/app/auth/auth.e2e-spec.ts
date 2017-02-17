import { LoginPage } from './auth.po';
import { browser } from 'protractor';

describe('music App', function () {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should display login page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Login');
  });

  it('should login successfully', () => {
    page.navigateTo();
    page.doValidLogin();
    expect(browser.driver.getCurrentUrl()).toContain('/home');
  });

  it('should display error message on invalid login', () => {
    page.navigateTo();
    page.doInvalidLogin();
    expect(page.getErrorText()).not.toEqual('Invalid Username or password!');
  });


});
