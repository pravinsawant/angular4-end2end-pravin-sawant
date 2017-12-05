import { NgModule } from '@angular/core';
import { CustomerListingComponent } from './customer-listing/customer-listing';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { Routes, RouterModule } from '@angular/router';

const customerMgtmtRoutes: Routes = [
  { path: 'customer-listing', component : CustomerListingComponent },
  { path: 'new-customer', component : NewCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(customerMgtmtRoutes),],
  exports: [],
  declarations: [],
  providers: [],
})
export class CustomerManagementRoutingModule { }
