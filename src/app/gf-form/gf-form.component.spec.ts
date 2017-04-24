/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GfFormComponent } from './gf-form.component';

describe('GfFormComponent', () => {
  let component: GfFormComponent;
  let fixture: ComponentFixture<GfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
