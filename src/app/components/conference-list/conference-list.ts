import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Conference } from '../../models/conference';
import '../../register-fr-locale';

@Component({
  selector: 'app-conference-list',
  imports: [DatePipe, FormsModule, UpperCasePipe],
  template: `
    <div class="conference-list">
      <label class="search-field">
        <span class="search-icon" aria-hidden="true">⌕</span>
        <span class="visually-hidden">Rechercher une conférence par titre</span>
        <input
          type="search"
          placeholder="Rechercher une conférence..."
          [ngModel]="searchTerm()"
          (ngModelChange)="searchTerm.set($event)"
        />
        <kbd>⌘ K</kbd>
      </label>

      @if (conferences().length === 0) {
        <div class="empty-state" role="status">
          <span class="empty-icon" aria-hidden="true">☼</span>
          <h3>Aucune conférence pour le moment</h3>
          <p>Revenez bientôt pour découvrir les prochains rendez-vous.</p>
        </div>
      } @else if (filteredConferences().length === 0) {
        <div class="empty-state" role="status">
          <span class="empty-icon" aria-hidden="true">⌕</span>
          <h3>Aucun résultat</h3>
          <p>Essayez avec un autre titre ou un mot-clé.</p>
        </div>
      } @else {
        <div class="conference-cards">
          @for (conference of filteredConferences(); track conference.id) {
            <article
              class="conference-card"
              [class.conference-card-selected]="selectedId() === conference.id"
            >
              <button
                class="conference-select"
                type="button"
                [attr.aria-pressed]="selectedId() === conference.id"
                [attr.aria-label]="'Afficher les détails de ' + conference.title"
                (click)="conferenceSelected.emit(conference)"
              >
                <span class="date-tile">
                  <span>{{ conference.date | date: 'MMM' : '' : 'fr' | uppercase }}</span>
                  <strong>{{ conference.date | date: 'dd' }}</strong>
                </span>
                <span class="conference-info">
                  <span class="conference-category">CONFÉRENCE · {{ conference.date | date: 'yyyy' : '' : 'fr' }}</span>
                  <strong class="conference-title">{{ conference.title | uppercase }}</strong>
                  <span class="conference-meta"><span aria-hidden="true">⌖</span> {{ conference.place }}</span>
                </span>
                <span class="select-chevron" aria-hidden="true">›</span>
              </button>
              <div class="conference-card-footer">
                <span
                  class="availability"
                  [class.availability-low]="remainingPlaces(conference) > 0 && remainingPlaces(conference) < 10"
                  [class.availability-full]="remainingPlaces(conference) === 0"
                >
                  <span class="availability-dot" aria-hidden="true"></span>
                  @if (remainingPlaces(conference) === 0) {
                    Complet
                  } @else {
                    {{ remainingPlaces(conference) }} places restantes
                  }
                </span>
                <button
                  class="register-button"
                  [class.register-button-low]="remainingPlaces(conference) > 0 && remainingPlaces(conference) < 10"
                  [class.register-button-full]="remainingPlaces(conference) === 0"
                  type="button"
                  [disabled]="remainingPlaces(conference) === 0"
                  (click)="registrationRequested.emit(conference.id)"
                >
                  {{ remainingPlaces(conference) === 0 ? 'Complet' : 'S’inscrire' }}
                </button>
              </div>
            </article>
          }
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConferenceList {
  readonly conferences = input.required<Conference[]>();
  readonly selectedId = input<number | null>(null);
  readonly conferenceSelected = output<Conference>();
  readonly registrationRequested = output<number>();
  protected readonly searchTerm = signal('');
  protected readonly filteredConferences = computed(() => {
    const query = this.searchTerm().trim().toLocaleLowerCase('fr');
    return this.conferences().filter((conference) =>
      conference.title.toLocaleLowerCase('fr').includes(query),
    );
  });

  protected remainingPlaces(conference: Conference): number {
    return Math.max(0, conference.maxParticipants - conference.nbParticipants);
  }
}
