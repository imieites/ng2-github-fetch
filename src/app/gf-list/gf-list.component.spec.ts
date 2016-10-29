/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GfListComponent } from './gf-list.component';

describe('GfListComponent', () => {
  let component: GfListComponent;
  let fixture: ComponentFixture<GfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
