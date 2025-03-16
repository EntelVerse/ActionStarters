// Types for our models
export type ResearchArea = {
  id: string;
  name: string;
  category: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
  profileImage?: string;
  bio?: string;
  researchAreas: string[]; // IDs of research areas
  rating: number;
  badges?: string[];
  university?: string;
  department?: string;
  position?: string;
  competitionHistory: CompetitionParticipation[];
  teams: string[]; // IDs of teams
  createdAt: string;
  updatedAt: string;
};

export type CompetitionParticipation = {
  competitionId: string;
  teamId: string;
  role: string;
  result?: string;
  pointsEarned?: number;
  year: number;
};

export type Team = {
  id: string;
  name: string;
  description: string;
  ownerId: string; // ID of the user who created the team
  competitionId: string;
  members: TeamMember[];
  status: 'recruiting' | 'complete' | 'active' | 'finished';
  researchAreas: string[]; // IDs of research areas
  private: boolean;
  image?: string;
  averageRating?: number; // Calculated based on member ratings
  createdAt: string;
  updatedAt: string;
};

export type TeamMember = {
  userId: string;
  role: string;
  status: 'invited' | 'joined' | 'left' | 'rejected';
  joinedAt: string;
};

export type TeamRequest = {
  id: string;
  teamId: string;
  userId: string;
  message: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
};

export type RecruitmentPost = {
  id: string;
  userId: string;
  competitionId: string;
  teamId?: string;
  title: string;
  description: string;
  requiredResearchAreas: string[]; // IDs of research areas
  desiredRating?: number;
  positionsAvailable: number;
  status: 'open' | 'closed';
  createdAt: string;
  updatedAt: string;
};

export type Competition = {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  deadline: string;
  organization: string;
  amount: string;
  region: string;
  eligibility: string;
  researchAreas: string[]; // IDs of research areas
  teamSizeMin?: number;
  teamSizeMax?: number;
  applicationLink?: string;
  teams?: string[]; // IDs of teams participating
};

// Constants and Enums
export const ResearchCategories = [
  'Life Sciences',
  'Physical Sciences',
  'Computer Science',
  'Engineering',
  'Social Sciences',
  'Mathematics',
  'Environmental Sciences',
  'Medical Sciences',
  'Interdisciplinary'
];

export const UserRoles = [
  'Principal Investigator',
  'Co-Investigator',
  'Researcher',
  'Graduate Student',
  'Undergraduate Student',
  'Post-doctoral Fellow',
  'Lab Technician',
  'Project Manager',
  'Data Scientist',
  'Consultant'
];

export const TeamStatuses = {
  RECRUITING: 'recruiting',
  COMPLETE: 'complete',
  ACTIVE: 'active',
  FINISHED: 'finished'
};

export const MemberStatuses = {
  INVITED: 'invited',
  JOINED: 'joined',
  LEFT: 'left',
  REJECTED: 'rejected'
};

export const RequestStatuses = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected'
};

export const PostStatuses = {
  OPEN: 'open',
  CLOSED: 'closed'
};

// Helper function to calculate user rating based on competition history
export function calculateUserRating(participations: CompetitionParticipation[]): number {
  let rating = 0;

  participations.forEach(participation => {
    // Base point for participation
    rating += 1;

    // Additional points based on result
    if (participation.result) {
      switch (participation.result) {
        case '1st Place':
          rating += 5;
          break;
        case '2nd Place':
          rating += 3;
          break;
        case '3rd Place':
          rating += 2;
          break;
        case 'Top 10%':
          rating += 1;
          break;
        default:
          break;
      }
    }

    // Add any additional points
    if (participation.pointsEarned) {
      rating += participation.pointsEarned;
    }
  });

  return rating;
}
