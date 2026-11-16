import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../../models/conference';
import '../../register-fr-locale';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  template: `
    <section class="panel details-panel" aria-labelledby="details-heading" aria-live="polite">
      @if (conference(); as selected) {
        <div class="details-art">
          <span class="art-orbit orbit-one"></span>
          <span class="art-orbit orbit-two"></span>
          <span class="art-sparkle sparkle-one" aria-hidden="true">✳</span>
          <span class="art-sparkle sparkle-two" aria-hidden="true">✦</span>
          <span class="art-label">RENCONTRE<br />&amp; INSPIRATION</span>
          <span class="art-number">0{{ selected.id }}</span>
        </div>
        <div class="details-content">
          <p class="eyebrow">EN VEDETTE</p>
          <h2 id="details-heading">{{ selected.title }}</h2>
          <p class="details-description">{{ selected.description }}</p>
          <dl class="details-facts">
            <div><dt><span aria-hidden="true">▦</span> Date &amp; heure</dt><dd>{{ selected.date | date: 'EEEE d MMMM · HH:mm' : '' : 'fr' }}</dd></div>
            <div><dt><span aria-hidden="true">⌖</span> Lieu</dt><dd>{{ selected.place }}</dd></div>
            <div><dt><span aria-hidden="true">♧</span> Participants</dt><dd>{{ selected.nbParticipants }} / {{ selected.maxParticipants }}</dd></div>
          </dl>
          <div class="details-bottom">
            <span class="detail-availability">
              <span class="availability-dot" aria-hidden="true"></span>
              {{ selected.maxParticipants - selected.nbParticipants > 0 ? (selected.maxParticipants - selected.nbParticipants) + ' places disponibles' : 'Événement complet' }}
            </span>
            <span class="detail-cta" aria-hidden="true">↗</span>
          </div>
        </div>
      } @else {
        <div class="details-empty" role="status">
          <span aria-hidden="true">✦</span>
          <h2 id="details-heading">Choisissez une conférence</h2>
          <p>Sélectionnez un événement dans la liste pour en découvrir les détails.</p>
        </div>
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConferenceDetails {
  readonly conference = input<Conference | null>(null);
}
