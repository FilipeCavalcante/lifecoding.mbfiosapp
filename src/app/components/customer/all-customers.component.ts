import { ICustomer } from './../../shared/models/customer.model';
import { CustomerService } from './../../services/customer.service';
import { ActionBarItemViewModel } from './../../shared/viewmodels/actionbar.viewmodels';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss'],
  providers: [CustomerService]
})
export class AllCustomersComponent implements OnInit {

  customerActions: ActionBarItemViewModel[] = [
    { title: 'Adicionar', icon: 'fa-plus', type: 'info', routerlink: '/app/customers/add' },
  ];

  loading = true;
  customersList: ICustomer[];
  dataSource: ICustomer[];
  totalRecords = 0;


  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.customerService.listCustomers().then((result) => {
      this.dataSource = result;
      this.totalRecords = result.length;
    });
  }

  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      if (this.dataSource) {
        this.customersList = this.dataSource.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 2000)
  }



}
