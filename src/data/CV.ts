export interface TimelineEntry {
  title: string;        // degree or job title
  organisation: string;
  location: string;
  period: string;       // shown as-is, e.g. "Aug 2026 – Present"
  details?: string[];   // optional bullet points; the "?" means "may be left out"
}

export const education: TimelineEntry[] = [
  {
    title: 'PhD',
    organisation: 'Nanyang Technological University',
    location: 'Singapore',
    period: 'Aug 2026 – Present',
    details: [
      'School of Electrical and Electronic Engineering (EEE).',
      'Supervisor: Prof. Daniel Bennett.',
      'PhD Topic: First-Principles Investigation and Design of 2D Magnetic Materials and Heterostructures with Strong Magneto-electric Coupling.'
    ],
  },
  {
    title: 'MSc in Physics',
    organisation: 'The Technical University of Kenya',
    location: 'Nairobi, Kenya',
    period: 'Jan 2022 – Jan 2025',
    details: ['Computational Materials Science.'],
  },
  {
    title: 'B.Tech in Technical and Applied Physics',
    organisation: 'The Technical University of Kenya',
    location: 'Nairobi, Kenya',
    period: 'Sep 2015 – Nov 2020',
    details: ['Second Class Honours (Upper Division)'],
  },
];

export const experience: TimelineEntry[] = [
  {
    title: 'Research Assistant',
    organisation: 'The Technical University of Kenya',
    location: 'Nairobi, Kenya',
    period: 'Jul 2025 – Jul 2026',
    /* details: [
       'Performed DFT simulations on NiCo₂O₄ and NiFe-LDH catalysts to investigate surface structure, stability and reactivity under alkaline oxygen evolution reaction (OER) conditions.',
       'Modelled low-index catalyst surfaces, calculated surface and adsorption energies for OER intermediates, and mapped preferred adsorption sites.',
       'Prepared manuscripts and conference presentations, and created data repositories for project dissemination.',
       'Mentored and supervised undergraduate projects in computational condensed matter physics.',
     ], */
  },
  {
    title: 'Intern',
    organisation: 'Kenya Education Network Trust (KENET)',
    location: 'Nairobi, Kenya',
    period: 'Aug 2022 – Dec 2022',
    /*details: [
      'Tested KENET cloud computing services.',
      'Computed materials properties using Quantum ESPRESSO and VASP.',
      'Developed use cases for the KENET computing services.',
    ], */
  },
  
];