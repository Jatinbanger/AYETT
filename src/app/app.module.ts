import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { ClassSubjectDetailsComponent } from './master/class-subject-details/class-subject-details.component';
import { TeacherDetailsComponent } from './master/teacher-details/teacher-details.component';
import { LeavesDetailsComponent } from './master/leaves-details/leaves-details.component';
import { LoginComponent } from './login/login.component';
import { AddEditDetailsComponent } from './master/class-subject-details/add-edit-details/add-edit-details.component';
import { ViewDetailsComponent } from './master/class-subject-details/view-details/view-details.component';
import { StudentTimeTableComponent } from './time-table/student-time-table/student-time-table.component';
import { TeacherTimeTableComponent } from './time-table/teacher-time-table/teacher-time-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    TimeTableComponent,
    ClassSubjectDetailsComponent,
    TeacherDetailsComponent,
    LeavesDetailsComponent,
      LoginComponent,
     AddEditDetailsComponent,
     ViewDetailsComponent,
     StudentTimeTableComponent,
     TeacherTimeTableComponent,
     DashboardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {



 }

