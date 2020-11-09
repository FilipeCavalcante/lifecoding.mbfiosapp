import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.scss'],
  providers: [CustomerService]
})
export class AddEditCustomerComponent implements OnInit {

  cities: any;
  customerForm: FormGroup;

  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.customerForm = this.createForm();
    this.loadCities();
  }

  createForm() {
    return new FormGroup({
      name: new FormControl(),
      fullName: new FormControl(),
      documentNumber: new FormControl(),
      city: new FormControl()
    });
  }

  loadCities() {
    this.customerService.listCities().then(res => {
      this.cities = res;
    });
  }


  saveCustomer() {
    console.info(this.customerForm.value);
  }


}
