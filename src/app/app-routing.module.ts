import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainTransactionDetailsComponent } from './components/blockchain-transaction-details/blockchain-transaction-details.component';
import { BlockchainTransactionListComponent } from './components/blockchain-transaction-list/blockchain-transaction-list.component';

const routes: Routes = [
  { path: '', component: BlockchainTransactionListComponent },
  { path: 'blockchain-transaction-details/:id', component: BlockchainTransactionDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
