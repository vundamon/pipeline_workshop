import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent (minimal)', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('shows generic greeting when no name', () => {
    const greeting: HTMLElement = fixture.nativeElement.querySelector('[data-testid="greeting"]');
    expect(greeting.textContent?.trim()).toBe('Hello!');
  });

  it('updates greeting when name entered', () => {
    const instance = fixture.componentInstance;
    instance.name = 'Ada';
    fixture.detectChanges();
    const greeting: HTMLElement = fixture.nativeElement.querySelector('[data-testid="greeting"]');
    expect(greeting.textContent?.trim()).toBe('Hello, Ada!');
  });
});
