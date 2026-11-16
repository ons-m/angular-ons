import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  template: `
    <footer class="site-footer">
      <a class="footer-brand" href="#">forum<span class="brand-period">.</span></a>
      <span>Des idées qui nous rapprochent.</span>
      <span>© 2026 Forum</span>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {}
