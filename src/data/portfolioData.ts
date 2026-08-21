import { 
  SocialLinks, 
  EducationItem, 
  JourneyMilestone, 
  VentureItem, 
  SkillNode, 
  ExpertiseItem, 
  ProjectItem,
  GalleryPhoto
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Jahan Ali",
  firstName: "Jahan",
  lastName: "Ali",
  brandLogo: "JAHAN.",
  primaryTitle: "Digital Entrepreneur & Growth Strategist",
  secondaryPositioning: "Freelancer • Digital Marketer • Agency Owner • Travel & Visa Consultant",
  location: "Rohanpur, Gomastapur, Chapai Nawabganj, Bangladesh",
  phone: "+8801650222581",
  phoneFormatted: "+880 1650-222581",
  email: "mjjahanali@gmail.com",
  statusBadge: "Available for Selected Projects",
  heroHeadline: "Building Digital Businesses, Brands & Growth.",
  heroSubheadline: "I'm Jahan Ali — a digital entrepreneur, marketer and agency owner focused on building digital businesses, helping brands grow and turning ideas into practical online ventures.",
  bioShort: "From freelancing to building businesses, my journey has always been about learning, creating and growing.",
  aboutDetailed: "I am Jahan Ali, based in Rohanpur, Gomastapur, Chapai Nawabganj, Bangladesh. My digital career began in 2020 through independent freelancing, which steadily evolved into strategic digital marketing, agency ownership, and multi-disciplinary business ventures. Having founded Flowdigita LLC to serve global clients with comprehensive digital marketing and web solutions, and later establishing Dreams Fly International for specialized air ticketing, visa consultation, and work permit assistance, I continually blend technological execution with practical entrepreneurship. Currently pursuing my MBA alongside active venture management, I focus on scalable growth, continuous learning, and sustainable value creation.",
  philosophyStatement: "“I believe digital growth is not just about visibility — it is about building something valuable, sustainable and useful.”",
  imgurAlbumUrl: "https://imgur.com/a/woV5XUA",
  profileImage: "https://lh3.googleusercontent.com/d/1SrT1UbKeZFWRTKHa_XMasrYH3ebyoHr6"
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "https://www.facebook.com/mjjahan2",
  linkedin: "https://www.linkedin.com/in/mjjahan/",
  instagram: "https://www.instagram.com/mjjahanali/",
  whatsapp: "https://wa.me/8801650222581",
  email: "mailto:mjjahanali@gmail.com",
  phone: "tel:+8801650222581"
};

export const HERO_FLOATING_TAGS = [
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Web Development",
  "AI",
  "Growth",
  "GDS",
  "Travel"
];

export const BRAND_PILLARS = [
  {
    number: "01",
    title: "Freelancer",
    subtitle: "Independent Foundations",
    description: "Started my digital journey in 2020 by working independently with clients and projects, mastering digital fundamentals from the ground up.",
    icon: "UserCheck",
    accent: "from-cyan-500/20 to-blue-500/10"
  },
  {
    number: "02",
    title: "Digital Marketer",
    subtitle: "Organic & Paid Growth",
    description: "Focused on SEO, paid advertising, social media, lead generation and digital growth strategies that drive measurable business visibility.",
    icon: "TrendingUp",
    accent: "from-blue-500/20 to-indigo-500/10"
  },
  {
    number: "03",
    title: "Entrepreneur",
    subtitle: "Product & Market Fit",
    description: "Building and experimenting with digital businesses, brands and online ventures that address real market demands across industries.",
    icon: "Compass",
    accent: "from-indigo-500/20 to-violet-500/10"
  },
  {
    number: "04",
    title: "Agency Owner",
    subtitle: "Flowdigita LLC & Scale",
    description: "Founder of Flowdigita LLC, leading full-stack digital marketing and online business services with structured agency delivery.",
    icon: "Briefcase",
    accent: "from-cyan-500/20 to-emerald-500/10"
  }
];

