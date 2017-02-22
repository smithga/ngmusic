import { ArtistsPage } from './artists.po';

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
