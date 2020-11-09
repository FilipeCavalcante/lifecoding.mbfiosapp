import { Customer, ICustomer } from './../shared/models/customer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {

  }

  listCities(): Promise<any> {
    return this.http.get('assets/mocks/cities.json')
      .toPromise()
      .then(res => {
        if (res.hasOwnProperty('data')) {
          return res['data'];
        }

        return {};
      })
      .then(data => data);
  }


  listCustomers(): Promise<Customer[]> {
    return this.http.get('assets/mocks/customers.json')
      .toPromise()
      .then(res => {
        if (res.hasOwnProperty('data')) {
          return <Customer[]>res['data'];
        }
        return <Customer[]>{};
      })
      .then(data => data);
  }

}