export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    id: "journey-2020",
    year: "2020",
    title: "Started Freelancing",
    subtitle: "Independent Digital Entry",
    description: "Started working independently in the digital space and developed core skills in digital marketing, web development and online business.",
    tag: "Genesis",
    highlight: false
  },
  {
    id: "journey-2021-2023",
    year: "2021–2023",
    title: "Freelancing & Digital Projects",
    subtitle: "Skill Deepening & Multi-Channel Campaigns",
    description: "Worked on diverse client projects and developed deep expertise in SEO, paid advertising (Google & Meta), social media marketing, lead generation systems, and modern web development.",
    tag: "Expansion",
    highlight: false
  },
  {
    id: "journey-2024",
    year: "2024",
    title: "Founded Flowdigita LLC",
    subtitle: "Digital Marketing & Services Agency",
    description: "Established Flowdigita LLC as Founder & Owner, scaling client delivery in digital marketing, performance advertising, SEO, and web solutions.",
    role: "Founder / Owner",
    websiteUrl: "https://flowdigita.com/",
    tag: "Agency Venture",
    highlight: true
  },
  {
    id: "journey-2026",
    year: "2026",
    title: "Founded Dreams Fly International",
    subtitle: "Travel, Visa & GDS Ticketing Venture",
    description: "Launched Dreams Fly International as Founder & Owner, a travel-focused venture providing professional services in air ticketing (GDS), visa consultation, and work permit assistance.",
    role: "Founder / Owner",
    websiteUrl: "https://dreamsfly.net/",
    tag: "Global Travel Venture",
    highlight: true
  }
];

export const DIGITAL_EXPERTISE: ExpertiseItem[] = [
  {
    id: "exp-seo",
    title: "Search Engine Optimization (SEO)",
    category: "digital",
    description: "Search engine optimization and organic growth strategies designed for sustainable long-term search visibility and technical performance.",
    subItems: ["Technical SEO", "Keyword Strategy", "On-Page Optimization", "Organic Growth"],
    icon: "Search"
  },
  {
    id: "exp-paid-ads",
    title: "Paid Advertising",
    category: "digital",
    description: "Targeted performance advertising across Google Ads and Facebook/Meta Ads optimized for conversion rates and return on ad spend (ROAS).",
    subItems: ["Google Search & Display", "Meta Ads Manager", "Audience Targeting", "Conversion Tracking"],
    icon: "Target"
  },
  {
    id: "exp-web-dev",
    title: "Web Development",
    category: "digital",
    description: "Building modern websites, high-converting landing pages, and responsive business websites with clean code and modern aesthetics.",
    subItems: ["Modern Responsive UI", "Landing Pages", "Business Web Portals", "Speed Optimization"],
    icon: "Code"
  },
  {
    id: "exp-social",
    title: "Social Media",
    category: "digital",
    description: "Social media marketing and strategic digital brand presence across key business and consumer networks.",
    subItems: ["Brand Positioning", "Content Strategy", "Community Engagement", "Multi-Platform Reach"],
    icon: "Share2"
  },
  {
    id: "exp-lead-gen",
    title: "Lead Generation",
    category: "digital",
    description: "Qualified lead acquisition and business growth systems that systematically capture, qualify, and route prospects.",
    subItems: ["Funnels & Capture Pages", "B2B Outreach Systems", "Lead Pipelines", "CRM Alignment"],
    icon: "Users"
  },
  {
    id: "exp-business-growth",
    title: "Business Growth",
    category: "digital",
    description: "Digital strategies focused on holistic brand visibility, customer acquisition, retention, and systematic commercial growth.",
    subItems: ["Market Positioning", "Growth Roadmaps", "Digital Transformation", "Performance Review"],
    icon: "BarChart3"
  },
  {
    id: "exp-ai-tools",
    title: "AI Tools & Workflows",
    category: "digital",
    description: "Using modern AI tools to improve market research, content workflows, business productivity, and digital operational efficiency.",
    subItems: ["Workflow Automation", "AI-Assisted Research", "Content Structuring", "Productivity Systems"],
    icon: "Sparkles"
  }
];

export const TRAVEL_EXPERTISE = [
  {
    id: "travel-gds",
    title: "Air Ticketing Officer",
    subtitle: "Global Distribution Systems",
    description: "Hands-on booking, itinerary management, and tariff routing utilizing world-standard GDS platforms.",
    systems: ["Galileo / Travelport GDS", "Amadeus GDS", "Sabre GDS"],
    icon: "Plane",
    badge: "GDS Certified Platforms"
  },
  {
    id: "travel-visa",
    title: "Visa Consultant",
    subtitle: "Consultation & Application Assistance",
    description: "Professional, structured visa-related consultation, document verification guidance, and formal application assistance for international travel.",
    systems: ["Profile Evaluation", "Application Dossier Prep", "Document Checklist Guidance", "Embassy Appointment Support"],
    icon: "FileCheck",
    badge: "Advisory & Support"
  },
  {
    id: "travel-work-permit",
    title: "Work Permit Provider",
    subtitle: "International Employment Assistance",
    description: "Work permit-related consultation, procedural documentation guidance, and comprehensive international employment facilitation support.",
    systems: ["Process Consultation", "Employer Verification Prep", "Documentation Checklist", "Compliance Guidance"],
    icon: "Briefcase",
    badge: "Consultation Services"
  }
];

