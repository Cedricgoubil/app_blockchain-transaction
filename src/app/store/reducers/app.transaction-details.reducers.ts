import { BlockchainTransactionDetailsDto } from '../../dto/BlockchainTransactionDetailsDto';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromAppBlockchainTransactionDetailsActions from '../actions/app.transaction-details.actions';

export interface AppBlockchainTransactionDetailsState {
  blockchainTransactionItems: BlockchainTransactionDetailsDto[];
  blockchainTransactionSearching: boolean;
}
export const initialBlockchainTransactionDetailsState: AppBlockchainTransactionDetailsState = {
  blockchainTransactionItems: [],
  blockchainTransactionSearching: false,
};

const appBlockchainTransactionDetailsInternal = createReducer(
  initialBlockchainTransactionDetailsState,
  on(
    fromAppBlockchainTransactionDetailsActions.loadAllBlockchainTransactionDetails,
    (state) => ({
      ...state,
      blockchainTransactionSearching: true,
    })
  ),
  on(
    fromAppBlockchainTransactionDetailsActions.loadAllBlockchainTransactionDetailsFinished,
    (state, { payLoad }) => ({
      ...state,
      blockchainTransactionSearching: false,
      blockchainTransactionItems: payLoad,
    })
  ),

  on(
    fromAppBlockchainTransactionDetailsActions.loadAllBlockchainTransactionDetailsFailed,
    (state, { payLoad }) => ({
      ...state,
      blockchainTransactionSearching: false,
      blockchainTransactionItems: [],
    })
  )
);
export function appBlockchainTransactionDetailsReducer(
  state: AppBlockchainTransactionDetailsState | undefined,
  action: Action
) {
  return appBlockchainTransactionDetailsInternal(state, action);
}
