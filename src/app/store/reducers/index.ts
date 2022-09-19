import * as fromReducer from './app.transaction-details.reducers';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface AppBlockchainTransactionDetailsState {
  blockchaintransaction: fromReducer.AppBlockchainTransactionDetailsState;
}

export const reducers: ActionReducerMap<AppBlockchainTransactionDetailsState> = {
  blockchaintransaction: fromReducer.appBlockchainTransactionDetailsReducer
};

export const getBlockchainTransactionState = createFeatureSelector<AppBlockchainTransactionDetailsState>(
  'blockchaintransaction'
);
