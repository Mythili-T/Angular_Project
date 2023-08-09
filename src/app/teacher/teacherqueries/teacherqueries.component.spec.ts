/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherqueriesComponent } from './teacherqueries.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { TeacherHeaderComponent } from '../teacher-header/teacher-header.component';
import { TeacherFooterComponent } from '../teacher-footer/teacher-footer.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TeacherqueriesComponent', () => {
  let component: TeacherqueriesComponent;
  let fixture: ComponentFixture<TeacherqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherqueriesComponent,TeacherHeaderComponent,TeacherFooterComponent],
      providers: [TeacherqueriesComponent],
      imports:[HttpClientTestingModule,ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
