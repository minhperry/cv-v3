import { Component, input } from "@angular/core";

@Component({
  selector: 'p-link',
  template: `
    <a class="link" [href]="to()" [target]="newTab() ? '_blank' : '_self'">
      {{ label() }}
      @if (newTab()) {
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
             viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
             class="link-icon">
          <path d="M7 7h10v10"/>
          <path d="M7 17 17 7"/>
        </svg>
      }
    </a>
  `,
  styles: `
    .link {
      display: inline-flex;
      text-decoration: none;
      color: green;
      padding: var(--spacing-sm) 0;
      // delete later
      border: 1px solid palegreen;
      margin: var(--spacing-sm) var(--spacing-base) var(--spacing-sm) 0;

      &:hover {
        text-decoration: underline;
        filter: brightness(1.8);
      }

      .link-icon {
        width: 1rem;
        height: 1rem;
        margin-left: 0.05rem;
        color: inherit;
        align-self: center;
      }
    }
  `
})
export class Link {
  to = input.required<string>();
  label = input.required<string>();
  newTab = input<boolean>(true);
}