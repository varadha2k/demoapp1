import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';
import { StarComponentComponent } from './star-component/star-component.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product-list/product-detail.component';
import { ProductGuardService } from './product-list/product-guard.service';
import { CalenderComponent } from './calender/calender.component';
import { RemindersComponent } from './reminders/reminders.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingComponent } from './setting/setting.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadDetailComponent } from './lead-detail/lead-detail.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AddLeadComponent } from './leads/add-lead/add-lead.component';

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
    ProductListComponent,
    ConvertToSpaces,
    StarComponentComponent,
    ProductDetailComponent,
    CalenderComponent,
    RemindersComponent,
    ReportsComponent,
    SettingComponent,
    LeadsComponent,
    LeadDetailComponent,
    AddLeadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot(
      [
        {path: 'home', component: HomeComponent},
        {path: 'leads', component: LeadsComponent},
        {path: 'addLead', component: AddLeadComponent},
        {path: 'calender', component: CalenderComponent},
        {path: 'reminders', component: RemindersComponent},
        {path: 'reports', component: ReportsComponent},
        {path: 'setting', component: SettingComponent},
        {path: 'leads/:id', component: LeadDetailComponent},
        {path: 'products/:id', 
        canActivate: [ProductGuardService]
        , component: ProductDetailComponent},
        {path: '',redirectTo: 'welcome',pathMatch: 'full'},
        {path: '**',redirectTo: 'welcome',pathMatch: 'full'}
      ]
    )
  ],
  providers: [ProductGuardService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
