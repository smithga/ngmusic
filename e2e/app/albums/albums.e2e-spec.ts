import { AlbumsPage } from './albums.po';

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
