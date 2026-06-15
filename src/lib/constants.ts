// ─── Site Configuration ───
export const SITE_CONFIG = {
  name: "Vibexio",
  domain: "vibexio.ai",
  url: "https://vibexio.ai",
  tagline: "Empowering Business Intelligence, One Solution at a Time.",
  description:
    "Vibexio builds AI-powered automation, OCR, and custom software solutions that help businesses scale smarter. Built in India, trusted worldwide.",
  ogImage: "https://vibexio.ai/og-image.png",
  twitterHandle: "@vibexio",
  email: "contact@vibexio.ai",
  privacyEmail: "Privacy@vibexio.ai",
  phone: "+916374404451",
  whatsapp: "https://wa.me/916374404451",
};

// ─── Navigation ───
type NavChild = { label: string; href: string };
type NavLink =
  | { label: string; href: string; children?: undefined; isCTA?: boolean }
  | { label: string; children: NavChild[]; href?: undefined; isCTA?: undefined };

export const NAV_LINKS: NavLink[] = [
  { label: "Inside", href: "/inside" },
  {
    label: "Ecosystem",
    children: [
      { label: "Marketplace", href: "/ecosystem" },
      { label: "Kubyn", href: "/kubyn" },
      { label: "Clario", href: "/clario" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "AI Solutions", href: "/aisolutions" },
      { label: "IT Solutions", href: "/itsolutions" },
    ],
  },
  { label: "Pathways", href: "/pathways" },
  { label: "Collaborate", href: "/collaborate", isCTA: true },
];

// ─── Social Links ───
export const SOCIAL_LINKS = [
  {
    platform: "LinkedIn",
    url: "https://in.linkedin.com/company/vibexio",
    label: "LinkedIn",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/vibexio_ai",
    label: "Instagram",
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@Vibe-Xio",
    label: "YouTube",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/p/VibeXio-AI-61574111908388/",
    label: "Facebook",
  },
  {
    platform: "X",
    url: "https://x.com/VibeXio_ai",
    label: "X (Twitter)",
  },
];

