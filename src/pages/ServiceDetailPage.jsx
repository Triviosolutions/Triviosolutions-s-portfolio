import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { caseStudies } from '../data/caseStudiesData';
import { CheckCircle2, ArrowRight, Github, ShieldCheck, ChevronRight } from 'lucide-react';

export default function ServiceDetailPage({ setSelectedCaseStudy }) {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = servicesData[serviceId] || servicesData['web-dev'];
  const ServiceIcon = service.icon;

  const relevantCases = caseStudies.filter((cs) => {
    if (serviceId === 'ai-ml') return cs.category === 'ai';
    if (serviceId === 'web-dev') return cs.category === 'web';
    if (serviceId === 'app-dev') return cs.category === 'app';
    if (serviceId === 'desktop') return cs.category === 'desktop';
    return true;
  });

  return (
    <div className="service-detail-page">
      {/* 1. Dark Midnight Hero Header matching Home Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb-row">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services">Services</Link>
            <ChevronRight size={14} />
            <span className="current-crumb">{service.categoryLabel}</span>
          </div>

          <div className="hero-badge-pill">
            <ShieldCheck size={14} />
            <span>{service.leadRole} — {service.leadName}</span>
          </div>

          <h1 className="hero-title">{service.title}</h1>
          <p className="hero-subtitle">{service.summary}</p>

          <div className="hero-cta-row">
            <Link to="/contact" className="btn btn-white">
              <span>Start Project Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Overview & Lead Founder Spotlight */}
      <section className="overview-section section-padding">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text-card card">
              <span className="eyebrow-text">TECHNICAL OVERVIEW</span>
              <h2 className="section-title">Engineering Excellence & Scale</h2>
              <p className="overview-p">{service.overview}</p>
            </div>

            <div className="founder-lead-card card">
              <span className="badge badge-accent mb-2">BUILT BY</span>
              <div className="fl-header">
                <div className="fl-avatar">{service.leadInitials}</div>
                <div>
                  <h3 className="fl-name">{service.leadName}</h3>
                  <span className="fl-role">{service.leadRole}</span>
                </div>
              </div>
              <p className="fl-bio">{service.leadBio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities Grid */}
      <section className="capabilities-section section-padding">
        <div className="container">
          <div className="section-header text-center mb-4">
            <span className="eyebrow-text">SPECIFIC CAPABILITIES</span>
            <h2 className="section-title">What We Deliver</h2>
          </div>

          <div className="capabilities-grid">
            {service.capabilities.map((cap, idx) => (
              <div key={idx} className="cap-card card">
                <div className="cap-icon-box">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="cap-title">{cap.title}</h3>
                <p className="cap-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Production Tech Stack */}
      <section className="tech-stack-section section-padding">
        <div className="container text-center">
          <span className="eyebrow-text">TECHNOLOGY STACK</span>
          <h2 className="section-title mb-3">Active Production Frameworks</h2>

          <div className="tech-pills-wrap">
            {service.techStack.map((tech, idx) => (
              <span key={idx} className="badge badge-accent tech-pill-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Timeline */}
      <section className="process-section section-padding">
        <div className="container">
          <div className="section-header text-center mb-4">
            <span className="eyebrow-text">DELIVERY PIPELINE</span>
            <h2 className="section-title">How We Build & Deploy</h2>
          </div>

          <div className="process-grid">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="process-card card">
                <span className="step-num text-mono">{step.num}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Relevant Delivered Case Studies */}
      {relevantCases.length > 0 && (
        <section className="relevant-cases-section section-padding">
          <div className="container">
            <div className="section-header text-center mb-4">
              <span className="eyebrow-text">PROVEN OUTCOMES</span>
              <h2 className="section-title">Delivered Case Studies</h2>
            </div>

            <div className="featured-grid">
              {relevantCases.map((cs) => (
                <div key={cs.id} className="case-card card">
                  <div className="case-card-top">
                    <span className="badge badge-accent">{cs.categoryLabel}</span>
                    <span className="badge badge-neutral">{cs.industry}</span>
                  </div>

                  <h3 className="case-card-title">{cs.title}</h3>
                  <p className="case-card-summary">{cs.summary}</p>

                  <div className="case-card-footer">
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        if (setSelectedCaseStudy) setSelectedCaseStudy(cs);
                        else navigate(`/case-studies/${cs.id}`);
                      }}
                    >
                      <span>View Case Study</span>
                      <ArrowRight size={14} />
                    </button>

                    <a 
                      href={cs.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="github-icon-btn"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. CTA Banner */}
      <section className="final-cta-section text-center">
        <div className="container">
          <h2 className="cta-title">Need custom {service.title}?</h2>
          <p className="cta-subtext">Consult directly with our founding engineers to scope your project.</p>
          <Link to="/contact" className="btn btn-white btn-lg">
            <span>Schedule Technical Call</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        .service-hero {
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
          color: #00C2FF;
          font-weight: 600;
        }

        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          background: rgba(0, 194, 255, 0.12);
          border: 1px solid rgba(0, 194, 255, 0.3);
          color: #00C2FF;
          font-size: 0.82rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 400;
          color: #FFFFFF;
          margin-bottom: 14px;
        }

        .hero-subtitle {
          font-size: 1.05rem;
          color: #8B98A9;
          max-width: 650px;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .overview-section {
          background: #F8FAFC;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 28px;
        }

        .overview-p {
          font-size: 1.02rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          margin-top: 12px;
        }

        .founder-lead-card {
          display: flex;
          flex-direction: column;
        }

        .fl-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .fl-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #090F1E;
          color: #FFFFFF;
          font-weight: 800;
          font-size: 1.05rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fl-name {
          font-size: 1.1rem;
          color: var(--color-text-primary);
        }

        .fl-role {
          font-size: 0.82rem;
          color: var(--color-text-secondary);
        }

        .fl-bio {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
        }

        .capabilities-section {
          background: #F8FAFC;
        }

        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        .cap-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(22, 82, 246, 0.08);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .cap-title {
          font-size: 1.1rem;
          color: var(--color-text-primary);
          margin-bottom: 8px;
        }

        .cap-desc {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
        }

        .tech-stack-section {
          background: #FFFFFF;
          border-top: 1px solid var(--color-neutral-border);
          border-bottom: 1px solid var(--color-neutral-border);
        }

        .tech-pills-wrap {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          max-width: 760px;
          margin: 0 auto;
        }

        .tech-pill-lg {
          padding: 8px 18px;
          font-size: 0.85rem;
        }

        .process-section {
          background: #F8FAFC;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .step-num {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-accent);
          margin-bottom: 10px;
          display: block;
        }

        .step-title {
          font-size: 1.05rem;
          margin-bottom: 6px;
        }

        .step-desc {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        .relevant-cases-section {
          background: #F8FAFC;
        }

        .mb-2 { margin-bottom: 8px; }
        .mb-3 { margin-bottom: 16px; }
        .mb-4 { margin-bottom: 24px; }

        @media (max-width: 880px) {
          .overview-grid {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
