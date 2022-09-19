import { BlockchainTransactionDetailsDto } from '../../dto/BlockchainTransactionDetailsDto';
import { createAction, props } from '@ngrx/store';

export const getTransactionDetails = createAction(
  '[App] Get Transaction Details Load', props<{ id: string }>()
);
export const getTransactionDetailsFinished = createAction(
  '[App] Get Transaction Details finished',
  props<{ payLoad: BlockchainTransactionDetailsDto }>()
);
export const getTransactionDetailsFailed = createAction(
  '[App] Get Transaction Details failed',
  props<{ payLoad: any }>()
);