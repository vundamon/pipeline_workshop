import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'pw-root',
  standalone: true,
  imports: [FormsModule, NgIf],
  template: `
    <main class="club">
      <h1 data-testid="title">🦕 Dino Fan Club</h1>

      <p class="intro" data-testid="intro">
        Tiny site. Huge enthusiasm. Zero fear of meteors.
      </p>

      <label class="member-line">
        Your name:
        <input
          data-testid="name-input"
          [(ngModel)]="rawName"
          (input)="syncName()"
          placeholder="e.g. Stego Sam"
        />
      </label>

      <p data-testid="greeting" *ngIf="cleanName; else fallback">
        RAWR, {{ cleanName }}! Welcome to the club.
      </p>
      <ng-template #fallback>
        <p data-testid="greeting">Greetings, carbon-based time traveler!</p>
      </ng-template>

      <ul class="notes" data-testid="facts">
        <li>T‑Rex committee still lobbying for longer arms.</li>
        <li>We pronounce GIF like “Giga-Iguanodon Format”.</li>
        <li>Official snack: paleo-friendly veggie comets.</li>
      </ul>

      <small class="foot">
        This playful page powers our pipeline demo (lint + Cypress). Hack away!
      </small>
    </main>
  `,
  styles: [`
    .club { font-family: Arial, sans-serif; padding: 1.75rem; max-width: 560px; }
    h1 { margin: 0 0 0.75rem; color: #256029; }
    .intro { margin: 0 0 1.25rem; font-style: italic; color: #444; }
    .member-line { display: flex; gap: 0.6rem; align-items: center; margin: 1rem 0; }
    input { flex: 1; padding: 0.45rem 0.6rem; }
    [data-testid="greeting"] { font-weight: 600; margin: 0.75rem 0 1rem; }
    .notes { margin: 0 0 1.5rem; padding-left: 1.2rem; }
    .notes li { margin-bottom: 0.4rem; }
    .foot { font-size: 0.7rem; color: #666; display: block; }
  `]
})
export class AppComponent {
  rawName = '';
  cleanName = '';

  syncName(): void {
    this.cleanName = (this.rawName || '').trim();
  }
}
