export interface ICustomer {
  name: string;
  city: string;
  state: string;
  isActive: boolean;
}

export class Customer implements ICustomer {
  name: string;
  city: string;
  state: string;
  isActive: boolean;
}
