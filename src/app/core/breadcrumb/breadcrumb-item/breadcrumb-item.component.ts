import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent {
  @Input() label?: string;
  @Input() link: string;

  constructor(private router: Router) { }

  get hasLink(): boolean {
    return !!this.link;
  }

  go(): void {
    this.router.navigate([this.link]);
  }
}
