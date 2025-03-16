// Export all models and types
export * from './models';

// Export mock data
export * from './mock-research-areas';
export * from './mock-users';
export * from './mock-teams';
export * from './mock-competitions';
export * from './mock-team-requests';
export * from './mock-recruitment-posts';

// Helper functions for working with the entire dataset
import { User } from './models';
import { mockUsers } from './mock-users';
import { mockTeams } from './mock-teams';
import { mockCompetitions } from './mock-competitions';
import { getTeamsByUserId } from './mock-teams';
import { getCompetitionById } from './mock-competitions';
import { getResearchAreasByIds } from './mock-research-areas';

/**
 * Get user details with expanded relationships (teams, research areas, etc.)
 */
export function getUserWithDetails(userId: string) {
  const user = mockUsers.find(user => user.id === userId);
  if (!user) return null;

  const userTeams = getTeamsByUserId(userId);
  const teamCompetitions = userTeams.map(team => {
    const competition = getCompetitionById(team.competitionId);
    return {
      team,
      competition
    };
  });

  const researchAreas = getResearchAreasByIds(user.researchAreas);

  return {
    ...user,
    researchAreasDetails: researchAreas,
    teams: userTeams,
    teamCompetitions
  };
}

/**
 * Search across all data types (users, teams, competitions)
 */
export function searchAll(query: string) {
  const lowerQuery = query.toLowerCase();

  const users = mockUsers.filter(user =>
    user.name.toLowerCase().includes(lowerQuery) ||
    user.username.toLowerCase().includes(lowerQuery) ||
    user.bio?.toLowerCase().includes(lowerQuery)
  );

  const teams = mockTeams.filter(team =>
    team.name.toLowerCase().includes(lowerQuery) ||
    team.description.toLowerCase().includes(lowerQuery)
  );

  const competitions = mockCompetitions.filter(competition =>
    competition.title.toLowerCase().includes(lowerQuery) ||
    competition.description.toLowerCase().includes(lowerQuery) ||
    competition.organization.toLowerCase().includes(lowerQuery)
  );

  return {
    users,
    teams,
    competitions
  };
}