// ─── Footer ───
export const FOOTER_SECTIONS = [
  {
    title: "Marketplace",
    links: [
      { label: "Marketplace", href: "/ecosystem" },
      { label: "Kubyn", href: "/kubyn" },
      { label: "Clario", href: "/clario" },
      { label: "Edutech", href: "#" },
      { label: "Healthcare", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Development", href: "/itsolutions" },
      { label: "AI/ML", href: "/aisolutions" },
      { label: "Design", href: "#" },
      { label: "Transform", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Inside", href: "/inside" },
      { label: "Pathways", href: "/pathways" },
    ],
  },
];

export const ADDRESSES = {
  registered:
    "290/9, Anekollu, Dodda Belur, Kelamangalam, Krishnagiri, Tamil Nadu, 635113",
  operating: "13/64, 20th cross street, Kolathur, Chennai - 600099",
};

// ─── Home Page ───
export const HERO_TYPING_WORDS = [
  "software.",
  "solutions.",
  "products.",
  "experiences.",
];

export const MARQUEE_ITEMS = [
  "Finance & FinTech Automation",
  "Education & EdTech Innovation",
  "Healthcare & Medical AI Solutions",
  "Media, Marketing & Entertainment AI",
  "E-commerce & Retail Intelligence",
  "Manufacturing & Industry 4.0",
  "Real Estate & PropTech",
  "Energy & Sustainability Tech",
  "Logistics & Supply Chain Automation",
  "Insurance & Risk Management AI",
  "Travel & Hospitality Technology",
  "Agriculture & AgriTech Automation",
  "Telecom & Communication Systems",
];

export const HOME_FEATURES = [
  {
    title: "AI-First Automation",
    description:
      "Building smart systems that learn, adapt, and drive business efficiency through intelligent AI and machine learning automation.",
  },
  {
    title: "OCR & Document Intelligence",
    description:
      "Transforming paper-based processes with AI-powered OCR that reads, understands, and extracts data with 99%+ accuracy.",
  },
  {
    title: "Custom SaaS Platforms",
    description:
      "Designing and deploying full-stack SaaS platforms tailored to your business model — secure, scalable, and cloud-ready.",
  },
  {
    title: "Smart API Integrations",
    description:
      "Connecting your existing tools and services through intelligent API orchestration for seamless data flow.",
  },
  {
    title: "Enterprise Workflow Tools",
    description:
      "Custom-built workflow engines that eliminate bottlenecks and automate multi-step business processes at scale.",
  },
  {
    title: "Cloud-Native Architecture",
    description:
      "Building future-proof, serverless, and containerized systems designed for uptime, speed, and infinite scalability.",
  },
];

export const HOME_STATS = [
  { value: "50+", label: "Projects Delivered", sub: "Across AI, SaaS, Cloud, and Automation." },
  { value: "99.8%", label: "Platform Uptime", sub: "Enterprise-grade reliability and performance." },
  { value: "10x", label: "Faster Workflows", sub: "Through custom automation and intelligent systems." },
  { value: "24/7", label: "Client Support", sub: "Dedicated assistance, always available." },
];

export const TESTIMONIALS = [
  {
    quote:
      "Vibexio's AI-powered document extraction system saved us 200+ hours of manual data entry per month. Their Clario platform is a game-changer for our operations.",
    name: "Arjun S.",
    role: "Operations Lead, FinTech Startup",
  },
  {
    quote:
      "The team at Vibexio understood our complex requirements and delivered a custom CRM integrated with automated invoicing in just 6 weeks.",
    name: "Meena R.",
    role: "CEO, Retail Company",
  },
  {
    quote:
      "Their OCR accuracy is unmatched. We went from processing 50 invoices/day manually to over 500 automated. Highly recommend.",
    name: "Deepak V.",
    role: "CFO, Logistics Firm",
  },
  {
    quote:
      "Kubyn simplified our internal operations. HR, project tracking, and billing — all in one place. It's like having an extra team.",
    name: "Priya K.",
    role: "Head of Ops, SaaS Startup",
  },
  {
    quote:
      "Vibexio doesn't just build software — they solve problems. Their AI automation workflows reduced our turnaround time by 60%.",
    name: "Rajesh M.",
    role: "CTO, Healthcare Company",
  },
];

// ─── Inside Page ───
export const VALUES = [
  {
    title: "Build With Purpose",
    description: "Every line of code we write serves a clear business objective. We don't build for vanity — we build for impact.",
  },
  {
    title: "Think Long-Term",
    description: "We don't build to ship and forget. We architect systems designed to evolve and scale over years.",
  },
  {
    title: "AI With Responsibility",
    description: "We believe AI should empower humans, not replace them. Ethical, transparent, and fair AI is our standard.",
  },
  {
    title: "Client-First Engineering",
    description: "We design for real-world use cases, not theoretical perfection. Our clients' success is our metric.",
  },
  {
    title: "Relentless Improvement",
    description: "Good is never enough. We iterate, optimize, and refine until every solution exceeds expectations.",
  },
  {
    title: "Transparency Always",
    description: "We communicate openly with our clients and within our team. No surprises, no hidden agendas.",
  },
];

// ─── Clario Page ───
export const CLARIO_FEATURES = [
  {
    title: "Intelligent OCR",
    description: "Extract text from scanned documents, images, and PDFs with AI-enhanced accuracy across languages and formats.",
  },
  {
    title: "Auto Classification",
    description: "Automatically detect and categorize document types — invoices, receipts, contracts, forms, and more.",
  },
  {
    title: "Data Extraction",
    description: "Pull structured data from invoices, receipts, and forms into clean, usable formats instantly.",
  },
  {
    title: "Multi-Format Support",
    description: "Works with PDFs, images, scanned docs, handwritten text, and complex multi-page documents.",
  },
  {
    title: "API-First Design",
    description: "Integrate Clario into your existing systems via RESTful APIs with comprehensive documentation.",
  },
  {
    title: "Enterprise-Ready",
    description: "Built for scale with security, audit logs, role-based access, and compliance-ready infrastructure.",
  },
];

export const CLARIO_STEPS = [
  { step: "01", title: "Upload", description: "Upload any document — scanned, digital, or photographed." },
  { step: "02", title: "Process", description: "Clario's AI engine reads, classifies, and extracts key data." },
  { step: "03", title: "Extract", description: "Get structured, clean data ready for your workflows and systems." },
];

// ─── Kubyn Page ───
export const KUBYN_FEATURES = [
  {
    title: "CRM & Sales Pipeline",
    description: "Manage leads, track deals, and nurture customer relationships with intelligent pipeline management.",
  },
  {
    title: "Project Management",
    description: "Plan, assign, and track tasks with boards, timelines, and real-time team collaboration.",
  },
  {
    title: "Invoicing & Billing",
    description: "Generate invoices, track payments, and manage billing cycles with automated reminders.",
  },
  {
    title: "HR & Team Management",
    description: "Manage employees, attendance, leaves, payroll, and performance — all in one module.",
  },
  {
    title: "Inventory Management",
    description: "Track stock levels, orders, suppliers, and warehouse operations with real-time visibility.",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time insights across all modules — revenue, performance, operations, and growth metrics.",
  },
];

// ─── AI Solutions Page ───
export const AI_CAPABILITIES = [
  { title: "Predictive Analytics & Forecasting", description: "Anticipate outcomes, demand, and trends with precision." },
  { title: "Natural Language Processing (NLP)", description: "Understand language and deliver smart, multilingual interactions." },
  { title: "Computer Vision", description: "Detect, classify, and analyze visuals at scale." },
  { title: "Generative AI", description: "Automate creativity — text, visuals, audio, and reports." },
  { title: "Automation & Intelligent Workflow", description: "Reduce manual effort and human error across processes." },
  { title: "Data & Infrastructure for AI", description: "Build robust AI pipelines, deployment, and governance." },
  { title: "Customization & Integration", description: "Align AI systems precisely with your business model." },
];

export const AI_INDUSTRIES = [
  { title: "Finance", description: "Predict spending patterns, automate fraud detection." },
  { title: "Healthcare", description: "Predict patient outcomes and streamline diagnostics." },
  { title: "Education", description: "Personalize student learning with adaptive analytics." },
  { title: "Manufacturing", description: "Optimize production and automate quality control." },
  { title: "Retail & E-commerce", description: "Deliver smarter recommendations and forecasting." },
];

export const AI_BUILD_STEPS = [
  { step: "01", title: "Discovery", description: "Identify key goals and data insights." },
  { step: "02", title: "Design", description: "Map intelligent workflows and system architecture." },
  { step: "03", title: "Develop", description: "Build and train scalable AI models." },
  { step: "04", title: "Deploy", description: "Integrate seamlessly with your systems." },
  { step: "05", title: "Evolve", description: "Continuous monitoring and optimization." },
];

// ─── IT Solutions Page ───
export const IT_SERVICES = [
  { title: "Web Development", description: "Fast, secure, and scalable digital platforms." },
  { title: "E-Commerce Solutions", description: "High performance stores that convert." },
  { title: "App Development", description: "Intuitive experiences for Android & iOS." },
  { title: "UI/UX & Graphics Design", description: "Experiences that merge emotion with logic." },
  { title: "Custom Software Development", description: "Systems tailored to your business DNA." },
  { title: "Digital Transformation", description: "Rethink, modernize, and automate operations." },
  { title: "Mail Solutions", description: "Secure business email setup and management." },
  { title: "Cloud Solutions", description: "Setup for secure, scalable cloud environments." },
];

export const IT_BUILD_STEPS = [
  { step: "01", title: "Discovery", description: "Understand your users and business model." },
  { step: "02", title: "Strategy", description: "Define the architecture and experience flow." },
  { step: "03", title: "Design", description: "Craft UI/UX that inspires interaction." },
  { step: "04", title: "Development", description: "Build robust, scalable solutions." },
  { step: "05", title: "Quality & Launch", description: "Test, deploy, and monitor performance." },
];

export const IT_SECTORS = [
  { title: "Finance", description: "Fintech dashboards and secure data tools." },
  { title: "Healthcare", description: "Patient portals, hospital apps, EHR systems." },
  { title: "Education", description: "Learning management, classroom platforms." },
  { title: "Manufacturing", description: "Booking, scheduling, and experience systems." },
  { title: "Retail & E-commerce", description: "E-commerce storefronts & loyalty ecosystems." },
];

// ─── Pathways Page ───
export const WHY_JOIN = [
  { title: "Work on Real AI Products", description: "We build AI tools that make real impact in health, education, and finance." },
  { title: "Learn from Day One", description: "Work alongside engineers who've built scalable systems." },
  { title: "Meaningful Work", description: "From saving lives to educating minds, your contributions have real social value." },
  { title: "Early Stage Advantage", description: "Shape the company culture. Earn equity. Grow into leadership roles." },
  { title: "Founders Are Accessible", description: "Flat hierarchy. Direct communication. Every voice counts." },
  { title: "Competitive Compensation", description: "Market-aligned pay, bonuses, and stock options for early employees." },
];

export const HOW_WE_WORK = [
  { title: "No Ego. Just Excellence.", description: "Junior or senior — best idea wins." },
  { title: "Direct Communication.", description: "Honest, transparent discussions." },
  { title: "Ownership Mindset.", description: "You build, deploy, and own features end to end." },
  { title: "Fail Fast, Learn Faster.", description: "We celebrate learning through iteration." },
  { title: "Work From Anywhere.", description: "Designed to thrive with distributed teams." },
  { title: "Team Across India.", description: "From metros to small towns, united by purpose." },
];

export const HIRING_STEPS = [
  { step: "01", title: "Application Review", description: "2-3 days" },
  { step: "02", title: "Intro Call", description: "Casual chat with team" },
  { step: "03", title: "Technical Task", description: "Work at your pace" },
  { step: "04", title: "Team Interview", description: "Discuss ideas and culture" },
  { step: "05", title: "Founder Chat", description: "Alignment & vision" },
  { step: "06", title: "Offer", description: "Within a week" },
];

export const TEAM_TESTIMONIALS = [
  { name: "Manimegalai M", role: "UI/UX Designer" },
  { name: "Elango T", role: "AI Research and Developer" },
  { name: "Selva James", role: "Full Stack Developer" },
  { name: "Jenopaul", role: "Application Engineer" },
  { name: "Sakthi N", role: "Full Stack Developer" },
  { name: "Stephy A", role: "Software Tester" },
];
