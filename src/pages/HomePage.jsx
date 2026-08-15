import React from 'react';
import { Link } from 'react-router-dom';
import HeroCanvas from '../components/HeroCanvas';
import TechMarquee from '../components/TechMarquee';
import FoundersSection from '../components/FoundersSection';
import { caseStudies } from '../data/caseStudiesData';
import { ArrowRight, Cpu, Layers, Smartphone, Monitor, CheckCircle2, Github, Users, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function HomePage({ setSelectedCaseStudy }) {
  const featuredCases = caseStudies.slice(0, 4);

  const whyTrivio = [
    { name: 'Full-Stack Team', icon: Users },
    { name: 'Direct Founder Access', icon: ShieldCheck },
    { name: 'Modern Tech Stack', icon: Zap },
    { name: 'Remote-First & Global', icon: Globe }
  ];

  const services = [
    {
      id: 'web-dev',
      slug: 'web-dev',
      icon: Layers,
      title: 'Web Development',
      desc: 'Scalable, secure, and cost-effective web platforms and FastAPI backends built by our full-stack team.',
      tags: ['FastAPI', 'React', 'Next.js', 'System Architecture']
    },
    {
      id: 'app-dev',
      slug: 'app-dev',
      icon: Smartphone,
      title: 'App Development',
      desc: 'Native-performing iOS and Android apps built with React Native, offline-first sync, and real-world reliability.',
      tags: ['React Native', 'Offline-First', 'Firebase', 'GPS Sync']
    },
    {
      id: 'ai-ml',
      slug: 'ai-ml',
      icon: Cpu,
      title: 'AI & Automation Add-Ons',
      desc: 'Chatbots, RAG-based search, and workflow automation layered into your web, mobile, or desktop product.',
      tags: ['Chatbots', 'RAG Search', 'Automation', 'FastAPI']
    },
    {
      id: 'desktop-apps',
      slug: 'desktop',
      icon: Monitor,
      title: 'Desktop Software',
      desc: 'Offline-first Windows, macOS, and Linux desktop tools with hardware integration and automated sync.',
      tags: ['Electron', 'SQLite', 'Hardware Sync', 'Desktop UI']
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section (Header + Hero = 100vh MAX on Desktop, Fluid on Mobile) */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              We Turn Ideas Into Digital Reality.<br />
              <span className="hero-title-accent">Built to Scale.</span>
            </h1>

            <p className="hero-subtext">
              Trivio Solutions is a full-stack technology agency building modern websites, mobile apps, and AI-powered solutions that help businesses grow.
            </p>

            <div className="hero-cta-group">
              <Link to="/services" className="btn btn-white">
                <span>Explore Our Services</span>
              </Link>

              <Link to="/contact" className="btn btn-outline-white">
                <span>Get A Free Consultation</span>
              </Link>
            </div>
          </div>

          <div className="hero-canvas-wrapper">
            <HeroCanvas />
          </div>
        </div>
      </section>

      {/* 2. Why Trivio Bar */}
      <section className="trust-strip">
        <div className="container">
          <p className="trust-label">WHY BUSINESSES CHOOSE TRIVIO</p>
          <div className="trust-logos-row">
            {whyTrivio.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="trust-logo-item">
                  <ItemIcon size={18} className="trust-icon" />
                  <span className="trust-name">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. "WHAT WE DO" Services Section (Matching Reference 4-Cards Grid) */}
      <section className="services-section section-padding">
        <div className="container">
          <div className="services-section-header">
            <div className="header-left">
              <span className="eyebrow-text">WHAT WE DO</span>
              <h2 className="section-title">
                End-to-End Solutions<br />
                Built for <span className="text-highlight">Your Business</span>
              </h2>
            </div>
            <div className="header-right">
              <p className="header-desc">
                From strategy and design to development and support, we deliver solutions that help you stay ahead in a digital-first world.
              </p>
            </div>
          </div>

          <div className="services-grid">
            {services.map((svc) => {
              const IconComp = svc.icon;
              return (
                <Link key={svc.id} to={`/services/${svc.slug}`} className="service-card card">
                  {/* Dark Navy Rounded Square Icon Box */}
                  <div className="service-icon-box">
                    <IconComp size={24} />
                  </div>

                  <h3 className="service-card-title">{svc.title}</h3>
                  <p className="service-card-desc">{svc.desc}</p>

                  <div className="service-card-footer">
                    <span className="learn-more-link">
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Tech Stack Marquee */}
      <TechMarquee />

      {/* 5. Founders Section */}
      <FoundersSection />

      {/* 6. Featured Case Studies */}
      <section className="featured-cases-section section-padding">
        <div className="container">
          <div className="featured-header">
            <div>
              <span className="eyebrow-text">PROVEN RESULTS</span>
              <h2 className="section-title">Featured Case Studies</h2>
            </div>
            <Link to="/case-studies" className="btn btn-secondary desktop-only-btn">
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="featured-grid">
            {featuredCases.map((cs) => (
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
                  <Link to={`/case-studies/${cs.id}`} className="btn btn-primary btn-sm">
                    <span>View Case Study</span>
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

          <div className="text-center mt-4 mobile-only-btn">
            <Link to="/case-studies" className="btn btn-secondary">
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Banner */}
      <section className="final-cta-section text-center">
        <div className="container">
          <h2 className="cta-title">Ready to Bring Your Idea to Life?</h2>
          <p className="cta-subtext">
            From websites and mobile apps to AI-powered solutions, we turn ideas into technology that works.
          </p>
          <Link to="/contact" className="btn btn-white btn-lg">
            <span>Schedule Project Call</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        /* Hero Section FIT IN 100VH COMBINED WITH 70PX HEADER ON DESKTOP */
        .hero-section {
          height: calc(100vh - 70px);
          max-height: calc(100vh - 70px);
          min-height: 520px;
          display: flex;
          align-items: center;
          background: #090F1E;
          overflow: hidden;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: clamp(20px, 4vw, 40px);
          height: 100%;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-title {
          font-size: clamp(1.8rem, 4.5vw, 3.2rem);
          font-weight: 400;
          line-height: 1.18;
          color: #FFFFFF;
          margin-bottom: 20px;
        }

        .hero-title-accent {
          color: #00C2FF;
        }

        .hero-subtext {
          font-size: clamp(0.9rem, 1.8vw, 1.05rem);
          color: #8B98A9;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 560px;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hero-canvas-wrapper {
          width: 100%;
          height: 100%;
          max-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .trust-strip {
          background: #FFFFFF;
          border-bottom: 1px solid var(--color-neutral-border);
          padding: clamp(20px, 4vw, 32px) 0;
        }

        .trust-label {
          text-align: center;
          font-family: var(--font-mono);
          font-size: clamp(0.7rem, 1.2vw, 0.76rem);
          letter-spacing: 0.1em;
          color: var(--color-text-secondary);
          margin-bottom: 20px;
          font-weight: 600;
        }

        .trust-logos-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(16px, 3.5vw, 48px);
          flex-wrap: wrap;
        }

        .trust-logo-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-text-secondary);
          font-weight: 700;
          font-size: clamp(0.8rem, 1.5vw, 0.95rem);
          letter-spacing: 0.05em;
          opacity: 0.75;
          transition: opacity 0.2s ease;
        }

        .trust-logo-item:hover {
          opacity: 1;
          color: #090F1E;
        }

        .services-section {
          background: #F8FAFC;
        }

        .services-section-header {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: flex-end;
          gap: clamp(20px, 4vw, 40px);
          margin-bottom: clamp(24px, 4vw, 48px);
        }

        .eyebrow-text {
          font-family: var(--font-mono);
          font-size: clamp(0.7rem, 1.2vw, 0.78rem);
          font-weight: 700;
          color: var(--color-accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }

        .section-title {
          font-size: clamp(1.4rem, 3.5vw, 2.2rem);
          color: var(--color-text-primary);
        }

        .header-desc {
          font-size: clamp(0.88rem, 1.6vw, 1rem);
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(clamp(240px, 45vw, 280px), 1fr));
          gap: 20px;
        }

        .service-card {
          background: #FFFFFF;
          border: 1px solid var(--color-neutral-border);
          border-radius: 14px;
          padding: clamp(20px, 3vw, 28px);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-decoration: none;
        }

        .service-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #090F1E;
          color: #00C2FF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          box-shadow: 0 4px 12px rgba(9, 15, 30, 0.2);
        }

        .service-card-title {
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          color: var(--color-text-primary);
          margin-bottom: 8px;
        }

        .service-card-desc {
          font-size: clamp(0.85rem, 1.5vw, 0.92rem);
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .service-card-footer {
          margin-top: auto;
        }

        .learn-more-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--color-accent);
          transition: transform 0.2s ease;
        }

        .service-card:hover .learn-more-link {
          transform: translateX(4px);
        }

        .featured-cases-section {
          background: #F8FAFC;
        }

        .featured-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: clamp(20px, 4vw, 40px);
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(clamp(260px, 45vw, 340px), 1fr));
          gap: 20px;
        }

        .case-card-top {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }

        .case-card-title {
          font-size: clamp(1.05rem, 2vw, 1.15rem);
          color: var(--color-text-primary);
          margin-bottom: 8px;
        }

        .case-card-summary {
          font-size: clamp(0.85rem, 1.5vw, 0.9rem);
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin-bottom: 16px;
        }

        .case-card-metric {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: clamp(0.78rem, 1.3vw, 0.85rem);
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

        .mobile-only-btn {
          display: none;
        }

        .mt-4 { margin-top: 24px; }

        @media (max-width: 900px) {
          .hero-section {
            height: auto;
            max-height: none;
            padding: 40px 0;
          }
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-subtext {
            margin-left: auto;
            margin-right: auto;
          }
          .services-section-header {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .desktop-only-btn {
            display: none;
          }
          .mobile-only-btn {
            display: block;
          }
        }

        @media (max-width: 380px) {
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-cta-group .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
