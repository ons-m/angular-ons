import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-notifications-panel',
  template: `
    <section class="panel notification-panel" aria-labelledby="notifications-heading">
      <div class="panel-heading">
        <h2 id="notifications-heading">À suivre</h2>
        <span class="notification-indicator" aria-label="2 nouvelles notifications"></span>
      </div>
      <article class="notification-item">
        <span class="notification-icon icon-lilac" aria-hidden="true">✦</span>
        <div><p><strong>Sarah</strong> participe à une conférence près de chez vous.</p><time datetime="2026-11-15">Il y a 2 h</time></div>
      </article>
      <article class="notification-item">
        <span class="notification-icon icon-peach" aria-hidden="true">↗</span>
        <div><p>Une nouvelle conférence correspond à vos centres d’intérêt.</p><time datetime="2026-11-14">Hier</time></div>
      </article>
      <a class="text-button notification-link" href="#conferences">Toutes les notifications <span aria-hidden="true">→</span></a>
    </section>
    <section class="quote-card" aria-label="Citation du jour">
      <span class="quote-mark" aria-hidden="true">“</span>
      <blockquote>Les grandes idées naissent souvent d’une simple conversation.</blockquote>
      <p>— La communauté Forum</p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsPanel {}
