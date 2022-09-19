import { createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers/app.transaction-details.reducers';
import * as fromFeature from '../reducers';

export const getBlockchainTransactionState = createSelector(
  fromFeature.getBlockchainTransactionState,
  (state: fromFeature.AppBlockchainTransactionDetailsState) => state.blockchaintransaction
);
export const getTransactionCurrent = createSelector(
  getBlockchainTransactionState,
  fromReducer.getTransactionCurrent
);