export const VENTURES: VentureItem[] = [
  {
    id: "venture-flowdigita",
    badge: "DIGITAL AGENCY",
    title: "Flowdigita LLC",
    role: "Founder & Owner",
    foundedYear: "2024",
    description: "A digital-focused business and agency working around marketing, web development, SEO, paid advertising, and online growth services for modern brands.",
    websiteUrl: "https://flowdigita.com/",
    ctaText: "Visit Flowdigita",
    highlights: [
      "Full-Spectrum Digital Marketing Services",
      "High-Performance Paid Campaigns (Google & Meta)",
      "Technical SEO & Content Strategy",
      "Modern Web Development & Landing Pages"
    ],
    theme: "cyan",
    category: "Digital Agency & Marketing"
  },
  {
    id: "venture-dreamsfly",
    badge: "TRAVEL & VISA",
    title: "Dreams Fly International",
    role: "Founder & Owner",
    foundedYear: "2026",
    description: "A travel-focused venture providing air ticketing, visa consultation, GDS ticketing services (Galileo, Amadeus, Sabre), and work permit-related consultation.",
    websiteUrl: "https://dreamsfly.net/",
    ctaText: "Visit Dreams Fly",
    highlights: [
      "Global GDS Air Ticketing (Travelport, Amadeus, Sabre)",
      "Visa Consultation & Application Assistance",
      "Work Permit Process Consultation",
      "International Travel Logistics & Itineraries"
    ],
    theme: "indigo",
    category: "Travel & Visa Advisory"
  }
];

export const SKILL_CONSTELLATION_NODES: SkillNode[] = [
  { id: "seo", name: "SEO", category: "marketing", description: "Search engine optimization and organic ranking", xPercent: 20, yPercent: 25, featured: true },
  { id: "google-ads", name: "Google Ads", category: "marketing", description: "Search & Display PPC campaign architecture", xPercent: 35, yPercent: 15 },
  { id: "meta-ads", name: "Meta Ads", category: "marketing", description: "Facebook & Instagram targeted advertising", xPercent: 65, yPercent: 18, featured: true },
  { id: "web-dev", name: "Web Development", category: "tech", description: "Modern responsive web applications and landing pages", xPercent: 80, yPercent: 32, featured: true },
  { id: "social-media", name: "Social Media", category: "marketing", description: "Brand identity, organic strategy and engagement", xPercent: 82, yPercent: 62 },
  { id: "lead-gen", name: "Lead Generation", category: "marketing", description: "B2B and B2C automated customer acquisition", xPercent: 68, yPercent: 82, featured: true },
  { id: "business-growth", name: "Business Growth", category: "digital", description: "Holistic commercial scaling and market positioning", xPercent: 32, yPercent: 84 },
  { id: "ai", name: "AI Tools", category: "tech", description: "Automated workflows, AI research and productivity tools", xPercent: 18, yPercent: 68, featured: true },
  { id: "gds", name: "GDS Systems", category: "travel", description: "Galileo, Amadeus & Sabre ticketing infrastructure", xPercent: 22, yPercent: 46 },
  { id: "travel", name: "Travel Consulting", category: "travel", description: "Air ticketing, flight logistics and itinerary planning", xPercent: 50, yPercent: 88 },
  { id: "visa-consulting", name: "Visa Consulting", category: "travel", description: "Application assistance and permit advisory", xPercent: 78, yPercent: 50, featured: true }
];

