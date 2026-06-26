export const NAV_LINKS = [
  { label: 'Journey', href: '#journey' },
  { label: 'Focus', href: '#focus' },
  { label: 'Work', href: '#work' },
  { label: 'Activity', href: '#activity' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
] as const

export const BIO = {
  name: 'Gundeti Siddarth',
  shortName: 'GS',
  title: 'Gundeti Siddarth — Research Engineer & AI Developer',
  description:
    'Building intelligent systems that bridge research and real-world applications. Research Intern at CoGSI Lab, IIIT Hyderabad.',
  education: {
    degree: 'B.Tech CSE',
    institute: 'IIIT Sri City',
    grade: 'CGPA 8.74',
  },
  tagline: 'Building intelligent systems that bridge research and real-world applications.',
} as const

export const HERO = {
  availability: 'Available for research & internships',
  roles: ['Research Engineer', 'AI Developer', 'Software Engineer'],
  fields: [
    { label: 'Role', value: 'Research Intern' },
    { label: 'Lab', value: 'CoGSI Lab' },
    { label: 'Institute', value: 'IIIT Hyderabad' },
  ],
  bgImage: {
    src: '/images/hero-workstation.png',
    alt: 'A developer working at a calm, sunlit workstation with monitors showing code, a software dashboard and a node graph',
  },
} as const

export const JOURNEY = [
  {
    year: '2019',
    title: 'Programming',
    detail: 'First lines of code — falling for logic, structure and systems.',
  },
  {
    year: '2021',
    title: 'Machine Learning',
    detail: 'From algorithms to models that learn from data.',
  },
  {
    year: '2022',
    title: 'Deep Learning',
    detail: 'Neural networks, representation learning and PyTorch.',
  },
  {
    year: '2023',
    title: 'Computer Vision',
    detail: 'Teaching machines to perceive — images, signals and structure.',
  },
  {
    year: '2024',
    title: 'Research',
    detail: 'Self-supervised learning, explainability and rigorous method.',
  },
  {
    year: '2025',
    title: 'IIIT Hyderabad',
    detail: 'Research Intern at CoGSI Lab — clinical & medical AI.',
  },
  {
    year: 'Next',
    title: 'The Future',
    detail: 'Publications, open source and AI that reaches real patients.',
  },
] as const

export const EXPERIENCE = [
  {
    role: 'Research Intern',
    organization: 'CoGSI Lab, IIIT Hyderabad',
    period: '2025 - Present',
    details: 'Clinical & medical AI, self-supervised representation learning, and knowledge distillation.',
  },
] as const

export const FOCUS_AREAS = [
  {
    title: 'Medical AI',
    blurb: 'Clinical-grade models for diagnosis and decision support.',
  },
  {
    title: 'Computer Vision',
    blurb: 'Perception systems across images and physiological signals.',
  },
  {
    title: 'Generative AI',
    blurb: 'Synthesis, augmentation and creative modelling.',
  },
  {
    title: 'LLMs',
    blurb: 'Reasoning, retrieval and applied language systems.',
  },
  {
    title: 'Research',
    blurb: 'Reproducible experiments and publishable method.',
  },
  {
    title: 'Knowledge Distillation',
    blurb: 'Compressing large teachers into deployable students.',
  },
  {
    title: 'Self-Supervised Learning',
    blurb: 'Learning rich representations without labels.',
  },
  {
    title: 'Edge AI',
    blurb: 'Efficient inference on constrained hardware.',
  },
] as const

export type Project = {
  name: string
  tagline: string
  problem: string
  approach: string
  tech: string[]
  result: string
  featured?: boolean
  githubUrl?: string
}

export const PROJECTS: Project[] = [
  {
    name: 'ECGAN++',
    tagline: 'Generative augmentation for cardiac signals',
    problem: 'ECG datasets are scarce, imbalanced and privacy-bound.',
    approach:
      'A GAN architecture that synthesises realistic ECG waveforms to balance rare disease classes.',
    tech: ['PyTorch', 'GANs', 'Signal Processing'],
    result: 'Improved minority-class recall on downstream classifiers.',
    featured: true,
  },
  {
    name: 'ECG Disease Classification',
    tagline: 'Deep learning for cardiac diagnosis',
    problem: 'Reliable, explainable classification of cardiac conditions.',
    approach:
      'Self-supervised pre-training with knowledge distillation for compact, explainable models.',
    tech: ['PyTorch', 'SSL', 'Explainable AI'],
    result: 'Compact student models with clinically interpretable outputs.',
    featured: true,
  },
  {
    name: 'Signature Verification',
    tagline: 'Siamese networks for forgery detection',
    problem: 'Distinguishing genuine signatures from skilled forgeries.',
    approach:
      'A Siamese CNN trained with contrastive loss on signature pairs.',
    tech: ['TensorFlow', 'Siamese Nets', 'OpenCV'],
    result: 'High verification accuracy with few reference samples.',
  },
  {
    name: 'Student Performance Prediction',
    tagline: 'Early-warning analytics for education',
    problem: 'Identifying at-risk students before they fall behind.',
    approach:
      'Feature engineering over academic records with gradient-boosted models.',
    tech: ['Scikit-Learn', 'Pandas', 'Flask'],
    result: 'Actionable risk scores surfaced through a simple dashboard.',
  },
  {
    name: 'Network Security ML',
    tagline: 'Intrusion detection with machine learning',
    problem: 'Detecting malicious traffic in noisy network flows.',
    approach:
      'Supervised classifiers over engineered flow features for anomaly detection.',
    tech: ['Python', 'Scikit-Learn', 'NumPy'],
    result: 'Robust detection across multiple attack categories.',
  },
  {
    name: 'AI README Generator',
    tagline: 'Documentation, written by a model',
    problem: 'Great repos die in obscurity from poor documentation.',
    approach:
      'An LLM pipeline that reads a codebase and drafts structured READMEs.',
    tech: ['LLMs', 'Next.js', 'Node'],
    result: 'One-click, well-structured docs for any repository.',
  },
  {
    name: 'Xploreo',
    tagline: 'A full-stack travel platform',
    problem: 'Planning trips means juggling a dozen disconnected tabs.',
    approach:
      'A unified travel experience with discovery, itineraries and auth.',
    tech: ['Next.js', 'React', 'MongoDB'],
    result: 'A cohesive, responsive product end to end.',
  },
  {
    name: 'ATM Management System',
    tagline: 'Reliable transactional core',
    problem: 'Modelling safe, concurrent banking operations.',
    approach: 'A structured OOP system with persistent transactional storage.',
    tech: ['Java', 'MySQL', 'OOP'],
    result: 'A dependable system handling core banking flows.',
  },
]

export const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: ['Python', 'C++', 'Java'],
  },
  {
    label: 'AI / ML',
    items: ['PyTorch', 'TensorFlow', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-Learn'],
  },
  {
    label: 'Engineering',
    items: ['Docker', 'Git', 'Linux', 'Flask'],
  },
  {
    label: 'Web & Data',
    items: ['Next.js', 'React', 'Tailwind', 'MongoDB', 'MySQL'],
  },
] as const

