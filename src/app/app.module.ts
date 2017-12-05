import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerManagmentModule } from './customer-management/customer-management.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found';
import { HomeComponent } from './home.component';
import { TransactionManagementModule } from './transaction-management/transaction-management.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    CustomerManagmentModule,
    AppRoutingModule,
    TransactionManagementModule
  ],
  declarations: [
    AppComponent, PageNotFoundComponent, HomeComponent
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
