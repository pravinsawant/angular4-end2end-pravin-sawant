import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrls: ['./customer-filter.component.css']
})

export class CustomerFilterComponent implements OnInit {
  @Output() customerSelected: EventEmitter<any> = new EventEmitter();
  customerName : string = "";
  constructor(private _customerService : CustomerService) { }

  ngOnInit() {
    if(this._customerService.selectedCustomer)
      this.customerName = this._customerService.selectedCustomer;
  }

  onKeyUp(event : any):void {
    debugger;
    this.customerSelected.emit(event.currentTarget.value.toString());
    this._customerService.selectedCustomer = event.currentTarget.value.toString();
  }

  onChange(event : any){
    debugger;
    this._customerService.selectedCustomer = event.currentTarget.value.toString();
  }
}
