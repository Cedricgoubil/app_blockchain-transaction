import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { BlockchainTransactionDetailsDto } from 'src/app/dto/BlockchainTransactionDetailsDto';
import { BlockchainTransactionListDto } from 'src/app/dto/BlockchainTransactionListDto';
import { BlockchainTransactionService } from 'src/app/services/blockchain-transaction.service';
import * as fromAppStore from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blockchain-transaction-details',
  templateUrl: './blockchain-transaction-details.component.html',
  styleUrls: ['./blockchain-transaction-details.component.css']
})
export class BlockchainTransactionDetailsComponent implements OnInit {
  id?: string | any;
  // allTransactionBlocksFormStores?: BlockchainTransactionListDto[] | any;
  // transactionBlocks?: BlockchainTransactionDetailsDto[] | any;
  // transaction?: BlockchainTransactionDetailsDto[] = [];

  allTransactionBlocksFromStore$: Observable<BlockchainTransactionListDto[]> | undefined;
  transactionBlocks?: BlockchainTransactionDetailsDto[] | any;
  transaction?: BlockchainTransactionDetailsDto[] = [];

  constructor(
    private blockchainTransactionService: BlockchainTransactionService,
    private appStore: Store<fromAppStore.AppState>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      const transactionId = p['id'];
      this.getTransaction(transactionId);
    });
  }

  getTransaction(transactionId: string) {
    this.appStore.dispatch(
      fromAppStore.getTransactionDetails({ id: transactionId })
    );
  }
}



// Working but not using NgRx
// getAllTransactionForBlocks() {
//   this.blockchainTransactionService.getTransactionBlocks(this.id).then((results) => {
//     this.allTransactionBlocks = results;
//   })
// }

// getTransactionForBlocks() {
//   this.blockchainTransactionService.getTransaction().then((results) => {
//     this.transactionBlocks = results;
//   })
// }

// getTransaction() {
//   this.blockchainTransactionService.getTransactionBlocks(this.id).then((results) => {
//     this.transaction = this.transactionBlocks?.filter((item: BlockchainTransactionDetailsDto) => item?.level === results?.level)
//   })
// }


