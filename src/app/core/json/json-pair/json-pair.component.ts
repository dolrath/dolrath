import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-pair',
  templateUrl: './json-pair.component.html',
  styleUrls: ['./json-pair.component.scss']
})
export class JsonPairComponent {
  @Input() key: string;
  @Input() value: any;
  @Input() type: string;
}
