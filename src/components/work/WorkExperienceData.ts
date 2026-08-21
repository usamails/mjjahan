export interface WorkExperienceItem {
  id: string;
  number: string;
  category: 'FREELANCING' | 'DIGITAL MARKETING' | 'WEB & TECHNOLOGY' | 'AGENCY' | 'TRAVEL & TICKETING' | 'BUSINESS';
  filterKey: 'all' | 'marketing' | 'tech' | 'agency' | 'travel' | 'business';
  period: string;
  role: string;
  company?: string;
  title: string;
  description: string;
  status?: 'ACTIVE' | 'ONGOING' | 'COMPLETED';
  skills: string[];
  websiteUrl?: string;
  ctaText?: string;
  whatIDo?: string[];
  caseStudy: {
    overview: string;
    roleDetails: string;
    challenge: string;
    approach: string;
    execution: string[];
    outcomeSummary: string;
    tools: string[];
  };
}

export const WORK_EXPERIENCES: WorkExperienceItem[] = [
  {
    id: 'exp-freelancing',
    number: '01',
    category: 'FREELANCING',
    filterKey: 'business',
    period: '2020–2023',
    role: 'Freelancer / Digital Marketing Specialist',
    title: 'Independent Freelancing & Digital Client Projects',
    description: 'Started my professional journey through freelancing, working on digital projects and developing practical skills across marketing, websites, social media and online business.',
    skills: ['SEO', 'Digital Marketing', 'Social Media', 'Lead Generation', 'Web Development', 'Client Management'],
    whatIDo: [
      'Executed freelance client contracts across search and social channels',
      'Built and delivered custom WordPress landing pages and business sites',
      'Developed end-to-end client communication and milestone management systems',
      'Conducted keyword research and on-page technical SEO audits'
    ],
    caseStudy: {
      overview: 'Independent freelance practice spanning multiple international clients, establishing digital fundamentals through direct client service.',
      roleDetails: 'Solo Freelancer & Digital Specialist managing client acquisition, execution, and deliverables.',
      challenge: 'Delivering tangible digital visibility and lead conversion for early-stage clients with diverse budgets and requirements.',
      approach: 'Combined technical search optimization, targeted social media engagement, and fast-loading web landing pages.',
      execution: [
        'Audited search rankings and resolved on-page indexing issues',
        'Structured lead capture forms and conversion-oriented landing pages',
        'Managed daily social content and direct outreach messaging'
      ],
      outcomeSummary: 'Built a multi-year foundation of hands-on execution that paved the way for agency founding.',
      tools: ['WordPress', 'Google Search Console', 'Ahrefs/SEMrush Concepts', 'Meta Business Suite', 'Canva', 'HTML/CSS']
    }
  },
  {
    id: 'exp-digital-marketing',
    number: '02',
    category: 'DIGITAL MARKETING',
    filterKey: 'marketing',
    period: '2020–PRESENT',
    role: 'Digital Marketer',
    title: 'Digital Marketing & Growth Strategy Campaigns',
    description: 'Worked across different digital marketing activities including SEO, Google Ads, Facebook/Meta Ads, social media marketing, lead generation and online growth strategies.',
    skills: ['SEO', 'Google Ads', 'Facebook Ads', 'Social Media', 'Lead Generation', 'Growth Strategy'],
    status: 'ONGOING',
    whatIDo: [
      'Search Engine Optimization (Technical, On-Page, Off-Page)',
      'Google Search & Performance Max paid ad architectures',
      'Meta (Facebook & Instagram) targeted campaign setups',
      'Multi-stage lead conversion funnels and tracking'
    ],
    caseStudy: {
      overview: 'Strategic execution of performance advertising and search optimization campaigns across varied commercial niches.',
      roleDetails: 'Lead Performance Marketer & Campaign Architect.',
      challenge: 'Navigating rising ad costs and algorithmic search updates while maintaining cost-effective customer acquisition.',
      approach: 'Built high-intent keyword structures paired with tailored creative messaging and conversion landing pages.',
      execution: [
        'Built negative keyword lists and high-relevance ad groups',
        'Configured Google Analytics 4 (GA4) event tracking and Meta Pixel tags',
        'Optimized landing page speed and mobile UX for conversion efficiency'
      ],
      outcomeSummary: 'Continuous execution of scalable, data-guided paid and organic acquisition pipelines.',
      tools: ['Google Ads', 'Meta Ads Manager', 'Google Analytics 4', 'Tag Manager', 'Search Console', 'Keyword Planner']
    }
  },
  {
    id: 'exp-web-development',
    number: '03',
    category: 'WEB & TECHNOLOGY',
    filterKey: 'tech',
    period: '2020–PRESENT',
    role: 'Web Developer / Digital Builder',
    title: 'Modern Web Development & Digital Platforms',
    description: 'Built and managed websites and digital experiences for business, marketing and personal projects using modern web technologies and platforms.',
    skills: ['Web Development', 'WordPress', 'Landing Pages', 'SEO', 'UI/UX', 'Cloudflare', 'GitHub'],
    status: 'ONGOING',
    whatIDo: [
      'Engineered responsive business landing pages with ultra-fast load times',
      'Integrated Cloudflare CDN, SSL security, and DNS management',
      'Developed custom CMS configurations and conversion forms',
      'Applied mobile-first typography and semantic accessibility standards'
    ],
    caseStudy: {
      overview: 'Full-lifecycle web builds designed from the ground up to convert visitors into qualified inquiries.',
      roleDetails: 'Full Web Developer & Technical Builder.',
      challenge: 'Ensuring digital properties achieve optimal speed scores, intuitive mobile navigation, and frictionless inquiry pathways.',
      approach: 'Applied lightweight component architectures, asset compression, and clean responsive CSS styling.',
      execution: [
        'Designed dark/light responsive interface structures',
        'Connected secure form backends and email auto-responders',
        'Configured DNS records, custom domains, and SSL certificates'
      ],
      outcomeSummary: 'Robust, modern web presences that serve as official digital front doors for businesses.',
      tools: ['React/TypeScript', 'Tailwind CSS', 'WordPress', 'Cloudflare', 'Git & GitHub', 'Vite', 'HTML5/CSS3']
    }
  },
  {
    id: 'exp-flowdigita',
    number: '04',
    category: 'AGENCY',
    filterKey: 'agency',
    period: '2024–PRESENT',
    role: 'Founder & Owner',
    company: 'Flowdigita LLC',
    websiteUrl: 'https://flowdigita.com/',
    ctaText: 'Visit Flowdigita →',
    title: 'Flowdigita LLC Agency Platform',
    description: 'Founded Flowdigita LLC as a digital-focused business working around marketing, web and online growth services for global clients.',
    skills: ['Founder', 'Digital Marketing', 'SEO', 'Advertising', 'Web Development', 'Business Growth'],
    status: 'ACTIVE',
    whatIDo: [
      'Lead overall digital strategy and international client solutions',
      'Work hands-on with multi-channel digital marketing projects',
      'Oversee web development, landing page builds, and infrastructure',
      'Develop business growth frameworks for online brand scaling'
    ],
    caseStudy: {
      overview: 'Founded Flowdigita LLC to serve as a comprehensive agency engine delivering measurable digital marketing, paid ads, and web development.',
      roleDetails: 'Founder & Lead Strategist overseeing business operations, client project lifecycles, and technical deliverables.',
      challenge: 'Creating a unified service offering that bridges technical web execution with performance marketing.',
      approach: 'Integrated SEO audit workflows, structured ad campaign roadmaps, and custom web production pipelines.',
      execution: [
        'Established official digital agency presence at Flowdigita.com',
        'Built full-stack campaign packages tailored for businesses',
        'Managed end-to-end service delivery and project milestones'
      ],
      outcomeSummary: 'An operational agency venture actively providing digital services to clients worldwide.',
      tools: ['Flowdigita Agency Stack', 'Google Ads', 'Meta Ads', 'Search Console', 'Web Infrastructure', 'Project Management']
    }
  },
  {
    id: 'exp-dreamsfly',
    number: '05',
    category: 'BUSINESS',
    filterKey: 'travel',
    period: '2026–PRESENT',
    role: 'Founder & Owner',
    company: 'Dreams Fly International',
    websiteUrl: 'https://dreamsfly.net/',
    ctaText: 'Visit Dreams Fly →',
    title: 'Dreams Fly International Travel & Visa Advisory',
    description: 'Founded Dreams Fly International as a travel-focused venture working around air ticketing, visa consultation and work permit-related services.',
    skills: ['Air Ticketing', 'GDS', 'Visa Consultation', 'Work Permit Assistance', 'Travel Services'],
    status: 'ACTIVE',
    whatIDo: [
      'Global air ticketing reservation workflows across major GDS platforms',
      'Structured visa consultation, eligibility checklists, and document guidance',
      'International work permit and overseas employment documentation assistance',
      'Comprehensive itinerary planning and passenger support'
    ],
    caseStudy: {
      overview: 'Established Dreams Fly International as a dedicated travel logistics and visa consultancy portal.',
      roleDetails: 'Founder & Managing Director leading airline reservation systems, visa advisory operations, and platform management.',
      challenge: 'Managing complex global routing, strict visa regulatory compliance, and multi-GDS availability.',
      approach: 'Combined certified GDS workflow expertise (Amadeus, Sabre, Galileo) with methodical visa document reviews.',
      execution: [
        'Launched the official travel portal at DreamsFly.net',
        'Standardized passenger PNR issuance, reissuance, and routing procedures',
        'Created step-by-step visa document verification workflows'
      ],
      outcomeSummary: 'A structured, professional travel and visa advisory venture serving global travelers.',
      tools: ['Amadeus GDS', 'Galileo / Travelport', 'Sabre GDS', 'IATA Routing Knowledge', 'Dreams Fly Travel Portal']
    }
  }
];

