import { Competition } from './models';

// Mock competition data
export const mockCompetitions: Competition[] = [
  {
    id: 'comp1',
    title: 'NIH CRISPR Innovation Challenge',
    category: 'grants',
    subcategory: 'Life Sciences',
    description: 'This NIH-funded challenge seeks novel applications of CRISPR technology for treating genetic disorders. Projects should aim to develop and validate innovative gene editing approaches with potential for clinical translation.',
    deadline: 'May 15, 2025',
    organization: 'National Institutes of Health',
    amount: '$1,500,000',
    region: 'United States',
    eligibility: 'Research institutions, universities, and small businesses',
    researchAreas: ['ra1', 'ra2', 'ra4', 'ra6', 'ra42'], // Molecular Biology, Genetics, Biochemistry, Cell Biology, Computational Biology
    teamSizeMin: 2,
    teamSizeMax: 5,
    applicationLink: 'https://www.nih.gov/research-grants/crispr-challenge',
    teams: ['team1']
  },
  {
    id: 'comp2',
    title: 'Gates Foundation Global Health AI Grant',
    category: 'grants',
    subcategory: 'Health',
    description: 'Funding for research projects using artificial intelligence and machine learning to address global health challenges, particularly in infectious disease and vaccine development.',
    deadline: 'July 10, 2025',
    organization: 'Bill & Melinda Gates Foundation',
    amount: '$1,200,000',
    region: 'Global',
    eligibility: 'Research Institutions, NGOs',
    researchAreas: ['ra14', 'ra15', 'ra17', 'ra37', 'ra38', 'ra39'], // AI, ML, NLP, Epidemiology, Pharmacology, Public Health
    teamSizeMin: 3,
    teamSizeMax: 8,
    applicationLink: 'https://www.gatesfoundation.org/grants',
    teams: ['team2']
  },
  {
    id: 'comp3',
    title: 'DARPA Young Faculty Award',
    category: 'awards',
    subcategory: 'Technology',
    description: 'Provides funding to promising early-career faculty to develop innovative research ideas in science and engineering fields relevant to national security.',
    deadline: 'April 5, 2025',
    organization: 'Defense Advanced Research Projects Agency',
    amount: '$500,000',
    region: 'United States',
    eligibility: 'Early-Career Faculty',
    researchAreas: ['ra14', 'ra18', 'ra19', 'ra22', 'ra43'], // AI, Cybersecurity, Distributed Systems, Electrical Engineering, Nanotechnology
    teamSizeMin: 1,
    teamSizeMax: 3,
    applicationLink: 'https://www.darpa.mil/work-with-us/for-universities/young-faculty-award'
  },
  {
    id: 'comp4',
    title: 'European Research Council Consolidator Grant',
    category: 'funding',
    subcategory: 'Multiple',
    description: 'Funds excellent researchers with 7-12 years experience after PhD to pursue ambitious research projects across disciplines.',
    deadline: 'October 22, 2025',
    organization: 'European Research Council',
    amount: '€2,000,000',
    region: 'Europe',
    eligibility: 'Mid-career researchers with 7-12 years post-PhD experience',
    researchAreas: ['ra1', 'ra8', 'ra14', 'ra25', 'ra29', 'ra33'], // Multiple areas across disciplines
    teamSizeMin: 1,
    teamSizeMax: 10,
    applicationLink: 'https://erc.europa.eu/funding/consolidator-grants'
  },
  {
    id: 'comp5',
    title: 'UN Climate Resilience Research Grant',
    category: 'grants',
    subcategory: 'Environmental Sciences',
    description: 'Funding for innovative research on climate adaptation strategies and technologies to build community resilience against climate change impacts.',
    deadline: 'June 20, 2025',
    organization: 'United Nations Environment Programme',
    amount: '$800,000',
    region: 'Global',
    eligibility: 'Research institutions, universities, and NGOs',
    researchAreas: ['ra33', 'ra34', 'ra35', 'ra36'], // Climate Science, Ecology, Oceanography, Atmospheric Science
    teamSizeMin: 2,
    teamSizeMax: 6,
    applicationLink: 'https://www.unep.org/climate-resilience-grant',
    teams: ['team3']
  },
  {
    id: 'comp6',
    title: 'Brain-Computer Interface Innovation Prize',
    category: 'awards',
    subcategory: 'Neuroscience',
    description: 'Competition for breakthrough innovations in brain-computer interface technology with medical applications.',
    deadline: 'September 30, 2025',
    organization: 'Brain Technology Foundation',
    amount: '$750,000',
    region: 'International',
    eligibility: 'Research teams from academia, industry, or independent labs',
    researchAreas: ['ra5', 'ra14', 'ra16', 'ra20', 'ra22'], // Neuroscience, AI, Computer Vision, Biomedical Engineering, Electrical Engineering
    teamSizeMin: 2,
    teamSizeMax: 5,
    applicationLink: 'https://www.braintechfoundation.org/bci-prize',
    teams: ['team5']
  },
  {
    id: 'comp7',
    title: 'Quantum Computing for Life Sciences Challenge',
    category: 'funding',
    subcategory: 'Interdisciplinary',
    description: 'Funding initiative for projects applying quantum computing techniques to solve complex problems in life sciences and drug discovery.',
    deadline: 'August 15, 2025',
    organization: 'Quantum Research Consortium',
    amount: '$1,000,000',
    region: 'Global',
    eligibility: 'Academic and industry research teams',
    researchAreas: ['ra8', 'ra44', 'ra1', 'ra2', 'ra15', 'ra38'], // Quantum Physics, Quantum Computing, Molecular Biology, Genetics, ML, Pharmacology
    teamSizeMin: 2,
    teamSizeMax: 4,
    applicationLink: 'https://quantumresearch.org/life-sciences-challenge',
    teams: ['team4']
  },
  {
    id: 'comp8',
    title: 'Precision Medicine Research Initiative',
    category: 'grants',
    subcategory: 'Medical Sciences',
    description: 'Research grants for developing personalized medicine approaches for cancer treatment based on genomic information.',
    deadline: 'November 10, 2025',
    organization: 'National Cancer Institute',
    amount: '$1,800,000',
    region: 'United States',
    eligibility: 'Universities, research hospitals, and biotech companies',
    researchAreas: ['ra1', 'ra2', 'ra7', 'ra41', 'ra42'], // Molecular Biology, Genetics, Immunology, Bioinformatics, Computational Biology
    teamSizeMin: 3,
    teamSizeMax: 7,
    applicationLink: 'https://www.cancer.gov/research/precision-medicine-initiative',
    teams: ['team6']
  }
];

