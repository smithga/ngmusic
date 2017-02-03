import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit, OnChanges {
  private pageNumbers;
  @Input() itemCount = 0;
  @Input() pageSize = 48;
  @Input() public currentPage = 1;

  @Output() pageClicked: EventEmitter<number> = new EventEmitter<number>();

  public totalPages = 1;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.drawPager();
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    if (page === this.currentPage) {
      return;
    }
    this.currentPage = page;
    this.drawPager();
    this.pageClicked.emit(page);
  }

  drawPager() {
    this.totalPages = Math.ceil(this.itemCount / this.pageSize);
    if (this.totalPages) {
      let startPage: number, endPage: number;
      if (this.totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1;
        endPage = this.totalPages;
      } else {
        // more than 10 total pages so calculate start and end pages
        if (this.currentPage <= 6) {
          startPage = 1;
          endPage = 10;
        } else if (this.currentPage + 4 >= this.totalPages) {
          startPage = this.totalPages - 9;
          endPage = this.totalPages;
        } else {
          startPage = this.currentPage - 5;
          endPage = this.currentPage + 4;
        }
      }
      this.pageNumbers = Array(endPage - startPage + 1).fill(1).map((x, i) => i + startPage);
    }
  }

}
