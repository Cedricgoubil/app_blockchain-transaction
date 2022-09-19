import { ActionReducerMap } from '@ngrx/store';

import * as fromAppTransactionListReducers from './app.transaction-list.reducers';
import * as fromAppTransactionDetailsReducers from './app.transaction-details.reducers';

export interface AppState {
  appTransactionList: fromAppTransactionListReducers.AppBlockchainTransactionListState;
  appTransactionDetails: fromAppTransactionDetailsReducers.AppBlockchainTransactionDetailsState;
}


export const appReducers: ActionReducerMap<AppState> = {
  appTransactionList: fromAppTransactionListReducers.appBlockchainTransactionListReducer,
  appTransactionDetails: fromAppTransactionDetailsReducers.appBlockchainTransactionDetailsReducer
}
