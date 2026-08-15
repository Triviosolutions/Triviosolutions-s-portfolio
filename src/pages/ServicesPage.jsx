import React, { useState } from 'react';
import { caseStudies } from '../data/caseStudiesData';
import { Cpu, Layers, Smartphone, Monitor, CheckCircle, ArrowRight, Server, ShieldCheck, Zap } from 'lucide-react';

export default function ServicesPage({ setActivePage, setSelectedCaseStudy }) {
  const [activeTab, setActiveTab] = useState('ai');

  const servicesData = {
    ai: {
      title: 'AI / ML, RAG Pipelines & Autonomous Agents',
      lead: 'Led by Noor Fatima (Co-Founder — AI/ML Lead)',
      desc: 'We transform bleeding-edge artificial intelligence research into robust, privacy-first production software.',
      capabilities: [
        'Custom ML & Deep Learning model development and fine-tuning',
        'RAG (Retrieval-Augmented Generation) pipeline design with vector databases',
        'Autonomous AI agent development & multi-agent orchestration',
        'Model optimization and cloud deployment (Hugging Face, custom infra)',
        'NLP, medical transcription, and computer vision integration',
        'MLOps, continuous monitoring, and hallucination guardrails'
      ],
      tech: ['PyTorch', 'Hugging Face', 'FastAPI', 'Supabase Vector', 'LangChain', 'Python'],
      categoryKey: 'ai'
    },
    web: {
      title: 'Web Application Engineering & API Systems',
      lead: 'Led by M. Hashir Tayyab (Co-Founder — Web Development Lead)',
      desc: 'Scalable, high-performance web platforms engineered to grow seamlessly from MVP to enterprise load without rework.',
      capabilities: [
        'Full-stack web application development (React, Next.js)',
        'High-speed backend API engineering (FastAPI, Django REST)',
        'Complex database architecture & real-time sync (PostgreSQL, Supabase, Firebase)',
        'Custom dashboard & analytics platform development',
        'Cloud deployment, CI/CD & edge infrastructure (Vercel, Cloudflare, Railway)',
        'Progressive Web Applications (PWAs) & web socket integration'
      ],
      tech: ['FastAPI', 'Django', 'React', 'Next.js', 'PostgreSQL', 'Firebase', 'Vercel'],
      categoryKey: 'web'
    },
    app: {
      title: 'Cross-Platform Mobile App Development',
      lead: 'Led by M. Fareed Ameeri (Co-Founder — App Development Lead)',
      desc: 'Native-feel mobile apps built with cross-platform frameworks for speed, real-world reliability, and offline sync.',
      capabilities: [
        'Cross-platform iOS and Android mobile app engineering',
        'Offline-first mobile architecture with local SQLite database caching',
        'Real-time GPS tracking & background sync capabilities',
        'Push notifications & third-party SDK integrations (Google Maps, Stripe)',
        'App Store and Google Play deployment management',
        'Performance profiling, battery optimization, and low-latency UI'
      ],
      tech: ['React Native', 'Firebase', 'SQLite', 'Google Maps API', 'iOS/Android Native Modules'],
      categoryKey: 'app'
    },
    desktop: {
      title: 'Offline-First Desktop Applications',
      lead: 'Led by M. Fareed Ameeri (Co-Founder — App Development Lead)',
      desc: 'Robust desktop software engineered for enterprise teams requiring offline reliability, hardware access, and zero downtime.',
      capabilities: [
        'Cross-platform desktop application development (Electron, Native wrappers)',
        'Offline-first local cache with automated background cloud reconciliation',
        'Direct hardware integration (barcode scanners, printers, serial ports)',
        'Local file system storage & instant offline search indexing',
        'Automated background auto-update pipelines',
        'High-concurrency data logging & local security encryption'
      ],
      tech: ['Electron', 'SQLite', 'Django REST API', 'Supabase', 'TypeScript'],
      categoryKey: 'desktop'
    }
  };

  const currentSvc = servicesData[activeTab];
  const filteredCases = caseStudies.filter(cs => cs.category === currentSvc.categoryKey);

  return (
    <div className="services-page">
      {/* Hero Header */}
      <section className="services-hero bg-dark">
        <div className="container">
          <span className="badge badge-accent">OUR SPECIALIZATION DOMAINS</span>
          <h1 className="services-title">Custom AI Models, Web Platforms & Mobile/Desktop Apps</h1>
          <p className="services-subtitle">
            Every Trivio solution is architected by our domain-founding leads. Explore our core technical capabilities below.
          </p>

          {/* Navigation Tabs */}
          <div className="services-tabs-row">
            <button 
              className={`tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveTab('ai')}
            >
              <Cpu size={18} />
              <span>AI / ML & Agents</span>
            </button>

            <button 
              className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`}
              onClick={() => setActiveTab('web')}
            >
              <Layers size={18} />
              <span>Web Development</span>
            </button>

            <button 
              className={`tab-btn ${activeTab === 'app' ? 'active' : ''}`}
              onClick={() => setActiveTab('app')}
            >
              <Smartphone size={18} />
              <span>App Development</span>
            </button>

            <button 
              className={`tab-btn ${activeTab === 'desktop' ? 'active' : ''}`}
              onClick={() => setActiveTab('desktop')}
            >
              <Monitor size={18} />
              <span>Desktop Software</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Service Details Section */}
      <section className="service-detail-section section-padding">
        <div className="container">
          <div className="service-detail-header">
            <div className="lead-pill">
              <ShieldCheck size={16} />
              <span>{currentSvc.lead}</span>
            </div>
            <h2 className="detail-title">{currentSvc.title}</h2>
            <p className="detail-desc">{currentSvc.desc}</p>
          </div>

          <div className="detail-grid">
            {/* Left: Capability List */}
            <div className="detail-card card">
              <h3 className="card-heading mb-3">Core Technical Capabilities</h3>
              <ul className="capability-list">
                {currentSvc.capabilities.map((cap, idx) => (
                  <li key={idx}>
                    <CheckCircle size={18} className="cap-icon" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Tech Stack & Approach */}
            <div className="detail-card card">
              <h3 className="card-heading mb-3">Technologies in Active Production</h3>
              <div className="tech-pills-wrap">
                {currentSvc.tech.map((t, idx) => (
                  <span key={idx} className="badge badge-accent">
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="card-heading mt-4 mb-3">Standard Delivery Timeline</h3>
              <div className="mini-process">
                <div className="process-step">
                  <span className="step-no">01</span>
                  <div>
                    <strong>Discovery & Feasibility</strong>
                    <p>Validate problem statement & architecture proposal.</p>
                  </div>
                </div>
                <div className="process-step">
                  <span className="step-no">02</span>
                  <div>
                    <strong>Proof of Concept (PoC)</strong>
                    <p>Build working prototype before committing to full build.</p>
                  </div>
                </div>
                <div className="process-step">
                  <span className="step-no">03</span>
                  <div>
                    <strong>Sprint Build & Deploy</strong>
                    <p>Agile sprints with weekly demos and continuous launch.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Relevant Case Studies */}
          {filteredCases.length > 0 && (
            <div className="service-cases-block">
              <h3 className="section-title text-center mb-4">Relevant Delivered Case Studies</h3>
              <div className="featured-grid">
                {filteredCases.map((cs) => (
                  <div key={cs.id} className="case-card card">
                    <div className="case-card-top">
                      <span className="badge badge-accent">{cs.categoryLabel}</span>
                      <span className="badge badge-neutral">{cs.industry}</span>
                    </div>

                    <h3 className="case-card-title">{cs.title}</h3>
                    <p className="case-card-summary">{cs.summary}</p>

                    <div className="case-card-footer">
                      <button className="btn btn-primary btn-sm" onClick={() => setSelectedCaseStudy(cs)}>
                        <span>View Details</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="service-cta-card card text-center mt-5">
            <h3 className="cta-card-title">Need custom {currentSvc.title}?</h3>
            <p className="cta-card-sub">Let's discuss technical requirements and scope your project.</p>
            <button className="btn btn-primary" onClick={() => setActivePage('contact')}>
              <span>Start Project Consultation</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .services-hero {
          padding: 80px 0 60px 0;
          text-align: center;
          background: linear-gradient(180deg, var(--color-primary), var(--color-primary-2));
        }

        .services-title {
          font-size: 2.8rem;
          color: var(--color-text-inverse);
          margin: 16px 0 12px 0;
        }

        .services-subtitle {
          font-size: 1.1rem;
          color: rgba(245, 246, 248, 0.8);
          max-width: 680px;
          margin: 0 auto 40px auto;
        }

        .services-tabs-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--color-text-inverse);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.25s ease;
        }

        .tab-btn:hover {
          background: rgba(76, 95, 255, 0.25);
          border-color: var(--color-accent);
        }

        .tab-btn.active {
          background: var(--color-accent);
          border-color: var(--color-accent);
          color: #fff;
          box-shadow: 0 4px 16px rgba(76, 95, 255, 0.4);
        }

        .service-detail-section {
          background: var(--color-neutral-bg);
        }

        .service-detail-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 48px auto;
        }

        .lead-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          background: var(--color-accent-light);
          color: var(--color-accent);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .detail-title {
          font-size: 2.1rem;
          color: var(--color-text-primary);
          margin-bottom: 10px;
        }

        .detail-desc {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
          margin-bottom: 56px;
        }

        .mb-3 { margin-bottom: 16px; }
        .mb-4 { margin-bottom: 24px; }
        .mt-4 { margin-top: 24px; }
        .mt-5 { margin-top: 48px; }

        .capability-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .capability-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.98rem;
          color: var(--color-text-primary);
          line-height: 1.5;
        }

        .cap-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tech-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .mini-process {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .process-step {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 12px;
          background: var(--color-neutral-bg);
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-neutral-border);
        }

        .step-no {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 1rem;
          color: var(--color-accent);
        }

        .process-step p {
          font-size: 0.82rem;
          color: var(--color-text-secondary);
          margin-top: 2px;
        }

        .service-cta-card {
          background: #FFFFFF;
          padding: 48px;
          border: 1px solid var(--color-neutral-border);
        }

        .cta-card-title {
          font-size: 1.8rem;
          color: var(--color-text-primary);
          margin-bottom: 8px;
        }

        .cta-card-sub {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }

        @media (max-width: 880px) {
          .detail-grid {
            grid-template-columns: 1fr;
          }
          .services-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </div>
  );
}
