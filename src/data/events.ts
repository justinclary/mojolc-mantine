import type { TeamLabel } from './coaches';

export type EventType = 'game' | 'practice' | 'tryout' | 'other';

export interface ClubEvent {
  id: string;
  date: string; // ISO date string
  title: string;
  description?: string;
  location?: string;
  type: EventType;
  teams?: TeamLabel[];
}

export const events: ClubEvent[] = [
  {
    id: '1',
    date: '2025-03-01',
    title: 'Spring Tryouts',
    description: 'Open tryouts for all age groups. Players should bring their own equipment.',
    location: 'MOJO LC Practice Fields',
    type: 'tryout',
  },
  {
    id: '2',
    date: '2025-03-10',
    title: 'Varsity vs. North Shore Hawks',
    description: 'Home opener for the Varsity team.',
    location: 'Main Stadium',
    type: 'game',
    teams: ['Varsity'],
  },
  {
    id: '3',
    date: '2025-03-15',
    title: 'JV vs. Westfield Wolves',
    description: 'Away game. Carpool coordination TBD.',
    location: 'Westfield High School',
    type: 'game',
    teams: ['JV'],
  },
  {
    id: '4',
    date: '2025-03-22',
    title: 'All-Team Practice',
    description: 'Full program practice. All age groups required to attend.',
    location: 'MOJO LC Practice Fields',
    type: 'practice',
  },
  {
    id: '5',
    date: '2025-04-05',
    title: 'Varsity Tournament',
    description: 'Day 1 of the Spring Invitational Tournament.',
    location: 'Regional Sports Complex',
    type: 'game',
    teams: ['Varsity'],
  },
  {
    id: '6',
    date: '2025-04-06',
    title: 'Varsity Tournament - Day 2',
    description: 'Semifinals and finals of the Spring Invitational Tournament.',
    location: 'Regional Sports Complex',
    type: 'game',
    teams: ['Varsity'],
  },
  {
    id: '7',
    date: '2025-04-12',
    title: 'Youth Skills Clinic',
    description: 'Free skills clinic open to all players in the Class of 2031 and 2032 age groups.',
    location: 'MOJO LC Practice Fields',
    type: 'other',
    teams: ['Class of 2031', 'Class of 2032'],
  },
  {
    id: '8',
    date: '2025-04-19',
    title: 'JV Home Game vs. Riverside Raiders',
    description: 'Come out and support the JV team!',
    location: 'Main Stadium',
    type: 'game',
    teams: ['JV'],
  },
];
