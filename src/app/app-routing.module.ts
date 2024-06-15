import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopiesListComponent } from './components/copy/copies-list/copies-list.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { TransactionListComponent } from './components/transaction/transaction-list/transaction-list.component';
import { BranchListComponent } from './components/branch/branch-list/branch-list.component';
import { CopiesDetailComponent } from './components/copy/copies-detail/copies-detail.component';
const routes: Routes = [
  { path: 'branches', component: BranchListComponent },
  { path: 'copies', component: CopiesListComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'users', component: UserListComponent },
  {path:'copydetails',component:CopiesDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
