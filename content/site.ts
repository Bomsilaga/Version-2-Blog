// ============================================================
// ONGROUNDPM — SITE CONTENT
// Edit this file to update any text on the website.
// See content/README.md for plain-language editing instructions.
// ============================================================

export const siteContent = {

  // ----------------------------------------------------------
  // BRAND
  // ----------------------------------------------------------
  brand: {
    name: "OnGroundPM",
    legalName: "Jokjeth Services Pty Ltd",
    tradingAs: "OnGroundPM",
    abn: "47 828 511 857",
    logo: "/logo.jpg",
    logoAlt: "OnGroundPM logo",
    tagline: "Accurate costs. Honest timelines.",
  },

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#about" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Request a Quote",
    ctaHref: "#contact",
  },

  // ----------------------------------------------------------
  // HERO
  // ----------------------------------------------------------
  hero: {
    eyebrow: "Construction PM & Estimating — Melbourne's West",
    headlineLine1: "Accurate costs.",
    headlineEmphasis: "Honest",
    headlineLine2: "timelines.",
    headlineLine3: "On the ground,",
    headlineLine4: "where it matters.",
    subheadline:
      "Fixed-price estimates and project management for small builders, renovators, and owner-builders. No hourly rates. No surprises.",
    primaryCta: "Get a Quote",
    primaryCtaHref: "#contact",
    secondaryCta: "See How We Work",
    secondaryCtaHref: "#process",
    image: "/hero.jpg",
    imageAlt: "Construction site in Melbourne's western suburbs",
    trustLine: [
      "MIEAust",
      "AIQS",
      "14+ years",
      "Based in Melbourne's West",
    ],
  },

  // ----------------------------------------------------------
  // STATS
  // ----------------------------------------------------------
  stats: [
    { value: 14, suffix: "+", label: "Years construction delivery experience" },
    { prefix: "$", value: 40, suffix: "M+", label: "Largest project delivered" },
    { value: 7, suffix: "", label: "Melbourne-west suburbs served" },
    { value: 72, suffix: "hr", label: "Typical estimate turnaround" },
  ],

  // ----------------------------------------------------------
  // PAIN POINTS
  // ----------------------------------------------------------
  painPoints: {
    eyebrow: "Sound Familiar?",
    headline: "If any of this sounds familiar, we should talk.",
    body: "These aren't edge cases. They're the everyday pressures on small builders and tradespeople who are doing real work without the back-office support that bigger firms take for granted.",
    cta: "Let's talk about your project →",
    ctaHref: "#contact",
    items: [
      { text: "Your quote took three weeks and the client went elsewhere." },
      { text: "You're not sure if your last job lost money until the final invoice." },
      { text: "You won the tender but the programme is already slipping." },
      { text: "Subcontractor prices moved and you didn't catch it." },
      { text: "You're doing estimates at 11pm after a full site day." },
      { text: "You need a second pair of eyes on a contract before you sign." },
    ],
  },

  // ----------------------------------------------------------
  // SERVICES
  // ----------------------------------------------------------
  services: {
    eyebrow: "What We Do",
    headline: "Three ways to work together.",
    subheadline:
      "Every engagement starts with a conversation. We scope the work, agree a fixed fee in writing, and get to work.",
    tiers: [
      {
        tier: "Tier 1",
        name: "Quick Estimate",
        tagline: "Know your numbers before you commit.",
        description:
          "A single, detailed cost estimate for your project. Ideal for small builds, renovations, and extensions where you need accurate figures fast — for quoting, budgeting, or going to tender.",
        inclusions: [
          "Detailed elemental cost estimate",
          "Material and labour breakdown",
          "Preliminary and contingency allowances",
          "Written summary report",
          "One round of revisions",
        ],
        pricing: "Fixed fee — quoted upfront",
        turnaround: "Call us for urgent estimates",
        highlight: false,
      },
      {
        tier: "Tier 2",
        name: "Project Oversight",
        tagline: "Cost control and programme on an active job.",
        description:
          "Ongoing cost management and programme monitoring for a single active project. Monthly retainer keeps your budget and timeline in check throughout the build, without the overhead of a full-time PM.",
        inclusions: [
          "Monthly cost reports and variance analysis",
          "Programme monitoring and progress tracking",
          "Subcontractor invoice review",
          "Variation assessment and negotiation support",
          "Monthly catch-up call",
        ],
        pricing: "Monthly retainer — agreed at scope",
        turnaround: "Ongoing engagement",
        highlight: true,
      },
      {
        tier: "Tier 3",
        name: "Full PM Partnership",
        tagline: "A professional PM without hiring one full-time.",
        description:
          "End-to-end project management for builders who want senior oversight across procurement, scheduling, cost control and delivery — from kick-off through to handover.",
        inclusions: [
          "Full project setup and planning",
          "Procurement and subcontractor management",
          "Programme development and control",
          "Cost management throughout",
          "Defects management and handover",
        ],
        pricing: "Percentage of project value",
        turnaround: "Duration of project",
        highlight: false,
      },
    ],
    technicalHeadline: "Our Other Service Offerings",
    technicalBody: "Drafting, BIM, and site-data services — delivered to the same fixed-fee discipline.",
    technical: [
      {
        name: "Site Visits & Site Runs",
        promise: "On-the-ground site data so you don't have to be there.",
        description:
          "On-site measure-ups, as-built surveys, site condition reports, and photo documentation. Ideal for interstate clients, estimators, and drafters who need accurate site data without travelling to Melbourne's west.",
        deliverables: [
          "Dimensioned sketches",
          "Marked-up site photos",
          "Written site condition note",
          "Digital files delivered within 48 hours",
        ],
        pricing: "Per-visit fixed fee",
        turnaround: "Visit within 5 business days · report within 48 hours",
        ctaLabel: "Request this service →",
      },
      {
        name: "Revit Fit-Out Drafting",
        promise: "Production-ready Revit documentation for commercial and retail fit-outs.",
        description:
          "Revit-based drafting for commercial, retail, and hospitality fit-outs. Modelling, sheet setup, schedules, and documentation-ready output suitable for permit and construction issue.",
        deliverables: [
          "Revit model",
          "Coordinated sheet set",
          "PDF issue",
          "DWG exports where required",
        ],
        pricing: "Fixed fee per project or hourly at agreed rate",
        turnaround: "Scoped per project",
        ctaLabel: "Request this service →",
      },
      {
        name: "Architectural Drafting from PDF",
        promise: "Turn PDF drawings into editable CAD and production-ready files.",
        description:
          "Conversion of existing PDF drawings into accurate editable CAD or Revit files. Output suitable for machine cutting, CNC, laser, and fabrication production — delivered in the formats your workshop or subcontractor needs.",
        deliverables: [
          "Editable DWG or RVT files",
          "PDF issue set",
          "Coordinated layers and line weights",
        ],
        pricing: "Fixed fee per drawing set",
        turnaround: "Typically 5–10 business days depending on set size",
        ctaLabel: "Request this service →",
      },
      {
        name: "BIM Modelling & Coordination",
        promise: "BIM discipline without a full-time BIM manager.",
        description:
          "BIM model development, clash detection, and cross-discipline coordination. Model maintenance across a live project through design and construction stages. LOD levels clarified and agreed at scope.",
        deliverables: [
          "Federated BIM model",
          "Clash detection reports",
          "Coordination minutes",
          "Updated model issues across stages",
        ],
        pricing: "Fixed fee per stage or monthly retainer",
        turnaround: "Ongoing engagement",
        ctaLabel: "Request this service →",
      },
    ],
  },

  // ----------------------------------------------------------
  // WHO WE HELP
  // ----------------------------------------------------------
  whoWeHelp: {
    eyebrow: "Who We Help",
    headline: "Built for the people doing the real work.",
    audiences: [
      {
        title: "Small Builders",
        description:
          "You're winning work but margin is thin and estimating eats your evenings. We give you professional cost plans and programme oversight so you can focus on running the job.",
      },
      {
        title: "Renovators",
        description:
          "Budgets blow out when there's no one controlling variations and subcontractor costs. We bring structure and accountability to your renovation from day one.",
      },
      {
        title: "Owner-Builders",
        description:
          "You're managing the build yourself and need a qualified set of eyes on the numbers and timeline. We provide the professional backup that keeps your project on track.",
      },
      {
        title: "Tradespeople Stepping Up",
        description:
          "You've been on the tools and now you're taking on your first project as a builder. We help you understand the full cost picture and manage the commercial side professionally.",
      },
    ],
  },

  // ----------------------------------------------------------
  // PROCESS
  // ----------------------------------------------------------
  process: {
    eyebrow: "How We Work",
    headline: "Simple. Transparent. No surprises.",
    steps: [
      {
        number: "01",
        title: "15-minute discovery call",
        description:
          "We talk through your project, what you need, and whether we're the right fit. No commitment, no cost. You walk away knowing if we can help.",
      },
      {
        number: "02",
        title: "Scope + fixed fee agreed in writing",
        description:
          "We send you a clear written scope of work and a fixed fee. No hourly guessing, no billing surprises. You approve it, we start.",
      },
      {
        number: "03",
        title: "Work delivered on time",
        description:
          "We do the work. Estimates, reports, cost plans — delivered in the agreed timeframe, formatted for your use, not ours.",
      },
      {
        number: "04",
        title: "Review call + revisions",
        description:
          "We walk you through the deliverables, answer your questions, and make any agreed revisions. The job isn't done until it's useful to you.",
      },
    ],
    ctaBody:
      "The discovery call is free and takes 15 minutes. If we're not the right fit, we'll say so.",
    cta: "Book a Discovery Call →",
    ctaHref: "#contact",
  },

  // ----------------------------------------------------------
  // ABOUT
  // ----------------------------------------------------------
  about: {
    eyebrow: "About",
    headline: "A Melbourne-based practice built on cost discipline and construction experience.",
    body: [
      "OnGroundPM is a small professional practice of engineers and construction professionals focused on cost management, estimating, and project delivery for small and mid-sized builds across Melbourne's west. Our combined experience spans civil and commercial construction in Australia — including a $40M+ commercial project in Victoria — across full project lifecycles: design, procurement, construction, and handover.",
      "The gap we kept seeing was this: small builders and owner-builders were carrying real project risk without the cost-management and programme discipline that larger firms apply as standard. One bad estimate or one uncontrolled variation can wipe a project's profit.",
      "OnGroundPM exists to fix that — delivering the rigour of a professional PM function at a scale and price that works for smaller projects and sole traders.",
    ],
    teamImage: "/team.jpg",
    teamImageAlt: "Member of the OnGroundPM team reviewing drawings at a drafting table",
    statCallout: {
      value: "$40M+",
      label: "Largest project\ndelivered",
    },
    credentials: [
      {
        abbr: "MIEAust",
        label: "Chartered Engineer",
        detail: "Member, Engineers Australia — Chartered",
      },
      {
        abbr: "RegPM",
        label: "Registered Project Manager",
        detail: "Engineers Australia",
      },
      {
        abbr: "AIQS",
        label: "Quantity Surveying",
        detail: "Australian Institute of Quantity Surveyors",
      },
    ],
    toolProficiency: ["CostX", "Bluebeam", "Procore", "Revit", "AutoCAD", "BIM platforms"],
    legalLine: "Jokjeth Services Pty Ltd trading as OnGroundPM · ABN 47 828 511 857",
  },

  // ----------------------------------------------------------
  // CREDENTIALS BAR
  // ----------------------------------------------------------
  credentials: [
    {
      abbr: "MIEAust",
      full: "Member, Engineers Australia",
      note: "Chartered",
    },
    {
      abbr: "RegPM",
      full: "Registered Project Manager",
      note: "Engineers Australia",
    },
    {
      abbr: "AIQS",
      full: "Australian Institute of Quantity Surveyors",
      note: "Member",
    },
    {
      abbr: "ABN",
      full: "47 828 511 857",
      note: "Jokjeth Services T/A OnGroundPM",
    },
  ],

  // ----------------------------------------------------------
  // SELECTED PROJECTS
  // ----------------------------------------------------------
  projects: {
    eyebrow: "Selected Projects",
    headline: "Recent work across Melbourne's west.",
    subheadline:
      "A selection of residential, commercial, and industrial projects delivered or currently in delivery.",
    disclaimer:
      "Project names and details shown are representative of recent delivery across Melbourne's western suburbs.",
    items: [
      {
        id: "01",
        name: "Blackwood Lane Townhouses",
        suburb: "Tarneit, VIC",
        category: "Residential — New Build",
        valueBand: "$3.5M–$4M",
        scope: "Four-unit townhouse development delivered from slab to handover, on programme and budget.",
        image: { src: "/projects/project-01.jpg", alt: "Completed townhouse development in Tarneit" },
      },
      {
        id: "02",
        name: "Union Street Cafe Fit-Out",
        suburb: "Werribee, VIC",
        category: "Commercial — Hospitality Fit-Out",
        valueBand: "$280k–$350k",
        scope: "Full hospitality fit-out including joinery, services coordination, and council compliance sign-off.",
        image: { src: "/projects/project-02.jpg", alt: "Completed specialty cafe fit-out interior in Werribee" },
      },
      {
        id: "03",
        name: "Wattle Street Rear Extension",
        suburb: "Hoppers Crossing, VIC",
        category: "Residential — Extension & Renovation",
        valueBand: "$420k–$500k",
        scope: "Rear extension and kitchen/living reconfiguration on a 1980s brick veneer home, delivered over 22 weeks.",
        image: { src: "/projects/project-03.jpg", alt: "Rear extension to a brick veneer home in Hoppers Crossing" },
      },
      {
        id: "04",
        name: "Dohertys Road Warehouse Conversion",
        suburb: "Truganina, VIC",
        category: "Industrial — Adaptive Reuse",
        valueBand: "$1.2M–$1.6M",
        scope: "Conversion of a tilt-panel warehouse into a combined office and showroom, including mezzanine insertion and full services upgrade.",
        image: { src: "/projects/project-04.jpg", alt: "Converted warehouse interior with mezzanine in Truganina" },
      },
      {
        id: "05",
        name: "Point Cook Medical Suite",
        suburb: "Point Cook, VIC",
        category: "Commercial — Medical Fit-Out",
        valueBand: "$380k–$450k",
        scope: "Ground-floor medical suite fit-out including consult rooms, reception, and compliant services rough-in, completed in 14 weeks.",
        image: { src: "/projects/project-05.jpg", alt: "Medical suite reception and waiting area in Point Cook" },
      },
      {
        id: "06",
        name: "Leakes Road Residential Slab",
        suburb: "Truganina, VIC",
        category: "Residential — In Progress",
        valueBand: "$1.8M–$2.2M",
        scope: "Custom two-storey residence currently in structural stage — cost management, programme control, and subcontractor coordination.",
        image: { src: "/projects/project-06.jpg", alt: "Residential concrete slab pour in progress in Truganina" },
      },
    ],
  },

  // ----------------------------------------------------------
  // SERVICE AREA
  // ----------------------------------------------------------
  serviceArea: {
    eyebrow: "Where We Work",
    headline: "Serving Melbourne.",
    body: "We're based in Melbourne's west and work across greater Melbourne and Victoria. We know the local builders, the local subcontractors, and the local cost rates.",
    outsideNote:
      "Working on a project outside Melbourne? Get in touch — if we can help, we will.",
    suburbs: [
      "Wyndham Vale",
      "Tarneit",
      "Point Cook",
      "Werribee",
      "Truganina",
      "Hoppers Crossing",
      "Melton",
    ],
  },

  // ----------------------------------------------------------
  // FAQ
  // ----------------------------------------------------------
  faq: {
    eyebrow: "FAQ",
    headline: "Common questions.",
    subheadline: "Can't find what you're looking for? Just ask.",
    cta: "Ask us directly →",
    ctaHref: "#contact",
    items: [
      {
        q: "How quickly can I get an estimate?",
        a: "Turnaround depends on project size and complexity — we'll give you a specific timeline when we scope the work. If you have an urgent estimate, call us directly and we'll tell you what we can do.",
      },
      {
        q: "What do you charge?",
        a: "Every engagement is scoped and priced upfront in writing. Quick Estimates are a fixed fee based on project complexity — you'll know the cost before we start. Project Oversight is a monthly retainer agreed at scope. Full PM Partnership is a percentage of project value. We don't charge by the hour.",
      },
      {
        q: "Do you visit the site?",
        a: "For estimates, most of our work is done from drawings and specifications — we don't need to be on-site to produce an accurate estimate. For Project Oversight and Full PM Partnership engagements, site visits are included and are part of how we keep your project on track.",
      },
      {
        q: "What software do you use?",
        a: "Our core tools are CostX (for estimating), Bluebeam (for document markup and review), Procore (for project management), and BIM platforms for model-based takeoffs. We can work with most drawing formats — PDF, DWG, RVT, and more.",
      },
      {
        q: "Can you review a contract before I sign it?",
        a: "Yes. Contract review is something we do regularly for small builders and owner-builders who want a second set of eyes before committing. We'll flag risks, ambiguous scope items, and cost exposure. This is available as a standalone service — get in touch to discuss.",
      },
      {
        q: "Do you work outside Melbourne's west?",
        a: "Our primary focus is Melbourne's western suburbs — Wyndham Vale, Tarneit, Point Cook, Werribee, Truganina, Hoppers Crossing, and Melton. We know these markets well. If your project is elsewhere in metropolitan Melbourne, reach out — we'll let you know if we can help.",
      },
      {
        q: "What's your turnaround time for ongoing work?",
        a: "For Project Oversight and Full PM Partnership clients, monthly cost reports are delivered within 5 business days of the month end. Variation assessments and ad hoc queries are typically turned around within 48 hours. We set clear timelines for every deliverable at the start of engagement.",
      },
      {
        q: "How do I send you drawings?",
        a: "Email us directly at info@ongroundpm.com.au or use the contact form below. For large files (over 25MB), we can share a secure upload link. We accept PDF, DWG, RVT, and most common drawing formats. We'll acknowledge receipt within one business day.",
      },
    ],
  },

  // ----------------------------------------------------------
  // CONTACT
  // ----------------------------------------------------------
  contact: {
    eyebrow: "Get in Touch",
    headline: "Let's talk about your project.",
    body: "Whether you need a quick estimate or you're looking for longer-term project support, the first step is a conversation. We'll come back to you within one business day.",
    email: "info@ongroundpm.com.au",
    phone: "",
    responseNote:
      "We respond within one business day. For urgent enquiries, call directly. All information you share is kept confidential and used only to respond to your enquiry.",
    successHeadline: "Message received.",
    successBody:
      "Thanks for reaching out. We'll come back to you within one business day. In the meantime, feel free to send any drawings or project documents to info@ongroundpm.com.au.",
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    tagline:
      "Fixed-price construction estimates and project management for small builders, renovators and owner-builders across Melbourne's western suburbs.",
    credentialsLine: "MIEAust · RegPM · AIQS",
    navLinks: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#about" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    linkedin: "https://linkedin.com/company/ongroundpm",
  },
} as const;

export type SiteContent = typeof siteContent;
