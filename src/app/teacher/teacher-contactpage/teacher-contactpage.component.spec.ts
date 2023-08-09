/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherContactpageComponent } from './teacher-contactpage.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { TeacherFooterComponent } from '../teacher-footer/teacher-footer.component';
import { TeacherHeaderComponent } from '../teacher-header/teacher-header.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TeacherContactpageComponent', () => {
  let component: TeacherContactpageComponent;
  let fixture: ComponentFixture<TeacherContactpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherContactpageComponent,TeacherFooterComponent,TeacherHeaderComponent ],
      providers: [TeacherContactpageComponent],
      imports:[HttpClientTestingModule,ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherContactpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
