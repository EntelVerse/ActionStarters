import { ResearchArea, ResearchCategories } from './models';

// Mock data for research areas
export const mockResearchAreas: ResearchArea[] = [
  // Life Sciences
  { id: 'ra1', name: 'Molecular Biology', category: 'Life Sciences' },
  { id: 'ra2', name: 'Genetics', category: 'Life Sciences' },
  { id: 'ra3', name: 'Microbiology', category: 'Life Sciences' },
  { id: 'ra4', name: 'Biochemistry', category: 'Life Sciences' },
  { id: 'ra5', name: 'Neuroscience', category: 'Life Sciences' },
  { id: 'ra6', name: 'Cell Biology', category: 'Life Sciences' },
  { id: 'ra7', name: 'Immunology', category: 'Life Sciences' },

  // Physical Sciences
  { id: 'ra8', name: 'Quantum Physics', category: 'Physical Sciences' },
  { id: 'ra9', name: 'Astrophysics', category: 'Physical Sciences' },
  { id: 'ra10', name: 'Materials Science', category: 'Physical Sciences' },
  { id: 'ra11', name: 'Nuclear Physics', category: 'Physical Sciences' },
  { id: 'ra12', name: 'Organic Chemistry', category: 'Physical Sciences' },
  { id: 'ra13', name: 'Inorganic Chemistry', category: 'Physical Sciences' },

  // Computer Science
  { id: 'ra14', name: 'Artificial Intelligence', category: 'Computer Science' },
  { id: 'ra15', name: 'Machine Learning', category: 'Computer Science' },
  { id: 'ra16', name: 'Computer Vision', category: 'Computer Science' },
  { id: 'ra17', name: 'Natural Language Processing', category: 'Computer Science' },
  { id: 'ra18', name: 'Cybersecurity', category: 'Computer Science' },
  { id: 'ra19', name: 'Distributed Systems', category: 'Computer Science' },

  // Engineering
  { id: 'ra20', name: 'Biomedical Engineering', category: 'Engineering' },
  { id: 'ra21', name: 'Mechanical Engineering', category: 'Engineering' },
  { id: 'ra22', name: 'Electrical Engineering', category: 'Engineering' },
  { id: 'ra23', name: 'Chemical Engineering', category: 'Engineering' },
  { id: 'ra24', name: 'Civil Engineering', category: 'Engineering' },

  // Social Sciences
  { id: 'ra25', name: 'Psychology', category: 'Social Sciences' },
  { id: 'ra26', name: 'Economics', category: 'Social Sciences' },
  { id: 'ra27', name: 'Sociology', category: 'Social Sciences' },
  { id: 'ra28', name: 'Anthropology', category: 'Social Sciences' },

  // Mathematics
  { id: 'ra29', name: 'Number Theory', category: 'Mathematics' },
  { id: 'ra30', name: 'Algebraic Geometry', category: 'Mathematics' },
  { id: 'ra31', name: 'Topology', category: 'Mathematics' },
  { id: 'ra32', name: 'Statistics', category: 'Mathematics' },

  // Environmental Sciences
  { id: 'ra33', name: 'Climate Science', category: 'Environmental Sciences' },
  { id: 'ra34', name: 'Ecology', category: 'Environmental Sciences' },
  { id: 'ra35', name: 'Oceanography', category: 'Environmental Sciences' },
  { id: 'ra36', name: 'Atmospheric Science', category: 'Environmental Sciences' },

  // Medical Sciences
  { id: 'ra37', name: 'Epidemiology', category: 'Medical Sciences' },
  { id: 'ra38', name: 'Pharmacology', category: 'Medical Sciences' },
  { id: 'ra39', name: 'Public Health', category: 'Medical Sciences' },
  { id: 'ra40', name: 'Pathology', category: 'Medical Sciences' },

  // Interdisciplinary
  { id: 'ra41', name: 'Bioinformatics', category: 'Interdisciplinary' },
  { id: 'ra42', name: 'Computational Biology', category: 'Interdisciplinary' },
  { id: 'ra43', name: 'Nanotechnology', category: 'Interdisciplinary' },
  { id: 'ra44', name: 'Quantum Computing', category: 'Interdisciplinary' },
  { id: 'ra45', name: 'Robotics', category: 'Interdisciplinary' }
];

// Helper function to get research area by ID
export function getResearchAreaById(id: string): ResearchArea | undefined {
  return mockResearchAreas.find(area => area.id === id);
}

// Helper function to get research areas by category
export function getResearchAreasByCategory(category: string): ResearchArea[] {
  return mockResearchAreas.filter(area => area.category === category);
}

// Helper function to get research areas by IDs
export function getResearchAreasByIds(ids: string[]): ResearchArea[] {
  return mockResearchAreas.filter(area => ids.includes(area.id));
}

// Helper function to get a readable string of research areas from IDs
export function getResearchAreasString(ids: string[]): string {
  const areas = getResearchAreasByIds(ids);
  return areas.map(area => area.name).join(', ');
}