export const GDS_PLATFORMS = [
  {
    name: 'Amadeus',
    shortCode: '1A',
    role: 'Air Reservation & Ticketing Workflow',
    description: 'Command-line and graphic terminal workflows for PNR creation, seat availability checks, fare calculation, ticket issuance, reissuance, and itinerary generation.',
    features: ['PNR Creation & Management', 'Fare Quote & Pricing Rules', 'Ticket Issuance (TST)', 'Schedule & Availability Display']
  },
  {
    name: 'Galileo / Travelport',
    shortCode: '1G',
    role: 'GDS-Based Booking & Fare Systems',
    description: 'Extensive reservation workflows, flight segment booking, passive segments, SSR/OSI message insertions, automated reissue, and queue management.',
    features: ['Segment Booking & Status Codes', 'Filed Fares (FQ)', 'Ticket Reissue & Exchange', 'Queues & Message Handling']
  },
  {
    name: 'Sabre',
    shortCode: '1S',
    role: 'Air Reservation & Itinerary Systems',
    description: 'End-to-end flight booking, passenger profile management, global fare shop, ticket revalidation, and electronic ticket record (ETR) audits.',
    features: ['Format-driven Air Booking', 'Bargain Finder Max Shopping', 'Electronic Ticket Records (ETR)', 'Passenger Profile Records']
  }
];

