import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../core/search/search.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    public searchService: SearchService
  ) { }

  ngOnInit() {
  }

}
