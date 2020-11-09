import { TransactionGroupType, TransactionDirectionType } from './../../../shared/enumerations';
import { AppComponentBase } from './../../appcomponentbase.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, Injector, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { convertEnumToSelectItem } from 'src/app/shared/enumerations';

@Component({
  templateUrl: './add-edit-transaction.component.html'
})
export class AddEditTransactionComponent extends AppComponentBase implements OnInit {

  transactionGroupSI: SelectItem[] = convertEnumToSelectItem(TransactionGroupType);
  transactionDirectionSI: SelectItem[] = convertEnumToSelectItem(TransactionDirectionType);
  transactionsFormGroup: FormGroup;

  constructor(private injector: Injector, private fb: FormBuilder) {
    super(injector);

    this.transactionsFormGroup = this.createFormGroup();
  }

  ngOnInit(): void {

  }

  createFormGroup() {
    return this.fb.group({
      transactionGroup: [''],
      transactionDirection: [''],
      description: ['', Validators.required],
      value: ['', Validators.required],
      dueDate: ['', Validators.required],
    });
  }
}
