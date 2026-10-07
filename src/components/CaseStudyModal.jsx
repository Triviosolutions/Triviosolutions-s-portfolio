import React from 'react';
import { X, Github, ExternalLink, CheckCircle, ArrowRight, Layers, Cpu, Smartphone, Monitor } from 'lucide-react';

export default function CaseStudyModal({ caseStudy, onClose, onSelectOther }) {
  if (!caseStudy) return null;

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
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-tags">
            <span className="badge badge-accent">{caseStudy.categoryLabel}</span>
            <span className="badge badge-neutral">{caseStudy.industry}</span>
          </div>

          <h2 className="modal-title">{caseStudy.title}</h2>
          <p className="modal-summary">{caseStudy.summary}</p>

          <div className="modal-actions">
            <a 
              href={caseStudy.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-dark"
            >
              <Github size={18} />
              <span>View Repository on GitHub</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Device Frame Mockup Placeholder */}
        <div className="device-mockup-frame">
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

        {/* Challenge & Approach */}
        <div className="modal-grid">
          <div className="modal-card">
            <h3 className="card-heading">The Challenge</h3>
            <p className="card-text">{caseStudy.challenge}</p>
          </div>

          <div className="modal-card">
            <h3 className="card-heading">Our Engineering Approach</h3>
            <p className="card-text">{caseStudy.approach}</p>
          </div>
        </div>

        {/* Architecture Diagram */}
        {caseStudy.architecture && (
          <div className="architecture-block">
            <h3 className="card-heading">System Architecture & Data Flow</h3>
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
        <div className="modal-grid">
          <div className="modal-card">
            <h3 className="card-heading">Key Delivered Features</h3>
            <ul className="features-list">
              {caseStudy.features.map((feat, idx) => (
                <li key={idx}>
                  <CheckCircle size={16} className="feat-check" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-card">
            <h3 className="card-heading">Technologies Used</h3>
            <div className="tech-tags-grid">
              {caseStudy.techStack.map((tech, idx) => (
                <span key={idx} className="badge badge-neutral">
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="card-heading mt-4">Measured Impact & Metrics</h3>
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

        {/* GitHub Bottom Card */}
        <div className="github-bottom-card">
          <div className="gh-card-left">
            <Github size={28} />
            <div>
              <h4 className="gh-card-title">Explore Source Code & Documentation</h4>
              <p className="gh-card-sub">Inspect clean architecture, test coverage, and deployment setup on GitHub.</p>
            </div>
          </div>
          <a href={caseStudy.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <span>View on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(16, 26, 48, 0.75);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          overflow-y: auto;
        }

        .modal-content {
          position: relative;
          background: var(--color-neutral-surface);
          border: 1px solid var(--color-neutral-border);
          border-radius: var(--radius-lg);
          max-width: 920px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 40px;
          box-shadow: var(--shadow-lg);
          animation: modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .modal-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--color-neutral-bg);
          border: 1px solid var(--color-neutral-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-primary);
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: var(--color-error);
          color: #fff;
          border-color: var(--color-error);
        }

        .modal-header {
          margin-bottom: 28px;
        }

        .modal-tags {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }

        .modal-title {
          font-size: 1.8rem;
          color: var(--color-text-primary);
          margin-bottom: 10px;
        }

        .modal-summary {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .device-mockup-frame {
          background: var(--color-primary);
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: var(--shadow-md);
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

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-red { background: #FF5F56; }
        .dot-yellow { background: #FFBD2E; }
        .dot-green { background: #27C93F; }

        .device-title-url {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: rgba(245, 246, 248, 0.6);
        }

        .device-screen {
          height: 240px;
          background: linear-gradient(135deg, var(--color-primary-2), var(--color-primary));
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
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(76, 95, 255, 0.2);
          border: 1px solid var(--color-accent);
          color: var(--color-accent-alt);
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

        .modal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 24px;
          margin-bottom: 28px;
        }

        .modal-card {
          background: var(--color-neutral-bg);
          border: 1px solid var(--color-neutral-border);
          border-radius: var(--radius-md);
          padding: 24px;
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
          background: var(--color-primary);
          color: #fff;
          padding: 24px;
          border-radius: var(--radius-md);
          margin-bottom: 28px;
        }

        .architecture-block .card-heading {
          color: #fff;
        }

        .architecture-diagram {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
        }

        .arch-node {
          background: var(--color-primary-2);
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
          color: var(--color-accent-alt);
        }

        .arch-step-text {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-text-inverse);
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
          gap: 12px;
          margin-top: 12px;
        }

        .metric-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          padding: 8px 12px;
          background: #fff;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-neutral-border);
        }

        .metric-val {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--color-accent);
        }

        .metric-lbl {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
        }

        .github-bottom-card {
          background: var(--color-neutral-bg);
          border: 1px solid var(--color-neutral-border);
          padding: 24px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .gh-card-left {
          display: flex;
          align-items: center;
          gap: 16px;
          color: var(--color-primary);
        }

        .gh-card-title {
          font-size: 1.05rem;
          font-weight: 700;
        }

        .gh-card-sub {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
        }

        @media (max-width: 640px) {
          .modal-content {
            padding: 20px;
          }
          .github-bottom-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
