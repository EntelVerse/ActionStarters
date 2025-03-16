import { TeamRequest, RequestStatuses } from './models';

// Mock team request data
export const mockTeamRequests: TeamRequest[] = [
  {
    id: 'req1',
    teamId: 'team6',
    userId: 'user5',
    message: 'I am interested in joining your Genomic Medicine Collaborative team. My expertise in quantum computing algorithms could bring a unique perspective to your genomic research.',
    status: 'pending',
    createdAt: '2025-02-20T09:15:00Z'
  },
  {
    id: 'req2',
    teamId: 'team5',
    userId: 'user1',
    message: 'I would like to join your Neural Interfaces Research Group. My background in genetics and molecular biology could be valuable for understanding biological interactions with neural interfaces.',
    status: 'accepted',
    createdAt: '2025-01-15T14:30:00Z'
  },
  {
    id: 'req3',
    teamId: 'team6',
    userId: 'user4',
    message: 'I am very interested in your team\'s work on genomic approaches to personalized medicine. My experience in neural engineering could help bridge the gap between genomics and neural systems.',
    status: 'pending',
    createdAt: '2025-02-22T11:45:00Z'
  },
  {
    id: 'req4',
    teamId: 'team3',
    userId: 'user2',
    message: 'I would like to contribute my AI expertise to your Climate Resilience Initiative. I believe machine learning approaches could greatly enhance climate adaptation strategies.',
    status: 'rejected',
    createdAt: '2024-09-10T16:20:00Z'
  },
  {
    id: 'req5',
    teamId: 'team5',
    userId: 'user3',
    message: 'I am interested in collaborating on your BCI research. My climate science background could help in developing sustainable and environmentally-friendly neural interfaces.',
    status: 'pending',
    createdAt: '2025-01-30T10:05:00Z'
  }
];

// Helper function to get team requests by team ID
export function getTeamRequestsByTeamId(teamId: string): TeamRequest[] {
  return mockTeamRequests.filter(request => request.teamId === teamId);
}

// Helper function to get team requests by user ID
export function getTeamRequestsByUserId(userId: string): TeamRequest[] {
  return mockTeamRequests.filter(request => request.userId === userId);
}

// Helper function to get pending team requests by team ID
export function getPendingTeamRequestsByTeamId(teamId: string): TeamRequest[] {
  return mockTeamRequests.filter(request =>
    request.teamId === teamId && request.status === RequestStatuses.PENDING
  );
}

// Helper function to get team request by ID
export function getTeamRequestById(id: string): TeamRequest | undefined {
  return mockTeamRequests.find(request => request.id === id);
}
