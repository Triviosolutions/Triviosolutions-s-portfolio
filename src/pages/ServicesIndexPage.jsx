import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ServicesIndexPage() {
  const serviceList = Object.values(servicesData);

  return (
    <div className="services-index-page">
      {/* Dark Midnight Hero Banner */}
      <section className="services-hero bg-dark text-center">
        <div className="container">
          <div className="breadcrumb-row justify-center">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span className="current-crumb">Services Overview</span>
          </div>

          <span className="badge badge-accent mb-2">WHAT WE BUILD</span>
          <h1 className="hero-title">Web Platforms, Mobile Apps & Desktop Software</h1>
          <p className="hero-subtitle">
            Trivio Solutions offers 4 service areas — all built by the same full-stack team, with AI features added in where they add real value.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list-section section-padding">
        <div className="container">
          <div className="services-stack">
            {serviceList.map((svc) => {
              const SvcIcon = svc.icon;
              return (
                <div key={svc.id} className="service-index-card card">
                  <div className="svc-left">
                    <div className="svc-icon-box">
                      <SvcIcon size={26} />
                    </div>
                    <div>
                      <span className="badge badge-accent mb-1">{svc.categoryLabel}</span>
                      <h2 className="svc-title">{svc.title}</h2>
                      <p className="svc-lead">Built by our <strong>{svc.leadName}</strong> ({svc.leadRole})</p>
                      <p className="svc-summary">{svc.summary}</p>

                      <div className="tech-tags-row mt-3">
                        {svc.techStack.slice(0, 5).map((t, idx) => (
                          <span key={idx} className="badge badge-neutral">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="svc-right">
                    <Link to={`/services/${svc.slug}`} className="btn btn-primary">
                      <span>Explore Specialization</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section text-center">
        <div className="container">
          <h2 className="cta-title text-white">Have a specific technical requirement?</h2>
          <p className="cta-subtext">Consult directly with our founding leads to scope your software application.</p>
          <Link to="/contact" className="btn btn-white btn-lg">
            <span>Talk to an Expert</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        .services-hero {
          background: #090F1E;
          padding: 60px 0;
          color: #FFFFFF;
        }

        .justify-center {
          justify-content: center;
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

        .hero-title {
          font-size: 2.5rem;
          font-weight: 400;
          color: #FFFFFF;
          margin-bottom: 12px;
        }

        .hero-subtitle {
          font-size: 1.05rem;
          color: #8B98A9;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-list-section {
          background: #F8FAFC;
        }

        .services-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .service-index-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 32px;
          background: #FFFFFF;
        }

        .svc-left {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          flex: 1;
        }

        .svc-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: #090F1E;
          color: #21A6BF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .svc-title {
          font-size: 1.4rem;
          color: var(--color-text-primary);
          margin-bottom: 4px;
        }

        .svc-lead {
          font-size: 0.86rem;
          color: var(--color-text-secondary);
          margin-bottom: 10px;
        }

        .svc-summary {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          max-width: 720px;
        }

        .tech-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .mt-3 { margin-top: 14px; }
        .mb-1 { margin-bottom: 4px; }
        .mb-2 { margin-bottom: 8px; }

        @media (max-width: 880px) {
          .service-index-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .svc-left {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
