import { Cpu, Layers, Smartphone, Monitor } from 'lucide-react';

export const servicesData = {
  'ai-ml': {
    id: 'ai-ml',
    slug: 'ai-ml',
    title: 'AI / ML & Automation Add-Ons',
    categoryLabel: 'AI Add-On',
    icon: Cpu,
    leadName: 'Trivio Team',
    leadRole: 'Co-Founders & Software Engineers',
    leadTag: 'Full-Stack Team',
    leadInitials: 'TS',
    leadBio: 'All three Trivio co-founders build AI features as part of their full-stack work — chatbots, RAG search, and automation layered into your existing web, mobile, or desktop product.',
    summary: 'We add practical AI — chatbots, RAG-based search, and workflow automation — into the web, mobile, and desktop products we build.',
    overview: 'We don’t sell AI as a standalone buzzword — we build it in where it solves a real problem: a support chatbot trained on your docs, a search feature that understands intent, or an automation that saves your team hours. It’s engineered by the same team building your product, not handed off to a separate specialist.',
    capabilities: [
      {
        title: 'Custom ML & Deep Learning Fine-Tuning',
        desc: 'Domain-adapted model training using PyTorch and Hugging Face for industry-specific terminology and context.'
      },
      {
        title: 'Enterprise RAG Pipeline Architecture',
        desc: 'High-speed vector database ingestion (Supabase pgvector) paired with hybrid semantic search and reranking.'
      },
      {
        title: 'Autonomous Multi-Agent Systems',
        desc: 'Orchestrated AI agents capable of multi-step research, tool execution, citation verification, and workflow automation.'
      },
      {
        title: 'MLOps & Model Guardrails',
        desc: 'Continuous monitoring, latency optimization, hallucination guardrails, and HIPAA/SOC2 compliant data pipelines.'
      }
    ],
    techStack: ['PyTorch', 'Hugging Face', 'FastAPI', 'Supabase Vector', 'LangChain', 'Python', 'Docker', 'Railway'],
    processSteps: [
      { num: '01', title: 'Data & Model Research', desc: 'Evaluating pre-trained models, context windows, and vector embedding strategies.' },
      { num: '02', title: 'Rapid PoC Benchmark', desc: 'Building a working retrieval and inference proof-of-concept to measure accuracy.' },
      { num: '03', title: 'Guardrail & API Integration', desc: 'Deploying fine-tuned endpoints with FastAPI and strict hallucination guardrails.' },
      { num: '04', title: 'MLOps Monitoring', desc: 'Monitoring production latency, token usage, and continuous model optimization.' }
    ]
  },
  'web-dev': {
    id: 'web-dev',
    slug: 'web-dev',
    title: 'Web Application Engineering & API Platforms',
    categoryLabel: 'Full-Stack Web',
    icon: Layers,
    leadName: 'Trivio Team',
    leadRole: 'Co-Founders & Software Engineers',
    leadTag: 'Full-Stack Team',
    leadInitials: 'TS',
    leadBio: 'All three Trivio co-founders build web platforms together, from high-concurrency FastAPI/Django backends to React and Next.js frontends built to scale from MVP to production.',
    summary: 'Scalable, secure, and cost-effective web platforms engineered with React, Next.js, and high-concurrency FastAPI/Django backends.',
    overview: 'We build modern web applications designed for long-term scalability. Whether you need a SaaS platform, real-time analytics dashboard, or high-throughput API gateway, our web architecture avoids technical debt and handles high user concurrency without performance bottlenecks.',
    capabilities: [
      {
        title: 'Full-Stack Web Engineering',
        desc: 'Responsive, fast-loading web applications using React, Next.js, and modern TypeScript frontend stacks.'
      },
      {
        title: 'High-Throughput API Gateway Architecture',
        desc: 'Asynchronous Python backends built with FastAPI and Django REST framework for low-latency data processing.'
      },
      {
        title: 'Real-Time Database & Storage Systems',
        desc: 'Database optimization using PostgreSQL, Supabase, Firebase, and Redis caching layers.'
      },
      {
        title: 'Cloud Infrastructure & DevOps',
        desc: 'Automated CI/CD deployment pipelines on Vercel, Cloudflare Workers, Railway, and AWS.'
      }
    ],
    techStack: ['FastAPI', 'Django REST', 'React', 'Next.js', 'PostgreSQL', 'Supabase', 'Vercel', 'Cloudflare'],
    processSteps: [
      { num: '01', title: 'System Architecture Design', desc: 'Mapping database schemas, API specs, and frontend user journeys.' },
      { num: '02', title: 'Agile Frontend & API Build', desc: 'Developing modular React components paired with REST/GraphQL endpoints.' },
      { num: '03', title: 'Load & Security Testing', desc: 'Benchmarking response times under peak load and enforcing OWASP security standards.' },
      { num: '04', title: 'Production Launch & CI/CD', desc: 'Setting up automated deployment pipelines and edge caching.' }
    ]
  },
  'app-dev': {
    id: 'app-dev',
    slug: 'app-dev',
    title: 'Cross-Platform Mobile App Development',
    categoryLabel: 'Mobile Engineering',
    icon: Smartphone,
    leadName: 'Trivio Team',
    leadRole: 'Co-Founders & Software Engineers',
    leadTag: 'Full-Stack Team',
    leadInitials: 'TS',
    leadBio: 'All three Trivio co-founders build mobile products together, focusing on cross-platform React Native performance, offline-first sync, and real-world reliability.',
    summary: 'Native-performing iOS and Android mobile apps engineered with React Native, offline-first local synchronization, and background GPS location tracking.',
    overview: 'Mobile applications operating in real-world environments face poor connectivity, battery constraints, and device fragmentation. We build mobile software equipped with local SQLite caching, seamless background cloud reconciliation, and native performance for iOS and Android.',
    capabilities: [
      {
        title: 'Cross-Platform iOS & Android Apps',
        desc: 'Single-codebase React Native applications that deliver 60fps native performance on iOS and Android.'
      },
      {
        title: 'Offline-First Local Data Synchronization',
        desc: 'Local SQLite and Realm database queueing so users can work offline without losing input data.'
      },
      {
        title: 'Background GPS & Real-Time Tracking',
        desc: 'Low-battery background geolocation sync, push notifications, and interactive map interfaces.'
      },
      {
        title: 'App Store & Google Play Publishing',
        desc: 'Complete release management, code-signing, and app review approval pipelines.'
      }
    ],
    techStack: ['React Native', 'Firebase', 'SQLite', 'Google Maps API', 'iOS Native', 'Android Native', 'Node.js'],
    processSteps: [
      { num: '01', title: 'Mobile UX & Wireframing', desc: 'Designing touch-optimized mobile screens and offline user flows.' },
      { num: '02', title: 'React Native & Native Modules', desc: 'Building cross-platform UI components connected to native device sensors.' },
      { num: '03', title: 'Offline Queueing & Testing', desc: 'Testing real-world low-connectivity sync and battery consumption.' },
      { num: '04', title: 'App Store Release', desc: 'Publishing to Apple App Store and Google Play Store with monitoring.' }
    ]
  },
  'desktop': {
    id: 'desktop',
    slug: 'desktop',
    title: 'Offline-First Desktop Software Applications',
    categoryLabel: 'Desktop Software',
    icon: Monitor,
    leadName: 'Trivio Team',
    leadRole: 'Co-Founders & Software Engineers',
    leadTag: 'Full-Stack Team',
    leadInitials: 'TS',
    leadBio: 'All three Trivio co-founders architect desktop applications together for enterprise logistics, retail, and SMBs requiring offline hardware access and zero system downtime.',
    summary: 'Robust Windows, macOS, and Linux desktop software built with Electron, local SQLite caching, hardware scanner integration, and automated cloud sync.',
    overview: 'Subterranean warehouses, retail outlets, and field operations require desktop software that operates seamlessly without relying on constant internet access. We engineer Electron desktop applications with direct hardware integration and automated background reconciliation.',
    capabilities: [
      {
        title: 'Cross-Platform Desktop Applications',
        desc: 'Native desktop apps for Windows, macOS, and Linux built using Electron and TypeScript.'
      },
      {
        title: 'Hardware & Peripheral Integration',
        desc: 'Direct USB/Serial port integration for barcode scanners, receipt printers, and scale hardware.'
      },
      {
        title: 'Local Database & Instant Search',
        desc: 'High-speed local SQLite database indexing supporting 100,000+ SKUs with instant search.'
      },
      {
        title: 'Automated Auto-Update Pipeline',
        desc: 'Background silent updates ensuring all desktop clients stay up to date without user disruption.'
      }
    ],
    techStack: ['Electron', 'SQLite', 'Django REST API', 'Supabase', 'TypeScript', 'Node.js'],
    processSteps: [
      { num: '01', title: 'System Requirement Audit', desc: 'Identifying hardware peripherals, OS targets, and local data storage needs.' },
      { num: '02', title: 'Electron UI & SQLite Build', desc: 'Engineering offline desktop interface with local database caching.' },
      { num: '03', title: 'Peripheral Hardware Testing', desc: 'Testing physical barcode scanners, receipt printers, and local sync engines.' },
      { num: '04', title: 'Installer & Auto-Update Setup', desc: 'Building Windows MSI/EXE and macOS DMG installers with silent auto-updates.' }
    ]
  }
};
