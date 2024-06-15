import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Copy } from '../models/copy.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private copySource = new BehaviorSubject<Copy | null>(null);
  //currentCopy = this.copySource.asObservable();

  get currentCopy() {
    return this.copySource.asObservable();
  }
  // setCopy(copy: Copy) {
  //   this.copySource.next(copy);
  // }
  changeCopy(copy: Copy) {
    this.copySource.next(copy);
    localStorage.setItem('currentCopy', JSON.stringify(copy));

  }
  constructor() {
    // Attempt to load the copy data from localStorage on service initialization
    const savedCopy = localStorage.getItem('currentCopy');
    this.copySource = new BehaviorSubject<Copy | null>(savedCopy ? JSON.parse(savedCopy) : null);
  }
}
