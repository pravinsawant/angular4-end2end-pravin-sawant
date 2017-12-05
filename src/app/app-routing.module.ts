import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found';
import { HashLocationStrategy } from '@angular/common';
import { CustomerManagementRoutingModule } from './customer-management/customer-management-routing.module';
import { HomeComponent } from './home.component';
import { TransactionManagementRoutingModule } from './transaction-management/transaction-management-routing.module';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component : HomeComponent, pathMatch: 'full'},
  { path: '', redirectTo : '/home', pathMatch: 'full'},
  { path: '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
      CustomerManagementRoutingModule, TransactionManagementRoutingModule],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class AppRoutingModule { }
