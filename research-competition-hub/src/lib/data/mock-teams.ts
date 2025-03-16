import { Team, TeamMember, MemberStatuses } from './models';

// Mock team data
export const mockTeams: Team[] = [
  {
    id: 'team1',
    name: 'CRISPR Innovators',
    description: 'A team focused on developing novel CRISPR-based gene editing techniques for treating genetic disorders.',
    ownerId: 'user1', // Dr. Jane Smith
    competitionId: 'comp1',
    members: [
      {
        userId: 'user1',
        role: 'Principal Investigator',
        status: 'joined',
        joinedAt: '2023-11-15T10:30:00Z'
      },
      {
        userId: 'user4',
        role: 'Researcher',
        status: 'joined',
        joinedAt: '2023-11-20T14:15:00Z'
      }
    ],
    status: 'finished',
    researchAreas: ['ra1', 'ra2', 'ra4', 'ra5'], // Molecular Biology, Genetics, Biochemistry, Neuroscience
    private: false,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69',
    averageRating: 8,
    createdAt: '2023-11-15T10:30:00Z',
    updatedAt: '2024-05-20T11:45:00Z'
  },
  {
    id: 'team2',
    name: 'AI for Drug Discovery',
    description: 'Using machine learning approaches to accelerate drug discovery for infectious diseases.',
    ownerId: 'user2', // Prof. Michael Chen
    competitionId: 'comp2',
    members: [
      {
        userId: 'user2',
        role: 'Principal Investigator',
        status: 'joined',
        joinedAt: '2023-02-05T09:20:00Z'
      },
      {
        userId: 'user1',
        role: 'Researcher',
        status: 'joined',
        joinedAt: '2023-02-10T11:30:00Z'
      },
      {
        userId: 'user5',
        role: 'Data Scientist',
        status: 'joined',
        joinedAt: '2023-02-12T15:45:00Z'
      }
    ],
    status: 'finished',
    researchAreas: ['ra14', 'ra15', 'ra38'], // AI, ML, Pharmacology
    private: false,
    image: 'https://images.unsplash.com/photo-1534643960519-11ad79bc0e1a',
    averageRating: 9.3,
    createdAt: '2023-02-05T09:20:00Z',
    updatedAt: '2024-01-15T16:30:00Z'
  },
  {
    id: 'team3',
    name: 'Climate Resilience Initiative',
    description: 'Developing strategies and technologies to help communities adapt to climate change impacts.',
    ownerId: 'user3', // Dr. Sarah Johnson
    competitionId: 'comp5',
    members: [
      {
        userId: 'user3',
        role: 'Principal Investigator',
        status: 'joined',
        joinedAt: '2023-08-01T13:10:00Z'
      },
      {
        userId: 'user5',
        role: 'Consultant',
        status: 'joined',
        joinedAt: '2023-08-15T10:30:00Z'
      }
    ],
    status: 'finished',
    researchAreas: ['ra33', 'ra34', 'ra36'], // Climate Science, Ecology, Atmospheric Science
    private: false,
    averageRating: 7.5,
    createdAt: '2023-08-01T13:10:00Z',
    updatedAt: '2024-04-10T09:20:00Z'
  },
  {
    id: 'team4',
    name: 'Quantum Computing for Drug Design',
    description: 'Exploring quantum computing applications for simulating molecular interactions in drug design.',
    ownerId: 'user5', // Emma Williams
    competitionId: 'comp7',
    members: [
      {
        userId: 'user5',
        role: 'Principal Investigator',
        status: 'joined',
        joinedAt: '2023-05-10T11:15:00Z'
      },
      {
        userId: 'user2',
        role: 'Co-Investigator',
        status: 'joined',
        joinedAt: '2023-05-12T14:30:00Z'
      }
    ],
    status: 'finished',
    researchAreas: ['ra8', 'ra44', 'ra15', 'ra38'], // Quantum Physics, Quantum Computing, ML, Pharmacology
    private: true,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    averageRating: 8.5,
    createdAt: '2023-05-10T11:15:00Z',
    updatedAt: '2024-02-20T15:45:00Z'
  },
  {
    id: 'team5',
    name: 'Neural Interfaces Research Group',
    description: 'Developing next-generation brain-computer interfaces for medical applications.',
    ownerId: 'user4', // Alex Rodriguez
    competitionId: 'comp6',
    members: [
      {
        userId: 'user4',
        role: 'Principal Investigator',
        status: 'joined',
        joinedAt: '2024-01-15T10:15:00Z'
      },
      {
        userId: 'user2',
        role: 'AI Specialist',
        status: 'joined',
        joinedAt: '2024-01-20T11:30:00Z'
      }
    ],
    status: 'active',
    researchAreas: ['ra5', 'ra14', 'ra20'], // Neuroscience, AI, Biomedical Engineering
    private: false,
    image: 'https://images.unsplash.com/photo-1580651214613-f4692d6d138f',
    averageRating: 6.5,
    createdAt: '2024-01-15T10:15:00Z',
    updatedAt: '2025-01-10T16:20:00Z'
  },
  {
    id: 'team6',
    name: 'Genomic Medicine Collaborative',
    description: 'Investigating genomic approaches to personalized medicine for cancer treatment.',
    ownerId: 'user1', // Dr. Jane Smith
    competitionId: 'comp8',
    members: [
      {
        userId: 'user1',
        role: 'Principal Investigator',
        status: 'joined',
        joinedAt: '2024-03-01T09:30:00Z'
      },
      {
        userId: 'user3',
        role: 'Data Analyst',
        status: 'invited',
        joinedAt: '2024-03-01T09:35:00Z'
      }
    ],
    status: 'recruiting',
    researchAreas: ['ra1', 'ra2', 'ra41'], // Molecular Biology, Genetics, Bioinformatics
    private: false,
    createdAt: '2024-03-01T09:30:00Z',
    updatedAt: '2025-02-15T14:20:00Z'
  }
];

// Helper function to get team by ID
export function getTeamById(id: string): Team | undefined {
  return mockTeams.find(team => team.id === id);
}

// Helper function to get teams by owner ID
export function getTeamsByOwnerId(ownerId: string): Team[] {
  return mockTeams.filter(team => team.ownerId === ownerId);
}

// Helper function to get teams by competition ID
export function getTeamsByCompetitionId(competitionId: string): Team[] {
  return mockTeams.filter(team => team.competitionId === competitionId);
}

// Helper function to get teams by research area
export function getTeamsByResearchArea(researchAreaId: string): Team[] {
  return mockTeams.filter(team => team.researchAreas.includes(researchAreaId));
}

// Helper function to get teams by user ID (teams user is a member of)
export function getTeamsByUserId(userId: string): Team[] {
  return mockTeams.filter(team =>
    team.members.some(member => member.userId === userId && member.status === 'joined')
  );
}

// Helper function to get recruiting teams
export function getRecruitingTeams(): Team[] {
  return mockTeams.filter(team => team.status === 'recruiting');
}

// Helper function to get active teams
export function getActiveTeams(): Team[] {
  return mockTeams.filter(team => team.status === 'active');
}
