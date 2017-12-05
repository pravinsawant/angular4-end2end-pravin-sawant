import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ICustomer } from './customer.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomerService {
  private readonly _urlCustomer : string = "http://localhost:50097/Api/customer/"

  selectedCustomer : string;

  constructor(private _http:Http) {

  }

  getCustomers():Observable<ICustomer[]>{
    return this._http.get(this._urlCustomer)
    .map((response: Response)=> <ICustomer[]> response.json())
    .catch(this.handleError)
  }

  deleteCustomer(customerId : number):Observable<ICustomer>{
    return this._http.delete(this._urlCustomer + customerId)
    .map((response: Response)=> <ICustomer[]> response.json())
    .catch(this.handleError)
  }

  addCustomer(customer : ICustomer):Observable<ICustomer>{
    let bodyText = JSON.stringify(customer);
    let h:Headers = new Headers();
    h.append('Content-Type', 'application/json');

    return this._http.post(this._urlCustomer, bodyText, {headers : h })
      .map((response: Response)=> <ICustomer[]> response.json())
      .catch(this.handleError)
  }

  handleError(error: Response){
    debugger;
    console.error(error.json);
    return Observable.throw(error || "Server Error");
  }
}
