import { LoginPage } from './auth.po';
import { browser } from 'protractor';

describe('Auth Module', function () {
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
    expect(page.getErrorText()).toEqual('Invalid Username or password!');
  });

  it('login button should be disabled if no username provided', () => {
    page.navigateTo();
    page.clearUsernameValue();
    expect(page.loginButton.isEnabled()).toEqual(false);
  });

  it('login button should be disabled if no password provided', () => {
    page.navigateTo();
    page.clearPasswordValue();
    expect(page.loginButton.isEnabled()).toEqual(false);
  });

  it('login button should be disabled if bad username', () => {
    page.navigateTo();
    page.clearUsernameValue();
    page.clearPasswordValue();
    page.doInvalidLoginWithBadUsername();
    expect(page.loginButton.isEnabled()).toEqual(false);
  });

});
