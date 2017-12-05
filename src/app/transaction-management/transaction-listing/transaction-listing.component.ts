import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../customer-management/customer.service';

@Component({
  templateUrl: './transaction-listing.component.html',
  styleUrls: ['./transaction-listing.component.css']
})

export class TransactionListingComponent implements OnInit {

  constructor(private _activatedRoute : ActivatedRoute,
    private _customerService : CustomerService) {

  }

  ngOnInit() {
    debugger;
    this._customerService.selectedCustomer =  this._activatedRoute.snapshot.params['name'];
  }
}
