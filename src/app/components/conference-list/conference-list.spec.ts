import { TestBed } from '@angular/core/testing';
import { ConferenceList } from './conference-list';
import { Conference } from '../../models/conference';

const sampleConference: Conference = {
  id: 1,
  title: 'Une conférence de test',
  description: 'Description de test',
  date: new Date('2026-12-03T09:30:00'),
  place: 'Lyon',
  maxParticipants: 20,
  nbParticipants: 8,
};

describe('ConferenceList', () => {
  it('should show an empty state when no conferences are available', async () => {
    await TestBed.configureTestingModule({ imports: [ConferenceList] }).compileComponents();
    const fixture = TestBed.createComponent(ConferenceList);
    fixture.componentRef.setInput('conferences', []);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Aucune conférence pour le moment');
  });

  it('should report the selected conference and emit registration requests', async () => {
    await TestBed.configureTestingModule({ imports: [ConferenceList] }).compileComponents();
    const fixture = TestBed.createComponent(ConferenceList);
    fixture.componentRef.setInput('conferences', [sampleConference]);
    fixture.detectChanges();

    let selected: Conference | undefined;
    let registrationId: number | undefined;
    fixture.componentInstance.conferenceSelected.subscribe((conference) => (selected = conference));
    fixture.componentInstance.registrationRequested.subscribe((id) => (registrationId = id));

    fixture.nativeElement.querySelector('.conference-select').click();
    fixture.nativeElement.querySelector('.register-button').click();

    expect(selected).toEqual(sampleConference);
    expect(registrationId).toBe(sampleConference.id);
  });
});
