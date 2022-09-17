import { BlockchainTransactionDetailsEffects } from './app.transaction-details.effects';
import { BlockchainTransactionListEffects } from './app.transaction-list.effects';

export const blockchainTransactionDetailsEffects: any[] = [BlockchainTransactionDetailsEffects];
export const blockchainTransactionListEffects: any[] = [BlockchainTransactionListEffects];

export const appEffects: any[] = [
  BlockchainTransactionDetailsEffects,
  BlockchainTransactionListEffects
]

export * from './app.transaction-details.effects';
export * from './app.transaction-list.effects';