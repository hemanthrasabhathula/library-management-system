import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://localhost:8080/transactions'
  constructor(private http: HttpClient) { }

  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }

  getUserTransactions(userId: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl + '/user/' + userId);
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<any>(this.apiUrl+'/borrow', transaction);
  }

  returnTransaction(transactionId: String): Observable<Transaction> {
    return this.http.put<any>(this.apiUrl+'/return/'+transactionId, null);
  }
}

