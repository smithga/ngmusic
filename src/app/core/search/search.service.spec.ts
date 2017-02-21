/* tslint:disable:no-unused-variable */
import { TestBed, async, inject, getTestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

export class RouterMock {
    public url: string;

    navigateByUrl(url: string) { return url; }
    navigate(url: string) {
        this.url = url;
    }
}

describe('Search Service', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                SearchService
            ]
        });
    }));

    it('should create an instance', async(inject([SearchService], (service: SearchService) => {
        expect(service).toBeTruthy();
    })));

    it('should allow filter set/get', async(inject([SearchService], (service: SearchService) => {
        service.onFilterChanged.subscribe(result => {
            expect(result).toEqual('test');
        });
        service.filter = 'test';
        expect(service.filter).toEqual('test');
    })));

});
