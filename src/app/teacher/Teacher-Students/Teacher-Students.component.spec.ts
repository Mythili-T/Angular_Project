/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherStudentsComponent } from './Teacher-Students.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { TeacherHeaderComponent } from '../teacher-header/teacher-header.component';
import { TeacherFooterComponent } from '../teacher-footer/teacher-footer.component';

describe('TeacherStudentsComponent', () => {
  let component: TeacherStudentsComponent;
  let fixture: ComponentFixture<TeacherStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherStudentsComponent,TeacherHeaderComponent,TeacherFooterComponent ],
      providers: [TeacherStudentsComponent],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
