import { TransactionGroupType, TransactionDirectionType } from '../enumerations';
import { IModelBase } from './base.models';

export interface ITransaction extends IModelBase {

  description: string;
  value: number;
  categoryGroup: TransactionGroupType;
  direction: TransactionDirectionType;
  dueDate?: Date;
  futureDate?: Date;
  isConsolidated: boolean;

}

export class Transaction implements ITransaction {
  description: string;
  value: number;
  categoryGroup: TransactionGroupType;
  direction: TransactionDirectionType;
  dueDate?: Date;
  futureDate?: Date;
  isConsolidated: boolean;
  id: string;
  createdAt: Date;
  createdBy: string;
  updatedAd: Date;
  updatedBy: string;

}
