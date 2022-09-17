import { BlockchainTransactionDetailsDto } from '../../dto/BlockchainTransactionDetailsDto';
import { createAction, props } from '@ngrx/store';

export const loadAllBlockchainTransactionDetails = createAction(
  '[App] Blockchain Transaction Details Load',
);
export const loadAllBlockchainTransactionDetailsFinished = createAction(
  '[App] Blockchain Transaction Details finished',
  props<{ payLoad: BlockchainTransactionDetailsDto[] }>()
);
export const loadAllBlockchainTransactionDetailsFailed = createAction(
  '[App] Blockchain Transaction Details failed',
  props<{ payLoad: any }>()
);