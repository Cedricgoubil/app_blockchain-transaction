import { BlockchainTransactionDetailsDto } from './BlockchainTransactionDetailsDto';

export class BlockchainTransactionListDto {
  cycle?: number;
  level?: number | any;
  hash?: string;
  timestamp?: string;
  proto?: number;
  payloadRound?: number;
  blockRound?: number;
  validations?: number;
  deposit?: number;
  reward?: number;
  bonus?: number;
  fees?: number;
  nonceRevealed?: boolean;
  lbToggleEma?: number;
  priority?: number;
  lbEscapeVote?: boolean;
  lbEscapeEma?: number;
  proposer?: {
    alias: string,
    address: string,
  }

  blockchainTransactionDetails?: BlockchainTransactionDetailsDto
}