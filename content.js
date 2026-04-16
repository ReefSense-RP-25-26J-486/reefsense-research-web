export const siteConfig = {
  title: 'ReefSense',
  tagline: 'AI-Driven Coral Reef Monitoring & Restoration Decision Support',
  description:
    'An intelligent system combining computer vision, GIS analysis, and deep learning to monitor coral reef health and guide restoration efforts.',
  projectId: 'RP-25-26J-486',
  institution: 'SLIIT — Faculty of Computing',
  // partner: 'Coral Wall Diving & Research Centre, Port City Colombo',
  github: 'https://github.com/your-repo',
  contactEmail: 'reefsense@sliit.lk',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'System', href: '#system' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Milestones', href: '#milestones' },
  { label: 'Resources', href: '#resources' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  sectionLabel: '// 01 — ABOUT THE RESEARCH',
  researchProblem: `Coral reefs cover less than 1% of the ocean floor yet sustain over 25% of all marine species. Today, they are under existential threat. Rising sea surface temperatures trigger mass bleaching events — the 2016 and 2017 events alone killed half of the Great Barrier Reef's shallow-water corals. Ocean acidification weakens coral skeletons, unregulated coastal development smothers reef habitats with sediment, and overfishing strips the fish populations that keep algae in check. Sri Lanka's reefs, spanning the Gulf of Mannar, the Palk Bay, and the coastal waters around Port City Colombo, face all of these pressures simultaneously.

Active coral restoration programmes do exist across Sri Lanka. Nursery-based coral fragmentation, substrate deployment, and transplantation efforts are underway at several sites. But the vast majority of these initiatives remain heavily labour-intensive and time-consuming — site selection depends on diver expertise rather than spatial analysis, growth monitoring requires repeated physical surveys, and there is no systematic early-warning capability for thermal stress that would allow conservationists to act before a bleaching event takes hold. The result is reactive conservation: responding to damage after it occurs, rather than preventing it.`,
  proposedSolution: `ReefSense makes the restoration pipeline data-driven. By integrating AI-powered underwater image analysis, GIS-based multi-criteria site selection, and satellite-derived thermal forecasting into a single decision support platform, ReefSense gives conservation practitioners the spatial intelligence and predictive tools to make better decisions — faster. The goal is not to replace field teams, but to equip them with the data they need to prioritise effort, allocate resources efficiently, and intervene at the right place before conditions deteriorate.`,
  researchGap: [
    {
      title: 'Manual Monitoring Limitations',
      description:
        'Existing monitoring relies on diver surveys — infrequent, expensive, and geographically constrained.',
    },
    {
      title: 'No Integrated Decision Tool',
      description:
        'No existing system integrates species classification, growth tracking, bleaching detection, and nursery site selection into a single platform.',
    },
    {
      title: 'Lack of Predictive Capability',
      description:
        'Current tools are reactive. There is no proactive thermal stress forecasting tailored to local reef conditions.',
    },
  ],
  objectives: [
    'Identify the most ideal locations for coral structure placement to optimize restoration zone area.',
    'Automate the identification of coral species and monitor & quantify their growth.',
    'Automate Detection and Quantification of Coral Bleaching and provide severe classification.',
    'Calculate & predict temperatures for different depths of water according to surface temperature.',
  ],
  // Paste your YouTube embed ID here once the video is uploaded (e.g. 'dQw4w9WgXcQ')
  youtubeId: 'UkkfAzswGI8',
}

export const systemOverview = {
  sectionLabel: '// 02 — SYSTEM ARCHITECTURE',
  description:
    'ReefSense is structured around four interconnected AI and GIS components, each addressing a distinct challenge in coral reef conservation.',
  imagePath: '/images/system-overview.png',
  imageAlt: 'ReefSense system architecture diagram',
  components: [
    {
      label: 'GIS-Based Spatial Planning for Nursery Placement',
      index: '01',
      description:
        'AHP multi-criteria spatial decision model scoring candidate nursery sites across 5 weighted criteria using QGIS and PostGIS.',
    },
    {
      label: 'Coral Species Identification & Growth Monitoring',
      index: '02',
      description:
        'EfficientNet-B0 classifier identifies coral species; colony masks track area change over time as a growth proxy.',
    },
    {
      label: 'Bleaching Detection and Quantification',
      index: '03',
      description:
        'Color-space analysis pipeline detects bleached coral regions and computes a per-colony bleaching index.',
    },
    {
      label: 'Thermal Forecasting',
      index: '04',
      description:
        'CNN-LSTM hybrid model forecasts sea surface temperature anomalies and triggers early-warning bleaching alerts.',
    },
  ],
}

export const methodologySection = {
  sectionLabel: '// 03 — METHODOLOGY',
}

const di = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`

export const technologies = [
  { name: 'Python',         icon: di('python') },
  { name: 'TensorFlow',     icon: di('tensorflow') },
  { name: 'Keras',          icon: di('keras') },
  { name: 'OpenCV',         icon: di('opencv') },
  { name: 'scikit-learn',   icon: di('scikitlearn') },
  { name: 'NumPy',          icon: di('numpy') },
  { name: 'Pandas',         icon: di('pandas') },
  { name: 'QGIS',           icon: 'https://cdn.simpleicons.org/qgis/589632' },
  { name: 'PostGIS',        icon: di('postgresql') },
  { name: 'Google Colab',   icon: 'https://cdn.simpleicons.org/googlecolab/F9AB00' },
  { name: 'Jupyter',        icon: di('jupyter') },
  { name: 'React Native',   icon: di('react') },
]

export const methodology = [
  {
    id: 'gis',
    title: 'GIS-Based Spatial Planning for Nursery Placement',
    contributor: 'Senith Udara | IT22104830',
    imagePath: '/images/methodology-gis.png',
    imageAlt: 'GIS heatmap of candidate nursery sites',
    description: `A spatial decision model built in QGIS and PostGIS evaluates candidate coral nursery locations across Port City Colombo. The Analytic Hierarchy Process (AHP) weights five criteria — water depth, current velocity, substrate type, proximity to existing reef, and human disturbance — to generate a ranked suitability score for each candidate site, identifying optimal zones for coral structure deployment.`,
    tools: ['QGIS', 'PostGIS', 'Python', 'AHP'],
  },
  {
    id: 'species',
    title: 'Coral Species Identification & Growth Monitoring',
    contributor: 'Dinithi Wickramaarachchi | IT22227904',
    imagePath: '/images/methodology-yolo.png',
    imageAlt: 'Species classification and growth monitoring pipeline',
    description: `EfficientNet-B0, pre-trained on ImageNet and fine-tuned on a labeled coral species dataset, classifies coral species from underwater imagery. Segmentation masks are then applied to quantify colony area change across time-series photographs, providing a measurable growth rate proxy for restoration monitoring.`,
    tools: ['EfficientNet-B0', 'TensorFlow', 'Keras', 'OpenCV'],
  },
  {
    id: 'bleaching',
    title: 'Bleaching Detection and Quantification',
    contributor: 'Sahan Kavishka | IT22233530',
    imagePath: '/images/methodology-bleaching.png',
    imageAlt: 'Bleaching detection output heatmap',
    description: `A color-space analysis pipeline identifies bleached coral regions based on chromatic deviation from healthy coral baselines. The system flags bleached areas within colony masks, computes a per-colony bleaching index, and classifies bleaching severity to support prioritised conservation response.`,
    tools: ['Python', 'OpenCV', 'scikit-learn'],
  },
  {
    id: 'forecasting',
    title: 'Thermal Forecasting',
    contributor: 'Gimhani Navodya | IT22208712',
    imagePath: '/images/methodology-forecast.png',
    imageAlt: 'CNN-LSTM thermal forecast chart',
    description: `A CNN-LSTM hybrid model processes historical satellite-derived sea surface temperature (SST) time series data to forecast thermal anomalies at the study site. Temperature predictions for varying water depths are calculated from surface readings, and anomaly thresholds trigger proactive early-warning alerts for potential bleaching events.`,
    tools: ['CNN-LSTM', 'TensorFlow', 'NASA EOSDIS', 'Python'],
  },
]

export const milestonesSection = {
  sectionLabel: '// 04 — MILESTONES',
}

export const milestones = [
  {
    date: 'March 2025',
    title: 'Project Proposal',
    description:
      'Research proposal submitted to SLIIT Faculty of Computing. Scope defined, partner agreement with Coral Wall Diving & Research Centre signed, and initial dataset collection commenced.',
    status: 'completed',
    marks: '6%',
  },
  {
    date: 'June 2025',
    title: 'Progress Presentation I',
    description:
      'First progress presentation covering literature survey, research gap analysis, dataset preparation, and initial model development results across all four components.',
    status: 'completed',
    marks: '6%',
  },
  {
    date: 'September 2025',
    title: 'Progress Presentation II',
    description:
      'Second progress presentation demonstrating integrated model performance, system evaluation metrics, and the decision support platform prototype.',
    status: 'active',
    marks: '6%',
  },
  {
    date: 'November 2025',
    title: 'Final Assessment',
    description:
      'Final project report submission encompassing all four research components, complete system evaluation, and written research paper.',
    status: 'upcoming',
    marks: '60%',
  },
  {
    date: 'November 2025',
    title: 'Viva',
    description:
      'Oral examination and demonstration of the ReefSense system to the evaluation panel and industry partner stakeholders.',
    status: 'upcoming',
    marks: '12%',
  },
]

export const resourcesSection = {
  sectionLabel: '// 05 — RESOURCES',
}

export const documents = [
  {
    label: 'Topic Assessment',
    submittedDate: '2024/02/25',
    status: 'submitted',
    downloads: [
      { scope: 'Group', url: '#' },
    ],
  },
  {
    label: 'Project Charter',
    submittedDate: '2024/02/25',
    status: 'submitted',
    downloads: [
      { scope: 'Group', url: '#' },
    ],
  },
  {
    label: 'Project Proposal',
    submittedDate: '2024/03/22',
    status: 'submitted',
    downloads: [
      { scope: 'Individual', url: '#' },
    ],
  },
  {
    label: 'Status Documents I',
    submittedDate: '2024/07/05',
    status: 'submitted',
    downloads: [
      { scope: 'Individual', url: '#' },
    ],
  },
  {
    label: 'Status Documents II',
    submittedDate: null,
    status: 'pending',   // link will be updated soon
    downloads: [
      { scope: 'Individual', url: '#' },
    ],
  },
  {
    label: 'Research Paper',
    submittedDate: null,
    status: 'pending',   // link will be updated soon
    downloads: [
      { scope: 'Group', url: '#' },
    ],
  },
  {
    label: 'Final Report',
    submittedDate: '2025/10/13',
    status: 'pending',
    downloads: [
      { scope: 'Group', url: '#' },
      { scope: 'Individual', url: '#' },
    ],
  },
  {
    label: 'Poster',
    submittedDate: null,
    status: 'pending',
    downloads: [
      { scope: 'Group', url: '#' },
    ],
  },
]

export const presentations = [
  {
    label: 'Proposal Presentation',
    submittedDate: null,
    status: 'pending',
    downloads: [
      { scope: 'Group', url: '#' },
    ],
  },
  {
    label: 'Progress Presentation I',
    submittedDate: null,
    status: 'pending',
    downloads: [
      { scope: 'Group', url: '#' },
    ],
  },
  {
    label: 'Progress Presentation II',
    submittedDate: null,
    status: 'pending',
    downloads: [
      { scope: 'Group', url: '#' },
    ],
  },
  {
    label: 'Final Presentation',
    submittedDate: null,
    status: 'pending',
    downloads: [
      { scope: 'Group', url: '#' },
    ],
  },
]

export const contactSection = {
  sectionLabel: '// 07 — CONTACT US',
  email: 'reefsense486@gmail.com',

  formEndpoint: 'https://formspree.io/f/xjgjyvoj',
  contactNo: '+94 76 690 2686',
  institution: 'SLIIT — Faculty of Computing',
  address: 'New Kandy Road, Malabe, Sri Lanka',
  members: [
    { name: 'Senith Udara', email: 'senithudara0000@gmail.com' },
    { name: 'Dinithi Wickramaarachchi', email: 'dinithiwr@gmail.com' },
    { name: 'Sahan Kavishka', email: 'sahanwsk@gmail.com' },
    { name: 'Gimhani Navodya', email: 'gimhanibrahmanage@gmail.com' },
  ],
}

export const teamSection = {
  sectionLabel: '// 06 — THE TEAM',
}

export const team = [
  // ── Supervisors ──────────────────────────────
  {
    name: 'Ms. Thilini Jayalath',
    supervisorTitle: 'Supervisor',
    position: 'Senior Lecturer',
    organization: 'SLIIT, Faculty of Computing',
    orgLogo: '/images/logos/sliit.png',
    photo: '/images/members/Thilini Jayalath.png',
    linkedin: 'https://www.linkedin.com/in/thilini-jayalath-2815b4b0/',
    isSupervisor: true,
  },
  {
    name: 'Ms. Hansi De Silva',
    supervisorTitle: 'Co-Supervisor',
    position: 'Lecturer',
    organization: 'SLIIT, Faculty of Computing',
    orgLogo: '/images/logos/sliit.png',
    photo: '/images/members/Hansi De Silva.png',
    linkedin: 'https://www.linkedin.com/in/hansi-de-silva-03629b79/',
    isSupervisor: true,
  },
  {
    name: 'Mr. Samitha Vidhanaarachchi',
    supervisorTitle: 'External Supervisor',
    position: 'PhD Candidate',
    organization: 'Murdoch University, Australia',
    orgLogo: '/images/logos/murdoch.png',
    photo: '/images/members/Samitha.png',
    linkedin: 'https://www.linkedin.com/in/samitha-vidhana-arachchi/',
    isSupervisor: true,
  },
  {
    name: 'Admiral Piyal De Silva',
    supervisorTitle: 'External Supervisor',
    position: 'Commander (Retd)',
    organization: 'Sri Lanka Navy',
    orgLogo: '/images/logos/navy.png',
    photo: '/images/members/Piyal de Silva.png',
    linkedin: 'https://en.wikipedia.org/wiki/Piyal_De_Silva',
    isSupervisor: true,
  },

  // ── Research Group Members ────────────────────
  {
    name: 'Senith Udara',
    studentId: 'IT22104830',
    role: 'GIS-Based Spatial Decision Modeling',
    photo: '/images/members/Senith.png',
    linkedin: 'https://www.linkedin.com/in/senith-udara/',
    email: 'senithudara0000@gmail.com',
    isSupervisor: false,
  },
  {
    name: 'Dinithi Wickramaarachchi',
    studentId: 'IT22227904',
    role: 'Coral Species Classification & Growth Quantification',
    photo: '/images/members/Dinithi.png',
    linkedin: 'https://www.linkedin.com/in/dinithi-wickramaarachchi/',
    email: 'dinithiwr@gmail.com',
    isSupervisor: false,
  },
  {
    name: 'Sahan Kavishka',
    studentId: 'IT22233530',
    role: 'Coral Bleaching Detection',
    photo: '/images/members/Sahan.png',
    linkedin: 'https://www.linkedin.com/in/sahan-kavishka-62652a288/',
    email: 'sahanwsk@gmail.com',
    isSupervisor: false,
  },
  {
    name: 'Gimhani Navodya',
    studentId: 'IT22208712',
    role: 'Thermal Stress Forecasting',
    photo: '/images/members/Gimhani.png',
    linkedin: 'https://www.linkedin.com/in/gimhaninavodya/',
    email: 'gimhanibrahmanage@gmail.com',
    isSupervisor: false,
  },
]
