export const siteConfig = {
  title: 'ReefSense',
  tagline: 'AI-Driven Coral Reef Monitoring & Restoration Decision Support',
  description:
    'An intelligent system combining computer vision, GIS analysis, and deep learning to monitor coral reef health and guide restoration efforts.',
  projectId: 'RP-25-26J-486',
  institution: 'SLIIT — Faculty of Computing',
  partner: 'Coral Wall Diving & Research Centre, Port City Colombo',
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
    'Automate coral species identification and growth quantification using computer vision.',
    'Detect coral bleaching events in real time from underwater imagery.',
    'Forecast thermal stress using satellite-derived sea surface temperature data.',
    'Identify optimal coral nursery placement sites using GIS and multi-criteria decision analysis.',
    'Provide an integrated decision support interface for conservation practitioners.',
  ],
}

export const systemOverview = {
  sectionLabel: '// 02 — SYSTEM ARCHITECTURE',
  description:
    'ReefSense is structured around five interconnected AI components, each addressing a distinct challenge in coral reef conservation.',
  imagePath: '/images/system-overview.png',
  imageAlt: 'ReefSense system architecture diagram',
  components: [
    {
      label: 'Coral Instance Segmentation',
      index: '01',
      description:
        'YOLO11-based detection and segmentation of individual coral instances from underwater imagery.',
    },
    {
      label: 'Species Classification',
      index: '02',
      description:
        'EfficientNet-B0 classifier identifying coral species from segmented image crops.',
    },
    {
      label: 'Bleaching Detection',
      index: '03',
      description:
        'Color and texture analysis pipeline for identifying bleached coral regions.',
    },
    {
      label: 'Thermal Forecasting',
      index: '04',
      description:
        'CNN-LSTM model predicting sea surface temperature anomalies from satellite data.',
    },
    {
      label: 'GIS Nursery Placement',
      index: '05',
      description:
        'AHP multi-criteria decision model scoring 300+ candidate nursery sites across 5 weighted criteria.',
    },
  ],
}

export const methodologySection = {
  sectionLabel: '// 03 — METHODOLOGY',
}

export const methodology = [
  {
    id: 'gis',
    title: 'GIS-Based Nursery Site Suitability Analysis',
    contributor: 'Senith Udara | IT22104830',
    imagePath: '/images/methodology-gis.png',
    imageAlt: 'GIS heatmap of candidate nursery sites',
    description: `A spatial decision model built in QGIS and PostGIS evaluates over 300 candidate coral nursery locations across Port City Colombo. The Analytic Hierarchy Process (AHP) weights five criteria — water depth, current velocity, substrate type, proximity to existing reef, and human disturbance — to generate a ranked suitability score for each candidate site.`,
    tools: ['QGIS', 'PostGIS', 'Python', 'AHP'],
  },
  {
    id: 'segmentation',
    title: 'Coral Species Classification & Growth Quantification',
    contributor: 'Dinithi Wickramaarachchi | IT22227904',
    imagePath: '/images/methodology-yolo.png',
    imageAlt: 'YOLO11 segmentation output on coral imagery',
    description: `YOLO11 is fine-tuned on a coral-specific dataset to detect and segment individual coral colonies from underwater photographs. Segmentation masks are used to quantify colony area change over time, providing a proxy metric for growth rate.`,
    tools: ['YOLO11', 'Python', 'PyTorch', 'OpenCV'],
  },
  {
    id: 'classification',
    title: 'Species Classification',
    contributor: 'Team Member Name',
    imagePath: '/images/methodology-efficientnet.png',
    imageAlt: 'EfficientNet classification results',
    description: `EfficientNet-B0, pre-trained on ImageNet and fine-tuned on a labeled coral species dataset, classifies coral species from segmented image crops. Transfer learning achieves high accuracy with a limited training set.`,
    tools: ['EfficientNet-B0', 'TensorFlow', 'Keras'],
  },
  {
    id: 'bleaching',
    title: 'Coral Bleaching Detection',
    contributor: 'Sahan Kavishka | IT22233530',
    imagePath: '/images/methodology-bleaching.png',
    imageAlt: 'Bleaching detection output heatmap',
    description: `A color-space analysis pipeline identifies bleached coral regions based on chromatic deviation from healthy coral baselines. The detector flags bleached areas within segmented colony masks and computes a bleaching index per colony.`,
    tools: ['Python', 'OpenCV', 'scikit-learn'],
  },
  {
    id: 'forecasting',
    title: 'Thermal Stress Forecasting',
    contributor: 'Gimhani Navodya | IT22208712',
    imagePath: '/images/methodology-forecast.png',
    imageAlt: 'CNN-LSTM thermal forecast chart',
    description: `A CNN-LSTM hybrid model processes historical satellite-derived sea surface temperature (SST) time series data to forecast thermal anomalies at the study site. Predictions trigger early-warning alerts for potential bleaching events.`,
    tools: ['CNN-LSTM', 'TensorFlow', 'NASA EOSDIS'],
  },
]

export const milestonesSection = {
  sectionLabel: '// 04 — MILESTONES',
}

