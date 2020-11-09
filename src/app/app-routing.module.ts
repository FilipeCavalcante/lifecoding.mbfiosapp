import { AddEditTransactionComponent } from './components/transaction/add-edit/add-edit-transaction.component';
import { AllTransactionComponent } from './components/transaction/all-transaction.component';
import { AddEditCustomerComponent } from './components/customer/add-edit/add-edit-customer.component';
import { AllCustomersComponent } from './components/customer/all-customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.components';
import { ConfigComponent } from './configuration/config.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'transactions', children: [
          { path: '', component: AllTransactionComponent },
          { path: 'add', component: AddEditTransactionComponent }
        ]
      },
      {
        path: 'customers', children: [
          { path: '', component: AllCustomersComponent },
          { path: 'add', component: AddEditCustomerComponent }
        ]
      },
      { path: 'config', component: ConfigComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
