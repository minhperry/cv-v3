import { Component, input } from "@angular/core";

@Component({
  selector: 'p-chip',
  template: `
    <ng-content />
  `,
  host: {
    '[class.basic]': 'basic()'
  },
  styles: `
    :host {
      margin: .25rem;
      padding: .25rem;
      border: 1px yellow solid;

      &.basic {
        border: 1px green dotted;
      }
    }
  `
})
export class SkillChip {
  basic = input<boolean | undefined>()
}