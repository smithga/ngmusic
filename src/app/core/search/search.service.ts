import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SearchService {

    private _filter: string;

    public get filter(): string {
        return this._filter;
    }

    public set filter(value: string) {
        this._filter = value;
        this.onFilterChanged.emit(this._filter);
    };

    @Output() onFilterChanged: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

}
