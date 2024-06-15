import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Copy } from '../models/copy.model';
@Injectable({
  providedIn: 'root'
})
export class CopyService {

  copy: Copy = new Copy();

  setCopy(copy: Copy) {
    this.copy = copy;
  }
  getCopy() { return this.copy; }

  private apiUrl = 'http://localhost:8080/books'
  constructor(private http : HttpClient) { }

  getallCopies(): Observable<Copy[]> {
    return this.http.get<Copy[]>(this.apiUrl);
  }

  getallCopiesByBranchID(branchId: String): Observable<Copy[]> {
    return this.http.get<Copy[]>(this.apiUrl +'/'+branchId+ '/branch');
  }

  getCopyById(copyId: String): Observable<Copy> {
    return this.http.get<Copy>(this.apiUrl + '/' + copyId);
  }

  getCopiesByISBN(isbn: String): Observable<Copy[]> {
    return this.http.get<Copy[]>(this.apiUrl + '/isbn/' + isbn);
  }

  addCopy(copy: Copy): Observable<Copy> {
    return this.http.post<Copy>(this.apiUrl, copy);
  }

  updateCopy(copy: Copy): Observable<Copy> {
    return this.http.put<Copy>(this.apiUrl + '/' + copy._id, copy);
  }

  removeCopy(copyId: string): Observable<Copy> {
    return this.http.delete<Copy>(this.apiUrl + '/' + copyId);
  }

}
