import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-object',
  templateUrl: './json-object.component.html',
  styleUrls: ['./json-object.component.scss']
})
export class JsonObjectComponent {
  @Input() value: string;
  visible = true;

  toggle(): void {
    this.visible = !this.visible;
  }
}
