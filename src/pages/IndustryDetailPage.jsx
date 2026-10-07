import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import { caseStudies } from '../data/caseStudiesData';
import { CheckCircle2, ArrowRight, Github, ChevronRight } from 'lucide-react';

export default function IndustryDetailPage({ setSelectedCaseStudy }) {
  const { industryId } = useParams();
  const navigate = useNavigate();

  const industry = industriesData[industryId] || industriesData['healthcare'];
  const IndustryIcon = industry.icon;

  const industryCases = caseStudies.filter((cs) => cs.industry === industry.industryValue);

  return (
    <div className="industry-detail-page">
      {/* 1. Dark Hero */}
      <section className="industry-hero">
        <div className="container">
          <div className="breadcrumb-row">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span className="current-crumb">{industry.name}</span>
          </div>

          <div className="hero-icon-box">
            <IndustryIcon size={26} />
          </div>

          <h1 className="hero-title">{industry.name}</h1>
          <p className="hero-tagline">{industry.tagline}</p>
          <p className="hero-desc">{industry.description}</p>

          <div className="hero-cta-row">
            <Link to="/contact" className="btn btn-white">
              <span>Start Project Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Projects for this Industry */}
      <section className="industry-cases-section section-padding">
        <div className="container">
          <div className="section-header text-center mb-4">
            <span className="eyebrow-text">DELIVERED WORK</span>
            <h2 className="section-title">Projects in {industry.name}</h2>
          </div>

          {industryCases.length === 0 ? (
            <div className="no-results card text-center">
              <h3>No delivered projects yet in this industry</h3>
              <p>We're actively taking on new {industry.name} projects — let's talk about yours.</p>
              <Link to="/contact" className="btn btn-primary mt-3">
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="cs-grid">
              {industryCases.map((cs) => (
                <div key={cs.id} className="case-card card">
                  <div className="case-card-top">
                    <span className="badge badge-accent">{cs.categoryLabel}</span>
                    <span className="badge badge-neutral">{cs.industry}</span>
                  </div>

                  <h3 className="case-card-title">{cs.title}</h3>
                  <p className="case-card-summary">{cs.summary}</p>

                  <div className="case-card-metric">
                    <CheckCircle2 size={15} className="metric-icon" />
                    <span>{cs.metrics[0].label}: <strong>{cs.metrics[0].value}</strong></span>
                  </div>

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
                      title="View GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. CTA Banner */}
      <section className="final-cta-section text-center">
        <div className="container">
          <h2 className="cta-title">Have a {industry.name} project in mind?</h2>
          <p className="cta-subtext">Consult directly with our founding engineers to scope it.</p>
          <Link to="/contact" className="btn btn-white btn-lg">
            <span>Schedule Project Call</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        .industry-hero {
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

        .hero-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(0, 194, 255, 0.12);
          border: 1px solid rgba(0, 194, 255, 0.3);
          color: #21A6BF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 400;
          color: #FFFFFF;
          margin-bottom: 10px;
        }

        .hero-tagline {
          font-size: 1.1rem;
          color: #21A6BF;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .hero-desc {
          font-size: 1rem;
          color: #8B98A9;
          max-width: 650px;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .industry-cases-section {
          background: #F8FAFC;
        }

        .section-header {
          max-width: 600px;
          margin: 0 auto 36px auto;
        }

        .text-center {
          text-align: center;
        }

        .eyebrow-text {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }

        .section-title {
          font-size: 2.2rem;
          color: var(--color-text-primary);
        }

        .cs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .case-card-top {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }

        .case-card-title {
          font-size: 1.1rem;
          color: var(--color-text-primary);
          margin-bottom: 8px;
        }

        .case-card-summary {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin-bottom: 16px;
        }

        .case-card-metric {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--color-text-primary);
          background: #F8FAFC;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          margin-bottom: 18px;
          border: 1px solid var(--color-neutral-border);
        }

        .metric-icon {
          color: var(--color-success);
          flex-shrink: 0;
        }

        .case-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .btn-sm {
          padding: 8px 16px;
          font-size: 0.84rem;
        }

        .github-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #090F1E;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .github-icon-btn:hover {
          background: var(--color-accent);
        }

        .no-results {
          padding: 48px;
        }

        .mt-3 { margin-top: 14px; }
        .mb-4 { margin-bottom: 24px; }

        .final-cta-section {
          padding: clamp(48px, 8vw, 80px) 0;
          background: #090F1E;
          color: #FFFFFF;
        }

        .cta-title {
          font-size: clamp(1.4rem, 3.5vw, 2.2rem);
          color: #FFFFFF;
          margin-bottom: 14px;
        }

        .cta-subtext {
          font-size: clamp(0.9rem, 1.6vw, 1.05rem);
          color: #8B98A9;
          max-width: 600px;
          margin: 0 auto 28px auto;
        }

        .btn-lg {
          padding: 13px 28px;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
        }

        @media (max-width: 880px) {
          .hero-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
