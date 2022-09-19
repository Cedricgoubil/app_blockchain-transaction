import { BlockchainTransactionDetailsDto } from '../../dto/BlockchainTransactionDetailsDto';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromAppBlockchainTransactionDetailsActions from '../actions/app.transaction-details.actions';

export interface AppBlockchainTransactionDetailsState {
  blockchainTransactionCurrent: BlockchainTransactionDetailsDto;
  blockchainTransactionSearching: boolean;
}
export const initialBlockchainTransactionDetailsState: AppBlockchainTransactionDetailsState = {
  blockchainTransactionCurrent: new BlockchainTransactionDetailsDto,
  blockchainTransactionSearching: false,
};

const appBlockchainTransactionDetailsInternal = createReducer(
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
      blockchainTransactionItems: payLoad,
    })
  ),

  on(
    fromAppBlockchainTransactionDetailsActions.getTransactionDetailsFailed,
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