export const milestones = [
  {
    date: 'September 2024',
    title: 'Project Proposal Submission',
    description:
      'Research proposal approved. Project scope, partner agreement with Coral Wall signed, and initial dataset collection begun.',
    status: 'completed',
  },
  {
    date: 'November 2024',
    title: 'Literature Survey & Research Gap Analysis',
    description:
      'Completed comprehensive review of 40+ papers across coral conservation, computer vision, GIS, and thermal forecasting domains.',
    status: 'completed',
  },
  {
    date: 'January 2025',
    title: 'Dataset Collection & Preprocessing',
    description:
      'Underwater imagery collected at Port City Colombo. GIS layers sourced. SST data pulled from NASA EOSDIS. All datasets preprocessed and structured.',
    status: 'completed',
  },
  {
    date: 'March 2025',
    title: 'Model Development — Phase 1',
    description:
      'Initial YOLO11 segmentation model trained. EfficientNet-B0 baseline classifier achieved. AHP weight matrix finalized.',
    status: 'completed',
  },
  {
    date: 'May 2025',
    title: 'Model Integration & System Build',
    description:
      'All five AI components integrated. Backend API development underway. Mobile application prototype built in React Native/Expo.',
    status: 'active',
  },
  {
    date: 'July 2025',
    title: 'Evaluation & Paper Submission',
    description:
      'Full system evaluation against baseline metrics. Paper targeting TENSYMP 2026 to be submitted.',
    status: 'upcoming',
  },
  {
    date: 'September 2025',
    title: 'Final Submission & Demonstration',
    description:
      'Project final report, demonstration, and presentation to panel and partner stakeholders.',
    status: 'upcoming',
  },
]

export const resourcesSection = {
  sectionLabel: '// 05 — RESOURCES',
}

export const resources = [
  {
    type: 'document',
    label: 'Research Proposal',
    description: 'Initial project proposal submitted to SLIIT Faculty of Computing.',
    filePath: '/downloads/reefsense-proposal.pdf',
    fileType: 'PDF',
  },
  {
    type: 'document',
    label: 'Progress Report',
    description: 'Mid-project progress report covering completed phases and results.',
    filePath: '/downloads/reefsense-progress-report.pdf',
    fileType: 'PDF',
  },
  {
    type: 'document',
    label: 'Conference Paper Draft',
    description: 'Working draft of the TENSYMP 2026 submission.',
    filePath: '/downloads/reefsense-paper-draft.pdf',
    fileType: 'PDF',
  },
  {
    type: 'document',
    label: 'Research Presentation',
    description: 'Slide deck covering all five project phases and findings.',
    filePath: '/downloads/reefsense-presentation.pptx',
    fileType: 'PPTX',
  },
  {
    type: 'link',
    label: 'GitHub Repository',
    description: 'Source code for all ReefSense AI components and the mobile application.',
    url: 'https://github.com/your-repo',
    fileType: 'GitHub',
  },
]

export const teamSection = {
  sectionLabel: '// 06 — THE TEAM',
}

export const team = [
  // ── Supervisors ──────────────────────────────
  {
    name: 'Ms. Thilini Jayalath',
    role: 'Supervisor',
    supervisorTitle: 'Supervisor',
    bio: 'Lecturer at SLIIT Faculty of Computing. Primary supervisor for the ReefSense research project.',
    photo: '/images/members/Thilini Jayalath.png',
    linkedin: '#',
    isSupervisor: true,
  },
  {
    name: 'Ms. Hansi De Silva',
    role: 'Co-Supervisor',
    supervisorTitle: 'Co-Supervisor',
    bio: 'Lecturer at SLIIT Faculty of Computing. Co-supervisor providing guidance on system design and research methodology.',
    photo: '/images/members/Hansi De Silva.png',
    linkedin: '#',
    isSupervisor: true,
  },
  {
    name: 'Mr. Samitha Vidhanaarachchi',
    role: 'External Supervisor',
    supervisorTitle: 'External Supervisor',
    bio: 'External supervisor contributing domain expertise in AI and decision support systems.',
    photo: '/images/members/Samitha.png',
    linkedin: '#',
    isSupervisor: true,
  },
  {
    name: 'Admiral Piyal De Silva',
    role: 'External Supervisor',
    supervisorTitle: 'External Supervisor',
    bio: 'External supervisor providing strategic guidance on marine conservation and naval expertise.',
    photo: '/images/members/Piyal de Silva.png',
    linkedin: '#',
    isSupervisor: true,
  },

  // ── Research Group Members ────────────────────
  {
    name: 'Senith Udara',
    studentId: 'IT22104830',
    role: 'GIS-Based Spatial Decision Modeling',
    bio: 'Fourth-year undergraduate at SLIIT. Responsible for GIS-based nursery site selection using AHP multi-criteria analysis. President, MS Club of SLIIT.',
    photo: '/images/members/Senith.png',
    linkedin: 'https://www.linkedin.com/in/senith-udara/',
    isSupervisor: false,
  },
  {
    name: 'Dinithi Wickramaarachchi',
    studentId: 'IT22227904',
    role: 'Coral Species Classification & Growth Quantification',
    bio: 'Fourth-year undergraduate at SLIIT. Responsible for coral species classification and growth quantification using YOLO11 and deep learning techniques.',
    photo: '/images/members/Dinithi.png',
    linkedin: 'https://www.linkedin.com/in/senith-udara/',
    isSupervisor: false,
  },
  {
    name: 'Sahan Kavishka',
    studentId: 'IT22233530',
    role: 'Coral Bleaching Detection',
    bio: 'Fourth-year undergraduate at SLIIT. Responsible for developing the coral bleaching detection pipeline using color-space analysis and computer vision.',
    photo: '/images/members/Sahan.png',
    linkedin: 'https://www.linkedin.com/in/sahan-kavishka-62652a288/',
    isSupervisor: false,
  },
  {
    name: 'Gimhani Navodya',
    studentId: 'IT22208712',
    role: 'Thermal Stress Forecasting',
    bio: 'Fourth-year undergraduate at SLIIT. Responsible for building the CNN-LSTM thermal stress forecasting model using satellite-derived SST data.',
    photo: '/images/members/Gimhani.png',
    linkedin: 'https://www.linkedin.com/in/gimhaninavodya/',
        email: 'https://www.linkedin.com/in/gimhaninavodya/',

    isSupervisor: false,
  },
]
