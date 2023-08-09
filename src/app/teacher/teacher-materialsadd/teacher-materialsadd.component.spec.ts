/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherMaterialsaddComponent } from './teacher-materialsadd.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { TeacherHeaderComponent } from '../teacher-header/teacher-header.component';
import { TeacherFooterComponent } from '../teacher-footer/teacher-footer.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TeacherMaterialsaddComponent', () => {
  let component: TeacherMaterialsaddComponent;
  let fixture: ComponentFixture<TeacherMaterialsaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherMaterialsaddComponent,TeacherHeaderComponent,TeacherFooterComponent ],
      providers: [TeacherMaterialsaddComponent ],
      imports:[HttpClientTestingModule,ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMaterialsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
