import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CalenderComponent } from './calender/calender.component';
import { RemindersComponent } from './reminders/reminders.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingComponent } from './setting/setting.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadDetailComponent } from './leads/lead-detail/lead-detail.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AddLeadComponent } from './leads/add-lead/add-lead.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { WaiverComponent } from './waiver/waiver.component';
import { LandingComponent } from './landing/landing.component';
import { WaiverconfirmationComponent } from './waiver/waiverconfirmation/waiverconfirmation.component';
import { WaiverRegisteredUserComponent } from './waiver/waiver-registered-user/waiver-registered-user.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBIUVZ6Jo4s5jLkzsGxdLUgajeY5EUBPE8',
  authDomain: 'cliniccrmv1.firebaseapp.com',
  databaseURL: 'https://cliniccrmv1.firebaseio.com',
  projectId:'cliniccrmv1',
  storageBucket: 'cliniccrmv1.appspot.com',
  messagingSenderId: '562016220544'
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalenderComponent,
    RemindersComponent,
    ReportsComponent,
    SettingComponent,
    LeadsComponent,
    LeadDetailComponent,
    AddLeadComponent,
    WaiverComponent,
    LandingComponent,
    WaiverconfirmationComponent,
    WaiverRegisteredUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      [
        {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
        {path: 'landing', component: LandingComponent},
        {path: 'waiver', component: WaiverComponent},
        {path: 'waiverRegisteredUser', component: WaiverRegisteredUserComponent},
        {path: 'waiverconfirmation', component: WaiverconfirmationComponent},        
        {path: 'leads', component: LeadsComponent, canActivate: [AuthGuard]},
        {path: 'addLead', component: AddLeadComponent, canActivate: [AuthGuard]},
        {path: 'calender', component: CalenderComponent, canActivate: [AuthGuard]},
        {path: 'reminders', component: RemindersComponent, canActivate: [AuthGuard]},
        {path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]},
        {path: 'setting', component: SettingComponent, canActivate: [AuthGuard]},
        {path: 'leads/:id', component: LeadDetailComponent, canActivate: [AuthGuard]},        
        {path: '',redirectTo: 'landing',pathMatch: 'full'},
        {path: '**',redirectTo: 'landing',pathMatch: 'full'}
      ]
    )
  ],
  providers: [
    AngularFirestore, 
    AuthService,
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
