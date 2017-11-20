import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { UserNewComponent } from './user/user-new/user-new.component'
import { UserLogoutComponent } from './user/user-logout/user-logout.component';

import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { AppointmentNewComponent } from './appointment/appointment-new/appointment-new.component'

import { UserService } from './user.service';
import { AppointmentService } from './appointment.service'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    UserLogoutComponent,
    AppointmentComponent,
    AppointmentListComponent,
    AppointmentNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,

  ],
  providers: [UserService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
