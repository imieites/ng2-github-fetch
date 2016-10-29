/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GfMainComponent } from './gf-main.component';

describe('GfMainComponent', () => {
  let component: GfMainComponent;
  let fixture: ComponentFixture<GfMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GfMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GfMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
