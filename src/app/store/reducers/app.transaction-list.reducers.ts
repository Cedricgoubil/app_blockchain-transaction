import { BlockchainTransactionListDto } from '../../dto/BlockchainTransactionListDto';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromAppBlockchainTransactionListActions from '../actions/app.transaction-list.actions';

export interface AppBlockchainTransactionListState {
  blockchainTransactionListItems: BlockchainTransactionListDto[];
  blockchainTransactionListSearching: boolean;
}
export const initialBlockchainTransactionListState: AppBlockchainTransactionListState = {
  blockchainTransactionListItems: [],
  blockchainTransactionListSearching: false,
};

const appBlockchainTransactionListInternal = createReducer(
  initialBlockchainTransactionListState,
  on(
    fromAppBlockchainTransactionListActions.loadAllBlockchainTransactionList,
    (state) => ({
      ...state,
      blockchainTransactionListSearching: true,
    })
  ),
  on(
    fromAppBlockchainTransactionListActions.loadAllBlockchainTransactionListFinished,
    (state, { payLoad }) => ({
      ...state,
      blockchainTransactionListSearching: false,
      blockchainTransactionListItems: payLoad,
    })
  ),

  on(
    fromAppBlockchainTransactionListActions.loadAllBlockchainTransactionListFailed,
    (state, { payLoad }) => ({
      ...state,
      blockchainTransactionListSearching: false,
      blockchainTransactionListItems: [],
    })
  )
);
export function appBlockchainTransactionListReducer(
  state: AppBlockchainTransactionListState | undefined,
  action: Action
) {
  return appBlockchainTransactionListInternal(state, action);
}
