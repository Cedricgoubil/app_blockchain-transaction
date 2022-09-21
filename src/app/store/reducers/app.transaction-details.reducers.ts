import { BlockchainTransactionListDto } from '../../dto/BlockchainTransactionListDto';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromAppBlockchainTransactionDetailsActions from '../actions/app.transaction-details.actions';

export interface AppBlockchainTransactionDetailsState {
  blockchainTransactionCurrent: BlockchainTransactionListDto[];
  blockchainTransactionSearching: boolean;
}
export const initialBlockchainTransactionDetailsState: AppBlockchainTransactionDetailsState = {
  blockchainTransactionCurrent: [],
  blockchainTransactionSearching: false,
};

const blockchainTransactionDetailsInternal = createReducer(
  initialBlockchainTransactionDetailsState,
  on(
    fromAppBlockchainTransactionDetailsActions.getTransactionDetails,
    (state) => ({
      ...state,
      blockchainTransactionSearching: true,
    })
  ),
  on(
    fromAppBlockchainTransactionDetailsActions.getTransactionDetailsFinished,
    (state, { payLoad }) => ({
      ...state,
      blockchainTransactionSearching: false,
      blockchainTransactionCurrent: payLoad,
    })
  ),

  on(
    fromAppBlockchainTransactionDetailsActions.getTransactionDetailsFailed,
    (state, { payLoad }) => ({
      ...state,
      blockchainTransactionSearching: false,
    })
  )
);
export function appBlockchainTransactionDetailsReducer(
  state: AppBlockchainTransactionDetailsState | undefined,
  action: Action
) {
  return blockchainTransactionDetailsInternal(state, action);
}

export const getBlockchainTransactionCurrent = (state: AppBlockchainTransactionDetailsState) => {
  if (!state) {
    return new BlockchainTransactionListDto();
  }
  return state.blockchainTransactionCurrent;
};
