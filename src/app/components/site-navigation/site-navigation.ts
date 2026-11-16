import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-site-navigation',
  template: `
    <nav class="site-navigation" aria-label="Navigation principale">
      <a class="nav-link nav-link-active" href="#conferences" aria-current="page">
        <span aria-hidden="true">⌂</span> Accueil
      </a>
      <a class="nav-link" href="#conferences"><span aria-hidden="true">◷</span> Conférences</a>
      <a class="nav-link" href="#friends"><span aria-hidden="true">♧</span> Communauté</a>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteNavigation {}
