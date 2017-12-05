import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from '../customer.interface';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls : ['./customer-data.component.css']
})

export class CustomerDataComponent implements OnInit {
  customersMasterCopy : ICustomer[];
  customers : ICustomer[];
  selectedText ?: string;

  @Input() set customerNameToFilter(customerName : string){
    this.customers = [];
    if(this.customersMasterCopy && customerName)
      this.customersMasterCopy.forEach(customer=> {
        if(customer.Name == customerName || customerName == "all")
          this.customers.push(customer);
      });
  }

  constructor(private _customerService : CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() : void{
    this._customerService.getCustomers()
    .subscribe(data=> (this.handleCustomerData(data)),
    error=> this.handleError(<string>error))
  }

  handleCustomerData(custList : ICustomer[] ){
    this.customersMasterCopy = custList;
    this.customers = custList;
  }

  handleError(error: string){
    console.error(error);
  }

  onCustNameClick(customer : ICustomer): void{
    this.selectedText = "Customer Id     : " + customer.Id + " \n Customer Name : " + customer.Name;
    console.log("Customer Id :" + customer.Id);
    console.log("Customer Name :" + customer.Name);
  }

  onDeleteClick(custId : number){
    this._customerService.deleteCustomer(custId)
    .subscribe((data)=> (this.doAfterDeleteWork()));
  }

  doAfterDeleteWork(){
    this.getCustomers();
  }
}
