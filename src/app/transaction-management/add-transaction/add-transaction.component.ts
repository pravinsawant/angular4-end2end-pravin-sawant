import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from '../transaction-service';
import { parse } from 'url';
import { CustomerService } from '../../customer-management/customer.service';
import { ICustomer } from '../../customer-management/customer.interface';

@Component({
  selector: 'add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})

export class AddTransactionComponent implements OnInit {
  customers: ICustomer[];
  isSaved : boolean = false;

  constructor(private _tranService : TransactionService,
      private _customerService : CustomerService){

  }

  ngOnInit(): void {
    this._customerService.getCustomers()
    .subscribe(data=> (this.handleCustomerData(data)),
    error=> this.handleError(<string>error))
  }

  handleCustomerData(custList : ICustomer[] ){
    this.customers = custList;
  }

  handleError(error: string){
    console.error(error);
  }

  form = new FormGroup({
    'customer': new FormControl('',[
      Validators.required
    ]),

    'symbol': new FormControl('', [
      Validators.required,
      Validators.minLength(3)
      ]),
    'purchaseprice': new FormControl('', Validators.required),
    'noofshares': new FormControl('', Validators.required)
  })

  get customername(){
    return this.form.get('customer');
  }
  get symbol(){
    return this.form.get('symbol');
  }

  save(): void{
    debugger;

    let transaction = <ITransaction>{
      Id : 0,
      CustomerName : "",
      CustId : this.form.get("customer").value,
      Symbol : this.form.get("symbol").value,
      PurchasePrice : Number(this.form.get("purchaseprice").value),
      NoOfShares : Number(this.form.get("noofshares").value)
    }
    this._tranService.addTransaction(transaction)
    .subscribe(response =>
      {
        console.log(response);
        this.isSaved = true;
      },
      (response => console.log(response))
    )
  }
}
