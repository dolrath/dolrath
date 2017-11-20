/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JsonObjectComponent } from './json-object.component';

describe('JsonObjectComponent', () => {
  let component: JsonObjectComponent;
  let fixture: ComponentFixture<JsonObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
