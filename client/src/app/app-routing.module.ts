import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';

import { AppointmentComponent } from './appointment/appointment.component'
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component'
import { AppointmentNewComponent } from './appointment/appointment-new/appointment-new.component'

const routes: Routes = [
	{ path: 'user', component: UserComponent, children: [
		{ path: 'new', component: UserNewComponent }
	]},
	{ path: '', pathMatch: 'full', component: UserComponent, children: [
		{ path: '', component: UserNewComponent}
	]},

	{path: 'dashboard', component: AppointmentComponent, children: [
		{path: '', component: AppointmentListComponent},
		{path: 'new', component: AppointmentNewComponent},

	]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
