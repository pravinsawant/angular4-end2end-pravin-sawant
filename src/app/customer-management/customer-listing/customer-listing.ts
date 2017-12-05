import { Component, OnInit } from '@angular/core';
import { debug } from 'util';

@Component({
  templateUrl: './customer-listing.html',
  styleUrls: ['./customer-listing.css']
})

export class CustomerListingComponent implements OnInit {
  customerName : string;

  constructor() { }

  ngOnInit() { }

  onCustomerSelected(custName: string){
    debugger;
    this.customerName = custName;
  }
}
