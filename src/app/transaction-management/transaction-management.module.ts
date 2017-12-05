import { NgModule } from '@angular/core';
import { CustomerManagmentModule } from '../customer-management/customer-management.module';
import { TransactionDataComponent } from './transaction-listing/transaction-data.component';
import { TransactionListingComponent } from './transaction-listing/transaction-listing.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TransactionService } from './transaction-service';
import { SymbolDirective } from './add-transaction/symbol.directive';

@NgModule({
  imports: [CustomerManagmentModule, CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    TransactionDataComponent, TransactionListingComponent,
    AddTransactionComponent, SymbolDirective
  ],
  providers: [TransactionService],
})
export class TransactionManagementModule { }
