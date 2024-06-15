import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch } from '../models/branch.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private apiUrl = 'http://localhost:8080/branches'
  constructor(private http: HttpClient) { }

  getAllBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.apiUrl);
  }

  addBranch(branch: Branch): Observable<Branch> {
    return this.http.post<Branch>(this.apiUrl, branch);
  }

  updateBranch(branch: Branch): Observable<Branch> {
    return this.http.put<Branch>(this.apiUrl + '/' + branch._id, branch);
  }

  getBranchById(id: String): Observable<Branch> {
    return this.http.get<Branch>(this.apiUrl + '/' + id);
  }
  
}
