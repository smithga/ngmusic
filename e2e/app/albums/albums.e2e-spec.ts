// import { LoginPage } from '../auth/auth.po';
import { AlbumsPage } from './albums.po';
import { browser } from 'protractor';
import { inject } from '@angular/core/testing';

import { AuthService } from '../../../src/app/auth/shared/auth.service';

describe('Albums Module', function () {
    let page: AlbumsPage;

    beforeEach(() => {
        page = new AlbumsPage();
    });

    it('should display albums page', () => {
        page.navigateTo();
        expect(page.getPageTitle()).toEqual('Albums');
    });

});
