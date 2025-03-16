import { User, CompetitionParticipation, calculateUserRating } from './models';

// Mock competition participation data
const mockCompetitionParticipations: CompetitionParticipation[] = [
  {
    competitionId: 'comp1',
    teamId: 'team1',
    role: 'Principal Investigator',
    result: '1st Place',
    pointsEarned: 5,
    year: 2024
  },
  {
    competitionId: 'comp2',
    teamId: 'team2',
    role: 'Researcher',
    result: 'Top 10%',
    pointsEarned: 1,
    year: 2023
  },
  {
    competitionId: 'comp3',
    teamId: 'team3',
    role: 'Co-Investigator',
    year: 2022
  }
];

// Mock user data
export const mockUsers: User[] = [
  {
    id: 'user1',
    name: 'Dr. Jane Smith',
    email: 'jane.smith@university.edu',
    username: 'janesmith',
    profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
    bio: 'Molecular biologist specializing in CRISPR gene editing technologies. Looking for collaborative research opportunities.',
    researchAreas: ['ra1', 'ra2', 'ra4'], // Molecular Biology, Genetics, Biochemistry
    rating: 11, // Calculated based on competition history
    badges: ['Expert Researcher', 'Top Contributor'],
    university: 'Stanford University',
    department: 'Department of Biology',
    position: 'Associate Professor',
    competitionHistory: [
      {
        competitionId: 'comp1',
        teamId: 'team1',
        role: 'Principal Investigator',
        result: '1st Place',
        pointsEarned: 5,
        year: 2024
      },
      {
        competitionId: 'comp2',
        teamId: 'team2',
        role: 'Researcher',
        result: '2nd Place',
        pointsEarned: 3,
        year: 2023
      }
    ],
    teams: ['team1', 'team2'],
    createdAt: '2023-01-15T09:24:00Z',
    updatedAt: '2025-02-10T14:30:00Z'
  },
  {
    id: 'user2',
    name: 'Prof. Michael Chen',
    email: 'michael.chen@tech.edu',
    username: 'mchen',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    bio: 'AI researcher focusing on machine learning applications in healthcare. Seeking interdisciplinary collaborations.',
    researchAreas: ['ra14', 'ra15', 'ra17'], // AI, ML, NLP
    rating: 9,
    badges: ['AI Innovator'],
    university: 'MIT',
    department: 'Computer Science Department',
    position: 'Professor',
    competitionHistory: [
      {
        competitionId: 'comp3',
        teamId: 'team3',
        role: 'Principal Investigator',
        result: '3rd Place',
        pointsEarned: 2,
        year: 2024
      },
      {
        competitionId: 'comp4',
        teamId: 'team4',
        role: 'Lead Researcher',
        result: 'Top 10%',
        pointsEarned: 1,
        year: 2022
      }
    ],
    teams: ['team3', 'team4'],
    createdAt: '2022-05-20T11:15:00Z',
    updatedAt: '2025-01-05T16:45:00Z'
  },
  {
    id: 'user3',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@research.org',
    username: 'sjohnson',
    profileImage: 'https://randomuser.me/api/portraits/women/3.jpg',
    bio: 'Climate scientist with expertise in atmospheric modeling. Looking for teams working on climate change mitigation.',
    researchAreas: ['ra33', 'ra34', 'ra36'], // Climate Science, Ecology, Atmospheric Science
    rating: 7,
    university: 'University of California, Berkeley',
    department: 'Earth and Planetary Science',
    position: 'Assistant Professor',
    competitionHistory: [
      {
        competitionId: 'comp5',
        teamId: 'team5',
        role: 'Co-Investigator',
        result: '2nd Place',
        pointsEarned: 3,
        year: 2023
      }
    ],
    teams: ['team5'],
    createdAt: '2023-09-01T08:30:00Z',
    updatedAt: '2024-12-12T10:15:00Z'
  },
  {
    id: 'user4',
    name: 'Alex Rodriguez, PhD',
    email: 'alex.rodriguez@neurolab.com',
    username: 'arod',
    profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
    bio: 'Neuroscientist exploring brain-computer interfaces. Seeking collaborations in neural engineering and AI.',
    researchAreas: ['ra5', 'ra14', 'ra20'], // Neuroscience, AI, Biomedical Engineering
    rating: 5,
    university: 'Harvard University',
    department: 'Neuroscience Department',
    position: 'Postdoctoral Researcher',
    competitionHistory: [
      {
        competitionId: 'comp6',
        teamId: 'team6',
        role: 'Researcher',
        result: 'Top 10%',
        pointsEarned: 1,
        year: 2024
      }
    ],
    teams: ['team6'],
    createdAt: '2024-01-10T14:20:00Z',
    updatedAt: '2025-02-01T09:45:00Z'
  },
  {
    id: 'user5',
    name: 'Emma Williams',
    email: 'emma.williams@quantum.io',
    username: 'ewilliams',
    profileImage: 'https://randomuser.me/api/portraits/women/5.jpg',
    bio: 'Quantum physicist working on quantum computing algorithms. Looking for interdisciplinary projects.',
    researchAreas: ['ra8', 'ra44', 'ra15'], // Quantum Physics, Quantum Computing, Machine Learning
    rating: 8,
    badges: ['Quantum Pioneer'],
    university: 'Caltech',
    department: 'Physics Department',
    position: 'Research Scientist',
    competitionHistory: [
      {
        competitionId: 'comp7',
        teamId: 'team7',
        role: 'Principal Investigator',
        result: '1st Place',
        pointsEarned: 5,
        year: 2023
      }
    ],
    teams: ['team7'],
    createdAt: '2022-11-05T16:10:00Z',
    updatedAt: '2024-10-20T11:30:00Z'
  }
];

// Helper function to get user by ID
export function getUserById(id: string): User | undefined {
  return mockUsers.find(user => user.id === id);
}

// Helper function to get users by research areas
export function getUsersByResearchAreas(researchAreaIds: string[]): User[] {
  return mockUsers.filter(user =>
    user.researchAreas.some(area => researchAreaIds.includes(area))
  );
}

// Helper function to search users by name, username, or research areas
export function searchUsers(query: string): User[] {
  const lowerQuery = query.toLowerCase();
  return mockUsers.filter(user =>
    user.name.toLowerCase().includes(lowerQuery) ||
    user.username.toLowerCase().includes(lowerQuery) ||
    user.bio?.toLowerCase().includes(lowerQuery)
  );
}

// Helper function to get users by minimum rating
export function getUsersByMinRating(minRating: number): User[] {
  return mockUsers.filter(user => user.rating >= minRating);
}
