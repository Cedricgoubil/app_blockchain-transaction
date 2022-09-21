import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { BlockchainTransactionService } from '../../services/blockchain-transaction.service';
import * as blockchainTransactionDetailsAction from '../actions/app.transaction-details.actions';

@Injectable()
export class BlockchainTransactionDetailsEffects {
  getTransactionDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(blockchainTransactionDetailsAction.getTransactionDetails),
      switchMap(() =>
        this.blockchainTransactionService.getAllTransactionBlocks().pipe(
          map((blockchainTransaction) =>
            blockchainTransactionDetailsAction.getTransactionDetailsFinished({
              payLoad: blockchainTransaction,
            })
          ),
          catchError((error) =>
            of(blockchainTransactionDetailsAction.getTransactionDetailsFailed({ payLoad: error }))
          )
        )
      )
    )
  );

  getTransactionDetailsFailed = createEffect(
    () => () =>
      this.actions$.pipe(
        ofType(blockchainTransactionDetailsAction.getTransactionDetailsFailed),
        tap((error) => {
          console.log(error)
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
