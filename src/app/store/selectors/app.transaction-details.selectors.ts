import { createSelector } from '@ngrx/store'
import { AppBlockchainTransactionDetailsState } from '../reducers'
import { AppState } from '../reducers/app.reducers'

export const selectedBockchainTransactionPath = (state: AppState) =>
  state.appTransactionDetails;

export const getCurrentBlockchainTransaction = createSelector(
  selectedBockchainTransactionPath,
  (state: AppBlockchainTransactionDetailsState) => state.blockchainTransactionCurrent
)