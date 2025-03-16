import { RecruitmentPost, PostStatuses } from './models';

// Mock recruitment post data
export const mockRecruitmentPosts: RecruitmentPost[] = [
  {
    id: 'post1',
    userId: 'user1', // Dr. Jane Smith
    competitionId: 'comp8',
    teamId: 'team6',
    title: 'Seeking Bioinformatics Expert for Precision Medicine Project',
    description: 'The Genomic Medicine Collaborative is looking for a bioinformatics specialist to help with data analysis of genomic information for cancer treatment. Experience with next-generation sequencing data analysis and familiarity with cancer genomics preferred.',
    requiredResearchAreas: ['ra41', 'ra42'], // Bioinformatics, Computational Biology
    desiredRating: 5,
    positionsAvailable: 1,
    status: 'open',
    createdAt: '2025-02-17T10:30:00Z',
    updatedAt: '2025-02-17T10:30:00Z'
  },
  {
    id: 'post2',
    userId: 'user3', // Dr. Sarah Johnson
    competitionId: 'comp5',
    title: 'Seeking Climate Modeling Expert',
    description: 'Looking for a climate modeling expert to join our research team for the UN Climate Resilience Research Grant. The ideal candidate will have experience with climate simulation models and data analysis.',
    requiredResearchAreas: ['ra33', 'ra36'], // Climate Science, Atmospheric Science
    desiredRating: 7,
    positionsAvailable: 2,
    status: 'open',
    createdAt: '2025-01-15T09:45:00Z',
    updatedAt: '2025-02-01T14:20:00Z'
  },
  {
    id: 'post3',
    userId: 'user2', // Prof. Michael Chen
    competitionId: 'comp2',
    teamId: 'team2',
    title: 'Pharmacology Expert Needed for AI Drug Discovery Project',
    description: 'Our AI for Drug Discovery team is seeking a pharmacology expert to help validate computational predictions and guide model development. Knowledge of infectious disease treatments and drug development pipelines is essential.',
    requiredResearchAreas: ['ra38'], // Pharmacology
    desiredRating: 6,
    positionsAvailable: 1,
    status: 'closed',
    createdAt: '2023-01-10T11:20:00Z',
    updatedAt: '2023-02-05T16:15:00Z'
  },
  {
    id: 'post4',
    userId: 'user4', // Alex Rodriguez
    competitionId: 'comp6',
    teamId: 'team5',
    title: 'Electrical Engineer for Neural Interface Project',
    description: 'Looking for an electrical engineer with experience in biosignal processing to join our BCI research team. The ideal candidate will have knowledge of EEG, neural signal processing, and hardware design for wearable devices.',
    requiredResearchAreas: ['ra22', 'ra5'], // Electrical Engineering, Neuroscience
    desiredRating: 4,
    positionsAvailable: 1,
    status: 'open',
    createdAt: '2025-01-25T08:30:00Z',
    updatedAt: '2025-01-25T08:30:00Z'
  },
  {
    id: 'post5',
    userId: 'user5', // Emma Williams
    competitionId: 'comp7',
    title: 'Seeking Molecular Biologist for Quantum Computing Project',
    description: 'Our quantum computing research team is looking for a molecular biologist to help define relevant biological problems that can benefit from quantum computing approaches. Experience with molecular dynamics simulations is a plus.',
    requiredResearchAreas: ['ra1', 'ra4'], // Molecular Biology, Biochemistry
    desiredRating: 6,
    positionsAvailable: 2,
    status: 'open',
    createdAt: '2025-02-10T15:45:00Z',
    updatedAt: '2025-02-10T15:45:00Z'
  }
];

// Helper function to get recruitment posts by competition ID
export function getRecruitmentPostsByCompetitionId(competitionId: string): RecruitmentPost[] {
  return mockRecruitmentPosts.filter(post => post.competitionId === competitionId);
}

// Helper function to get recruitment posts by user ID (posts created by the user)
export function getRecruitmentPostsByUserId(userId: string): RecruitmentPost[] {
  return mockRecruitmentPosts.filter(post => post.userId === userId);
}

// Helper function to get recruitment posts by team ID
export function getRecruitmentPostsByTeamId(teamId: string): RecruitmentPost[] {
  return mockRecruitmentPosts.filter(post => post.teamId === teamId);
}

// Helper function to get open recruitment posts
export function getOpenRecruitmentPosts(): RecruitmentPost[] {
  return mockRecruitmentPosts.filter(post => post.status === PostStatuses.OPEN);
}

// Helper function to get recruitment posts matching user's research areas
export function getRecruitmentPostsMatchingResearchAreas(researchAreaIds: string[]): RecruitmentPost[] {
  return mockRecruitmentPosts.filter(post =>
    post.status === PostStatuses.OPEN &&
    post.requiredResearchAreas.some(area => researchAreaIds.includes(area))
  );
}

// Helper function to get recruitment post by ID
export function getRecruitmentPostById(id: string): RecruitmentPost | undefined {
  return mockRecruitmentPosts.find(post => post.id === id);
}