export const PUBLICATIONS = [
  {
    status: 'In progress',
    title: 'Deep Learning for ECG Disease Classification',
    venue: 'CoGSI Lab · IIIT Hyderabad',
    note: 'Self-supervised representation learning with knowledge distillation for explainable cardiac diagnosis.',
  },
  {
    status: 'Drafting',
    title: 'A Survey of Generative Models for Physiological Signals',
    venue: 'IEEE · Survey',
    note: 'A structured review of GANs and diffusion models for medical signal synthesis.',
  },
  {
    status: 'Coming soon',
    title: 'ECGAN++: Synthetic Augmentation for Imbalanced ECG',
    venue: 'Manuscript in preparation',
    note: 'Balancing rare cardiac classes through realistic waveform synthesis.',
  },
] as const

export const SOCIAL_LINKS = [
  { label: 'Email', value: 'siddarth@example.com', href: 'mailto:siddarth@example.com', platform: 'email' },
  { label: 'GitHub', value: '/gundeti-siddarth', href: '#', platform: 'github' },
  { label: 'LinkedIn', value: '/gundeti-siddarth', href: '#', platform: 'linkedin' },
] as const

export const CONTACT = {
  eyebrow: "Let's talk",
  heading: 'Open to research, internships and meaningful collaborations.',
  intents: ['Research', 'Internships', 'Collaborations'],
} as const

export const FOOTER = {
  credit: 'Designed & built with intent',
} as const

export const CODING_PROFILES = {
  leetcode: {
    username: '@siddarth',
    stats: [
      { label: 'Solved', value: '480+' },
      { label: 'Contest rating', value: '1742' },
      { label: 'Max streak', value: '96d' },
    ],
    difficulty: [
      { label: 'Easy', value: 180, total: 210, tone: 'oklch(0.7 0.13 150)' },
      { label: 'Medium', value: 246, total: 320, tone: 'oklch(0.74 0.13 75)' },
      { label: 'Hard', value: 54, total: 110, tone: 'oklch(0.62 0.18 25)' },
    ],
    badges: ['50 Days Badge', '100 Days Badge', 'Annual Streak', 'Knight'],
  },
  github: {
    contributions: '1,240 contributions',
    languages: [
      { name: 'Python', pct: 52, tone: 'oklch(0.62 0.1 52)' },
      { name: 'TypeScript', pct: 24, tone: 'oklch(0.55 0.04 60)' },
      { name: 'C++', pct: 14, tone: 'oklch(0.45 0.02 65)' },
      { name: 'Other', pct: 10, tone: 'oklch(0.8 0.01 70)' },
    ],
    repos: [
      { name: 'ecgan-plus-plus', desc: 'Generative augmentation for ECG signals.', lang: 'Python', stars: 64, forks: 12 },
      { name: 'ecg-disease-classifier', desc: 'SSL + distillation for cardiac diagnosis.', lang: 'Python', stars: 41, forks: 7 },
      { name: 'ai-readme-generator', desc: 'LLM pipeline that writes your docs.', lang: 'TypeScript', stars: 88, forks: 19 },
      { name: 'xploreo', desc: 'Full-stack travel planning platform.', lang: 'TypeScript', stars: 33, forks: 5 },
    ],
  },
} as const

export const CERTIFICATIONS = [] as const
