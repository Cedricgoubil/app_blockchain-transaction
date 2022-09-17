import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { BlockchainTransactionService } from '../../services/blockchain-transaction.service';
import * as blockchainTransactionDetailsAction from '../actions/app.transaction-details.actions';

@Injectable()
export class BlockchainTransactionDetailsEffects {
  loadAllBlockchainTransactionDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(blockchainTransactionDetailsAction.loadAllBlockchainTransactionDetails),
      switchMap(() =>
        this.blockchainTransactionService.getTransaction().pipe(
          map((blockchainTransaction) =>
            blockchainTransactionDetailsAction.loadAllBlockchainTransactionDetailsFinished({
              payLoad: blockchainTransaction,
            })
          ),
          catchError((error) =>
            of(blockchainTransactionDetailsAction.loadAllBlockchainTransactionDetailsFailed({ payLoad: error }))
          )
        )
      )
    )
  );

  loadAllBlockchainTransactionDetailsFailed = createEffect(
    () => () =>
      this.actions$.pipe(
        ofType(blockchainTransactionDetailsAction.loadAllBlockchainTransactionDetailsFailed),
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
