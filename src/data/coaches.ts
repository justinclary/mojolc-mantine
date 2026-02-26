export type TeamLabel =
  | 'Varsity'
  | 'JV'
  | 'Class of 2032'
  | 'Class of 2031'
  | 'Class of 2030'
  | 'Class of 2029'
  | 'Class of 2028'
  | 'Class of 2027';

export interface Coach {
  id: string;
  name: string;
  teams: TeamLabel[];
  bio: string;
  avatarUrl?: string;
}

export const coaches: Coach[] = [
  {
    id: '1',
    name: 'Mike Johnson',
    teams: ['Varsity'],
    bio: 'Coach Johnson has been coaching youth lacrosse for over 15 years. A former Division I player, he brings a wealth of experience and passion for player development at the highest level.',
  },
  {
    id: '2',
    name: 'Dave Williams',
    teams: ['Varsity', 'JV'],
    bio: 'Coach Williams specializes in offensive strategy and player development. He played collegiately and has coached multiple state championship teams throughout his career.',
  },
  {
    id: '3',
    name: 'Chris Martinez',
    teams: ['JV'],
    bio: 'Coach Martinez focuses on fundamentals and building a strong foundation for young players. His patient coaching style has helped countless athletes reach their full potential.',
  },
  {
    id: '4',
    name: 'Tom Anderson',
    teams: ['Class of 2030', 'Class of 2029'],
    bio: 'Coach Anderson brings energy and enthusiasm to every practice. A former high school standout, he loves working with younger players and watching them grow in the sport.',
  },
  {
    id: '5',
    name: 'Ryan Thompson',
    teams: ['Class of 2032', 'Class of 2031'],
    bio: 'Coach Thompson is dedicated to introducing the youngest players to lacrosse in a fun and encouraging environment. He believes every player deserves a great start in the sport.',
  },
  {
    id: '6',
    name: 'Kevin Lee',
    teams: ['Class of 2028', 'Class of 2027'],
    bio: 'Coach Lee works with older youth players preparing for the transition to high school lacrosse. His focus on skill refinement and mental toughness prepares athletes for the next level.',
  },
];