// Helper function to get competition by ID
export function getCompetitionById(id: string): Competition | undefined {
  return mockCompetitions.find(comp => comp.id === id);
}

// Helper function to get competitions by category
export function getCompetitionsByCategory(category: string): Competition[] {
  return mockCompetitions.filter(comp => comp.category === category);
}

// Helper function to get competitions by research area
export function getCompetitionsByResearchArea(researchAreaId: string): Competition[] {
  return mockCompetitions.filter(comp => comp.researchAreas.includes(researchAreaId));
}

// Helper function to get competitions by region
export function getCompetitionsByRegion(region: string): Competition[] {
  return mockCompetitions.filter(comp => comp.region === region);
}

// Helper function to get upcoming competitions (filter by deadline)
export function getUpcomingCompetitions(): Competition[] {
  const now = new Date();
  return mockCompetitions.filter(comp => {
    const deadline = new Date(comp.deadline);
    return deadline > now;
  });
}

// Helper function to search competitions by title or description
export function searchCompetitions(query: string): Competition[] {
  const lowerQuery = query.toLowerCase();
  return mockCompetitions.filter(comp =>
    comp.title.toLowerCase().includes(lowerQuery) ||
    comp.description.toLowerCase().includes(lowerQuery) ||
    comp.organization.toLowerCase().includes(lowerQuery)
  );
}
