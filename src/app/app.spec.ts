import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the conference home page', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Les idées se rencontrent');
    expect(compiled.querySelectorAll('app-conference-list .conference-card')).toHaveLength(3);
  });

  it('should show details for the selected conference and update registration count', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const details = compiled.querySelector('app-conference-details');
    expect(details?.textContent).toContain('L’intelligence artificielle au service du vivant');

    const registerButton = compiled.querySelector<HTMLButtonElement>(
      'app-conference-list .register-button',
    );
    registerButton?.click();
    fixture.detectChanges();

    expect(details?.textContent).toContain('85 / 120');
  });

  it('should update the details when another conference is selected', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelectorAll<HTMLButtonElement>('app-conference-list .conference-select')[1].click();
    fixture.detectChanges();

    expect(compiled.querySelector('app-conference-details')?.textContent).toContain(
      'Construire le numérique responsable',
    );
  });

  it('should filter conferences by part of their title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const search = compiled.querySelector<HTMLInputElement>(
      'app-conference-list input[type="search"]',
    );
    expect(search).not.toBeNull();
    search!.value = 'villes';
    search!.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(compiled.querySelectorAll('app-conference-list .conference-card')).toHaveLength(1);
    expect(compiled.querySelector('.conference-title')?.textContent).toContain(
      'LES VILLES DE DEMAIN',
    );
  });

  it('should use warning and full styles for low and exhausted capacity', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.register-button-low')).not.toBeNull();
    expect(compiled.querySelector('.register-button-full:disabled')).not.toBeNull();
  });
});
