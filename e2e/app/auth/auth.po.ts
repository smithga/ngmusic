import { browser, element, by, protractor } from 'protractor';

export class LoginPage {

  // Element Selectors
  public loginUsername = element(by.name('username'));
  public loginPassword = element(by.name('password'));
  public loginButton = element(by.name('btnLogin'));

  navigateTo() {
    return browser.get('/auth/login');
  }

  getParagraphText() {
    return element(by.css('app-root h1.login-text')).getText();
  }

  getErrorText() {
    return element(by.id('error-message')).getText();
  }

  login() {
    this.navigateTo();
    this.clearUsernameValue();
    this.clearPasswordValue();
    this.loginUsername.sendKeys('a@a.com');
    this.loginPassword.sendKeys('password');
    return this.loginButton.click();
  }

  doValidLogin() {
    this.clearUsernameValue();
    this.clearPasswordValue();
    this.loginUsername.sendKeys('a@a.com');
    this.loginPassword.sendKeys('password');
    this.loginButton.click();
  }

  doInvalidLogin() {
    this.clearUsernameValue();
    this.clearPasswordValue();
    this.loginUsername.sendKeys('bad@user.com');
    this.loginPassword.sendKeys('bad password');
    this.loginButton.click();
  }

  doInvalidLoginWithBadUsername() {
    this.clearUsernameValue();
    this.clearPasswordValue();
    this.loginUsername.sendKeys('baduser');
    this.loginPassword.sendKeys('bad password');
    this.loginButton.click();
  }

  clearUsernameValue() {
    this.loginUsername.clear();
    // GS: In order for the validation framework to pick up the change we have to send a key to the field
    this.loginUsername.sendKeys(protractor.Key.SPACE);
    this.loginUsername.sendKeys(protractor.Key.BACK_SPACE);
  }

  clearPasswordValue() {
    // GS: In order for the validation framework to pick up the change we have to send a key to the field
    this.loginPassword.clear();
    this.loginPassword.sendKeys(protractor.Key.SPACE);
    this.loginPassword.sendKeys(protractor.Key.BACK_SPACE);
  }

}
