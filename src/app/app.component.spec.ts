import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent (dino theme)', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('shows fallback greeting when no name', () => {
    const greeting: HTMLElement = fixture.nativeElement.querySelector('[data-testid="greeting"]');
    expect(greeting.textContent?.trim()).toBe('Greetings, carbon-based time traveler!');
  });

  it('shows RAWR greeting after name input', () => {
    const instance = fixture.componentInstance;
    instance.rawName = 'Ada';
    instance.syncName();
    fixture.detectChanges();
    const greeting: HTMLElement = fixture.nativeElement.querySelector('[data-testid="greeting"]');
    expect(greeting.textContent?.trim()).toBe('RAWR, Ada! Welcome to the club.');
  });
});