export const VISA_CONSULTATION_SERVICES = [
  {
    id: 'visa-consult',
    title: 'Visa Consultation',
    description: 'Assessing client travel purposes, destination requirements, and establishing appropriate visa categories (Tourist, Business, Student, Work).',
    icon: 'FileText'
  },
  {
    id: 'doc-guidance',
    title: 'Document Guidance',
    description: 'Providing comprehensive checklists for financial proofs, employment verifications, invitation letters, and embassy-compliant document attestations.',
    icon: 'CheckSquare'
  },
  {
    id: 'app-assistance',
    title: 'Application Assistance',
    description: 'Guiding clients through electronic and physical embassy application forms, appointment scheduling, and fee payment workflows.',
    icon: 'Send'
  },
  {
    id: 'travel-planning',
    title: 'Travel Planning Support',
    description: 'Coordinating compliant flight reservations, hotel bookings, travel insurance, and day-by-day travel itineraries.',
    icon: 'Compass'
  }
];

export const SERVICE_TO_BUSINESS_MILESTONES = [
  {
    year: '2020',
    phase: 'LEARN',
    title: 'Digital Foundations',
    description: 'Deep-dive into SEO, search algorithms, digital marketing, and web development fundamentals.',
    accent: 'cyan'
  },
  {
    year: '2021',
    phase: 'FREELANCE',
    title: 'Independent Execution',
    description: 'Working independently with initial clients across social media, landing pages, and search optimization.',
    accent: 'sky'
  },
  {
    year: '2022–2023',
    phase: 'SERVE CLIENTS',
    title: 'Expanded Capabilities',
    description: 'Managing complex client campaigns, GDS air ticketing workflows, and paid acquisition funnels.',
    accent: 'blue'
  },
  {
    year: '2023–2024',
    phase: 'BUILD SYSTEMS',
    title: 'Standardizing Operations',
    description: 'Creating scalable service frameworks, agency delivery playbooks, and business infrastructure.',
    accent: 'indigo'
  },
  {
    year: '2024',
    phase: 'START AGENCY',
    title: 'Flowdigita LLC',
    description: 'Founded official digital marketing & web agency platform to deliver international client solutions.',
    accent: 'cyan',
    activeVenture: true
  },
  {
    year: '2026',
    phase: 'BUILD NEW VENTURES',
    title: 'Dreams Fly International',
    description: 'Founded specialized travel, GDS ticketing, visa consultation, and work permit advisory venture.',
    accent: 'emerald',
    activeVenture: true
  }
];

