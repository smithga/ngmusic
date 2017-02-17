import { browser, element, by } from 'protractor';

export class LoginPage {
	
  // Element Selectors
	private loginUsername = element(by.name('username'));
	private loginPassword = element(by.name('password'));
	private loginButton = element(by.name('btnLogin'));

  navigateTo() {
    return browser.get('/auth/login');
  }

  getParagraphText() {
    return element(by.css('app-root h1.login-text')).getText();
  }

  getErrorText() {
    return element(by.id('error-message')).getText();
  }

  doValidLogin() {
    this.loginUsername.clear();
    this.loginPassword.clear();
    this.loginUsername.sendKeys('a@a.com');
    this.loginPassword.sendKeys('password');
    this.loginButton.click();
  }

  doInvalidLogin() {
    this.loginUsername.sendKeys('bad user');
    this.loginPassword.sendKeys('bad password');
    this.loginButton.click();
  }

}
