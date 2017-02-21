import { browser, element, by, protractor } from 'protractor';
import { LoginPage } from '../auth/auth.po';

export class AlbumsPage {

    // Element Selectors
    public anchorAlbums = element(by.id('anchor-albums'));

    navigateTo() {
        // GS: We need to login before each request since it is a new web session
        let loginPage = new LoginPage();
        loginPage.login();
        this.anchorAlbums.click();
    }

    getPageTitle() {
        return element(by.css('app-root h1.page-title')).getText();
    }

}
