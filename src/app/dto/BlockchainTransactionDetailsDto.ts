export class BlockchainTransactionDetailsDto {
  type?: string;
  id?: number;
  level?: number;
  timestamp?: string;
  block?: string;
  hash?: string;
  counter?: number;
  sender?: {
    address: string;
  };
  gasLimit?: number;
  gasUsed?: number;
  storageLimit?: number;
  storageUsed?: number;
  bakerFee?: number;
  storageFee?: number;
  allocationFee?: number;
  target?: {
    alias: string;
    address: string;
  };
  targetCodeHash?: number;
  amount?: number;
  parameter?: {
    entrypoint: string;
    value: {
      R: {
        pour_auth: string;
        pour_amount: string;
      }
    }
  };
  status?: string;
  hasInternals?: boolean;
}