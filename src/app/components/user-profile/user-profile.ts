import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `
    <section id="profile" class="panel profile-panel" aria-labelledby="profile-name">
      <div class="profile-cover"></div>
      <div class="profile-content">
        <div class="avatar avatar-profile" aria-hidden="true">AM</div>
        <p class="profile-label">MON PROFIL</p>
        <h2 id="profile-name">Alex Martin</h2>
        <p class="profile-role">Étudiant·e en informatique</p>
        <div class="profile-stats">
          <div><strong>08</strong><span>événements</span></div>
          <div><strong>24</strong><span>connexions</span></div>
        </div>
        <button class="text-button" type="button">Voir mon profil <span aria-hidden="true">→</span></button>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfile {}
