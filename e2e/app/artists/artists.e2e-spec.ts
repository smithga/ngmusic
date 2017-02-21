// import { LoginPage } from '../auth/auth.po';
import { ArtistsPage } from './artists.po';
import { browser } from 'protractor';
import { inject } from '@angular/core/testing';

import { AuthService } from '../../../src/app/auth/shared/auth.service';

describe('Artists Module', function () {
    let page: ArtistsPage;

    beforeEach(() => {
        page = new ArtistsPage();
    });

    it('should display artists page', () => {
        page.navigateTo();
        expect(page.getPageTitle()).toEqual('Artists');
    });

});
