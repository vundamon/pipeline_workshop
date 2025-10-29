import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'pw-root',
  standalone: true,
  imports: [FormsModule, NgIf],
  template: `
    <main class="app">
      <h1 data-testid="title">Pipeline Workshop Demo</h1>

      <label>
        Your name:
        <input data-testid="name-input" [(ngModel)]="name" placeholder="Type name..." />
      </label>

      <p data-testid="greeting" *ngIf="name; else generic">
        Hello, {{ name.trim() || 'friend' }}!
      </p>
      <ng-template #generic>
        <p data-testid="greeting">Hello!</p>
      </ng-template>

      <small class="hint">
        This tiny app exists to demonstrate lint + Cypress in CI.
      </small>
    </main>
  `,
  styles: [`
    .app { font-family: Arial, sans-serif; padding: 2rem; max-width: 480px; }
    h1 { color: #1976d2; margin-top: 0; }
    label { display: flex; gap: 0.5rem; margin: 1rem 0; }
    input { flex: 1; }
    .hint { color: #666; display: block; margin-top: 2rem; }
  `]
})
export class AppComponent {
  name = '';
}
