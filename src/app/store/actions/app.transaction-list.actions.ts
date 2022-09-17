import { BlockchainTransactionListDto } from '../../dto/BlockchainTransactionListDto';
import { createAction, props } from '@ngrx/store';

export const loadAllBlockchainTransactionList = createAction(
  '[App] Blockchain Transaction List Load'
);
export const loadAllBlockchainTransactionListFinished = createAction(
  '[App] Blockchain Transaction List finished',
  props<{ payLoad: BlockchainTransactionListDto[] }>()
);
export const loadAllBlockchainTransactionListFailed = createAction(
  '[App] Blockchain Transaction List failed',
  props<{ payLoad: any }>()
);