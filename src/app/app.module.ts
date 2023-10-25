import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TableComponent } from './components/table/table.component';
import { SubjectComponent } from './subject/subject.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { StreamComponent } from './stream/stream.component';
import { TimeslotComponent } from './timeslot/timeslot.component';
import { LessonComponent } from './lesson/lesson.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TeacherComponent,
    TableComponent,
    SubjectComponent,
    StreamComponent,
    TimeslotComponent,
    LessonComponent,

  ],
  providers: [
      HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
