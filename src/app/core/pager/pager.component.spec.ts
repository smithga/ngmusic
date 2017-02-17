/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagerComponent } from './pager.component';

describe('PagerComponent', () => {
  let component: PagerComponent;
  let fixture: ComponentFixture<PagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set total pages correctly based on item count', () => {
    component.setItemCount(60);
    expect(component.totalPages).toEqual(2);
  });

  it('should not allow current page < 1', () => {
    component.setItemCount(60);
    component.setPage(0);
    expect(component.currentPage).toEqual(1);
  });

  it('should default to page 1', () => {
    component.setItemCount(60);
    expect(component.currentPage).toEqual(1);
  });

  it('should allow setPage to valid page', () =>{
    component.setItemCount(60);
    component.setPage(2);
    expect(component.currentPage).toEqual(2);
  });

  it('should not allow setPage to invalid page', () =>{
    component.setItemCount(60);
    component.setPage(3);
    expect(component.currentPage).toEqual(2);
  });

  it('should ignore setPage to same page as current', () =>{
    component.setItemCount(60);
    component.setPage(2);
    expect(component.currentPage).toEqual(2);
    component.setPage(2);
    expect(component.currentPage).toEqual(2);
  });

  it('should support page scrolling - page 3', () =>{
    component.setItemCount(600);
    component.setPage(3);
    expect(component.pageNumbers[0]).toEqual(1);
    expect(component.pageNumbers[9]).toEqual(10);
  });

  it('should support page scrolling - page 8', () =>{
    component.setItemCount(1000);
    component.setPage(8);
    expect(component.pageNumbers[0]).toEqual(3);
    expect(component.pageNumbers[9]).toEqual(12);
  });

  it('should support page scrolling - page 18', () =>{
    component.setItemCount(1000);
    component.setPage(18);
    expect(component.pageNumbers[0]).toEqual(12);
    expect(component.pageNumbers[9]).toEqual(21);
  });

});
