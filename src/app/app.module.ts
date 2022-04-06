import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatList, MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/users.component';
import { TaskComponent } from './task/tasks.component';
import { ProjectsComponent } from './projects/project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/loginPage.component';
import { Routes,RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TaskComponent,
    ProjectsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
