import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transactions : Transaction[] = [];
  constructor(private transactionService : TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getAllTransactions().subscribe(data => {
      this.transactions = data;
      console.log(this.transactions);
    });
  }

}
