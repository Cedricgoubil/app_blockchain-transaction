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
  // private urlTransactionCount = 'https://api.tzkt.io/v1/operations/transactions/count';


  constructor(
    private http: HttpClient
  ) { }

  getAllTransactionBlocks(): Observable<BlockchainTransactionListDto[]> {
    return this.http.get<BlockchainTransactionListDto[]>(`${this.urlBlocks}`);
  }

  searchById(id: string): Observable<BlockchainTransactionDetailsDto> {
    return this.http.get<BlockchainTransactionDetailsDto>(this.urlTransactionBlocks + `/${id}`)
  }


  // getTransaction() {
  //   return this.http
  //     .get<any>(this.urlTransactionBlocks)
  //     .toPromise()
  //     .then((res) => res as BlockchainTransactionDetailsDto[]);
  // }

  // getTransactionBlocks(id: string) {
  //   return this.http
  //     .get<any>(this.urlBlocks + `/${id}`)
  //     .toPromise()
  //     .then((res) => res as BlockchainTransactionListDto);
  // }

  // With Observable
  // getTransactionBlocks(id: string): Observable<BlockchainTransactionListDto> {
  //   return this.http.get<BlockchainTransactionListDto>(`${this.urlBlocks + id}`);
  // }

  // getTransaction(): Observable<BlockchainTransactionDetailsDto[]> {
  //   return this.http.get<BlockchainTransactionDetailsDto[]>(`${this.urlTransactionBlocks}`);
  // }
}

