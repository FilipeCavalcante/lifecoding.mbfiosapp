import { AddEditTransactionComponent } from './components/transaction/add-edit/add-edit-transaction.component';
import { AllTransactionComponent } from './components/transaction/all-transaction.component';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { TopNotificationComponent } from './components/notification/top-notification.component';
import { TopMainMenuComponent } from './shared/top-menu/top-main-menu.component';
import { AddEditCustomerComponent } from './components/customer/add-edit/add-edit-customer.component';
import { ActionBarComponent } from './shared/actionbar/action-bar.component';
import { AllCustomersComponent } from './components/customer/all-customers.component';
import { BreadcrumbAreaComponent } from './shared/breadcrumb/breadcrumb-area.component';
import { StatusAreaComponent } from './components/dashboard/status/status-area.component';
import { AppComponent } from './app.components';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './configuration/config.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BreadcrumbAreaComponent,
    StatusAreaComponent,
    AllCustomersComponent,
    AddEditCustomerComponent,
    TopNotificationComponent,
    TopMainMenuComponent,
    ActionBarComponent,
    ConfigComponent,
    AllTransactionComponent,
    AddEditTransactionComponent

    // PrimeFaces Components
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    InputMaskModule,
    InputTextModule,
    DropdownModule,
  ],
  providers: [
  ],
})
export class AppModule { }
