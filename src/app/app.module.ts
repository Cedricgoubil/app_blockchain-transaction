import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlockchainTransactionListComponent } from './components/blockchain-transaction-list/blockchain-transaction-list.component';
import { BlockchainTransactionDetailsComponent } from './components/blockchain-transaction-details/blockchain-transaction-details.component';

// Services
import { BlockchainTransactionService } from './services/blockchain-transaction.service';
import { StoreModule } from '@ngrx/store';

// Pipes
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    BlockchainTransactionListComponent,
    BlockchainTransactionDetailsComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [BlockchainTransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
