export interface ServiceSection {
  title: string;
  subtitle?: string;
  content: string;
  points?: string[];
  features?: { title: string; desc: string; iconName?: string }[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePricingPackage {
  name: string;
  price: string;
  period?: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaText?: string;
}

export interface InternalLink {
  title: string;
  path: string;
  anchorText: string;
  context: string;
  category: 'digital' | 'travel';
}

export interface ServiceData {
  id: string;
  slug: string;
  category: 'digital' | 'travel';
  categoryLabel: string;
  url: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  seoTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string;
  sections: ServiceSection[];
  process: { step: string; title: string; description: string }[];
  pricingPackages: ServicePricingPackage[];
  faqs: ServiceFAQ[];
  whyChoose: string[];
  internalLinks: InternalLink[];
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  'digital-marketing': {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    category: 'digital',
    categoryLabel: 'Digital Marketing & Growth',
    url: '/services/digital-marketing',
    primaryKeyword: 'Digital Marketing Services Bangladesh',
    secondaryKeywords: [
      'Digital Marketing Expert Bangladesh',
      'Digital Marketing Consultant Bangladesh',
      'Digital Marketing Freelancer Bangladesh',
      'Online Marketing Services Bangladesh',
      'Digital Marketing Agency Bangladesh',
      'Digital Growth Consultant Bangladesh',
      'Digital Marketing Strategy',
      'Online Business Marketing'
    ],
    seoTitle: 'Digital Marketing Services Bangladesh | Jahan Ali',
    metaDescription: 'Get professional digital marketing services in Bangladesh from Jahan Ali, including SEO, Google Ads, Meta Ads, social media marketing, lead generation and digital growth strategies.',
    h1: 'Digital Marketing Services in Bangladesh',
    tagline: 'End-to-end data-driven digital growth strategies built for ambitious brands, e-commerce stores, and high-ticket service businesses.',
    intro: 'In today’s hyper-competitive digital landscape, having a website or social media page is only the starting point. Real business growth happens when you have an integrated digital marketing system that attracts targeted buyer traffic, nurtures interest with authority-driven content, and converts clicks into loyal paying customers. As a digital entrepreneur, agency owner at Flowdigita LLC, and hands-on marketing strategist in Bangladesh, Jahan Ali helps companies build sustainable, high-ROI marketing engines.',
    sections: [
      {
        title: 'What Is Digital Marketing?',
        content: 'Digital marketing is the comprehensive practice of promoting products, services, and personal brands across digital channels like search engines, social media platforms, paid advertising networks, and email workflows. Unlike traditional advertising, digital marketing enables granular audience targeting, real-time ROI tracking, and iterative optimization.',
        points: [
          'Precision demographic, behavioral, and intent-based targeting',
          'Measurable cost-per-acquisition (CPA) and clear revenue attribution',
          'Full-funnel audience engagement from awareness to retention',
          'Scalable growth architectures adapted to local and global markets'
        ]
      },
      {
        title: 'My Digital Marketing Services',
        content: 'I provide customized digital marketing solutions tailored to the growth phase of your business, combining technical optimization with creative storytelling.',
        features: [
          {
            title: 'Search Engine Optimization (SEO)',
            desc: 'Drive organic search traffic with comprehensive on-page, technical, local, and topical authority SEO frameworks.'
          },
          {
            title: 'Google & Meta Paid Advertising',
            desc: 'High-converting PPC and social ad campaigns across Google Search, Performance Max, Facebook, and Instagram.'
          },
          {
            title: 'Social Media Growth & Management',
            desc: 'Strategic content production, community nurturing, and brand positioning across Meta, LinkedIn, and Instagram.'
          },
          {
            title: 'High-Ticket Lead Generation',
            desc: 'Targeted B2B and consumer lead acquisition funnels designed to fill calendars with pre-qualified prospects.'
          },
          {
            title: 'Conversion Rate Optimization (CRO)',
            desc: 'Funnel audit, landing page restructuring, and UX optimization to turn more visitors into buyers.'
          },
          {
            title: 'Digital Growth Strategy & Consulting',
            desc: 'Holistic business growth blueprints, competitor teardowns, and multi-channel acquisition roadmaps.'
          }
        ]
      },
      {
        title: 'SEO & Organic Growth',
        content: 'Organic search remains the highest-intent traffic channel on the internet. By pairing deep technical audits with semantic topical clusters, I ensure your business ranks at the exact moment your potential customers are searching for solutions in Bangladesh and globally.',
        points: [
          'Keyword research mapped to search intent and buyer journey stages',
          'Core Web Vitals speed optimization and crawl budget efficiency',
          'Topical authority content architectures that outperform competitors'
        ]
      },
      {
        title: 'Google & Meta Advertising',
        content: 'Paid ads are the fastest way to validate offers, capture ready-to-buy demand, and scale profitable revenue streams. Through precision audience segmentation, custom pixel event tracking, and ruthless creative testing, I ensure every dollar spent returns maximum ROAS.',
        points: [
          'High-intent Google Search and Performance Max campaigns',
          'Custom and lookalike audience modeling on Meta platforms',
          'Dynamic retargeting funnels that recover abandoned carts and warm leads'
        ]
      },
      {
        title: 'Lead Generation',
        content: 'Lead generation is the lifeblood of B2B, consulting, real estate, and high-ticket service companies. I build full-stack lead generation pipelines combining hyper-targeted ad creatives, high-converting landing pages, and automated CRM lead distribution.',
        points: [
          'Custom landing page design and persuasive sales copywriting',
          'Multi-step lead qualification forms to filter out unqualified inquiries',
          'Automated email and WhatsApp nurture sequences'
        ]
      },
      {
        title: 'Digital Strategy & Business Growth',
        content: 'Tactics without strategy lead to wasted budget. My consulting engagements start with comprehensive market research, competitor gap analysis, and unit-economic modeling to construct an aggressive 90-day growth roadmap.',
        points: [
          'Customer acquisition cost (CAC) vs. Customer lifetime value (LTV) optimization',
          'Multi-touch attribution and analytics dashboards',
          'Brand positioning and unique value proposition sharpening'
        ]
      }
    ],
    process: [
      { step: '01', title: 'Audit & Market Discovery', description: 'Deep analysis of your current assets, traffic channels, competitors, and growth bottlenecks.' },
      { step: '02', title: 'Strategy & Architecture', description: 'Formulating a custom multi-channel acquisition roadmap with defined KPIs and milestones.' },
      { step: '03', title: 'Execution & Launch', description: 'Deploying campaigns, landing pages, technical SEO fixes, and tracking pixels.' },
      { step: '04', title: 'Optimization & Scaling', description: 'Iterative A/B testing, budget scaling on winning creatives, and continuous ROI improvements.' }
    ],
    pricingPackages: [
      {
        name: 'Starter Growth',
        price: '$299',
        period: '/month',
        description: 'Ideal for local businesses and emerging brands seeking verified lead generation & social presence.',
        features: [
          'Single Ad Channel (Meta or Google Ads)',
          'Basic Conversion Pixel / Tag Setup',
          'Monthly Content Calendar (12 Posts)',
          'Bi-Weekly Campaign Optimization',
          'Monthly Performance Analytics Report',
          'WhatsApp Direct Support'
        ],
        ctaText: 'Choose Starter'
      },
      {
        name: 'Omnichannel Pro',
        price: '$599',
        period: '/month',
        isPopular: true,
        description: 'Comprehensive multi-channel marketing engine engineered to dominate local and international markets.',
        features: [
          'Multi-Channel (Meta Ads + Google Ads + SEO)',
          'Server-Side CAPI & GA4 Enhanced Tracking',
          'Custom High-Converting Landing Page Design',
          'A/B Creative & Headline Testing',
          'Weekly Search Term & Bid Optimization',
          'Competitor Keyword & Funnel Teardowns',
          'Priority WhatsApp & Zoom Strategy Calls'
        ],
        ctaText: 'Get Pro Growth'
      },
      {
        name: 'Enterprise Scaling',
        price: '$1,199',
        period: '/month',
        description: 'Full-service growth partnership with fractional CMO strategic direction and aggressive revenue scaling.',
        features: [
          'Full-Funnel Omnichannel Media Buying',
          'Deep Technical SEO & Topical Authority Architecture',
          'Custom Automated CRM Lead Distribution Funnels',
          'Conversion Rate Optimization (CRO) Heatmaps',
          'Dedicated Campaign Strategist',
          'Bi-Weekly 1-on-1 Executive Growth Reviews',
          '24/7 VIP Channel Access'
        ],
        ctaText: 'Scale Enterprise'
      }
    ],
    whyChoose: [
      'Founder & Agency Perspective: I manage live campaigns for my own ventures and global clients, not theoretical textbook tactics.',
      'Data-Backed Decision Making: Every decision is guided by analytics, search intent data, and conversion metrics.',
      'Full-Stack Capabilities: From technical web development to creative ad copywriting and media buying.',
      'Transparent Reporting: Clear KPI tracking with actionable insights, no vanity metrics.'
    ],
    faqs: [
      {
        question: 'What is digital marketing?',
        answer: 'Digital marketing encompasses all online promotional activities used to connect businesses with customers across search engines, social media, paid ads, email, and websites with measurable ROI.'
      },
      {
        question: 'How much does digital marketing cost in Bangladesh?',
        answer: 'Digital marketing costs in Bangladesh vary based on business goals, ad spend, and scope. Customized monthly retainer packages generally range from standard startup plans to comprehensive enterprise growth consulting.'
      },
      {
        question: 'What does a digital marketing consultant do?',
        answer: 'A digital marketing consultant analyzes your current marketing channels, identifies profitable growth opportunities, creates actionable roadmaps, and oversees campaign execution to increase revenue and lower customer acquisition costs.'
      },
      {
        question: 'How can digital marketing help my business?',
        answer: 'Digital marketing increases brand visibility, attracts qualified buyers who are actively searching for your solutions, lowers customer acquisition costs, and builds automated sales pipelines that work 24/7.'
      },
      {
        question: 'Do you provide digital marketing services in Bangladesh?',
        answer: 'Yes, I provide full-suite digital marketing, SEO, Google Ads, Meta Ads, and growth consulting services for businesses across Dhaka, Chittagong, Sylhet, and throughout Bangladesh.'
      },
      {
        question: 'Do you work with international clients?',
        answer: 'Absolutely. I regularly collaborate with businesses, e-commerce stores, and agencies across the United States, UK, Canada, Australia, and the Middle East.'
      },
      {
        question: 'How long does digital marketing take to show results?',
        answer: 'Paid campaigns (Google Ads and Meta Ads) can generate leads and traffic within 24 to 72 hours of launch. Organic channels like SEO and content marketing typically build compounding momentum within 3 to 6 months.'
      }
    ],
    internalLinks: [
      {
        title: 'Search Engine Optimization (SEO)',
        path: '/services/seo',
        anchorText: 'professional SEO services in Bangladesh',
        context: 'SEO is one of the core components of a successful digital marketing strategy, creating long-term organic authority.',
        category: 'digital'
      },
      {
        title: 'Google Ads & PPC',
        path: '/services/google-ads',
        anchorText: 'Google Ads and PPC management',
        context: 'Businesses can combine organic search with Google Ads to dominate top search results for high-intent keywords.',
        category: 'digital'
      },
      {
        title: 'Facebook & Meta Ads',
        path: '/services/meta-ads',
        anchorText: 'Meta and Facebook advertising',
        context: 'Pair organic social content with targeted Meta Ads to scale customer acquisition predictably.',
        category: 'digital'
      },
      {
        title: 'Lead Generation',
        path: '/services/lead-generation',
        anchorText: 'high-converting lead generation systems',
        context: 'Digital marketing and paid advertising work together to build reliable, high-volume lead pipelines.',
        category: 'digital'
      }
    ]
  },

  'seo': {
    id: 'seo',
    slug: 'seo',
    category: 'digital',
    categoryLabel: 'Search Engine Optimization',
    url: '/services/seo',
    primaryKeyword: 'SEO Services Bangladesh',
    secondaryKeywords: [
      'SEO Expert Bangladesh',
      'SEO Consultant Bangladesh',
      'SEO Specialist Bangladesh',
      'SEO Freelancer Bangladesh',
      'Search Engine Optimization Services',
      'On Page SEO Services',
      'Technical SEO Services',
      'Local SEO Services',
      'E-commerce SEO Services',
      'Website SEO Services Bangladesh'
    ],
    seoTitle: 'SEO Services Bangladesh | SEO Expert & Consultant | Jahan Ali',
    metaDescription: 'Improve your Google visibility with professional SEO services in Bangladesh. Jahan Ali provides technical, on-page, local and growth-focused SEO strategies.',
    h1: 'SEO Services in Bangladesh',
    tagline: 'Rank higher on Google, capture high-intent organic buyer traffic, and build compounding search visibility for your brand.',
    intro: 'Search Engine Optimization (SEO) is the single most valuable long-term asset in digital marketing. When potential customers search for your products or services, being on page 1 of Google makes the difference between consistent incoming sales and complete invisibility. Jahan Ali delivers holistic, white-hat SEO strategies built on technical precision, semantic topical authority, and clean UX.',
    sections: [
      {
        title: 'Professional SEO Services',
        content: 'I provide end-to-end search engine optimization designed to establish dominant organic search rankings and convert organic visitors into paying customers.'
      },
      {
        title: 'SEO Audit & Website Analysis',
        content: 'Every successful SEO campaign begins with an exhaustive 360-degree audit examining crawlability, site speed, indexation, internal linking structure, thin content, and backlink health.',
        points: [
          'Full site crawl diagnostics using Screaming Frog and Google Search Console',
          'Core Web Vitals and mobile usability performance audit',
          'Competitor gap analysis identifying low-hanging keyword opportunities'
        ]
      },
      {
        title: 'Technical SEO',
        content: 'Google cannot rank what it cannot efficiently crawl and understand. I resolve underlying architecture issues to ensure search engine bots easily index and interpret every critical page.',
        points: [
          'XML Sitemap, robots.txt, and canonical tag configuration',
          'Structured Data (JSON-LD) implementation for Rich Snippets',
          'Site speed acceleration, clean routing, and crawl error elimination'
        ]
      },
      {
        title: 'On-Page SEO & Keyword Research',
        content: 'On-page SEO aligns your content with real user search intent. I craft optimized H1/H2 hierarchies, persuasive title tags, keyword-rich meta descriptions, and clean image alt attributes.',
        points: [
          'Intent-based keyword mapping (Informational, Commercial, Transactional)',
          'Semantic keyword integration and LSI term placement',
          'Internal linking structures that pass link equity throughout the site'
        ]
      },
      {
        title: 'Local SEO for Bangladesh & Global Markets',
        content: 'For businesses serving specific geographic regions, Local SEO and Google Business Profile (GBP) optimization ensure you show up in the coveted Google Map Pack when local buyers search nearby.',
        points: [
          'Google Business Profile setup, verification, and weekly optimization',
          'Local citation building and NAP consistency across regional directories',
          'Local schema markup and location-specific landing pages'
        ]
      },
      {
        title: 'E-commerce SEO',
        content: 'Scale organic revenue for your online store with tailored product page optimization, category hierarchy restructuring, faceted navigation fixes, and product schema markup.'
      },
      {
        title: 'Link Building & Authority Growth',
        content: 'Ethical, high-impact digital PR and white-hat link acquisition strategies to build your domain authority and protect your search rankings against algorithm updates.'
      }
    ],
    process: [
      { step: '01', title: 'Technical Audit & Gap Analysis', description: 'Identify technical errors, indexing issues, and competitor keyword gaps.' },
      { step: '02', title: 'Topical Architecture & Mapping', description: 'Map out content clusters, keyword targets, and on-page optimization priorities.' },
      { step: '03', title: 'On-Page & Technical Execution', description: 'Fix site speed, structured data, headers, metadata, and internal links.' },
      { step: '04', title: 'Authority Building & Tracking', description: 'Publish topical content, acquire authoritative backlinks, and track rankings.' }
    ],
    pricingPackages: [
      {
        name: 'Foundational SEO',
        price: '$249',
        period: '/month',
        description: 'Ideal for local businesses, clinics, and startups aiming to dominate local geographic searches.',
        features: [
          'Up to 10 Target Keywords',
          'Google Business Profile (GBP) Optimization',
          'Complete Technical Site Health Audit',
          'On-Page Optimization for 5 Core Pages',
          'XML Sitemap & Robots.txt Config',
          'Monthly Ranking & Traffic Report'
        ],
        ctaText: 'Start Foundation'
      },
      {
        name: 'Authority Ranking',
        price: '$499',
        period: '/month',
        isPopular: true,
        description: 'Engineered for growing service providers and e-commerce stores seeking top 3 Google positions.',
        features: [
          'Up to 25 Target Commercial Keywords',
          'Semantic Content Clusters & Topical Maps',
          'Schema.org JSON-LD Structured Data Setup',
          'Core Web Vitals & Speed Optimization',
          'Internal Link Structure Engineering',
          'Monthly High-Authority Backlink Acquisition',
          'Bi-Weekly Keyword Movement Updates'
        ],
        ctaText: 'Rank Higher'
      },
      {
        name: 'Enterprise Domination',
        price: '$899',
        period: '/month',
        description: 'National and international SEO domination for competitive industries and high-volume e-commerce.',
        features: [
          '50+ High-Value Keywords & Keyword Clustering',
          'Faceted Navigation & Technical E-Commerce SEO',
          'Digital PR & Contextual Authority Links',
          'Crawl Budget & Server Response Tuning',
          'Competitor Displacement Strategy',
          'Weekly Search Console & GA4 Deep Dives',
          'Direct WhatsApp Priority Advisory'
        ],
        ctaText: 'Dominate Search'
      }
    ],
    whyChoose: [
      '100% White-Hat Methodology: Safe, sustainable techniques that comply with Google Webmaster Guidelines.',
      'Holistic Technical & Content Focus: Seamless integration of developer-level technical fixes and copywriter-level content.',
      'Proven Ranking Track Record: Real experience ranking competitive commercial keywords in Bangladesh and internationally.'
    ],
    faqs: [
      {
        question: 'How much does SEO cost in Bangladesh?',
        answer: 'SEO pricing depends on the size of the website, existing domain health, market competition, and target keywords. Monthly retainer packages are customized to match business goals.'
      },
      {
        question: 'How long does SEO take to show results?',
        answer: 'Technical fixes and local SEO improvements often yield noticeable gains in 4 to 8 weeks. Competitive keyword ranking and substantial organic traffic growth generally compound over 3 to 6 months.'
      },
      {
        question: 'What is technical SEO?',
        answer: 'Technical SEO refers to website and server optimizations that help search engine spiders crawl and index your site more effectively (e.g. site speed, XML sitemaps, structured data, canonical tags).'
      },
      {
        question: 'What is on-page SEO?',
        answer: 'On-page SEO is the practice of optimizing individual web page elements—such as title tags, headings, content quality, keyword usage, internal links, and images—to rank higher in search engines.'
      },
      {
        question: 'Do you provide local SEO in Bangladesh?',
        answer: 'Yes, I provide comprehensive Local SEO services, including Google Business Profile optimization, localized keyword targeting, and local citation management across Bangladesh.'
      },
      {
        question: 'Can you help a new website rank on Google?',
        answer: 'Yes, for brand-new domains, I implement an aggressive foundational SEO strategy focusing on low-competition, high-intent keywords and fast topical authority building.'
      },
      {
        question: 'Do you provide SEO audits?',
        answer: 'Yes, I deliver detailed SEO audit reports covering technical errors, on-page opportunities, backlink profile health, and an actionable step-by-step fix checklist.'
      },
      {
        question: 'How do you measure SEO results?',
        answer: 'Results are tracked via Google Search Console and Google Analytics 4, monitoring keyword ranking positions, organic impressions, click-through rates (CTR), and conversion actions.'
      }
    ],
    internalLinks: [
      {
        title: 'Google Ads & PPC',
        path: '/services/google-ads',
        anchorText: 'combine organic SEO with Google Ads',
        context: 'Businesses can combine organic SEO with Google Ads for immediate search engine visibility while long-term rankings mature.',
        category: 'digital'
      },
      {
        title: 'Web Development Services',
        path: '/services/web-development',
        anchorText: 'fast, SEO-friendly web development',
        context: 'A strong SEO strategy starts with high-performance, mobile-responsive web development that satisfies Core Web Vitals.',
        category: 'digital'
      },
      {
        title: 'Digital Marketing Services',
        path: '/services/digital-marketing',
        anchorText: 'comprehensive digital marketing services',
        context: 'SEO works best when integrated into a full-funnel digital marketing and brand growth ecosystem.',
        category: 'digital'
      }
    ]
  },

  'google-ads': {
    id: 'google-ads',
    slug: 'google-ads',
    category: 'digital',
    categoryLabel: 'Google Ads & PPC Management',
    url: '/services/google-ads',
    primaryKeyword: 'Google Ads Expert Bangladesh',
    secondaryKeywords: [
      'Google Ads Specialist Bangladesh',
      'Google Ads Consultant Bangladesh',
      'Google Ads Freelancer Bangladesh',
      'Google Ads Services Bangladesh',
      'Google Ads Management Bangladesh',
      'PPC Expert Bangladesh',
      'PPC Services Bangladesh',
      'Google Search Ads',
      'Google Display Ads',
      'Google Ads Campaign Management'
    ],
    seoTitle: 'Google Ads Expert Bangladesh | PPC Management | Jahan Ali',
    metaDescription: 'Work with Jahan Ali for Google Ads and PPC campaign management in Bangladesh. Get help with campaign setup, targeting, optimization, tracking and growth.',
    h1: 'Google Ads & PPC Services in Bangladesh',
    tagline: 'Capture high-intent searchers at the exact moment they are ready to purchase with high-ROI Google Ads campaigns.',
    intro: 'Google Ads is the ultimate platform for capturing bottom-of-funnel search intent. When someone types "buy [product]" or "best [service provider]", they have cash in hand and a problem to solve. As a certified Google Ads specialist in Bangladesh, Jahan Ali plans, launches, and optimizes high-performing Google Ads campaigns that minimize wasted ad spend and maximize return on ad spend (ROAS).',
    sections: [
      {
        title: 'Google Ads Campaign Management',
        content: 'Complete end-to-end management of your Google Ads account, from keyword intent modeling and negative keyword sculpting to conversion tracking setup and bid management.'
      },
      {
        title: 'Search Ads',
        content: 'Direct-response Google Search campaigns designed to capture immediate user intent with compelling headlines, structured ad extensions, and dedicated landing page alignment.'
      },
      {
        title: 'Performance Max & Shopping Ads',
        content: 'Leverage Google’s machine learning to display high-converting product listings and multimedia assets across YouTube, Display, Search, Discover, Gmail, and Maps.'
      },
      {
        title: 'Display & Remarketing Ads',
        content: 'Stay top-of-mind with visual banner ads targeting previous website visitors and customized in-market affinity audiences across the Google Display Network.'
      },
      {
        title: 'Conversion Tracking & Tag Management',
        content: 'Flawless server-side and client-side conversion tracking setup using Google Tag Manager (GTM) and GA4 to ensure exact attribution for every phone call, form submit, and sale.'
      },
      {
        title: 'Campaign Optimization & Negative Keywords',
        content: 'Continuous search term auditing and aggressive negative keyword lists to prevent your budget from being wasted on irrelevant, low-intent clicks.'
      }
    ],
    process: [
      { step: '01', title: 'Competitor & Search Intent Research', description: 'Analyze high-value commercial keywords, search volumes, and competitor ad copies.' },
      { step: '02', title: 'Tracking & Landing Page Setup', description: 'Configure Google Tag Manager conversion events and verify landing page alignment.' },
      { step: '03', title: 'Campaign Architecture & Launch', description: 'Structure Single-Theme Ad Groups (STAGs), responsive search ads, and smart bidding.' },
      { step: '04', title: 'A/B Testing & Scaling', description: 'Optimize bids, test new ad copies, eliminate negative search terms, and scale profitable ad sets.' }
    ],
    pricingPackages: [
      {
        name: 'Search Kickstart',
        price: '$249',
        period: '/month',
        description: 'For businesses with monthly ad spend up to $1,500 seeking fast inbound inquiries.',
        features: [
          '1-2 High-Intent Search Campaigns',
          'Comprehensive Keyword & Intent Research',
          'Negative Keyword Filtering',
          'Google Tag Manager Conversion Tracking',
          'Ad Copywriting & Asset Extensions',
          'Monthly Performance Overview'
        ],
        ctaText: 'Launch Ads'
      },
      {
        name: 'Growth PPC & PMax',
        price: '$449',
        period: '/month',
        isPopular: true,
        description: 'For scaling companies with ad spend up to $5,000 seeking multi-channel Google dominance.',
        features: [
          'Search + Performance Max / Shopping Campaigns',
          'Competitor Auction Insights & Bidding Strategy',
          'Continuous Negative Keyword Sculpting',
          'GA4 Enhanced Conversions & Phone Call Tracking',
          'Dynamic Search Ads & Audience Exclusions',
          'Bi-Weekly A/B Copy Testing & Optimization',
          'WhatsApp Priority Support'
        ],
        ctaText: 'Scale Campaigns'
      },
      {
        name: 'Scale & Dominate',
        price: '$799',
        period: '/month',
        description: 'For aggressive advertisers with ad spend $5,000+ wanting maximum ROAS and market share.',
        features: [
          'Omnichannel (Search + Display + YouTube + PMax)',
          'Advanced Offline & Server-Side Conversion Uploads',
          'Landing Page CRO & Speed Alignment',
          'Custom Scripts & Smart Bidding Guardrails',
          'Dedicated Account Strategist',
          'Weekly Live Zoom Performance Reviews',
          '24/7 Emergency Ad Triage'
        ],
        ctaText: 'Maximize ROAS'
      }
    ],
    whyChoose: [
      'ROI-Focused Strategy: We optimize for actual revenue, phone inquiries, and qualified leads—not meaningless vanity clicks.',
      'Conversion Tracking Mastery: Bulletproof tracking setup so you know exactly which keywords generate profit.',
      'Transparent Account Ownership: You retain 100% full ownership and control of your Google Ads account.'
    ],
    faqs: [
      {
        question: 'How much does Google Ads management cost?',
        answer: 'Management fees are structured either as a monthly management retainer or a percentage of ad spend, depending on campaign complexity and budget volume.'
      },
      {
        question: 'How much should I spend on Google Ads?',
        answer: 'Ad spend depends on your industry cost-per-click (CPC) and revenue targets. We recommend starting with a validated budget that allows enough clicks per day to generate meaningful conversion data.'
      },
      {
        question: 'How long does a Google Ads campaign take to generate leads?',
        answer: 'Search ads can start generating phone calls, inquiries, and sales within hours of campaign approval and launch.'
      },
      {
        question: 'What is PPC advertising?',
        answer: 'PPC (Pay-Per-Click) is an advertising model where advertisers only pay when a user actually clicks on their ad, making it highly cost-effective and measurable.'
      },
      {
        question: 'Do you provide conversion tracking setup?',
        answer: 'Yes, every Google Ads engagement includes end-to-end setup of Google Tag Manager, GA4 conversion events, phone call tracking, and Google Ads enhanced conversions.'
      },
      {
        question: 'Can Google Ads generate high-ticket B2B leads?',
        answer: 'Yes, Google Search ads are one of the most effective channels for B2B lead generation because we target users actively searching for specific commercial solutions.'
      },
      {
        question: 'What is the difference between SEO and Google Ads?',
        answer: 'Google Ads provides immediate search visibility and traffic as long as you pay for clicks. SEO requires time to build organic authority but provides sustainable, free traffic over the long term.'
      }
    ],
    internalLinks: [
      {
        title: 'SEO Services Bangladesh',
        path: '/services/seo',
        anchorText: 'organic search engine optimization',
        context: 'Pair Google Ads with organic search engine optimization to dominate both paid and organic search results simultaneously.',
        category: 'digital'
      },
      {
        title: 'Facebook & Meta Ads',
        path: '/services/meta-ads',
        anchorText: 'Facebook and Meta ad campaigns',
        context: 'Combine high-intent search ads with Facebook and Meta ad campaigns for complete full-funnel coverage.',
        category: 'digital'
      },
      {
        title: 'Lead Generation Services',
        path: '/services/lead-generation',
        anchorText: 'B2B and high-ticket lead generation',
        context: 'Google Search ads serve as the primary engine for high-intent B2B and high-ticket lead generation funnels.',
        category: 'digital'
      }
    ]
  },

  'meta-ads': {
    id: 'meta-ads',
    slug: 'meta-ads',
    category: 'digital',
    categoryLabel: 'Facebook & Meta Advertising',
    url: '/services/meta-ads',
    primaryKeyword: 'Facebook Ads Expert Bangladesh',
    secondaryKeywords: [
      'Meta Ads Expert Bangladesh',
      'Facebook Ads Specialist Bangladesh',
      'Facebook Ads Freelancer Bangladesh',
      'Meta Ads Management Bangladesh',
      'Facebook Advertising Bangladesh',
      'Meta Advertising Services',
      'Facebook Marketing Expert Bangladesh',
      'Paid Social Media Marketing',
      'Facebook Lead Generation',
      'Meta Ads Consultant'
    ],
    seoTitle: 'Facebook & Meta Ads Expert Bangladesh | Jahan Ali',
    metaDescription: 'Grow your business with Facebook and Meta Ads management from Jahan Ali. Campaign setup, audience targeting, creative strategy, tracking and optimization.',
    h1: 'Facebook & Meta Ads Services in Bangladesh',
    tagline: 'Scale your revenue with high-converting Meta Ads, persuasive creative hooks, and precision audience targeting.',
    intro: 'Meta platforms (Facebook, Instagram, Messenger, and WhatsApp) represent the largest engaged consumer audience in Bangladesh and globally. However, running profitable Meta ads today requires sophisticated creative testing, conversion API tracking, and value-based bidding. Jahan Ali develops full-funnel Meta advertising strategies that stop the scroll and turn viewers into buyers.',
    sections: [
      {
        title: 'Facebook & Meta Advertising',
        content: 'From direct-to-consumer e-commerce scaling to instant lead form generation for service providers, we build structured campaigns that consistently beat target CPA goals.'
      },
      {
        title: 'Audience Research & Targeting',
        content: 'In-depth audience mapping leveraging broad targeting, interest stacking, custom customer list uploads, and high-affinity lookalike audiences.'
      },
      {
        title: 'Lead Generation Campaigns',
        content: 'Native Facebook instant lead forms integrated directly with WhatsApp and CRM systems to connect your sales team with prospects within seconds.'
      },
      {
        title: 'E-commerce Conversion Campaigns',
        content: 'Dynamic catalog ads, high-converting video hooks, and carousel ad sequences that drive sales for Shopify, WooCommerce, and custom stores.'
      },
      {
        title: 'Retargeting & Dynamic Funnels',
        content: 'Multi-stage retargeting campaigns addressing objections, offering limited-time incentives, and converting previous website visitors.'
      },
      {
        title: 'Meta Pixel & Conversions API (CAPI)',
        content: 'Server-side Conversions API integration to bypass iOS tracking limitations and deliver rich conversion signals back to Meta’s algorithm.'
      }
    ],
    process: [
      { step: '01', title: 'Audience & Creative Strategy', description: 'Map out customer pain points, compelling hooks, and audience segments.' },
      { step: '02', title: 'Pixel & CAPI Setup', description: 'Implement server-side Conversions API and custom event tracking.' },
      { step: '03', title: 'Creative Testing Phase', description: 'Launch multivariate ad tests with diverse angles, videos, and headlines.' },
      { step: '04', title: 'Horizontal & Vertical Scaling', description: 'Scale budget on winning creatives while maintaining target cost-per-acquisition.' }
    ],
    pricingPackages: [
      {
        name: 'Essential Ads',
        price: '$249',
        period: '/month',
        description: 'For local businesses & startups wanting proven lead generation or localized sales.',
        features: [
          '1-2 Campaign Funnels (Lead Gen or Sales)',
          'Meta Pixel & Event Setup',
          'Audience Demographic & Interest Research',
          'Ad Copywriting & 4 Visual Creatives',
          'Bi-Weekly Optimization & Budget Tuning',
          'Monthly Performance Report'
        ],
        ctaText: 'Launch Meta Ads'
      },
      {
        name: 'Scale & Convert',
        price: '$449',
        period: '/month',
        isPopular: true,
        description: 'For growing e-commerce stores and service providers ready for full-funnel scaling.',
        features: [
          'Full-Funnel Setup (Top/Middle/Bottom of Funnel)',
          'Server-Side Conversions API (CAPI) Integration',
          'Custom & Lookalike Audience Modeling',
          'Dynamic Retargeting & Catalog Sales',
          '8 Custom High-Converting Ad Creatives',
          'Weekly A/B Hook & Copy Testing',
          'WhatsApp Instant Lead Integration'
        ],
        ctaText: 'Scale Conversions'
      },
      {
        name: 'High-Volume Scaling',
        price: '$799',
        period: '/month',
        description: 'For established brands spending $3,000+/mo wanting rapid growth & lowest acquisition costs.',
        features: [
          'Omnichannel Meta Suite (FB, IG, Reels, Messenger)',
          'Dedicated Creative Director & Video Ad Scripting',
          'Automated CRM Lead Routing & SMS Follow-ups',
          'Advanced Value-Based Bidding & Scaling Frameworks',
          'Weekly Strategy & Revenue Review Calls',
          'Dedicated Media Buyer',
          '24/7 Slack / WhatsApp Support'
        ],
        ctaText: 'Scale High-Volume'
      }
    ],
    whyChoose: [
      'Creative-First Approach: We test multiple ad angles and visual formats to find winning hooks that convert.',
      'Conversions API (CAPI) Tracking: Full server-side tracking setup to maximize data accuracy post-iOS 14.',
      'Cross-Platform Synergy: Seamless integration with WhatsApp, Messenger, and automated CRM pipelines.'
    ],
    faqs: [
      {
        question: 'How much do Facebook Ads cost in Bangladesh?',
        answer: 'Facebook ads in Bangladesh offer some of the most competitive CPM rates globally. Budgets can start as low as $5 to $10 per day for initial testing and scale into thousands as ROI is established.'
      },
      {
        question: 'What is Meta Ads?',
        answer: 'Meta Ads is the official advertising platform for running targeted paid ads across Facebook, Instagram, Messenger, and the Meta Audience Network.'
      },
      {
        question: 'Can Facebook Ads generate leads for B2B or services?',
        answer: 'Yes, Facebook Instant Lead forms and Messenger/WhatsApp automation are exceptionally powerful for real estate, education, consulting, healthcare, and B2B services.'
      },
      {
        question: 'What is Facebook retargeting?',
        answer: 'Retargeting serves tailored ads to people who have already visited your website, engaged with your Instagram page, or watched your videos, driving higher conversion rates at lower costs.'
      },
      {
        question: 'Do you set up Meta Pixel and Conversions API?',
        answer: 'Yes, we implement standard client-side Meta Pixel and server-side Conversions API (CAPI) to ensure reliable event tracking.'
      },
      {
        question: 'How long does it take to optimize Facebook Ads?',
        answer: 'The initial learning phase typically takes 3 to 7 days. Once the algorithm gathers 50 conversion events per ad set, performance stabilizes and scaling begins.'
      }
    ],
    internalLinks: [
      {
        title: 'Social Media Marketing',
        path: '/services/social-media-marketing',
        anchorText: 'organic social media marketing',
        context: 'Pair paid Meta ads with consistent organic social media marketing to build brand trust and social proof.',
        category: 'digital'
      },
      {
        title: 'Lead Generation Services',
        path: '/services/lead-generation',
        anchorText: 'full-funnel lead generation campaigns',
        context: 'Meta Ads serve as a premier acquisition channel for full-funnel lead generation campaigns.',
        category: 'digital'
      },
      {
        title: 'Digital Marketing Services',
        path: '/services/digital-marketing',
        anchorText: 'integrated digital marketing strategy',
        context: 'Incorporate Meta advertising into an integrated digital marketing strategy for maximum market reach.',
        category: 'digital'
      }
    ]
  },

  'social-media-marketing': {
    id: 'social-media-marketing',
    slug: 'social-media-marketing',
    category: 'digital',
    categoryLabel: 'Social Media Marketing',
    url: '/services/social-media-marketing',
    primaryKeyword: 'Social Media Marketing Bangladesh',
    secondaryKeywords: [
      'Social Media Marketing Expert Bangladesh',
      'Social Media Marketing Services Bangladesh',
      'Social Media Manager Bangladesh',
      'Social Media Consultant Bangladesh',
      'Social Media Freelancer Bangladesh',
      'Facebook Marketing Bangladesh',
      'Instagram Marketing Bangladesh',
      'Social Media Management',
      'Social Media Strategy',
      'Social Media Growth'
    ],
    seoTitle: 'Social Media Marketing Bangladesh | Jahan Ali',
    metaDescription: 'Build a stronger social media presence with professional social media marketing services from Jahan Ali, including strategy, content, growth and paid campaigns.',
    h1: 'Social Media Marketing Services in Bangladesh',
    tagline: 'Transform social channels into brand-building and customer acquisition engines with strategic storytelling.',
    intro: 'Social media is where your target audience spends their daily attention. Building a dominant social media presence requires more than random posts; it demands a cohesive brand voice, engaging visual identity, value-packed content pillars, and active community management. Jahan Ali helps brands build loyal followings that translate into measurable business revenue.',
    sections: [
      {
        title: 'Social Media Strategy',
        content: 'Crafting comprehensive content strategies based on audience psychographics, competitor whitespace analysis, and brand narrative positioning.'
      },
      {
        title: 'Facebook & Instagram Marketing',
        content: 'Content production, reel/short-form video scripting, carousel designs, and community management across Meta’s primary channels.'
      },
      {
        title: 'Content Strategy & Calendar Planning',
        content: 'Structured content pillars (Educational, Entertaining, Inspiring, Promotional) delivered through organized monthly publishing schedules.'
      },
      {
        title: 'Audience Growth & Engagement',
        content: 'Organic engagement strategies, comment moderation, direct message lead workflows, and strategic hashtag/topic optimization.'
      },
      {
        title: 'Analytics & Performance Reporting',
        content: 'Monthly reporting on reach, engagement rate, follower growth velocity, click-through rates, and inbound conversion metrics.'
      }
    ],
    process: [
      { step: '01', title: 'Brand & Audience Audit', description: 'Analyze existing profiles, target demographics, and top industry competitors.' },
      { step: '02', title: 'Content Pillars & Visual Guide', description: 'Define core messaging themes, visual templates, and posting schedule.' },
      { step: '03', title: 'Production & Publishing', description: 'Write compelling copies, design high-impact graphics, and schedule posts.' },
      { step: '04', title: 'Community & Performance Review', description: 'Engage audience, monitor sentiment, and optimize content based on analytics.' }
    ],
    pricingPackages: [
      {
        name: 'Starter Brand',
        price: '$199',
        period: '/month',
        description: 'Maintain an active, polished brand presence on Facebook and Instagram.',
        features: [
          '12 Custom High-Impact Graphics / Month',
          'Professional Persuasive Copywriting',
          'Hashtag & Topic Strategy',
          'Scheduled Publishing on 2 Platforms',
          'Monthly Performance Report'
        ],
        ctaText: 'Start Organic'
      },
      {
        name: 'Growth & Community',
        price: '$399',
        period: '/month',
        isPopular: true,
        description: 'Engineered for brands wanting consistent engagement, reel concepts, and audience growth.',
        features: [
          '20 High-Quality Posts (Carousels + Graphics)',
          '4 Short-Form Video / Reel Scripts & Edits',
          'Active Comment & DM Moderation',
          'Story Engagement & Poll Strategies',
          'Monthly Content Calendar Planning Call',
          'WhatsApp Priority Support'
        ],
        ctaText: 'Grow Following'
      },
      {
        name: 'Total Brand Authority',
        price: '$699',
        period: '/month',
        description: 'Complete brand management across FB, IG, LinkedIn, and YouTube for market leaders.',
        features: [
          '30 Daily Posts & Dedicated Content Pillars',
          '8 High-Engaging Reels / Shorts Production',
          'Influencer Collaboration Outreach',
          'Paid Post Boost & Ad Strategy Alignment',
          'Dedicated Social Media Manager',
          'Weekly Analytics & Creative Sync Calls'
        ],
        ctaText: 'Build Authority'
      }
    ],
    whyChoose: [
      'Brand Identity Focus: We align social content with your company’s long-term brand authority and business objectives.',
      'Multi-Format Mastery: Expertise in short-form video concepts, informational carousels, and engaging copy.',
      'Conversion-Oriented: Every content pillar is engineered to guide followers down the sales funnel.'
    ],
    faqs: [
      {
        question: 'How much does social media marketing cost?',
        answer: 'Monthly retainers depend on posting frequency, content formats (static graphics vs. video production), and community management scope.'
      },
      {
        question: 'Which social media platforms do you manage?',
        answer: 'We specialize in Facebook, Instagram, LinkedIn, YouTube, and TikTok based on where your target buyers are most active.'
      },
      {
        question: 'Can you grow a new Facebook or Instagram page from scratch?',
        answer: 'Yes, we develop zero-to-one launch strategies combining organic content velocity with targeted boost campaigns to gain initial traction.'
      },
      {
        question: 'Do you create social media strategies?',
        answer: 'Yes, every engagement begins with a tailored social media roadmap defining tone of voice, content pillars, competitor analysis, and KPI goals.'
      },
      {
        question: 'How long does social media marketing take to show results?',
        answer: 'Engagement and brand perception improve within 30 days. Substantial follower growth and inbound inquiries compound across 3 to 6 months.'
      }
    ],
    internalLinks: [
      {
        title: 'Facebook & Meta Ads',
        path: '/services/meta-ads',
        anchorText: 'targeted Facebook and Meta advertising',
        context: 'Amplify top-performing organic social posts with targeted Facebook and Meta advertising for exponential reach.',
        category: 'digital'
      },
      {
        title: 'Digital Marketing Services',
        path: '/services/digital-marketing',
        anchorText: 'end-to-end digital marketing solutions',
        context: 'Social media marketing functions as a key awareness pillar within end-to-end digital marketing solutions.',
        category: 'digital'
      }
    ]
  },

  'lead-generation': {
    id: 'lead-generation',
    slug: 'lead-generation',
    category: 'digital',
    categoryLabel: 'High-Ticket Lead Generation',
    url: '/services/lead-generation',
    primaryKeyword: 'Lead Generation Services Bangladesh',
    secondaryKeywords: [
      'Lead Generation Expert Bangladesh',
      'Lead Generation Freelancer Bangladesh',
      'B2B Lead Generation Bangladesh',
      'Online Lead Generation Services',
      'Business Lead Generation',
      'Lead Generation Consultant',
      'Digital Lead Generation',
      'Qualified Lead Generation',
      'Lead Generation Strategy',
      'Customer Acquisition'
    ],
    seoTitle: 'Lead Generation Services Bangladesh | Jahan Ali',
    metaDescription: 'Generate targeted business leads with professional lead generation services from Jahan Ali. Build effective acquisition strategies for B2B and online businesses.',
    h1: 'Lead Generation Services in Bangladesh',
    tagline: 'Fill your sales pipeline with verified, pre-qualified prospective buyers ready to do business with you.',
    intro: 'Generating leads is not about collecting meaningless contact lists; it is about attracting qualified decision-makers who have an active need and budget for your solution. Jahan Ali builds automated lead generation ecosystems combining targeted ad funnels, high-converting landing pages, lead qualification forms, and instant CRM notifications.',
    sections: [
      {
        title: 'What Is Lead Generation?',
        content: 'Lead generation is the strategic process of identifying, attracting, and initiating consumer or business interest in your products and services through inbound and outbound digital channels.'
      },
      {
        title: 'B2B Lead Generation',
        content: 'Prospecting high-value B2B decision-makers across LinkedIn, Google Search, and industry databases with personalized outreach and value-first content.'
      },
      {
        title: 'Digital Lead Generation Funnels',
        content: 'End-to-end paid advertising pipelines on Google and Meta that capture prospect information through frictionless lead forms and dedicated landing pages.'
      },
      {
        title: 'Landing Page Strategy & Conversion Rate Optimization',
        content: 'Designing custom, high-speed landing pages with compelling headlines, social proof, objection handling, and clear single calls to action.'
      },
      {
        title: 'Lead Qualification & CRM Automation',
        content: 'Automated qualification filters to separate high-intent buyers from tire-kickers, instantly syncing qualified leads to your sales team via WhatsApp, SMS, or CRM.'
      }
    ],
    process: [
      { step: '01', title: 'Ideal Customer Profile (ICP) Definition', description: 'Define the exact demographics, company size, and pain points of your dream clients.' },
      { step: '02', title: 'Funnel & Lead Magnet Creation', description: 'Build high-converting landing pages, instant forms, and compelling value offers.' },
      { step: '03', title: 'Traffic Channel Activation', description: 'Deploy hyper-targeted Google and Meta campaigns directing prospects to the funnel.' },
      { step: '04', title: 'Qualification & CRM Sync', description: 'Route pre-qualified leads directly to your sales team for instant follow-up.' }
    ],
    pricingPackages: [
      {
        name: 'Sprint Funnel',
        price: '$349',
        period: '/month',
        description: 'For small service providers looking to generate 20-50 qualified local inquiries per month.',
        features: [
          'High-Converting Single Lead Landing Page',
          'Meta or Google Lead Ad Campaign Setup',
          'Basic Lead Qualification Form (3-5 Questions)',
          'Instant Email & WhatsApp Lead Notifications',
          'Bi-Weekly Campaign Optimization'
        ],
        ctaText: 'Start Lead Sprint'
      },
      {
        name: 'Pipeline Engine',
        price: '$649',
        period: '/month',
        isPopular: true,
        description: 'Our most popular lead generation system for B2B, real estate, and high-ticket service companies.',
        features: [
          'Multi-Step Interactive Qualification Quiz/Funnel',
          'Dual Channel Traffic (Meta Ads + Google Search)',
          'Automated WhatsApp & SMS Instant Follow-ups',
          'CRM Integration (HubSpot, GoHighLevel, Sheets)',
          'A/B Split Testing on Copy & Landing Pages',
          'Weekly Lead Quality Review Calls',
          'Priority WhatsApp Channel Access'
        ],
        ctaText: 'Build Pipeline'
      },
      {
        name: 'Enterprise Inbound Scale',
        price: '$1,199',
        period: '/month',
        description: 'High-volume lead engine with manual prospect enrichment and phone-verification workflows.',
        features: [
          'Custom B2B Prospect Database Scraping & Verification',
          'Omnichannel Paid Ad Capture (Google, Meta, LinkedIn)',
          'Automated Multi-Touch Email Nurture Sequences',
          'Dedicated Lead Qualification Protocol',
          'Custom Zapier & API Integrations',
          'Bi-Weekly Sales Team Conversion Coaching',
          '24/7 Dedicated Account Manager'
        ],
        ctaText: 'Scale Inbound'
      }
    ],
    whyChoose: [
      'Focus on Lead Quality: We prioritize verified phone numbers and pre-qualified inquiries over junk volume.',
      'Speed to Lead Integration: Real-time automated notifications to ensure your team calls leads while interest is peak.',
      'Proven Multi-Industry Experience: Successful lead funnels deployed across real estate, education, agency services, and B2B.'
    ],
    faqs: [
      {
        question: 'What is lead generation?',
        answer: 'Lead generation is the process of attracting and converting strangers and prospects into someone who has indicated interest in your company’s product or service.'
      },
      {
        question: 'How much does lead generation cost?',
        answer: 'Cost per lead (CPL) varies significantly by industry, audience targeting, and competition. We optimize every element of the funnel to achieve the lowest possible cost per qualified lead.'
      },
      {
        question: 'Do you provide B2B lead generation?',
        answer: 'Yes, we build targeted B2B lead generation systems targeting corporate decision-makers, agency executives, and business owners.'
      },
      {
        question: 'How do you find qualified leads?',
        answer: 'We use high-intent search advertising, targeted social ad funnels, and multi-step qualification questionnaires to ensure prospects meet your criteria before they submit their details.'
      },
      {
        question: 'Can you generate leads for small businesses?',
        answer: 'Yes, our lead generation strategies are fully scalable and can be tailored for local small businesses, medical clinics, law firms, and service contractors.'
      }
    ],
    internalLinks: [
      {
        title: 'Google Ads & PPC',
        path: '/services/google-ads',
        anchorText: 'high-intent Google Ads management',
        context: 'Drive immediate inbound inquiries by pairing your funnels with high-intent Google Ads management.',
        category: 'digital'
      },
      {
        title: 'Business Growth Consulting',
        path: '/services/business-growth',
        anchorText: 'holistic business growth consulting',
        context: 'Scale your entire sales pipeline with holistic business growth consulting and customer acquisition modeling.',
        category: 'digital'
      }
    ]
  },

  'web-development': {
    id: 'web-development',
    slug: 'web-development',
    category: 'digital',
    categoryLabel: 'Modern Web Development',
    url: '/services/web-development',
    primaryKeyword: 'Web Development Services Bangladesh',
    secondaryKeywords: [
      'Web Developer Bangladesh',
      'Website Development Bangladesh',
      'Website Developer Bangladesh',
      'Freelance Web Developer Bangladesh',
      'Business Website Development',
      'Professional Website Development',
      'Landing Page Development',
      'WordPress Developer Bangladesh',
      'Responsive Website Development',
      'SEO Friendly Website Development'
    ],
    seoTitle: 'Web Development Services Bangladesh | Jahan Ali',
    metaDescription: 'Get modern, responsive and SEO-friendly website development services from Jahan Ali. Build professional business websites, landing pages and digital experiences.',
    h1: 'Web Development Services in Bangladesh',
    tagline: 'Fast, secure, responsive, and SEO-optimized web development engineered to convert visitors into customers.',
    intro: 'Your website is the digital headquarters of your business. A slow, outdated, or poorly structured website leaks potential customers every single day. Jahan Ali builds modern, mobile-responsive, lightning-fast, and SEO-engineered websites utilizing modern technologies like React, Tailwind CSS, TypeScript, WordPress, and Cloudflare.',
    sections: [
      {
        title: 'Professional Website Development',
        content: 'Custom web solutions built with clean code, modern UI aesthetics, accessible structure, and optimal performance across all screen sizes.'
      },
      {
        title: 'Business Websites & Corporate Portals',
        content: 'High-impact corporate websites designed to establish brand credibility, showcase case studies, and drive corporate inquiries.'
      },
      {
        title: 'High-Converting Landing Pages',
        content: 'Laser-focused sales landing pages built specifically for paid ad campaigns with instant load speeds and persuasive conversion paths.'
      },
      {
        title: 'WordPress & CMS Development',
        content: 'Easy-to-manage WordPress sites built with custom themes, lightweight code, and zero bloated plugins for optimal speed.'
      },
      {
        title: 'SEO-Friendly Development & Core Web Vitals',
        content: 'Engineered from the ground up to score 90+ on Google PageSpeed Insights, featuring clean semantic HTML, structured data, and optimized assets.'
      },
      {
        title: 'Cloudflare, Security & Deployment',
        content: 'Enterprise-grade CDN configuration, SSL certificate installation, DDoS protection, and automated deployment pipelines.'
      }
    ],
    process: [
      { step: '01', title: 'Architecture & UI/UX Wireframing', description: 'Plan the site structure, user journeys, and modern visual design layouts.' },
      { step: '02', title: 'Development & Mobile Optimization', description: 'Code the responsive front-end and back-end logic with pristine attention to detail.' },
      { step: '03', title: 'SEO & Performance Tuning', description: 'Implement Schema markup, meta tags, image compression, and Core Web Vitals optimization.' },
      { step: '04', title: 'Testing & Launch Deployment', description: 'Deploy to fast CDN infrastructure, connect custom domains, and configure analytics.' }
    ],
    pricingPackages: [
      {
        name: 'High-Converting Landing Page',
        price: '$299',
        period: '/one-time',
        description: 'Single-page conversion powerhouse built specifically for paid ads or product launches.',
        features: [
          'Custom Modern UI/UX Design',
          'Mobile-First Responsive Layout',
          'Core Web Vitals 90+ Score Guarantee',
          'Lead Form / WhatsApp Integration',
          'On-Page SEO & Meta Tags',
          '3-5 Day Rapid Delivery'
        ],
        ctaText: 'Build Landing Page'
      },
      {
        name: 'Business Website',
        price: '$599',
        period: '/one-time',
        isPopular: true,
        description: 'Full multi-page corporate website designed to establish dominant market authority.',
        features: [
          '5-8 Custom Responsive Pages',
          'WordPress CMS or React/Tailwind Stack',
          'Comprehensive On-Page SEO & Schema Markup',
          'Speed & Security Optimization (Cloudflare CDN)',
          'Blog / Case Studies Architecture',
          'Google Analytics 4 & Tag Manager Setup',
          '30 Days Free Post-Launch Support'
        ],
        ctaText: 'Build Business Site'
      },
      {
        name: 'Custom Web Portal / E-Com',
        price: '$1,199',
        period: '/one-time',
        description: 'Advanced custom web applications, e-commerce stores, or membership platforms.',
        features: [
          'Full-Stack Custom Architecture',
          'Payment Gateway Integration (bKash/Nagad/Stripe)',
          'Custom Database & API Integrations',
          'User Authentication & Admin Dashboard',
          'Advanced Interactive Components & Animations',
          'Automated CI/CD Deployment',
          '60 Days Dedicated Technical Support'
        ],
        ctaText: 'Build Custom Portal'
      }
    ],
    whyChoose: [
      'Marketer-Minded Developer: We don’t just write code; we design conversion architectures that actually generate sales.',
      'Lightning-Fast Performance: Optimized for ultra-fast load times on mobile devices and modern browsers.',
      'Clean Code & Easy Maintenance: Built with scalable standards that are easy to update and expand.'
    ],
    faqs: [
      {
        question: 'How much does website development cost in Bangladesh?',
        answer: 'Costs depend on site complexity, number of pages, custom interactive features, and CMS requirements. Custom quotes are provided after a project discovery call.'
      },
      {
        question: 'How long does it take to build a website?',
        answer: 'High-converting landing pages can be built in 3 to 7 days. Full business websites typically take 2 to 4 weeks from concept to final launch.'
      },
      {
        question: 'Do you build responsive and mobile-friendly websites?',
        answer: 'Yes, every website is built mobile-first, ensuring flawless rendering on smartphones, tablets, laptops, and 4K displays.'
      },
      {
        question: 'Can you optimize website speed and Core Web Vitals?',
        answer: 'Yes, we optimize code delivery, leverage CDNs, compress images, and eliminate render-blocking scripts to achieve top speed scores.'
      },
      {
        question: 'Can you build an SEO-friendly website?',
        answer: 'Every website we build includes semantic HTML5 tags, JSON-LD structured data, clean URL paths, automated sitemaps, and optimized metadata.'
      }
    ],
    internalLinks: [
      {
        title: 'SEO Services Bangladesh',
        path: '/services/seo',
        anchorText: 'technical and on-page SEO services',
        context: 'A high-performance website provides the ideal foundation for technical and on-page SEO services.',
        category: 'digital'
      },
      {
        title: 'Lead Generation Services',
        path: '/services/lead-generation',
        anchorText: 'high-converting landing page architectures',
        context: 'Maximize ad campaign ROI by combining fast web development with high-converting landing page architectures.',
        category: 'digital'
      }
    ]
  },

  'business-growth': {
    id: 'business-growth',
    slug: 'business-growth',
    category: 'digital',
    categoryLabel: 'Business Growth & Consulting',
    url: '/services/business-growth',
    primaryKeyword: 'Business Growth Consultant Bangladesh',
    secondaryKeywords: [
      'Business Growth Consultant',
      'Digital Growth Consultant Bangladesh',
      'Business Consultant Bangladesh',
      'Online Business Consultant',
      'Digital Business Strategy',
      'Business Growth Strategy',
      'Online Business Growth',
      'Customer Acquisition Strategy',
      'Digital Strategy Consultant',
      'Growth Strategy Consultant'
    ],
    seoTitle: 'Business Growth Consultant Bangladesh | Jahan Ali',
    metaDescription: 'Get practical digital business growth consulting from Jahan Ali. Develop strategies for customer acquisition, online visibility, marketing and sustainable growth.',
    h1: 'Business Growth Consulting in Bangladesh',
    tagline: 'Scale revenue sustainably with strategic customer acquisition, digital systems, and market expansion roadmaps.',
    intro: 'Growing a business in the modern economy requires a deep integration of marketing, technology, sales operations, and customer unit economics. Jahan Ali works directly with business owners, startup founders, and service professionals to identify growth bottlenecks, eliminate inefficient spending, and build scalable digital growth systems.',
    sections: [
      {
        title: 'Digital Business Growth',
        content: 'Holistic consulting that aligns your product offering, digital channels, pricing model, and sales team to accelerate monthly recurring revenue.'
      },
      {
        title: 'Business & Market Analysis',
        content: 'Comprehensive analysis of your current market positioning, competitor advantages, customer churn rates, and untapped market niches.'
      },
      {
        title: 'Customer Acquisition Strategy',
        content: 'Engineering predictable, repeatable customer acquisition channels combining SEO, PPC, organic content, and referral loops.'
      },
      {
        title: 'Digital Marketing & Sales Alignment',
        content: 'Connecting lead generation campaigns with efficient sales follow-up processes to maximize close rates.'
      },
      {
        title: 'Building a Digital Growth System',
        content: 'Transitioning your business from chaotic ad-hoc marketing to an automated, metric-driven growth machine with clear dashboards.'
      }
    ],
    process: [
      { step: '01', title: 'Deep Discovery & Unit Economics', description: 'Review historical revenue data, customer acquisition costs, and churn rates.' },
      { step: '02', title: 'Opportunity & Bottleneck Teardown', description: 'Identify where potential revenue is currently leaking in your marketing and sales funnels.' },
      { step: '03', title: '90-Day Growth Roadmap', description: 'Construct a step-by-step growth plan with prioritized initiatives and clear KPIs.' },
      { step: '04', title: 'Bi-Weekly Advisory & Execution', description: 'Hands-on strategic consulting sessions to guide implementation and overcome roadblocks.' }
    ],
    pricingPackages: [
      {
        name: 'Growth Audit & Roadmap',
        price: '$299',
        period: '/one-time',
        description: 'Comprehensive 360° teardown of your marketing funnels, customer unit economics, and 90-day action plan.',
        features: [
          'Complete Funnel & Channel Audit',
          'Customer Acquisition Cost (CAC) Analysis',
          'Competitor Advantage & Gap Teardown',
          'Custom 90-Day Execution Roadmap',
          '60-Minute Deep-Dive Strategy Call',
          'Recording & Actionable Document Deliverables'
        ],
        ctaText: 'Get Growth Audit'
      },
      {
        name: 'Bi-Weekly Strategic Advisory',
        price: '$599',
        period: '/month',
        isPopular: true,
        description: 'Ongoing consulting partnership to guide marketing execution, overcome roadblocks, and scale revenue.',
        features: [
          'Two 60-Minute 1-on-1 Strategic Consulting Calls / Month',
          'Continuous Funnel & Creative Review',
          'Marketing Team Workflow & KPI Alignment',
          'Offer Optimization & Pricing Structure Guidance',
          'Direct WhatsApp Strategy Access',
          'Monthly Metric Review Dashboard'
        ],
        ctaText: 'Retain Advisor'
      },
      {
        name: 'Fractional Growth Partner',
        price: '$1,199',
        period: '/month',
        description: 'Executive-level growth leadership acting as your interim CMO to scale business operations.',
        features: [
          'Hands-On Strategy Leadership for All Digital Channels',
          'Weekly Growth Sprints & Marketing Team Direction',
          'End-to-End Analytics & Revenue Attribution Modeling',
          'Vendor & Tech Stack Vetting',
          'Direct High-Priority Access (Slack / WhatsApp)',
          'Unlimited Ad-Hoc Advisory Sessions',
          'Strict 1-Client-Per-Niche Exclusivity'
        ],
        ctaText: 'Partner with Jahan'
      }
    ],
    whyChoose: [
      'Founder-to-Founder Perspective: Real-world experience building and operating multiple business ventures.',
      'Practical & Non-Theoretical: Actionable growth playbooks focused on cash flow and profitability.',
      'Multi-Disciplinary Expertise: Covering marketing, technology, team workflows, and customer experience.'
    ],
    faqs: [
      {
        question: 'What does a business growth consultant do?',
        answer: 'A business growth consultant examines your business model, customer acquisition strategies, and operational bottlenecks to build and guide executable plans that scale revenue.'
      },
      {
        question: 'How can digital marketing grow my business?',
        answer: 'Digital marketing opens predictable, measurable channels to reach targeted customers who are actively looking for your products or services.'
      },
      {
        question: 'Do you work with small and medium businesses?',
        answer: 'Yes, we work with startups, established SMEs, e-commerce stores, and high-ticket service companies.'
      },
      {
        question: 'How do you identify growth opportunities?',
        answer: 'We analyze customer lifetime value (LTV), acquisition costs (CAC), conversion funnel leakages, competitor pricing, and search demand data.'
      }
    ],
    internalLinks: [
      {
        title: 'Digital Marketing Services',
        path: '/services/digital-marketing',
        anchorText: 'integrated digital marketing services',
        context: 'Execute your growth roadmap with integrated digital marketing services across paid and organic channels.',
        category: 'digital'
      },
      {
        title: 'Lead Generation Services',
        path: '/services/lead-generation',
        anchorText: 'consistent lead generation pipelines',
        context: 'Build consistent lead generation pipelines to fuel your business growth.',
        category: 'digital'
      }
    ]
  },

  'ai-digital-marketing': {
    id: 'ai-digital-marketing',
    slug: 'ai-digital-marketing',
    category: 'digital',
    categoryLabel: 'AI Marketing & Automation',
    url: '/services/ai-digital-marketing',
    primaryKeyword: 'AI Digital Marketing Bangladesh',
    secondaryKeywords: [
      'AI Marketing Consultant',
      'AI Marketing Services',
      'AI Tools for Digital Marketing',
      'AI Business Consultant Bangladesh',
      'AI Marketing Strategy',
      'AI Automation for Business',
      'AI-Powered Marketing',
      'AI Tools for SEO',
      'AI Content Strategy',
      'Digital Marketing AI Tools'
    ],
    seoTitle: 'AI Digital Marketing & AI Business Tools | Jahan Ali',
    metaDescription: 'Explore AI-powered digital marketing workflows, AI tools and practical automation strategies with Jahan Ali for marketing, SEO, content and business growth.',
    h1: 'AI-Powered Digital Marketing & Business Solutions',
    tagline: 'Supercharge marketing efficiency, content velocity, and workflow automation with modern artificial intelligence.',
    intro: 'Artificial intelligence is fundamentally reshaping digital marketing. From semantic keyword research and predictive audience modeling to automated copywriting and multi-platform workflows, leveraging AI allows small teams to achieve the output of entire agencies. Jahan Ali integrates practical AI workflows that enhance human creativity and strategic precision.',
    sections: [
      {
        title: 'How I Use AI in Digital Marketing',
        content: 'We combine state-of-the-art Large Language Models and automation tools to streamline research, ad ideation, data analysis, and content production workflows.'
      },
      {
        title: 'AI for SEO & Keyword Clustering',
        content: 'Using AI algorithms to cluster thousands of search queries into thematic topical maps, uncover competitor semantic gaps, and draft comprehensive content outlines.'
      },
      {
        title: 'AI for Content Strategy & Copywriting',
        content: 'Developing brand-specific prompt frameworks that generate high-converting ad variations, social media hooks, and email sequences in your unique brand voice.'
      },
      {
        title: 'Marketing Automation & AI Workflows',
        content: 'Connecting AI endpoints with Zapier, Make, and webhook systems to automate lead qualification, CRM data enrichment, and instant customer responses.'
      },
      {
        title: 'Human Strategy + AI Execution',
        content: 'AI is a powerful amplifier, but without human nuance, empathy, and strategic direction, AI content falls flat. We ensure human expertise guides every output.'
      }
    ],
    process: [
      { step: '01', title: 'Workflow & Tool Assessment', description: 'Analyze your team’s repetitive marketing tasks and identify automation opportunities.' },
      { step: '02', title: 'Custom AI Framework Development', description: 'Build tailored prompt systems, knowledge bases, and custom AI agents.' },
      { step: '03', title: 'Integration & Testing', description: 'Connect AI tools into your daily marketing, SEO, and lead distribution workflows.' },
      { step: '04', title: 'Training & Continuous Refinement', description: 'Train your team on effective prompt engineering and quality assurance guidelines.' }
    ],
    pricingPackages: [
      {
        name: 'AI Workflow Setup',
        price: '$249',
        period: '/one-time',
        description: 'For small teams looking to supercharge research, copywriting, and SEO speed with custom prompt libraries.',
        features: [
          'Brand Voice Prompt Engineering Matrix',
          'AI-Powered Keyword Clustering & Outline System',
          'Social Media & Ad Creative Generator Setup',
          '60-Minute Team AI Workflow Workshop',
          'Comprehensive Resource Guide'
        ],
        ctaText: 'Setup AI Workflows'
      },
      {
        name: 'AI Marketing Automation',
        price: '$499',
        period: '/one-time',
        isPopular: true,
        description: 'End-to-end integration of automated AI agents with your CRM, lead forms, and email funnels.',
        features: [
          'Zapier / Make Automated AI Pipelines',
          'Instant AI Lead Qualification & Scoring',
          'Automated AI WhatsApp/Email Auto-Responder',
          'AI Competitor Monitoring & Alert Feeds',
          'Testing & Error-Handling Protocol',
          '30 Days Technical Fine-Tuning Support'
        ],
        ctaText: 'Automate Marketing'
      },
      {
        name: 'Custom AI Transformation',
        price: '$899',
        period: '/one-time',
        description: 'Enterprise AI adoption covering custom knowledge bases, automated content engines, and staff training.',
        features: [
          'Proprietary Company Knowledge Base Embeddings',
          'Custom Multi-Agent Content Production Pipeline',
          'Full-Funnel Customer Support AI Chatbot Setup',
          'Staff Prompt Mastery Masterclass (2 Sessions)',
          'API Infrastructure & Cost Optimization',
          '60 Days Ongoing Optimization Advisory'
        ],
        ctaText: 'Transform with AI'
      }
    ],
    whyChoose: [
      'Practical, No-Hype Approach: We focus on measurable business efficiency and ROI, not superficial AI parlor tricks.',
      'Deep Technical Understanding: Hands-on experience with LLM APIs, prompt engineering, and workflow automation.',
      'Quality & Brand Preservation: Strict editorial standards to ensure all AI-assisted output meets high human benchmarks.'
    ],
    faqs: [
      {
        question: 'How can AI help digital marketing?',
        answer: 'AI accelerates market research, automates routine data analysis, generates multivariate ad creative ideas, and enables 24/7 personalized customer interactions.'
      },
      {
        question: 'What AI tools do you work with?',
        answer: 'We utilize Google Gemini API, OpenAI GPT-4, Claude, Midjourney, Zapier, Make, and proprietary automated scripts.'
      },
      {
        question: 'Can AI improve SEO?',
        answer: 'Yes, AI helps analyze large keyword datasets, identify content gaps, create semantic topical clusters, and optimize meta information efficiently.'
      },
      {
        question: 'Should businesses use AI for content creation?',
        answer: 'AI is fantastic for drafting, brainstorming, and outlining. However, final content should always be reviewed, enriched with first-hand experience, and fact-checked by human experts.'
      }
    ],
    internalLinks: [
      {
        title: 'Digital Marketing Services',
        path: '/services/digital-marketing',
        anchorText: 'digital marketing services in Bangladesh',
        context: 'Discover how AI enhances our comprehensive digital marketing services in Bangladesh.',
        category: 'digital'
      },
      {
        title: 'SEO Services Bangladesh',
        path: '/services/seo',
        anchorText: 'data-driven SEO services',
        context: 'Learn how we incorporate AI keyword clustering into data-driven SEO services.',
        category: 'digital'
      }
    ]
  },

  'air-ticketing': {
    id: 'air-ticketing',
    slug: 'air-ticketing',
    category: 'travel',
    categoryLabel: 'Travel & Aviation Operations',
    url: '/travel/air-ticketing',
    primaryKeyword: 'Air Ticketing Services Bangladesh',
    secondaryKeywords: [
      'Air Ticketing Agent Bangladesh',
      'Air Ticketing Consultant Bangladesh',
      'Flight Ticket Booking Bangladesh',
      'Airline Ticketing Bangladesh',
      'Air Ticketing Officer Bangladesh',
      'GDS Ticketing Bangladesh',
      'Airline Reservation Bangladesh',
      'Travel Booking Bangladesh',
      'Flight Booking Consultant Bangladesh'
    ],
    seoTitle: 'Air Ticketing Services Bangladesh | Jahan Ali',
    metaDescription: 'Learn about Jahan Ali\'s air ticketing and GDS experience, including Amadeus, Galileo/Travelport and Sabre reservation and ticketing workflows.',
    h1: 'Air Ticketing & GDS Services',
    tagline: 'Professional airline reservation, PNR management, fare construction, and Global Distribution System (GDS) ticketing expertise.',
    intro: 'Air ticketing in international aviation requires technical mastery of Global Distribution Systems (GDS), airline routing rules, fare class hierarchies, and baggage policies. As Managing Director of Dreams Fly International, Jahan Ali brings extensive hands-on experience across Amadeus, Galileo / Travelport, and Sabre GDS systems, ensuring seamless flight booking, reissuance, and travel logistics.',
    sections: [
      {
        title: 'Air Ticketing Services',
        content: 'Comprehensive flight booking consultation for domestic, regional, and long-haul international routes across leading global airlines.'
      },
      {
        title: 'Airline Reservation & PNR Management',
        content: 'Expert creation, modification, and management of Passenger Name Records (PNR), special service requests (SSR), meal preferences, and seat assignments.'
      },
      {
        title: 'Amadeus GDS Expertise',
        content: 'Deep command of Amadeus GDS terminal commands, availability searches, automated pricing, e-ticket issuance, and schedule change handling.'
      },
      {
        title: 'Galileo / Travelport GDS',
        content: 'Extensive workflow experience within Galileo GDS, handling complex multi-city itineraries, code-share routes, and private airline fares.'
      },
      {
        title: 'Sabre GDS',
        content: 'Proficiency in Sabre reservation system commands, air pricing formats, ticket revalidation, and ancillary service ticketing.'
      },
      {
        title: 'Fare & Availability Construction',
        content: 'Optimizing flight routes to find the most cost-effective fare classes, transit durations, and baggage allowances for corporate and leisure travelers.'
      },
      {
        title: 'Reissue, Date Change & Cancellation Workflows',
        content: 'Calculating complex fare differences, airline penalty fees, tax recalculations, and processing timely refunds according to IATA regulations.'
      }
    ],
    process: [
      { step: '01', title: 'Itinerary & Preference Gathering', description: 'Collect traveler schedule requirements, passport details, transit preferences, and baggage needs.' },
      { step: '02', title: 'GDS Route & Fare Optimization', description: 'Search Amadeus, Galileo, and Sabre to construct the best price-to-comfort flight routing.' },
      { step: '03', title: 'PNR Creation & Ticket Issuance', description: 'Create verified PNR, input traveler credentials, and issue electronic tickets (e-ticket).' },
      { step: '04', title: 'Post-Issuance Support', description: 'Provide ongoing flight status alerts, schedule change notifications, and date-change assistance.' }
    ],
    pricingPackages: [
      {
        name: 'Standard Ticket Booking',
        price: 'BDT 1,500',
        period: '/passenger',
        description: 'For individual leisure and business travelers seeking optimized flight routing and lowest fare classes.',
        features: [
          'Multi-GDS Fare Comparison (Amadeus & Sabre)',
          'Optimal Route & Shortest Layover Selection',
          'Seat Assignment & Extra Baggage Coordination',
          'Instant Electronic Ticket (e-Ticket) Issuance',
          'Pre-Departure Schedule Alerts'
        ],
        ctaText: 'Book Flight Ticket'
      },
      {
        name: 'Corporate Travel Retainer',
        price: 'BDT 4,500',
        period: '/month',
        isPopular: true,
        description: 'For corporate companies & executives requiring priority 24/7 flight booking & date modifications.',
        features: [
          'Unlimited Corporate Ticket Reservations',
          'Priority Free Date Change & Reissuance Support',
          'Access to Private Corporate Airline Fares',
          'Consolidated Monthly Billing & Expense Invoices',
          '24/7 Emergency Airport Transit Assistance',
          'Direct Dedicated Travel Manager'
        ],
        ctaText: 'Retain Corporate Travel'
      },
      {
        name: 'VIP & Group Delegation',
        price: 'Custom Quote',
        period: '/group itinerary',
        description: 'Specialized coordination for large groups, Umrah/Hajj delegations, and multi-city world tours.',
        features: [
          'Group Block PNR Allocation & Fare Negotiations',
          'Multi-Country Complex Routing Construction',
          'Special Baggage & Wheelchair / Medical SSR',
          'Dedicated On-Call Aviation Officer',
          'Full Itinerary Dossier for Visa Submission'
        ],
        ctaText: 'Inquire Group Booking'
      }
    ],
    whyChoose: [
      'GDS Certified Experience: Hands-on mastery of Amadeus, Galileo, and Sabre reservation platforms.',
      'Agency Leadership: Managing Director at Dreams Fly International, handling real-world passenger itineraries daily.',
      'Complex Route Specialists: Skilled in optimizing multi-city international flights and tight connection logistics.'
    ],
    faqs: [
      {
        question: 'What is GDS in air ticketing?',
        answer: 'GDS (Global Distribution System) is an international computerized network used by travel agents and airlines to access real-time flight inventory, price fares, and issue airline tickets.'
      },
      {
        question: 'What is Amadeus GDS?',
        answer: 'Amadeus is one of the world’s leading GDS platforms, widely utilized by international airlines and travel agencies for flight availability, reservation, and ticketing.'
      },
      {
        question: 'What is Galileo / Travelport GDS?',
        answer: 'Galileo, part of the Travelport network, is a major GDS providing real-time airline reservation, automated fare calculation, and ticketing across global airline partners.'
      },
      {
        question: 'What is Sabre GDS?',
        answer: 'Sabre is a major global travel technology and reservation platform that powers airline scheduling, fare shopping, and booking for international carriers.'
      },
      {
        question: 'What is airline ticket reissue vs date change?',
        answer: 'A date change modifies flight dates on an existing ticket. If the new flight has a different fare class or tax structure, the ticket must be officially "reissued" with the updated fare calculation and penalty payment.'
      },
      {
        question: 'What is the difference between ticket refund and cancellation?',
        answer: 'A cancellation voids or cancels an active itinerary, while a refund is the financial reimbursement of the ticket value according to the airline’s fare rules.'
      }
    ],
    internalLinks: [
      {
        title: 'Visa Consultation Services',
        path: '/travel/visa-consultation',
        anchorText: 'expert visa consultation and documentation',
        context: 'Complete your travel arrangements with expert visa consultation and documentation support.',
        category: 'travel'
      },
      {
        title: 'Work Permit Assistance',
        path: '/travel/work-permit',
        anchorText: 'overseas work permit travel coordination',
        context: 'Air ticketing is one of the core services supporting overseas work permit travel coordination.',
        category: 'travel'
      }
    ]
  },

  'visa-consultation': {
    id: 'visa-consultation',
    slug: 'visa-consultation',
    category: 'travel',
    categoryLabel: 'Travel & Visa Consultancy',
    url: '/travel/visa-consultation',
    primaryKeyword: 'Visa Consultant Bangladesh',
    secondaryKeywords: [
      'Visa Consultancy Bangladesh',
      'Visa Processing Consultant Bangladesh',
      'Visa Application Assistance Bangladesh',
      'Travel Visa Consultant Bangladesh',
      'Visa Processing Services Bangladesh',
      'Visa Documentation Assistance',
      'Work Visa Consultant Bangladesh',
      'Travel Visa Assistance',
      'Visa Consultation Services'
    ],
    seoTitle: 'Visa Consultant Bangladesh | Visa Application Assistance | Jahan Ali',
    metaDescription: 'Get professional visa consultation and application assistance from Jahan Ali, including documentation guidance, application support and travel planning.',
    h1: 'Visa Consultation & Application Assistance',
    tagline: 'Professional document verification, embassy submission guidance, and accurate visa application assistance in Bangladesh.',
    intro: 'Navigating international visa requirements can be complex and stressful. A single documentation mistake or incomplete financial statement can lead to unexpected delays or visa refusal. Jahan Ali provides ethical, detail-oriented visa consultation, helping travelers, business delegates, and students prepare clean, embassy-compliant application files.',
    sections: [
      {
        title: 'Visa Consultation',
        content: 'One-on-one advisory sessions to evaluate your travel purpose, profile eligibility, embassy requirements, and necessary supporting credentials.'
      },
      {
        title: 'Visa Application Assistance',
        content: 'Step-by-step assistance filling out official online embassy application forms, scheduling biometric appointments, and organizing documentation dossiers.'
      },
      {
        title: 'Document Preparation Guidance',
        content: 'Clear checklists for bank statements, tax documents, employment verification letters, travel insurance, and flight itinerary reservations.'
      },
      {
        title: 'Application Process & Timeline Planning',
        content: 'Strategic scheduling to ensure applications are submitted well within embassy processing windows prior to intended travel dates.'
      },
      {
        title: 'Common Visa Application Mistakes',
        content: 'Proactively identifying and correcting inconsistencies between application forms, cover letters, and financial records before submission.'
      },
      {
        title: 'Why Professional Guidance Matters',
        content: 'Professional consultation minimizes stress, ensures 100% genuine documentation compliance, and maximizes the clarity and strength of your application.'
      }
    ],
    process: [
      { step: '01', title: 'Profile & Purpose Evaluation', description: 'Review your travel intent, destination country rules, and applicant background.' },
      { step: '02', title: 'Document Checklist & Audit', description: 'Provide customized document guidelines and thoroughly verify all papers.' },
      { step: '03', title: 'Application Form Completion', description: 'Accurately complete official embassy forms and schedule submission appointments.' },
      { step: '04', title: 'Pre-Submission File Review', description: 'Conduct a final review of the dossier to ensure compliance with consular standards.' }
    ],
    pricingPackages: [
      {
        name: 'Profile Audit & Checklist',
        price: 'BDT 3,000',
        period: '/applicant',
        description: 'For travelers preparing their own files who need expert verification to avoid refusal risks.',
        features: [
          '30-Minute 1-on-1 Profile Eligibility Assessment',
          'Country-Specific Embassy Document Checklist',
          'Financial & Solvency Paperwork Audit',
          'Identification of Common Application Red Flags',
          'Custom Cover Letter Structure Outline'
        ],
        ctaText: 'Get Profile Audit'
      },
      {
        name: 'Complete Application File',
        price: 'BDT 6,500',
        period: '/applicant',
        isPopular: true,
        description: 'Our standard end-to-end service for tourist, business, and visit visa applicants.',
        features: [
          'Official Online Embassy Form Completion',
          'Biometrics / Submission Appointment Scheduling',
          'Custom Tailored Professional Cover Letter Drafting',
          'Flight & Hotel Reservation Proofs (For Visa Submission)',
          'Complete File Indexing & Consular Dossier Prep',
          'Pre-Submission Verification Check'
        ],
        ctaText: 'Prepare Complete File'
      },
      {
        name: 'VIP Executive Concierge',
        price: 'BDT 12,000',
        period: '/applicant',
        description: 'Priority white-glove service for corporate executives, frequent flyers, and families.',
        features: [
          'Dedicated Senior Visa Consultant Assigned',
          'Priority Fast-Track Document Preparation',
          'Multi-Country / Schengen Itinerary Strategy',
          'Travel Insurance Arrangement & Verification',
          'Mock Visa Interview Preparation (If applicable)',
          '24/7 Direct WhatsApp Advisory'
        ],
        ctaText: 'Book VIP Concierge'
      }
    ],
    whyChoose: [
      'Ethical & Honest Guidance: We provide realistic, honest assessments without misleading or fake guarantees.',
      'Comprehensive Document Audits: Meticulous attention to detail to avoid common paperwork discrepancies.',
      'Multi-Country Experience: Experienced with tourist, business, and transit visa requirements worldwide.'
    ],
    faqs: [
      {
        question: 'What does a visa consultant do?',
        answer: 'A visa consultant guides you through country-specific visa requirements, reviews your supporting documents, helps complete application forms accurately, and prepares your submission file.'
      },
      {
        question: 'How does visa consultation work?',
        answer: 'We analyze your travel itinerary, provide a tailored document checklist, audit your papers for compliance, help fill forms, and guide you through appointment scheduling.'
      },
      {
        question: 'What documents are required for a visa application?',
        answer: 'Common documents include a valid passport, recent photographs, bank solvency certificates and statements, proof of employment or business ownership, travel itinerary, and hotel booking.'
      },
      {
        question: 'Do you guarantee visa approval?',
        answer: 'No ethical consultant can guarantee visa approval, as the final decision rests solely with the respective country’s embassy or consular officer. Our role is to ensure your application is accurate, transparent, and completely compliant.'
      },
      {
        question: 'How long does visa processing take?',
        answer: 'Processing times vary from 5 business days to several weeks depending on the destination country, visa category, and embassy workload.'
      }
    ],
    internalLinks: [
      {
        title: 'Air Ticketing & GDS Services',
        path: '/travel/air-ticketing',
        anchorText: 'confirmed flight itineraries and air ticketing',
        context: 'Pair your visa documentation with confirmed flight itineraries and air ticketing services.',
        category: 'travel'
      },
      {
        title: 'Work Permit Assistance',
        path: '/travel/work-permit',
        anchorText: 'overseas employment and work permit documentation',
        context: 'Explore specialized consultation for overseas employment and work permit documentation.',
        category: 'travel'
      }
    ]
  },

  'work-permit': {
    id: 'work-permit',
    slug: 'work-permit',
    category: 'travel',
    categoryLabel: 'Overseas Employment Advisory',
    url: '/travel/work-permit',
    primaryKeyword: 'Work Permit Consultant Bangladesh',
    secondaryKeywords: [
      'Work Permit Services Bangladesh',
      'Work Visa Consultant Bangladesh',
      'Work Permit Assistance Bangladesh',
      'Overseas Employment Consultant',
      'Work Visa Processing Bangladesh',
      'Work Permit Application Assistance',
      'Foreign Job Work Permit',
      'Work Visa Consultation'
    ],
    seoTitle: 'Work Permit Consultant Bangladesh | Jahan Ali',
    metaDescription: 'Explore work permit consultation and application assistance from Jahan Ali, including documentation guidance, application support and overseas employment information.',
    h1: 'Work Permit Consultation & Assistance',
    tagline: 'Professional consultation for overseas employment documentation, verification guidelines, and international work visa processes.',
    intro: 'Pursuing employment opportunities abroad requires strict adherence to international labor laws, employer sponsorship requirements, and government documentation protocols. Jahan Ali provides professional work permit consultation, guiding candidates through document attestation, employment contract review, and embassy work visa application procedures.',
    sections: [
      {
        title: 'Work Permit Consultation',
        content: 'Informational advisory regarding overseas employment pathways, legitimate sponsorship criteria, and document verification standards.'
      },
      {
        title: 'Work Visa Process & Protocols',
        content: 'Explaining the distinct stages of foreign work authorization, employer labor approvals, medical clearances, and embassy stamping.'
      },
      {
        title: 'Document Guidance & Attestation',
        content: 'Guidance on academic certificate attestation, police clearance certificates, medical fitness checks, and authorized translation requirements.'
      },
      {
        title: 'Application Assistance',
        content: 'Assistance organizing your complete application packet, verifying paperwork consistency, and adhering to destination country labor guidelines.'
      },
      {
        title: 'Important Things to Check Before Applying',
        content: 'Crucial verification steps to protect candidates against fraudulent job offers and unauthorized middlemen.'
      }
    ],
    process: [
      { step: '01', title: 'Offer & Eligibility Review', description: 'Review employment offer documentation and country-specific qualification requirements.' },
      { step: '02', title: 'Credential Attestation Guidance', description: 'Guide candidates on ministry and embassy attestation for educational and police certificates.' },
      { step: '03', title: 'File Organization & Medicals', description: 'Ensure medical clearance and authorized paperwork are properly compiled.' },
      { step: '04', title: 'Embassy Submission Support', description: 'Provide step-by-step guidance on consular appointment and work visa submission.' }
    ],
    pricingPackages: [
      {
        name: 'Offer & Document Verification',
        price: 'BDT 5,000',
        period: '/case',
        description: 'For applicants with a job offer seeking legitimate verification guidelines & attestation roadmap.',
        features: [
          'Foreign Employer Sponsorship Verification Checklist',
          'Educational & Police Attestation Guidance',
          'Medical Clearance Protocol Review',
          'Contract Terms & Salary Clause Assessment',
          'Direct Advisory Session with Jahan Ali'
        ],
        ctaText: 'Verify Job Offer'
      },
      {
        name: 'Work Visa File Preparation',
        price: 'BDT 12,000',
        period: '/case',
        isPopular: true,
        description: 'Complete documentation preparation and embassy submission file compilation.',
        features: [
          'End-to-End Work Visa Application Form Completion',
          'Embassy Appointment Scheduling & Coordination',
          'Legal Attestation File Compilation & Indexing',
          'Pre-Departure Checklist & Labor Guideline Briefing',
          'Dedicated File Processing Specialist',
          'Priority WhatsApp Progress Updates'
        ],
        ctaText: 'Prepare Work Visa File'
      },
      {
        name: 'Corporate Overseas Agency Retainer',
        price: 'Custom Quote',
        period: '/batch project',
        description: 'For overseas recruitment agencies and employers managing bulk candidate documentation.',
        features: [
          'Batch Document Screening & Verification',
          'Standardized Attestation & Translation Coordination',
          'Air Ticketing Group Logistics Integration',
          'Dedicated Account Executive',
          'Weekly Progress Dashboards'
        ],
        ctaText: 'Inquire Corporate Batch'
      }
    ],
    whyChoose: [
      'Transparency & Due Diligence: We emphasize honest legal compliance and document verification.',
      'Clear Procedural Knowledge: In-depth understanding of overseas employment paperwork and attestation steps.',
      'Comprehensive Support: Guidance from initial document review to final departure flight ticketing.'
    ],
    faqs: [
      {
        question: 'What is a work permit?',
        answer: 'A work permit is an official legal authorization issued by a foreign government granting a foreign national the legal right to work within that country for a designated employer.'
      },
      {
        question: 'What is the difference between a work visa and a work permit?',
        answer: 'A work permit is the legal authorization to take up employment, typically issued by the labor ministry, while a work visa is the travel document in your passport that permits you to enter the country.'
      },
      {
        question: 'What documents are required for a work permit application?',
        answer: 'Common requirements include a valid passport, signed employment contract from a licensed sponsor, attested educational credentials, medical fitness certificate, and police clearance.'
      },
      {
        question: 'Can you guarantee a work permit or foreign job?',
        answer: 'No ethical consultant guarantees foreign jobs or work permits. Official work permits are subject to foreign government approvals and legitimate employer sponsorships. We provide documentation guidance and application support.'
      },
      {
        question: 'How can I verify a work permit opportunity?',
        answer: 'Always verify that the employer has valid government sponsorship approval and ensure all communications go through official, licensed channels.'
      }
    ],
    internalLinks: [
      {
        title: 'Air Ticketing & GDS Services',
        path: '/travel/air-ticketing',
        anchorText: 'overseas travel and air ticketing',
        context: 'Coordinate your overseas travel and air ticketing once your work permit and visa are secured.',
        category: 'travel'
      },
      {
        title: 'Visa Consultation Services',
        path: '/travel/visa-consultation',
        anchorText: 'comprehensive visa consultation services',
        context: 'Explore our comprehensive visa consultation services for tourist and business travel.',
        category: 'travel'
      }
    ]
  }
};
