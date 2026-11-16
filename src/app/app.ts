import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import './register-fr-locale';
import { Conference } from './models/conference';
import { ConferenceDetails } from './components/conference-details/conference-details';
import { ConferenceList } from './components/conference-list/conference-list';
import { FriendsList } from './components/friends-list/friends-list';
import { NotificationsPanel } from './components/notifications-panel/notifications-panel';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { SiteNavigation } from './components/site-navigation/site-navigation';
import { UserProfile } from './components/user-profile/user-profile';

@Component({
  selector: 'app-root',
  imports: [
    ConferenceDetails,
    ConferenceList,
    FriendsList,
    NotificationsPanel,
    SiteFooter,
    SiteHeader,
    SiteNavigation,
    UserProfile,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'L’intelligence artificielle au service du vivant',
      description:
        'Chercheurs et entrepreneurs explorent comment l’IA transforme la santé, la recherche et notre compréhension du vivant.',
      date: new Date('2026-12-03T09:30:00'),
      place: 'Amphithéâtre Lumière, Lyon',
      maxParticipants: 120,
      nbParticipants: 84,
    },
    {
      id: 2,
      title: 'Construire le numérique responsable',
      description:
        'Une matinée d’échanges autour de l’écoconception, de l’accessibilité et de la sobriété numérique.',
      date: new Date('2026-12-12T14:00:00'),
      place: 'La Sucrière, Lyon',
      maxParticipants: 90,
      nbParticipants: 84,
    },
    {
      id: 3,
      title: 'Les villes de demain',
      description:
        'Urbanistes et citoyens imaginent des espaces plus verts, inclusifs et adaptés aux nouveaux usages.',
      date: new Date('2027-01-21T18:00:00'),
      place: 'Hôtel de Ville, Lyon',
      maxParticipants: 60,
      nbParticipants: 60,
    },
  ]);
  protected readonly selectedId = signal<number | null>(1);
  protected readonly selectedConference = computed(
    () => this.conferences().find((conference) => conference.id === this.selectedId()) ?? null,
  );

  protected selectConference(conference: Conference): void {
    this.selectedId.set(conference.id);
  }

  protected register(conferenceId: number): void {
    this.conferences.update((conferences) =>
      conferences.map((conference) =>
        conference.id === conferenceId &&
        conference.nbParticipants < conference.maxParticipants
          ? { ...conference, nbParticipants: conference.nbParticipants + 1 }
          : conference,
      ),
    );
  }
}
