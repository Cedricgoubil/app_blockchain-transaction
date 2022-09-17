import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { BlockchainTransactionService } from '../../services/blockchain-transaction.service';
import * as blockchainTransactionListAction from '../actions/app.transaction-list.actions';

@Injectable()
export class BlockchainTransactionListEffects {
  loadAllBlockchainTransactionList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(blockchainTransactionListAction.loadAllBlockchainTransactionList),
      switchMap(() =>
        this.blockchainTransactionService.getAllTransactionBlocks().pipe(
          map((blockchainTransaction) =>
            blockchainTransactionListAction.loadAllBlockchainTransactionListFinished({
              payLoad: blockchainTransaction,
            })
          ),
          catchError((error) =>
            of(blockchainTransactionListAction.loadAllBlockchainTransactionListFailed({ payLoad: error }))
          )
        )
      )
    )
  );

  loadAllBlockchainTransactionListFailed = createEffect(
    () => () =>
      this.actions$.pipe(
        ofType(blockchainTransactionListAction.loadAllBlockchainTransactionListFailed),
        tap((error) => {
          alert(error)
        })
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private blockchainTransactionService: BlockchainTransactionService,
    private actions$: Actions
  ) { }
}
