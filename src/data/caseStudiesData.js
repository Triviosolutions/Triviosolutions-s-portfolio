export const caseStudies = [
  {
    id: 'mediassist-ai',
    title: 'MediAssist — AI-Powered Clinical Documentation Assistant',
    category: 'ai',
    categoryLabel: 'AI / ML',
    industry: 'Healthcare',
    summary: 'An AI system that transcribes and structures doctor-patient conversations into clinical notes using a fine-tuned NLP pipeline.',
    challenge: 'Healthcare providers spent up to 3 hours daily on manual clinical note-taking, leading to physician burnout and delayed patient processing.',
    approach: 'Engineered a privacy-focused speech-to-text pipeline integrated with fine-tuned Hugging Face Transformers and FastAPI backend to parse unstructured medical audio into standard SOAP notes.',
    architecture: 'User Audio Stream → Whisper STT → Vector RAG Context → Fine-Tuned LLaMA/Mistral → SOAP Note JSON → EMR API',
    techStack: ['FastAPI', 'Hugging Face', 'PyTorch', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com/trivio-solutions/mediassist-ai',
    metrics: [
      { label: 'Documentation Time Reduced', value: '60%' },
      { label: 'Accuracy Rating', value: '98.4%' },
      { label: 'Daily Consultations Handled', value: '1,200+' }
    ],
    features: [
      'Real-time ambient clinical transcription',
      'Automated medical terminology parsing & entity recognition',
      'HIPAA-compliant encrypted data pipeline',
      'One-click export to major Electronic Health Record (EHR) systems'
    ]
  },
  {
    id: 'retailiq-chatbot',
    title: 'RetailIQ — RAG-Based Product Support Chatbot',
    category: 'ai',
    categoryLabel: 'AI / ML & Web',
    industry: 'E-commerce',
    summary: 'A retrieval-augmented chatbot trained on product manuals and support tickets, deployed as a widget for a Shopify storefront.',
    challenge: 'Customer support teams were overwhelmed by repetitive product inquiries, causing high cart abandonment and slow response times.',
    approach: 'Built a RAG pipeline connecting Shopify inventory manuals to a Supabase vector database, paired with a Next.js chat widget for instant context-aware resolution.',
    architecture: 'Customer Query → Vector Similarity Search (Supabase pgvector) → Relevant Context Embeddings → Claude API → Webhook Response',
    techStack: ['Django', 'LangChain RAG', 'Supabase Vector', 'Next.js', 'Shopify API'],
    githubUrl: 'https://github.com/trivio-solutions/retailiq-chatbot',
    metrics: [
      { label: 'First-Response Queries Automated', value: '70%' },
      { label: 'Avg Resolution Time', value: '8s' },
      { label: 'Customer Satisfaction Score', value: '4.8/5' }
    ],
    features: [
      'Automated ingestion of product specs, FAQs, and ticket logs',
      'Multi-lingual real-time support in 12 languages',
      'Seamless human agent handoff trigger',
      'Analytics dashboard tracking common customer friction points'
    ]
  },
  {
    id: 'fintrack-app',
    title: 'FinTrack — Personal Finance & Expense Analytics Platform',
    category: 'web',
    categoryLabel: 'Web Development',
    industry: 'Fintech',
    summary: 'A full-stack budgeting and expense-tracking platform with bank-sync and analytics dashboard.',
    challenge: 'Users struggled with fragmented financial tools that lacked real-time bank synchronization and predictive spending insights.',
    approach: 'Architected a highly responsive React frontend connected to a FastAPI backend with Firebase authentication and real-time WebSocket data updates.',
    architecture: 'React Frontend → WebSocket Connection → FastAPI Gateway → Firebase Auth & Plaid API → Postgres Analytics Cache',
    techStack: ['React', 'FastAPI', 'Firebase Auth', 'Vercel', 'Chart.js'],
    githubUrl: 'https://github.com/trivio-solutions/fintrack-app',
    metrics: [
      { label: 'Real-time Sync Latency', value: '< 150ms' },
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Active Users Supported', value: '45,000+' }
    ],
    features: [
      'Automated transaction categorization via rule-engine',
      'Interactive financial forecasting charts & budget alerts',
      'Multi-currency support with live exchange rate integration',
      'Bank-grade AES-256 data encryption'
    ]
  },
  {
    id: 'logiflow-mobile',
    title: 'LogiFlow — Cross-Platform Delivery Tracking App',
    category: 'app',
    categoryLabel: 'App Development',
    industry: 'Logistics',
    summary: 'A mobile app for real-time delivery tracking with driver and customer-facing interfaces.',
    challenge: 'Delivery drivers operated in low-connectivity areas causing lost location updates and high customer inquiry calls.',
    approach: 'Developed a cross-platform React Native app equipped with offline GPS queueing and real-time Firebase location broadcasting.',
    architecture: 'React Native Client → Local SQLite Queue → Background Geolocation Sync → Firebase Realtime DB → Customer Map View',
    techStack: ['React Native', 'Firebase', 'Google Maps API', 'SQLite', 'Node.js'],
    githubUrl: 'https://github.com/trivio-solutions/logiflow-mobile',
    metrics: [
      { label: 'Inquiry Calls Reduced', value: '45%' },
      { label: 'Offline Sync Reliability', value: '100%' },
      { label: 'App Store Rating', value: '4.9 ★' }
    ],
    features: [
      'Dual-interface: Driver navigation portal + Customer live tracking link',
      'Offline-first GPS coordinate buffering',
      'Proof-of-delivery digital signature and photo upload',
      'Automated SMS notifications on arrival radius'
    ]
  },
  {
    id: 'deskaudit',
    title: 'DeskAudit — Offline-First Desktop Inventory Manager',
    category: 'desktop',
    categoryLabel: 'Desktop Application',
    industry: 'Retail & SMB',
    summary: 'A desktop application for warehouse inventory management, built offline-first with background cloud sync.',
    challenge: 'Warehouse staff operating in subterranean facilities frequently lost cloud connectivity, crashing online inventory software.',
    approach: 'Built a lightweight Electron desktop application backed by a local SQLite cache and background Django REST reconciliation engine.',
    architecture: 'Electron App UI → Local SQLite DB → Conflict Resolution Engine → Django REST API → Central Supabase DB',
    techStack: ['Electron', 'Django REST', 'Supabase', 'SQLite', 'TypeScript'],
    githubUrl: 'https://github.com/trivio-solutions/deskaudit',
    metrics: [
      { label: 'Zero Data Loss Incidents', value: '100%' },
      { label: 'Inventory Scan Speed', value: '3x Faster' },
      { label: 'Warehouse Outlets Deployed', value: '32 Locations' }
    ],
    features: [
      'Barcode & QR code scanner hardware integration',
      'Local-first instant search across 100,000+ SKUs',
      'Automatic conflict resolution upon reconnecting',
      'Custom report generation PDF/Excel export'
    ]
  },
  {
    id: 'agentops',
    title: 'AgentOps — Autonomous Multi-Agent Research Assistant',
    category: 'ai',
    categoryLabel: 'AI / ML',
    industry: 'Internal R&D / SaaS',
    summary: 'A multi-agent system that autonomously researches, summarizes, and cross-references technical documentation.',
    challenge: 'Research teams spent days searching across whitepapers, arXiv preprints, and API docs to synthesize technical feasibility reports.',
    approach: 'Designed a multi-agent orchestration framework utilizing specialized Web Search, Summarizer, and Critic agents built on FastAPI and deployed on Railway.',
    architecture: 'User Objective → Master Planner Agent → [Search Agent, Scraper Agent, Critic Agent] → Synthesizer → Final Markdown Report',
    techStack: ['Python', 'Custom Agent Framework', 'Hugging Face', 'FastAPI', 'Railway'],
    githubUrl: 'https://github.com/trivio-solutions/agentops',
    metrics: [
      { label: 'Literature Review Time Cut', value: 'Days to Hours' },
      { label: 'Sources Cross-Referenced/Min', value: '50+' },
      { label: 'Synthesis Accuracy', value: '96.2%' }
    ],
    features: [
      'Autonomous multi-step task breakdown and delegation',
      'Self-correcting web search and citation verification',
      'Exportable comprehensive research briefs with direct sources',
      'API webhook integration for automated research pipelines'
    ]
  }
];
