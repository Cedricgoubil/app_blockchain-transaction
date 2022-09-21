import { BlockchainTransactionListDto } from '../../dto/BlockchainTransactionListDto';
import { createAction, props } from '@ngrx/store';

export const getTransactionDetails = createAction(
  '[App] Get Transaction Details Load'
);
export const getTransactionDetailsFinished = createAction(
  '[App] Get Transaction Details finished',
  props<{ payLoad: BlockchainTransactionListDto[] }>()
);
export const getTransactionDetailsFailed = createAction(
  '[App] Get Transaction Details failed',
  props<{ payLoad: any }>()
);