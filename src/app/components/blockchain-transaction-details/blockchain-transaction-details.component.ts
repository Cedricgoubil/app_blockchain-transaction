import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { BlockchainTransactionDetailsDto } from 'src/app/dto/BlockchainTransactionDetailsDto';
import { BlockchainTransactionService } from 'src/app/services/blockchain-transaction.service';
import * as fromAppStore from '../../store';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-blockchain-transaction-details',
  templateUrl: './blockchain-transaction-details.component.html',
  styleUrls: ['./blockchain-transaction-details.component.css']
})
export class BlockchainTransactionDetailsComponent implements OnInit {
  transactionBlock?: BlockchainTransactionDetailsDto[] | any;
  transaction?: BlockchainTransactionDetailsDto[] = [];

  // NgRx
  allTransactionFromStore$: Observable<BlockchainTransactionDetailsDto[]> | undefined;

  constructor(
    private appStore: Store<fromAppStore.AppBlockchainTransactionDetailsState>,
    private route: ActivatedRoute,
    private blockchainTransactionService: BlockchainTransactionService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      const transactionId = p['id'];
      this.getTransaction(transactionId);
    });
    this.getTransactionForBlocks();
  }

  // Getting all transactions for block
  getTransactionForBlocks() {
    this.blockchainTransactionService.getTransaction().then((results) => {
      this.transactionBlock = results;
    })
  }

  // Filtering all transactions
  getTransaction(transactionId: string) {
    this.blockchainTransactionService.getTransactionBlocks(transactionId).then((results) => {
      this.transaction = this.transactionBlock?.filter((item: BlockchainTransactionDetailsDto) => item?.level === results?.level)
    })
  }

  // NgRx Load
  getAllTransactionsForBlock() {
    this.appStore.dispatch(fromAppStore.getTransactionDetails());
    this.allTransactionFromStore$ = this.appStore.select<any>(
      (state: any) => state.appTransactionList.blockchainTransactionListItems
    );
  }

  // Filtering all transactions
  getTransactionFromBlock() {
    this.allTransactionFromStore$?.pipe(
      map(items => items.filter(item => item.level)),
    );
  }
}