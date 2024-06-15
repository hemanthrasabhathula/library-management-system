import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchListComponent } from './components/branch/branch-list/branch-list.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { CopiesListComponent } from './components/copy/copies-list/copies-list.component';
import { TransactionListComponent } from './components/transaction/transaction-list/transaction-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { CopiesDetailComponent } from './components/copy/copies-detail/copies-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    BranchListComponent,
    UserListComponent,
    CopiesListComponent,
    TransactionListComponent,
    CopiesDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
