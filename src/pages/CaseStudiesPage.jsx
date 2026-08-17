
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudiesData';
import { Search, Github, ArrowRight, CheckCircle2, Filter, ChevronRight } from 'lucide-react';

export default function CaseStudiesPage({ setSelectedCaseStudy }) {
  const [selectedService, setSelectedService] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    { id: 'all', label: 'All Services' },
    { id: 'web', label: 'Web Dev' },
    { id: 'app', label: 'Mobile App' },
    { id: 'desktop', label: 'Desktop App' },
    { id: 'ai', label: 'AI / ML' }
  ];

  const industries = [
    { id: 'all', label: 'All Industries' },
    { id: 'Healthcare', label: 'Healthcare' },
    { id: 'E-commerce', label: 'E-commerce' },
    { id: 'Fintech', label: 'Fintech' },
    { id: 'Insurance', label: 'Insurance' },
    { id: 'Education', label: 'Education' },
    { id: 'Hospitality', label: 'Hospitality' },
    { id: 'Professional Services', label: 'Professional Services' },
    { id: 'Retail & SMB', label: 'Retail & SMB' },
    { id: 'Logistics', label: 'Logistics' },
    { id: 'Internal R&D / SaaS', label: 'R&D / SaaS' }
  ];

  const filteredCases = caseStudies.filter((cs) => {
    const matchesService = selectedService === 'all' || cs.category === selectedService;
    const matchesIndustry = selectedIndustry === 'all' || cs.industry === selectedIndustry;
    const matchesSearch = 
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesService && matchesIndustry && matchesSearch;
  });

  return (
    <div className="case-studies-page">
      {/* Hero Header */}
      <section className="cs-hero bg-dark text-center">
        <div className="container">
          <div className="breadcrumb-row justify-center">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span className="current-crumb">Case Studies & Portfolio</span>
          </div>

          <span className="badge badge-accent mb-2">PRODUCTION PORTFOLIO</span>
          <h1 className="cs-title">20+ Projects. Problems Solved, Trust Gained.</h1>
          <p className="cs-subtitle">
            A selection of what we've built — across web platforms, mobile products, offline desktop tools, and AI-powered features.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="cs-filter-section">
        <div className="container">
          <div className="filter-wrapper card">
            {/* Search Box */}
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search by technology (e.g. FastAPI, RAG, React Native)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Service Filters */}
            <div className="filter-row">
              <div className="filter-label-group">
                <Filter size={15} />
                <span>Service:</span>
              </div>
              <div className="filter-pills">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={`filter-btn ${selectedService === s.id ? 'active' : ''}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Industry Filters */}
            <div className="filter-row">
              <div className="filter-label-group">
                <Filter size={15} />
                <span>Industry:</span>
              </div>
              <div className="filter-pills">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`filter-btn ${selectedIndustry === ind.id ? 'active' : ''}`}
                  >
                    {ind.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="cs-grid-section section-padding">
        <div className="container">
          <div className="grid-count-bar">
            <span>Showing <strong>{filteredCases.length}</strong> project(s) delivered</span>
          </div>

          {filteredCases.length === 0 ? (
            <div className="no-results card text-center">
              <h3>No matching case studies found</h3>
              <p>Try resetting filters or searching for different tech keywords.</p>
              <button 
                className="btn btn-secondary mt-3"
                onClick={() => { setSelectedService('all'); setSelectedIndustry('all'); setSearchQuery(''); }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="cs-grid">
              {filteredCases.map((cs) => (
                <div key={cs.id} className="case-card card">
                  <div className="case-card-top">
                    <span className="badge badge-accent">{cs.categoryLabel}</span>
                    <span className="badge badge-neutral">{cs.industry}</span>
                  </div>

                  <h3 className="case-card-title">{cs.title}</h3>
                  <p className="case-card-summary">{cs.summary}</p>

                  <div className="tech-tags-mini">
                    {cs.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-pill-mini">{tech}</span>
                    ))}
                  </div>

                  <div className="case-card-metric">
                    <CheckCircle2 size={15} className="metric-icon" />
                    <span>{cs.metrics[0].label}: <strong>{cs.metrics[0].value}</strong></span>
                  </div>

                  <div className="case-card-footer">
                    <Link to={`/case-studies/${cs.id}`} className="btn btn-primary btn-sm">
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </Link>

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

      <style>{`
        .cs-hero {
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
          color: #00C2FF;
          font-weight: 600;
        }

        .cs-title {
          font-size: 2.5rem;
          font-weight: 400;
          color: #FFFFFF;
          margin-bottom: 12px;
        }

        .cs-subtitle {
          font-size: 1.05rem;
          color: #8B98A9;
          max-width: 650px;
          margin: 0 auto;
        }

        .cs-filter-section {
          margin-top: -30px;
          position: relative;
          z-index: 10;
        }

        .filter-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px 24px;
          background: #FFFFFF;
        }

        .search-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          color: var(--color-text-secondary);
        }

        .search-input {
          width: 100%;
          padding: 10px 16px 10px 48px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-neutral-border);
          font-family: var(--font-primary);
          font-size: 0.92rem;
          background: #F8FAFC;
          transition: border-color 0.2s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #090F1E;
          background: #fff;
        }

        .filter-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .filter-label-group {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          min-width: 90px;
        }

        .filter-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .filter-btn {
          padding: 5px 12px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          background: #F8FAFC;
          color: var(--color-text-secondary);
          border: 1px solid var(--color-neutral-border);
          transition: all 0.15s ease;
        }

        .filter-btn:hover {
          background: rgba(22, 82, 246, 0.08);
          color: var(--color-accent);
        }

        .filter-btn.active {
          background: #090F1E;
          color: #fff;
          border-color: #090F1E;
        }

        .cs-grid-section {
          background: #F8FAFC;
        }

        .grid-count-bar {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          margin-bottom: 20px;
        }

        .cs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .tech-tags-mini {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
        }

        .tech-pill-mini {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 3px 8px;
          background: #F8FAFC;
          border-radius: 4px;
          color: var(--color-text-secondary);
          border: 1px solid var(--color-neutral-border);
        }

        .no-results {
          padding: 48px;
        }

        .mt-3 { margin-top: 14px; }
        .mb-2 { margin-bottom: 8px; }

        @media (max-width: 768px) {
          .cs-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}