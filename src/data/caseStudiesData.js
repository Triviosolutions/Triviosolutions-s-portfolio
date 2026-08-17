export const caseStudies = [
  {
    id: 'wapexp-lms-app',
    title: 'WAPEXP — Mobile Learning Management System',
    category: 'app',
    categoryLabel: 'App Development',
    industry: 'Education',
    summary: 'A premium, dark-themed learning management app for WAPEXP Institute, letting students browse IT courses, stream video lectures, track gamified achievements, and get real-time institute notices.',
    challenge: 'WAPEXP Institute needed a seamless, high-performance mobile experience for its students — one that could replace a fragmented mix of course PDFs, social media groups, and manual notice-sharing with a single polished app.',
    approach: 'Converted a fully custom UI design into a cross-platform React Native (Expo) app with file-based routing, integrating Firebase for authentication and real-time data. Built a gamified milestone system and an in-app video player to keep students engaged, all wrapped in a strict dark-mode design system.',
    architecture: 'Student Device (Expo App) → Firebase Auth → Firestore Data Sync → In-App Video Player (expo-av) → Real-Time Notice & Achievement Engine',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Expo Router'],
    githubUrl: '#',
    metrics: [
      { label: 'Core App Screens Delivered', value: '10+' },
      { label: 'Platforms Supported', value: 'iOS & Android' },
      { label: 'Gamified Achievement Badges', value: 'Multiple Milestone Types' }
    ],
    features: [
      'Dynamic course catalog with pricing and discount badges',
      'In-app video lecture streaming with search and view counters',
      'Gamified milestone system (First Login, Video Watcher, Top Learner, etc.)',
      'Real-time notice board with automated welcome popup',
      'Firebase-backed secure authentication and student profiles'
    ]
  },
  {
    id: 'ai-email-order-intake',
    title: 'AI Email Order Intake Engine',
    category: 'ai',
    categoryLabel: 'AI / ML & Automation',
    industry: 'E-commerce',
    summary: 'A background AI engine that reads customer order emails — including casual Roman Urdu messages — and turns them into ready-to-review structured orders automatically.',
    challenge: 'Businesses receiving orders via email had to manually read every message to figure out what was a real order, a question, or spam, and then type details into their systems by hand — slow, error-prone, and impossible to scale.',
    approach: 'Built an AI classification and extraction pipeline that continuously monitors the inbox, classifies each email, and pulls structured order details from even messy, informally written text — including Roman Urdu. Reviewer corrections feed back into the system, so its confidence and accuracy improve automatically over time.',
    architecture: 'Inbox Monitor → Email Classification (Order / Query / Spam) → AI Order Extraction (Text + Attachments) → Confidence Scoring → Human Review Dashboard → Order Management System',
    techStack: ['Python', 'AI / NLP Pipeline', 'Encrypted Data Storage', 'Review Dashboard API'],
    githubUrl: '#',
    metrics: [
      { label: 'Order Languages Understood', value: 'English + Roman Urdu' },
      { label: 'Attachment Types Handled', value: 'Invoices & Scanned Receipts' },
      { label: 'Manual Review Load', value: 'Reduced Automatically Over Time' }
    ],
    features: [
      'Automatic inbox monitoring — no manual checking required',
      'Smart classification of orders, queries, complaints, and spam',
      'Order extraction from casual and Roman Urdu messages',
      'Self-learning feedback loop from reviewer corrections',
      'Encrypted customer data storage and full audit history'
    ]
  },
  {
    id: 'regulatory-form-rpa',
    title: 'Regulatory Form Auto-Completion — AI-Powered RPA',
    category: 'ai',
    categoryLabel: 'AI / ML & Automation',
    industry: 'Professional Services',
    summary: 'An AI-powered RPA system that automatically fills regulatory and government forms from stored client data, pausing only for CAPTCHAs or missing information.',
    challenge: 'Teams that had to fill the same regulatory forms repeatedly for dozens of clients were stuck doing tedious, error-prone manual data entry, one field at a time, for every single client.',
    approach: 'Built a Python/Playwright bot engine that maps client data to any target form once, then runs it automatically for every client. A React Human-in-the-Loop dashboard lets a person step in only for CAPTCHAs or missing fields, after which the bot resumes and finishes the submission on its own.',
    architecture: 'Client Data (Supabase) → Form Field Mapping → Playwright Bot Run → CAPTCHA / Missing-Data Check → Human Review Queue (if needed) → Automatic Form Submission → Logged Result + Screenshot',
    techStack: ['Python', 'Playwright', 'FastAPI', 'React', 'Supabase', 'Groq AI'],
    githubUrl: '#',
    metrics: [
      { label: 'Human Intervention Needed For', value: 'CAPTCHAs & Missing Data Only' },
      { label: 'Form Types Supported', value: 'Web Forms + PDF Forms' },
      { label: 'Run Visibility', value: 'Live Logs & Screenshots' }
    ],
    features: [
      'AI-assisted field mapping between client data and any form',
      'Real browser automation with Playwright for genuine form fills',
      'Human-in-the-loop queue for CAPTCHAs and missing information',
      'Self-resuming automation after human review',
      'Live run logs with screenshots for every submission'
    ]
  },
  {
    id: 'mindcare-mental-health-app',
    title: 'MindCare — Mental Health & Mood Tracking App',
    category: 'app',
    categoryLabel: 'App Development',
    industry: 'Healthcare',
    summary: 'A calming, fully-built React Native mental health app covering PHQ-9 depression screening, mood tracking, CBT exercises, and private journaling.',
    challenge: 'Turning a complete design for a sensitive mental-health product into a fully working mobile app — one that handles clinical screening flows (PHQ-9) responsibly, including built-in safety messaging.',
    approach: 'Converted 14 designed screens into a pixel-accurate React Native (Expo) app, carefully implementing the PHQ-9 screening flow with a dedicated safety modal, plus interactive mood check-ins, CBT progress tracking, and a private journal.',
    architecture: 'Onboarding & Consent → PHQ-9 Screening (with Safety Modal) → Home Dashboard → Mood Check-In / Journal / Exercises → Insights & Progress Tracking',
    techStack: ['React Native', 'Expo SDK', 'Expo Router', 'react-native-svg'],
    githubUrl: '#',
    metrics: [
      { label: 'Screens Delivered', value: '14 Full Screens' },
      { label: 'Clinical Screening Flow', value: 'PHQ-9 with Safety Modal' },
      { label: 'Core Modules', value: 'Mood, CBT, Journal, Insights' }
    ],
    features: [
      'PHQ-9 depression screening with animated results and safety modal',
      'Daily mood check-in with emoji selector, slider, and activity log',
      'CBT exercise library with search and filters',
      'Private journaling with mood before/after tracking',
      'Insights dashboard for mood trends and weekly progress'
    ]
  },
  {
    id: 'andaz-fashion-ecommerce',
    title: 'Andaz Fashion — E-Commerce & Store Management Platform',
    category: 'web',
    categoryLabel: 'Web Development',
    industry: 'E-commerce',
    summary: 'A full-stack fashion e-commerce storefront paired with a secure admin workspace for managing products, orders, and content from one place.',
    challenge: 'A fashion retailer needed an affordable, visually engaging online store, plus practical day-to-day tools for staff to manage catalogue, inventory, and orders — without juggling separate systems.',
    approach: 'Built a single FastAPI application powering both a responsive customer storefront and a role-protected admin dashboard, backed by Supabase for data and auth, Cloudinary for media, and automated email notifications for order updates.',
    architecture: 'Customer Storefront (Browse → Cart → Checkout) → FastAPI Backend → Supabase (PostgreSQL + Auth) → Cloudinary Media Storage → Admin Dashboard (Products, Orders, Content) → Email Notifications',
    techStack: ['FastAPI', 'Python', 'Supabase', 'Cloudinary', 'Bootstrap 5', 'Jinja2'],
    githubUrl: '#',
    metrics: [
      { label: 'Payment Options Supported', value: 'COD, JazzCash, Easypaisa' },
      { label: 'Admin Modules', value: 'Products, Orders, Content, Inventory' },
      { label: 'Storefront Experience', value: 'Fully Responsive Desktop & Mobile' }
    ],
    features: [
      'Product browsing by collection, category, and sale items',
      'Live fuzzy product search with relevance ranking',
      'Guided cart and checkout with multiple payment methods',
      'Role-protected admin dashboard for catalogue and order management',
      'Automated email notifications on order placement and status changes'
    ]
  },
  {
    id: 'insurance-doc-classification',
    title: 'Intelligent Insurance Policy Document Classification System',
    category: 'ai',
    categoryLabel: 'AI / ML',
    industry: 'Insurance',
    summary: 'A cross-platform AI system that automatically reads, classifies, and routes insurance policy documents in English, Urdu, and Roman Urdu.',
    challenge: 'Insurance teams received high volumes of policy documents in mixed formats and languages, and manually sorting and routing them was slow, inconsistent, and hard to scale.',
    approach: 'Built an asynchronous pipeline that extracts text (native or OCR), normalizes bilingual and Roman Urdu content, and classifies each document into an insurance category with a confidence score. An active-learning loop retrains the model on reviewed corrections, with validation before any new model is promoted.',
    architecture: 'Document Upload (Web/Desktop) → Text Extraction (Native/OCR) → Multilingual Normalization → AI Classification + Confidence Score → Human Review Queue (Low Confidence) → Active-Learning Retraining → Analytics Dashboard',
    techStack: ['React', 'React Native', 'FastAPI', 'Hugging Face Transformers', 'PyTorch', 'Tesseract OCR', 'Celery', 'Firebase'],
    githubUrl: '#',
    metrics: [
      { label: 'Languages Supported', value: 'English, Urdu, Roman Urdu' },
      { label: 'Document Types Handled', value: 'Digital PDFs, Scanned PDFs, Images' },
      { label: 'Model Improvement', value: 'Active-Learning Retraining Loop' }
    ],
    features: [
      'Native PDF text extraction with OCR fallback for scans',
      'Bilingual document handling with Roman Urdu normalization',
      'AI classification with category-wise confidence scores',
      'Human-review queue for low-confidence and exception cases',
      'Analytics dashboard for volume, categories, and queue status'
    ]
  },
  {
    id: 'wellmind-portfolio-website',
    title: 'WellMind Data Solutions — Company Portfolio Website',
    category: 'web',
    categoryLabel: 'Web Development',
    industry: 'Professional Services',
    summary: 'A modern, animated portfolio website for an AI and data-science consultancy, presenting services, industries, and case studies through an immersive tech-led design.',
    challenge: 'An AI/data consultancy needed one polished digital destination that could explain highly technical services clearly enough for decision-makers to explore and act on.',
    approach: 'Built a single-page React application with dedicated, route-based pages for every service and industry, using a consistent design system and Framer Motion micro-interactions to make complex offerings approachable.',
    architecture: 'React Router Pages (Services / Industries / Case Studies) → Shared Design System & Layout Components → Framer Motion Interactions → Discovery-Call Enquiry Flow',
    techStack: ['React 19', 'Vite', 'React Router DOM', 'Framer Motion'],
    githubUrl: '#',
    metrics: [
      { label: 'Service Pages Delivered', value: '6 Detailed Service Pages' },
      { label: 'Industry Pages Delivered', value: '6 Industry Pages' },
      { label: 'Case Study Filtering', value: 'By Service & Industry' }
    ],
    features: [
      'Dedicated pages for six AI/data services and six target industries',
      'Filterable, deep-linkable case-study routes',
      'Interactive mega menus and expandable mobile navigation',
      'Animated sections and scroll-based transitions throughout',
      'Discovery-call enquiry form with budget and project details'
    ]
  },
  {
    id: 'invoice-extraction-rpa',
    title: 'Intelligent RPA — Accounts Payable Invoice Extraction',
    category: 'ai',
    categoryLabel: 'AI / ML & Automation',
    industry: 'Fintech',
    summary: 'An AI-powered invoice-processing system that extracts, validates, and routes accounts-payable invoices from PDFs and images, with ERP-ready output.',
    challenge: 'Accounts-payable teams were manually keying in invoice data from documents of varying quality and format, risking incorrect totals, duplicate entries, and missing vendor information.',
    approach: 'Built a pipeline that preprocesses scanned invoices, uses a vision-capable AI model to extract fields and line items, validates arithmetic and required data, checks for duplicates, and routes each invoice by confidence — straight to auto-post, soft review, or manual review.',
    architecture: 'Invoice Upload (PDF/Image) → Image Preprocessing → AI Field & Line-Item Extraction → Arithmetic Validation & Duplicate Check → Confidence-Based Routing (Auto-Post / Soft Review / Manual Review) → ERP Submission (Odoo / QuickBooks)',
    techStack: ['React', 'Vite', 'FastAPI', 'Python', 'Groq Vision Models', 'OpenCV', 'Firebase Firestore'],
    githubUrl: '#',
    metrics: [
      { label: 'Supported File Types', value: 'PDF, PNG, JPG, TIFF, BMP, WEBP' },
      { label: 'Validation Checks', value: 'Arithmetic + Duplicate Detection' },
      { label: 'ERP Integrations', value: 'Odoo & QuickBooks Ready' }
    ],
    features: [
      'AI extraction of vendor, totals, tax, and line items from invoices',
      'Automatic arithmetic and required-field validation',
      'Duplicate invoice detection via persistent records',
      'Confidence-based routing to auto-post or human review',
      'Human-in-the-loop dashboard for correction and approval'
    ]
  },
  {
    id: 'printmaster-cross-platform',
    title: 'PrintMaster — Cross-Platform Print & Document Editing App',
    category: 'desktop',
    categoryLabel: 'Desktop Application',
    industry: 'Retail & SMB',
    summary: 'A local-first document app for macOS, iOS, and Android that brings importing, annotating, signing, form filling, and wireless printing into one workflow.',
    challenge: 'Printing a document from a phone or desktop usually meant switching between a viewer, an editor, and separate printer software — a fragmented experience across devices.',
    approach: 'Built a local-first Expo/React Native app so core PDF workflows work fully offline, backed by a FastAPI service for file conversion and IPP-based print dispatch, with mDNS/Bonjour used to discover network printers automatically.',
    architecture: 'Document Import (PDF/Word/Image) → Local Conversion & Annotation → E-Signature / Form Fill → Printer Discovery (mDNS/Bonjour) → IPP Print Dispatch → Job Status Tracking',
    techStack: ['Expo SDK', 'React Native', 'TypeScript', 'FastAPI', 'PyMuPDF', 'LibreOffice'],
    githubUrl: '#',
    metrics: [
      { label: 'Platforms Supported', value: 'macOS, iOS, Android, Web' },
      { label: 'Interface Languages', value: '7 Languages' },
      { label: 'Core Workflow', value: 'Import → Edit → Sign → Print' }
    ],
    features: [
      'Import and convert PDF, Word, Excel, PowerPoint, and image files',
      'Freehand annotation, highlighting, stamps, and text boxes',
      'Reusable e-signatures with stylus/Apple Pencil support',
      'Automatic PDF form field detection and filling',
      'AirPrint/IPP network printer discovery and job tracking'
    ]
  },
  {
    id: 'medicare-clinic-platform',
    title: 'MediCare — Integrated Clinic Management Platform',
    category: 'web',
    categoryLabel: 'Web Development',
    industry: 'Healthcare',
    summary: 'A role-based clinic management platform connecting reception, doctors, pharmacy, lab, billing, and HR into one live operational system.',
    challenge: 'Clinics were relying on paper registers, WhatsApp messages, and disconnected spreadsheets, causing duplicate patient records, slow department coordination, and manual billing errors.',
    approach: 'Built a centralized, role-based platform where every department gets a focused dashboard while sharing the same live clinical and operational data, connected through secure REST APIs and real-time WebSocket notifications.',
    architecture: 'Patient Registration & Booking → Doctor Consultation Workspace → Pharmacy & Lab Workflows → Billing & Invoicing → Admin/HR Oversight → Real-Time WebSocket Notifications',
    techStack: ['React 19', 'FastAPI', 'Python', 'Firebase Firestore', 'WebSockets', 'JWT'],
    githubUrl: '#',
    metrics: [
      { label: 'Role-Based Dashboards', value: '6 Roles Covered' },
      { label: 'Departments Connected', value: 'Reception, Doctor, Pharmacy, Lab, Billing, HR' },
      { label: 'Live Updates', value: 'Real-Time via WebSockets' }
    ],
    features: [
      'Role-based dashboards for Admin, Reception, Doctor, Pharmacist, and Lab',
      'Doctor consultation workspace with patient history and prescriptions',
      'Pharmacy inventory with dispensing and low-stock alerts',
      'Billing with downloadable PDF invoices and daily cash reconciliation',
      'Real-time notifications and full audit logging'
    ]
  },
  {
    id: 'ai-detector-content-suite',
    title: 'AI Detector — AI Writing & Content Quality Suite',
    category: 'ai',
    categoryLabel: 'AI / ML',
    industry: 'Education',
    summary: 'A desktop content assistant that detects AI-generated text, checks originality, and rewrites, summarizes, and grammar-checks content in one workspace.',
    challenge: 'Writers, students, and content teams needed several separate tools — an AI detector, plagiarism checker, grammar checker, summarizer, and paraphraser — which fragmented and slowed down the writing workflow.',
    approach: 'Built a React app on a FastAPI service layer where users paste text, a URL, or upload a document; the backend extracts content and runs LLM-powered analysis, with longer jobs like plagiarism checks handled as background tasks with status polling.',
    architecture: 'Text / URL / Document Input → Content Extraction → LLM-Powered Analysis (Detection, Plagiarism, Grammar, Summary) → Background Job Processing → Downloadable PDF Report',
    techStack: ['React 19', 'Vite', 'FastAPI', 'Groq API (Llama 3.3)', 'Grammarly API', 'Tesseract OCR'],
    githubUrl: '#',
    metrics: [
      { label: 'Tools Consolidated', value: '5+ (Detector, Plagiarism, Grammar, Summarizer, Paraphraser)' },
      { label: 'Supported Inputs', value: 'Text, URL, PDF, DOCX, TXT' },
      { label: 'Report Output', value: 'Downloadable PDF Reports' }
    ],
    features: [
      'AI content detection with sentence-level indicators',
      'Plagiarism checker for text, URLs, and document uploads',
      'AI paraphraser and humanizer for natural rewriting',
      'Multi-format AI summarizer and Grammarly-powered grammar checks',
      'PDF-to-Word conversion with OCR for scanned files'
    ]
  },
  {
    id: 'nexus-rms-command-center',
    title: 'NEXUS RMS Command Center',
    category: 'web',
    categoryLabel: 'Web Development',
    industry: 'Hospitality',
    summary: 'A full-stack restaurant operations platform unifying POS, kitchen workflow, inventory, staff attendance, and owner-level risk insights in real time.',
    challenge: 'Restaurant operations were spread across disconnected processes — orders at the counter, manual kitchen tracking, after-the-fact stock updates — leaving owners with limited visibility into delays, cancellations, and feedback.',
    approach: 'Connected every operational workflow through a React interface, FastAPI service layer, and Firebase real-time data, giving each role a focused workspace while feeding shared events into owner-level reporting — with face-verified attendance and AI-assisted fraud and SLA monitoring layered in.',
    architecture: 'POS Order Creation → Kitchen SLA Tracking → Inventory & Stock Alerts → Face-Verified Attendance (DeepFace) → Fraud & Review Intelligence → Real-Time Owner Command Center (Firebase Listeners)',
    techStack: ['React 19', 'FastAPI', 'Firebase Firestore', 'DeepFace', 'TensorFlow', 'OpenCV'],
    githubUrl: '#',
    metrics: [
      { label: 'Connected Modules', value: 'POS, Kitchen, Inventory, HR, Reviews' },
      { label: 'Attendance Verification', value: 'Face + GPS + Selfie Evidence' },
      { label: 'Owner Visibility', value: 'Real-Time Fraud & SLA Alerts' }
    ],
    features: [
      'Point-of-sale order creation and kitchen SLA tracking',
      'Face-verified staff attendance with GPS and selfie evidence',
      'Inventory alerts for low stock, waste, and turnover',
      'Fraud monitoring for suspicious cancellations and pricing',
      'Customer review sentiment intelligence with CSV export'
    ]
  }
];