export const IMPACT_METRICS = [
  {
    number: "2020",
    label: "Started Freelancing",
    description: "Began working independently in the digital ecosystem"
  },
  {
    number: "2024",
    label: "Founded Flowdigita",
    description: "Formally launched digital agency venture"
  },
  {
    number: "2026",
    label: "Founded Dreams Fly",
    description: "Expanded into international travel & visa advisory"
  },
  {
    number: "2",
    label: "Business Ventures",
    description: "Flowdigita LLC & Dreams Fly International"
  }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: "01",
    title: "Learn",
    description: "Constantly develop new skills and understand changing technology, digital market shifts, and emerging industry dynamics.",
    icon: "BookOpen"
  },
  {
    number: "02",
    title: "Build",
    description: "Turn ideas into practical digital products, resilient brands, and operational online businesses with real execution.",
    icon: "Layers"
  },
  {
    number: "03",
    title: "Grow",
    description: "Use strategic marketing, digital tools, and disciplined systems to create sustainable and measurable progress.",
    icon: "TrendingUp"
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "edu-ssc",
    year: "2018",
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    institution: "Huzrapur Model Academy",
    iconName: "Award"
  },
  {
    id: "edu-hsc",
    year: "2020",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    institution: "Rohanpur Yousuf Ali Gov. College",
    iconName: "GraduationCap"
  },
  {
    id: "edu-bba",
    year: "2020–2021",
    degree: "BBA in Management",
    field: "Management Department (Session: 2020-21)",
    institution: "Rohanpur Yousuf Ali Gov. College",
    iconName: "BookMarked"
  },
  {
    id: "edu-mba",
    year: "Present",
    degree: "MBA",
    field: "Management / Business Administration",
    institution: "University of Dhaka",
    status: "Currently Running",
    iconName: "Sparkles"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-flowdigita",
    name: "Flowdigita LLC Agency Platform",
    industry: "Digital Agency & Marketing",
    role: "Founder & Lead Strategist",
    services: ["SEO", "Performance Ads", "Web Design", "Brand Strategy"],
    description: "Full-scale agency platform delivering digital marketing services, paid search and social campaigns, and custom web builds for international clients.",
    category: "Digital",
    link: "https://flowdigita.com/",
    linkText: "Visit Flowdigita",
    featured: true
  },
  {
    id: "proj-dreamsfly",
    name: "Dreams Fly International Travel Portal",
    industry: "Travel & Visa Advisory",
    role: "Founder & Managing Director",
    services: ["GDS Ticketing", "Visa Advisory", "Work Permit Consulting", "Travel Logistics"],
    description: "Specialized travel portal offering global air ticketing across Sabre, Amadeus, and Galileo GDS platforms alongside visa consultation workflows.",
    category: "Travel",
    link: "https://dreamsfly.net/",
    linkText: "Visit Dreams Fly",
    featured: true
  },
  {
    id: "proj-growth-campaigns",
    name: "Paid Ads & SEO Growth Architecture",
    industry: "E-Commerce & Digital Services",
    role: "Digital Marketer & Strategist",
    services: ["Google Ads", "Meta Ads", "Technical SEO", "Lead Funnels"],
    description: "Strategic execution of paid acquisition channels and organic search optimization pipelines for scalable online brand growth.",
    category: "Marketing",
    featured: true
  },
  {
    id: "proj-web-solutions",
    name: "Modern Business & Landing Page Platforms",
    industry: "Web & Technology",
    role: "Web Strategist & Developer",
    services: ["Responsive UI", "Landing Pages", "Performance Optimization", "Conversion UI"],
    description: "Designing and developing fast, modern business web presences crafted to convert visitors into qualified business leads.",
    category: "Web",
    featured: true
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "photo-portrait-main",
    title: "Jahan Ali — Professional Portrait",
    category: "Executive Portrait",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    fallbackUrl: "https://i.imgur.com/woV5XUA.jpg",
    description: "Digital Entrepreneur & Founder of Flowdigita LLC and Dreams Fly International."
  },
  {
    id: "photo-digital-workspace",
    title: "Digital Growth & Strategy Workspace",
    category: "Entrepreneurship",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    description: "Building digital marketing campaigns, analytics tracking, and agency operations."
  },
  {
    id: "photo-flowdigita-ops",
    title: "Flowdigita Digital Operations",
    category: "Agency",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    description: "Managing multi-channel performance advertising and client SEO systems."
  },
  {
    id: "photo-dreamsfly-travel",
    title: "Global Travel & GDS Ticketing",
    category: "Travel & Visa",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    description: "Air ticketing across major GDS systems and global travel consultation."
  }
];
