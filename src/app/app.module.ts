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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponentComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'home', component: HomeComponent},
        {path: 'products', component: ProductListComponent},
        {path: 'products/:id', 
        canActivate: [ProductGuardService]
        , component: ProductDetailComponent},
        {path: '',redirectTo: 'welcome',pathMatch: 'full'},
        {path: '**',redirectTo: 'welcome',pathMatch: 'full'}
      ]
    )
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
