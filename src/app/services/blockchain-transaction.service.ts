import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BlockchainTransactionListDto } from '../dto/BlockchainTransactionListDto';
import { BlockchainTransactionDetailsDto } from '../dto/BlockchainTransactionDetailsDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainTransactionService {
  private urlBlocks = 'https://api.tzkt.io/v1/blocks';
  private urlTransactionBlocks = 'https://api.tzkt.io/v1/operations/transactions';


  constructor(
    private http: HttpClient
  ) { }

  getAllTransactionBlocks(): Observable<BlockchainTransactionListDto[]> {
    return this.http.get<BlockchainTransactionListDto[]>(`${this.urlBlocks}`);
  }

  getTransactionBlocks(id: string) {
    return this.http
      .get<any>(this.urlBlocks + `/${id}`)
      .toPromise()
      .then((res) => res as BlockchainTransactionListDto);
  }

  getTransaction() {
    return this.http
      .get<any>(this.urlTransactionBlocks)
      .toPromise()
      .then((res) => res as BlockchainTransactionDetailsDto[]);
  }

  getTransactionNgRx(): Observable<BlockchainTransactionDetailsDto[]> {
    return this.http.get<BlockchainTransactionDetailsDto[]>(`${this.urlTransactionBlocks}`);
  }
}

