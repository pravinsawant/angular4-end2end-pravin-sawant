import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TransactionService {
  private readonly _urlTransaction : string = "http://localhost:50097/Api/transaction/"

  constructor(private _http:Http) {

  }

  getTransactions(customerName: string):Observable<ITransaction[]>{
    return this._http.get(this._urlTransaction + customerName)
    .map((response: Response)=> <ITransaction[]> response.json())
    .catch(this.handleError)
  }

  deleteTransaction(transactionId : number):Observable<ITransaction>{
    return this._http.delete(this._urlTransaction + transactionId)
    .map((response: Response)=> <ITransaction[]> response.json())
    .catch(this.handleError)
  }

  addTransaction(transaction : ITransaction):Observable<ITransaction>{
    let bodyText = JSON.stringify(transaction);
    let h:Headers = new Headers();
    h.append('Content-Type', 'application/json');

    return this._http.post(this._urlTransaction, bodyText, {headers : h })
      .map((response: Response)=> <ITransaction[]> response.json())
      .catch(this.handleError)
  }

  handleError(error: Response){
    debugger;
    console.error(error.json);
    return Observable.throw(error || "Server Error");
  }
}