export const WHAT_I_ACTUALLY_WORK_ON = [
  {
    id: 'work-seo',
    title: 'SEO',
    subtitle: 'Search visibility & organic growth',
    whatIDoText: 'I perform technical search audits, high-intent keyword mapping, on-page optimization, site hierarchy improvements, and backlink authority planning.'
  },
  {
    id: 'work-ads',
    title: 'Paid Advertising',
    subtitle: 'Google & Meta advertising',
    whatIDoText: 'I structure high-converting Google Search & Meta ad campaigns, set up granular custom audiences, configure conversion tracking, and optimize ROI.'
  },
  {
    id: 'work-websites',
    title: 'Websites',
    subtitle: 'Business websites & landing pages',
    whatIDoText: 'I develop responsive, ultra-fast landing pages and business sites designed for immediate credibility and seamless inquiry generation.'
  },
  {
    id: 'work-leads',
    title: 'Lead Generation',
    subtitle: 'Finding & converting potential customers',
    whatIDoText: 'I build multi-stage acquisition funnels that capture high-intent inquiries through clear value propositions and low-friction forms.'
  },
  {
    id: 'work-social',
    title: 'Social Media',
    subtitle: 'Digital presence & audience growth',
    whatIDoText: 'I strategize brand messaging, content distribution schedules, and community engagement tactics that elevate professional positioning.'
  },
  {
    id: 'work-growth',
    title: 'Business Growth',
    subtitle: 'Digital strategies & systems',
    whatIDoText: 'I formulate operational growth models that transition fragmented digital activities into structured, repeatable business processes.'
  },
  {
    id: 'work-gds',
    title: 'GDS',
    subtitle: 'Air reservation & ticketing systems',
    whatIDoText: 'I handle multi-GDS airline reservation workflows across Amadeus, Galileo, and Sabre, from PNR creation to fare pricing and ticketing.'
  },
  {
    id: 'work-visa',
    title: 'Visa',
    subtitle: 'Consultation & application assistance',
    whatIDoText: 'I guide travelers and professionals through visa documentation checklists, eligibility requirements, and embassy application processes.'
  }
];
