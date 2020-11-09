import { Component, Input } from '@angular/core';

@Component({
  selector: 'breadcrumb-area',
  templateUrl: './breadcrumb-area.component.html',
  styleUrls: ['./breadcrumb-area.component.scss']
})
export class BreadcrumbAreaComponent {
  @Input() pageName: string;
  @Input() description?: string;
  @Input() icon?: string;
}
