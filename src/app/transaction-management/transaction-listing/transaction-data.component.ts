import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction-service';
import { CustomerService } from '../../customer-management/customer.service';

@Component({
  selector: 'transaction-data',
  templateUrl: './transaction-data.component.html',
  styleUrls: ['./transaction-data.component.css']
})

export class TransactionDataComponent implements OnInit {
  transactions : ITransaction[];

  constructor(private _transactionservice : TransactionService,
      private _custService : CustomerService) { }

  ngOnInit() {
    this.getTransactions();
  }

  onRefresh(){
    this.getTransactions();
  }
  getTransactions() : void{
    this.transactions = [];
    if(this._custService.selectedCustomer){
      this._transactionservice.getTransactions(this._custService.selectedCustomer)
      .subscribe(data=> (this.handleTransactionData(data)),
      error=> this.handleError(<string>error))
    }
  }

  handleTransactionData(tranList : ITransaction[] ){
    this.transactions = tranList;
  }

  handleError(error: string){
    console.error(error);
  }

  onDeleteClick(tranId : number){
    this._transactionservice.deleteTransaction(tranId)
    .subscribe((data)=> (this.doAfterDeleteWork()));
  }

  doAfterDeleteWork(){
    this.getTransactions();
  }
}
