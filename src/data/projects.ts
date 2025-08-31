export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  company: string;
  external?: string;
  github?: string;
  category: string;
  date: string;
  showInProjects: boolean;
}

export const projects: Project[] = [
  {
    id: 'asus-200th-store',
    title: 'ASUS 200th Store Opening Press Release',
    description: 'ASUS recently celebrated a major milestone with the opening of their 200th store in India. To share this exciting news with a wider audience, a Press Release Note was issued and translated into various languages, including Gujarati. A portion of the translated note was published in two prominent newspapers, Gujarat Mail and Business Gujarat e-newspaper.',
    tech: ['Press Release', 'Achievement', 'Gujarati Translation'],
    company: 'ASUS',
    external: 'https://in.ign.com/tech/180272/news/asus-india-opens-its-200th-store-to-showcase-its-general-purpose-rog-gaming-laptops-and-other-produc',
    category: 'Corporate',
    date: '2024',
    showInProjects: true
  },
  {
    id: 'hdfc-ergo-bike-insurance',
    title: 'HDFC ERGO Comprehensive Bike Insurance',
    description: 'Translated Comprehensive Bike Insurance content for HDFC ERGO\'s Gujarati website. This project involved translating complex insurance terms and conditions into clear, understandable Gujarati language while maintaining the legal accuracy and technical precision required for insurance documentation.',
    tech: ['Marketing', 'Bike Insurance', 'Insurance Translation', 'Gujarati'],
    company: 'HDFC ERGO',
    external: 'https://www.hdfcergo.com/gujaratiml/two-wheeler-insurance/comprehensive-bike-insurance',
    category: 'Insurance',
    date: '2024',
    showInProjects: true
  },
  {
    id: 'hdfc-ergo-car-insurance',
    title: 'HDFC ERGO Car Insurance Documentation',
    description: 'Comprehensive translation of car insurance policies and documentation for HDFC ERGO\'s Gujarati market. Ensured accurate translation of complex insurance terminology while maintaining regulatory compliance.',
    tech: ['Insurance', 'Car Insurance', 'Legal Translation', 'Gujarati'],
    company: 'HDFC ERGO',
    external: 'https://www.hdfcergo.com/gujaratiml/four-wheeler-insurance/comprehensive-car-insurance',
    category: 'Insurance',
    date: '2024',
    showInProjects: true
  },
  {
    id: 'hdfc-ergo-health-insurance',
    title: 'HDFC ERGO Health Insurance Policies',
    description: 'Translation of health insurance policies and related documentation for HDFC ERGO. Focused on making complex medical and insurance terms accessible to Gujarati-speaking customers.',
    tech: ['Health Insurance', 'Medical Translation', 'Policy Translation', 'Gujarati'],
    company: 'HDFC ERGO',
    external: 'https://www.hdfcergo.com/gujaratiml/health-insurance',
    category: 'Insurance',
    date: '2024',
    showInProjects: true
  },
  {
    id: 'hdfc-ergo-life-insurance',
    title: 'HDFC ERGO Life Insurance Documentation',
    description: 'Translation of life insurance policies and terms for HDFC ERGO\'s Gujarati market. Ensured sensitive financial and legal content was accurately translated while maintaining the emotional and cultural context.',
    tech: ['Life Insurance', 'Financial Translation', 'Legal Documentation', 'Gujarati'],
    company: 'HDFC ERGO',
    external: 'https://www.hdfcergo.com/gujaratiml/life-insurance',
    category: 'Insurance',
    date: '2024',
    showInProjects: true
  },
  {
    id: 'hdfc-ergo-travel-insurance',
    title: 'HDFC ERGO Travel Insurance Policies',
    description: 'Translation of travel insurance policies and international coverage documentation. Focused on making travel-related insurance terms clear and accessible to Gujarati-speaking travelers.',
    tech: ['Travel Insurance', 'International Coverage', 'Policy Translation', 'Gujarati'],
    company: 'HDFC ERGO',
    external: 'https://www.hdfcergo.com/gujaratiml/travel-insurance',
    category: 'Insurance',
    date: '2024',
    showInProjects: true
  },
  {
    id: 'si-creva-fair-practices',
    title: 'Si Creva Fair Practices Code',
    description: 'Si Creva\'s Fair Practices Code was translated to provide a better understanding of the guidelines and policies outlined within the document. The aim of translating the document was to help people understand the fair practices and policies followed by Si Creva.',
    tech: ['Terms and Conditions', 'Legal', 'Policy Translation', 'Gujarati'],
    company: 'Si Creva',
    external: 'https://sicrevacapital.com/fair-practices-code-marathi-gujurati/',
    category: 'Legal',
    date: '2024',
    showInProjects: true
  }
];

export const getProjectsByCategory = (category?: string) => {
  if (!category) return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.showInProjects).slice(0, 6);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
}; 