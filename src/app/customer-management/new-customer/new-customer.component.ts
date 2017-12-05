import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ICustomer } from '../customer.interface';

@Component({
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})

export class NewCustomerComponent implements OnInit {
  isSaved : boolean = false;

  constructor(private _customerService: CustomerService) { }

  ngOnInit() { }

  log(custName){
    console.log(custName);
  }

  save(newCustomerForm){
    //newCustomerForm.form.value.custName
    let cust : ICustomer = <ICustomer>{
      Name : newCustomerForm.form.value.custName,
      City : newCustomerForm.form.value.city,
      Phone : newCustomerForm.form.value.phone
    }
    this._customerService.addCustomer(cust)
    .subscribe(response =>
      {
        console.log(response);
        this.isSaved = true;
      },
      (response => console.log(response))
    )
  }
}
