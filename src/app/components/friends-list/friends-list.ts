import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  template: `
    <section id="friends" class="panel friends-panel" aria-labelledby="friends-heading">
      <div class="panel-heading">
        <h2 id="friends-heading">Votre cercle</h2>
        <span class="count-badge">4</span>
      </div>
      <ul class="friend-list">
        <li><span class="friend-avatar friend-lilac">SL</span><span class="friend-name">Sarah L.</span><span class="online-dot" aria-label="En ligne"></span></li>
        <li><span class="friend-avatar friend-peach">TN</span><span class="friend-name">Thomas N.</span><span class="online-dot" aria-label="En ligne"></span></li>
        <li><span class="friend-avatar friend-mint">JM</span><span class="friend-name">Julie M.</span><span class="offline-dot" aria-label="Hors ligne"></span></li>
        <li><span class="friend-avatar friend-yellow">KB</span><span class="friend-name">Karim B.</span><span class="online-dot" aria-label="En ligne"></span></li>
      </ul>
      <button class="text-button" type="button">Voir tout le cercle <span aria-hidden="true">→</span></button>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendsList {}
