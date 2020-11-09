import { ActionBarItemViewModel } from './../../shared/viewmodels/actionbar.viewmodels';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './all-transaction.component.html'
})
export class AllTransactionComponent implements OnInit {

  transactionActions: ActionBarItemViewModel[] = [
    { title: 'Adicionar', icon: 'plus', type: 'info', routerlink: '/app/transactions/add' },
    // { title: 'Novo \"a Pagar\"', type: 'danger', icon: 'arrow-down' },
    // { title: 'Novo \"a Receber\"', type: 'success', icon: 'arrow-up' }
  ];

  ngOnInit(): void {
  }



}
