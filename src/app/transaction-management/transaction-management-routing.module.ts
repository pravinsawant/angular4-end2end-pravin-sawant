import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListingComponent } from './transaction-listing/transaction-listing.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

const assetMgmtRoutes: Routes = [
  { path: 'transaction-listing', component : TransactionListingComponent },
  { path: 'transaction-listing/:name', component : TransactionListingComponent },
  { path: 'add-transaction', component : AddTransactionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(assetMgmtRoutes)],
  exports: [],
  providers: [],
})
export class TransactionManagementRoutingModule { }
