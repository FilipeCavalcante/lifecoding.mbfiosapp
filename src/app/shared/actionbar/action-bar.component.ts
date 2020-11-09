import { ActionBarItemViewModel } from './../viewmodels/actionbar.viewmodels';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {

  @Input()
  actions: ActionBarItemViewModel[] = [];

}
