import React from 'react';
import { Link } from 'react-router-dom';
import FoundersSection from '../components/FoundersSection';
import { Microscope, Layers, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Microscope,
      title: 'Research First',
      sub: 'We validate before we build.',
      desc: 'Most agencies implement what is already proven. We evaluate research papers, prototype feasibility fast, and commit to architectures only after empirical validation.'
    },
    {
      icon: Layers,
      title: 'Full-Stack Ownership',
      sub: 'One team, every layer, no handoffs.',
      desc: 'All three founders work across the stack together — from backend architecture down to responsive UI, mobile builds, and edge server hosting.'
    },
    {
      icon: ShieldCheck,
      title: 'Production-Grade Always',
      sub: 'Prototypes that are built to scale.',
      desc: 'We write clean, modular, and maintainable code from Day 1. No throwaway prototypes; every system is engineered to handle real-world load.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discovery & Goal Scoping',
      desc: 'We analyze your technical constraints, user requirements, and success metrics during an in-depth scoping call.'
    },
    {
      num: '02',
      title: 'Research & Feasibility Proposal',
      desc: 'We conduct architectural research, evaluate stack and technical options, and deliver a detailed technical roadmap.'
    },
    {
      num: '03',
      title: 'Working Proof-of-Concept (PoC)',
      desc: 'Before full budget commitment, we build a rapid working prototype to demonstrate core functionality and latency.'
    },
    {
      num: '04',
      title: 'Sprint Build & Continuous Demos',
      desc: 'We build in 1-2 week agile sprints with weekly live staging demos and continuous feedback integration.'
    },
    {
      num: '05',
      title: 'Production Launch & SLA Support',
      desc: 'We handle production deployment, monitoring, guardrails, and ongoing post-launch engineering support.'
    }
  ];

  return (
    <div className="about-page">
      {/* Dark Midnight Hero Header matching Home Hero */}
      <section className="about-hero bg-dark text-center">
        <div className="container">
          <div className="breadcrumb-row justify-center">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span className="current-crumb">About Us</span>
          </div>

          <span className="badge badge-accent mb-2">THE TRIVIO STORY</span>
          <h1 className="about-title">Three Minds. One Vision. Infinite Possibilities.</h1>
          <p className="about-subtitle">
            Trivio Solutions was born from three engineers with one shared belief: great ideas deserve great technology. We build modern websites, mobile apps, and AI-powered solutions that turn ambitious ideas into real-world impact.
          </p>
        </div>
      </section>

      {/* Values Pillars */}
      <section className="values-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow-text">ENGINEERING PHILOSOPHY</span>
            <h2 className="section-title">Our Core Pillars</h2>
          </div>

          <div className="values-grid">
            {values.map((v, idx) => {
              const VIcon = v.icon;
              return (
                <div key={idx} className="value-card card">
                  <div className="value-icon-box">
                    <VIcon size={24} />
                  </div>
                  <h3 className="value-title">{v.title}</h3>
                  <span className="value-sub">{v.sub}</span>
                  <p className="value-desc">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Founders Section */}
      <FoundersSection />

      {/* Why Research-Based Section & Diagram */}
      <section className="research-explain-section section-padding">
        <div className="container">
          <div className="research-grid">
            <div className="research-text-block">
              <span className="eyebrow-text">THE TRIVIO DIFFERENCE</span>
              <h2 className="section-title">Why "Research-Based" Matters</h2>
              <p className="research-p">
                Standard software agencies apply template patterns to every project. But when your product involves high-concurrency backends, offline-first synchronization, or custom AI features, cookie-cutter templates fail.
              </p>
              <p className="research-p">
                At Trivio, we treat complex engineering challenges as a structured research question first. We benchmark approaches, stress-test API throughput, and engineer for real-world load so your system never crashes.
              </p>

              <div className="research-highlights">
                <div className="hl-item">
                  <CheckCircle2 size={18} className="hl-icon" />
                  <span>Empirical benchmarking before stack selection</span>
                </div>
                <div className="hl-item">
                  <CheckCircle2 size={18} className="hl-icon" />
                  <span>Direct founder involvement on every codebase</span>
                </div>
                <div className="hl-item">
                  <CheckCircle2 size={18} className="hl-icon" />
                  <span>Open-source GitHub architecture transparency</span>
                </div>
              </div>
            </div>

            {/* Interactive Process Loop Diagram */}
            <div className="diagram-card card bg-dark">
              <h3 className="diagram-card-title text-white">The Engineering Loop</h3>
              <p className="diagram-card-sub">Continuous validation feedback cycle</p>

              <div className="diagram-nodes">
                <div className="d-node">
                  <span className="d-num">01</span>
                  <span>Research & Paper Review</span>
                </div>
                <span className="d-connector">↓</span>
                <div className="d-node">
                  <span className="d-num">02</span>
                  <span>Rapid Prototype (PoC)</span>
                </div>
                <span className="d-connector">↓</span>
                <div className="d-node">
                  <span className="d-num">03</span>
                  <span>Empirical Validation</span>
                </div>
                <span className="d-connector">↓</span>
                <div className="d-node active-d-node">
                  <span className="d-num">04</span>
                  <span>Production Build & Deploy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="process-timeline-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow-text">HOW WE WORK</span>
            <h2 className="section-title">Our 5-Step Process</h2>
            <p className="section-subtitle">Transparent, predictable, and milestone-driven software delivery.</p>
          </div>

          <div className="timeline-wrapper">
            {processSteps.map((s, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-num-circle">{s.num}</div>
                <div className="timeline-content card">
                  <h3 className="timeline-step-title">{s.title}</h3>
                  <p className="timeline-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta text-center">
        <div className="container">
          <h2 className="cta-title text-white">Ready to work with a team that researches first?</h2>
          <p className="cta-subtext">Book a discovery session with our founding leads.</p>
          <Link to="/contact" className="btn btn-white btn-lg">
            <span>Schedule Scoping Session</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        .about-hero {
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

        .about-title {
          font-size: 2.5rem;
          font-weight: 400;
          color: #FFFFFF;
          margin-bottom: 12px;
        }

        .about-subtitle {
          font-size: 1.05rem;
          color: #8B98A9;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .values-section {
          background: #F8FAFC;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .value-card {
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
        }

        .value-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(33, 166, 191, 0.08);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .value-title {
          font-size: 1.2rem;
          color: var(--color-text-primary);
        }

        .value-sub {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--color-accent);
          margin-bottom: 10px;
          font-weight: 600;
        }

        .value-desc {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .research-explain-section {
          background: #FFFFFF;
          border-top: 1px solid var(--color-neutral-border);
          border-bottom: 1px solid var(--color-neutral-border);
        }

        .research-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }

        .research-p {
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          margin-top: 14px;
        }

        .research-highlights {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .hl-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .hl-icon {
          color: var(--color-accent);
        }

        .diagram-card {
          background: #090F1E;
          padding: 28px;
          text-align: center;
        }

        .diagram-card-title {
          font-size: 1.2rem;
          margin-bottom: 4px;
        }

        .diagram-card-sub {
          font-size: 0.85rem;
          color: rgba(245, 246, 248, 0.6);
          margin-bottom: 20px;
        }

        .diagram-nodes {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .d-node {
          width: 100%;
          padding: 10px 16px;
          background: #0F1C3F;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .active-d-node {
          border-color: #21A6BF;
          background: rgba(0, 194, 255, 0.15);
        }

        .d-num {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #21A6BF;
        }

        .d-connector {
          color: #21A6BF;
          font-weight: 800;
          font-size: 1.1rem;
        }

        .process-timeline-section {
          background: #F8FAFC;
        }

        .timeline-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 780px;
          margin: 0 auto;
        }

        .timeline-item {
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }

        .timeline-num-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #090F1E;
          color: #FFFFFF;
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .timeline-content {
          flex: 1;
          background: #FFFFFF;
          padding: 20px;
        }

        .timeline-step-title {
          font-size: 1.1rem;
          color: var(--color-text-primary);
          margin-bottom: 6px;
        }

        .timeline-step-desc {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
        }

        .about-cta {
          padding: 70px 0;
          background: #090F1E;
        }

        .mb-2 { margin-bottom: 8px; }

        @media (max-width: 880px) {
          .research-grid {
            grid-template-columns: 1fr;
          }
          .about-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
