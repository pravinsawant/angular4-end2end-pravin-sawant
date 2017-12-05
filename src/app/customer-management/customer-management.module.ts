import { NgModule } from '@angular/core';
import { CustomerDataComponent } from './customer-listing/customer-data.component';
import { CityCodePipe } from './customer-listing/city-code.pipe';
import { CommonModule } from '@angular/common';
import { CustomerListingComponent } from './customer-listing/customer-listing';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './customer.service';
import { CustomerFilterComponent } from './customer-listing/customer-filter.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [CustomerFilterComponent],
  declarations: [
    CustomerDataComponent,
    CityCodePipe,
    CustomerListingComponent,
    NewCustomerComponent,
    CustomerFilterComponent
  ],
  providers: [
    CustomerService
  ],
})
export class CustomerManagmentModule { }
