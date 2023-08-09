/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherAboutpageComponent } from './teacher-aboutpage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TeacherHeaderComponent } from '../teacher-header/teacher-header.component';
import { TeacherFooterComponent } from '../teacher-footer/teacher-footer.component';

describe('TeacherAboutpageComponent', () => {
  let component: TeacherAboutpageComponent;
  let fixture: ComponentFixture<TeacherAboutpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAboutpageComponent,TeacherHeaderComponent,TeacherFooterComponent],
      providers: [TeacherAboutpageComponent],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAboutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
