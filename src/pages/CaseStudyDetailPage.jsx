import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudiesData';
import { Github, ExternalLink, CheckCircle, ArrowRight, ChevronRight, Layers, Cpu, Smartphone, Monitor } from 'lucide-react';

export default function CaseStudyDetailPage() {
  const { id } = useParams();
  const caseStudy = caseStudies.find(c => c.id === id) || caseStudies[0];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'ai': return Cpu;
      case 'web': return Layers;
      case 'app': return Smartphone;
      case 'desktop': return Monitor;
      default: return Layers;
    }
  };

  const DeviceIcon = getCategoryIcon(caseStudy.category);

  return (
    <div className="case-study-detail-page">
      {/* Hero Header */}
      <section className="cs-detail-hero">
        <div className="container">
          <div className="breadcrumb-row">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/case-studies">Case Studies</Link>
            <ChevronRight size={14} />
            <span className="current-crumb">{caseStudy.industry}</span>
          </div>

          <div className="cs-hero-tags">
            <span className="badge badge-accent">{caseStudy.categoryLabel}</span>
            <span className="badge badge-neutral">{caseStudy.industry}</span>
          </div>

          <h1 className="hero-title">{caseStudy.title}</h1>
          <p className="hero-subtitle">{caseStudy.summary}</p>

          <div className="hero-actions">
            <a href={caseStudy.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-white">
              <Github size={18} />
              <span>View Repository on GitHub</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Screen Frame Mockup */}
      <section className="mockup-section section-padding">
        <div className="container">
          <div className="device-mockup-frame card">
            <div className="device-bar">
              <div className="device-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="device-title-url">{caseStudy.githubUrl.replace('https://', '')}</span>
            </div>
            <div className="device-screen">
              <div className="screen-content">
                <div className="screen-icon-wrapper">
                  <DeviceIcon size={42} />
                </div>
                <h4 className="screen-title">{caseStudy.title}</h4>
                <span className="screen-sub">Interactive Application UI & Architecture</span>
                <span className="badge badge-accent mt-2">Verified Production Build</span>
              </div>
            </div>
          </div>

          {/* Grid: Challenge & Approach */}
          <div className="cs-detail-grid">
            <div className="cs-detail-card card">
              <h3 className="card-heading">The Challenge</h3>
              <p className="card-text">{caseStudy.challenge}</p>
            </div>

            <div className="cs-detail-card card">
              <h3 className="card-heading">Our Engineering Approach</h3>
              <p className="card-text">{caseStudy.approach}</p>
            </div>
          </div>

          {/* Architecture Block */}
          {caseStudy.architecture && (
            <div className="architecture-block card">
              <h3 className="card-heading text-white">System Architecture & Data Flow</h3>
              <div className="architecture-diagram">
                {caseStudy.architecture.split(' → ').map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="arch-node">
                      <span className="arch-step-num">0{idx + 1}</span>
                      <span className="arch-step-text">{step}</span>
                    </div>
                    {idx < arr.length - 1 && <span className="arch-arrow">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Features & Metrics */}
          <div className="cs-detail-grid">
            <div className="cs-detail-card card">
              <h3 className="card-heading">Key Features Delivered</h3>
              <ul className="features-list">
                {caseStudy.features.map((feat, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} className="feat-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cs-detail-card card">
              <h3 className="card-heading">Tech Stack Used</h3>
              <div className="tech-tags-grid">
                {caseStudy.techStack.map((tech, idx) => (
                  <span key={idx} className="badge badge-accent">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="card-heading mt-4">Measured Impact</h3>
              <div className="metrics-list">
                {caseStudy.metrics.map((m, idx) => (
                  <div key={idx} className="metric-row">
                    <span className="metric-val">{m.value}</span>
                    <span className="metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="final-cta-section text-center">
        <div className="container">
          <h2 className="cta-title text-white">Need a solution like {caseStudy.title}?</h2>
          <p className="cta-subtext">Consult with our team to scope your application.</p>
          <Link to="/contact" className="btn btn-white btn-lg">
            <span>Start a Project</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        .cs-detail-hero {
          background: #090F1E;
          padding: 60px 0;
          color: #FFFFFF;
        }

        .breadcrumb-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #8B98A9;
          margin-bottom: 20px;
        }

        .breadcrumb-row a {
          color: #8B98A9;
          transition: color 0.15s ease;
        }

        .breadcrumb-row a:hover {
          color: #FFFFFF;
        }

        .current-crumb {
          color: #21A6BF;
          font-weight: 600;
        }

        .cs-hero-tags {
          display: flex;
          gap: 8px;
          margin-bottom: 14px;
        }

        .hero-title {
          font-size: 2.4rem;
          font-weight: 400;
          color: #FFFFFF;
          margin-bottom: 12px;
        }

        .hero-subtitle {
          font-size: 1.05rem;
          color: #8B98A9;
          max-width: 680px;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .mockup-section {
          background: #F8FAFC;
        }

        .device-mockup-frame {
          background: #090F1E;
          border-radius: 16px;
          overflow: hidden;
          padding: 0;
          margin-bottom: 32px;
        }

        .device-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 16px;
          background: rgba(0, 0, 0, 0.25);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .device-dots {
          display: flex;
          gap: 6px;
        }

        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot-red { background: #FF5F56; }
        .dot-yellow { background: #FFBD2E; }
        .dot-green { background: #27C93F; }

        .device-title-url {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: rgba(245, 246, 248, 0.6);
        }

        .device-screen {
          height: 260px;
          background: linear-gradient(135deg, #0F1C3F, #090F1E);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
        }

        .screen-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .screen-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          background: rgba(76, 95, 255, 0.2);
          border: 1px solid #21A6BF;
          color: #21A6BF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .screen-title {
          font-size: 1.15rem;
          color: #fff;
          font-weight: 700;
        }

        .screen-sub {
          font-size: 0.85rem;
          color: rgba(245, 246, 248, 0.6);
          margin-top: 4px;
        }

        .mt-2 { margin-top: 10px; }
        .mt-4 { margin-top: 20px; }

        .cs-detail-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 24px;
          margin-bottom: 28px;
        }

        .card-heading {
          font-size: 1.1rem;
          color: var(--color-text-primary);
          margin-bottom: 12px;
        }

        .card-text {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .architecture-block {
          background: #090F1E;
          padding: 28px;
          margin-bottom: 28px;
        }

        .architecture-diagram {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
        }

        .arch-node {
          background: #0F1C3F;
          border: 1px solid rgba(76, 95, 255, 0.3);
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .arch-step-num {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.8rem;
          color: #21A6BF;
        }

        .arch-step-text {
          font-size: 0.88rem;
          font-weight: 600;
          color: #FFFFFF;
        }

        .arch-arrow {
          color: var(--color-accent);
          font-weight: 800;
          font-size: 1.2rem;
        }

        .features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .features-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--color-text-primary);
        }

        .feat-check {
          color: var(--color-success);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .tech-tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .metrics-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 12px;
        }

        .metric-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          padding: 8px 12px;
          background: #F8FAFC;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-neutral-border);
        }

        .metric-val {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--color-accent);
        }

        .metric-lbl {
          font-size: 0.86rem;
          color: var(--color-text-secondary);
        }
      `}</style>
    </div>
  );
}
