import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BlockchainTransactionListDto } from 'src/app/dto/BlockchainTransactionListDto';
import { BlockchainTransactionService } from 'src/app/services/blockchain-transaction.service';
import * as fromAppStore from '../../store';

@Component({
  selector: 'app-blockchain-transaction-list',
  templateUrl: './blockchain-transaction-list.component.html',
  styleUrls: ['./blockchain-transaction-list.component.css']
})
export class BlockchainTransactionListComponent implements OnInit {
  allTransactionBlocksFromStore$: Observable<BlockchainTransactionListDto[]> | undefined;

  constructor(
    private appStore: Store<fromAppStore.AppState>,
  ) { }

  ngOnInit(): void {
    this.appStore.dispatch(fromAppStore.loadAllBlockchainTransactionList());
    this.allTransactionBlocksFromStore$ = this.appStore.select<any>(
      (state: any) => state.appTransactionList.blockchainTransactionListItems
    );
  }
}
