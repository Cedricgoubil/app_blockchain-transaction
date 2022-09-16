import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockchainTransactionDetailsDto } from 'src/app/dto/BlockchainTransactionDetailsDto';
import { BlockchainTransactionListDto } from 'src/app/dto/BlockchainTransactionListDto';
import { BlockchainTransactionService } from 'src/app/services/blockchain-transaction.service';

@Component({
  selector: 'app-blockchain-transaction-details',
  templateUrl: './blockchain-transaction-details.component.html',
  styleUrls: ['./blockchain-transaction-details.component.css']
})
export class BlockchainTransactionDetailsComponent implements OnInit {
  id?: string | any;
  allTransactionBlocks?: BlockchainTransactionListDto[] | any;
  transactionBlocks?: BlockchainTransactionDetailsDto[] | any;
  transaction?: BlockchainTransactionDetailsDto[] = [];


  constructor(
    private blockchainTransactionService: BlockchainTransactionService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAllTransactionForBlocks();
    this.getTransactionForBlocks();
    this.getTransaction();
  }

  getAllTransactionForBlocks() {
    this.blockchainTransactionService.getTransactionBlocks(this.id).then((results) => {
      this.allTransactionBlocks = results;
    })
  }

  getTransactionForBlocks() {
    this.blockchainTransactionService.getTransaction().then((results) => {
      this.transactionBlocks = results;
    })
  }

  getTransaction() {
    this.blockchainTransactionService.getTransactionBlocks(this.id).then((results) => {
      this.transaction = this.transactionBlocks?.filter((item: BlockchainTransactionDetailsDto) => item?.level === results?.level)
    })
  }
}


