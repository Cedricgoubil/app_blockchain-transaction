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

// Pipes
import { SearchFilterPipe } from './pipes/search-filter.pipe';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appEffects } from './store/effects/index';
import { appReducers } from './store/reducers/app.reducers';

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
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
  ],
  providers: [BlockchainTransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
