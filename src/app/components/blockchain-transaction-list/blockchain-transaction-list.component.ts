import { Component, OnInit } from '@angular/core';
import { BlockchainTransactionListDto } from 'src/app/dto/BlockchainTransactionListDto';
import { BlockchainTransactionService } from 'src/app/services/blockchain-transaction.service';

@Component({
  selector: 'app-blockchain-transaction-list',
  templateUrl: './blockchain-transaction-list.component.html',
  styleUrls: ['./blockchain-transaction-list.component.css']
})
export class BlockchainTransactionListComponent implements OnInit {
  allTransactionBlocks?: BlockchainTransactionListDto[] | any;
  searchTerm?: string | any;

  constructor(
    private blockchainTransactionService: BlockchainTransactionService
  ) { }

  ngOnInit(): void {
    this.getTransactionBlocks()
  }

  getTransactionBlocks() {
    this.blockchainTransactionService.getAllTransactionBlocks().then((resultData) => {
      resultData.reverse();
      this.allTransactionBlocks = resultData;
    })
  }
}
