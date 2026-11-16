import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-site-header',
  template: `
    <header class="site-header">
      <a class="brand" href="#" aria-label="Forum, accueil">
        <span class="brand-mark" aria-hidden="true">f.</span>
        <span>forum<span class="brand-period">.</span></span>
      </a>
      <div class="header-caption">LA COMMUNAUTÉ DES IDÉES</div>
      <button class="avatar avatar-header" type="button" aria-label="Ouvrir mon profil">AM</button>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {}
