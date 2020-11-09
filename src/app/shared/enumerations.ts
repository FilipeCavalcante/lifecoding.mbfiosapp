import { SelectItem } from 'primeng/api';
export enum TransactionDirectionType {
  Incoming = 0,
  Outcoming = 1,
}

export enum TransactionGroupType {
  Residencial = 0,
  Comercial = 1,
}

// tslint:disable-next-line: typedef
export function convertEnumToSelectItem(type: any) {
  return Object.keys(type)
    .map(key => ({ label: type[key], value: key }));
}
