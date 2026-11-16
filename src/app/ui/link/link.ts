import { Component, input } from "@angular/core";

@Component({
  selector: 'p-link',
  template: `
    <a [href]="to()" [target]="newTab() ? '_blank' : '_self'">
      {{ label() }}
    </a>
  `,
  styles: ``
})
export class Link {
  to = input.required<string>();
  label = input.required<string>();
  newTab = input<boolean>(true);
}