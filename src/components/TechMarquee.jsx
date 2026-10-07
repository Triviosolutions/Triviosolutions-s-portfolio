import React from 'react';
import { Cpu, Globe, Server, Database, Cloud, Layers, Terminal, Zap, Shield, Box } from 'lucide-react';

export default function TechMarquee() {
  const techList = [
    { name: 'FastAPI', category: 'Backend', icon: Zap },
    { name: 'React', category: 'Frontend', icon: Globe },
    { name: 'Next.js', category: 'Fullstack', icon: Layers },
    { name: 'React Native', category: 'Mobile', icon: Terminal },
    { name: 'Django', category: 'Python Engine', icon: Server },
    { name: 'Electron', category: 'Desktop', icon: Cpu },
    { name: 'Supabase', category: 'Database', icon: Database },
    { name: 'Firebase', category: 'Cloud Auth', icon: Cloud },
    { name: 'Docker', category: 'Containers', icon: Box },
    { name: 'Cloudflare', category: 'Edge Security', icon: Shield },
    { name: 'Vercel', category: 'Deployment', icon: Globe },
    { name: 'Railway', category: 'Backend Infra', icon: Server },
  ];

  return (
    <div className="tech-marquee-section">
      <div className="container text-center">
        <p className="marquee-label">ENGINEERING STACK IN ACTIVE PRODUCTION USE</p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...techList, ...techList].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="tech-chip">
                <div className="tech-icon-circle">
                  <Icon size={16} />
                </div>
                <div className="tech-info">
                  <span className="tech-chip-name">{item.name}</span>
                  <span className="tech-chip-cat">{item.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .tech-marquee-section {
          padding: 44px 0;
          background: #090F1E;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .marquee-label {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #21A6BF;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .marquee-wrapper {
          display: flex;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }

        .marquee-track {
          display: flex;
          gap: 16px;
          animation: scrollMarquee 32s linear infinite;
          white-space: nowrap;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        .tech-chip {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 18px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-md);
          transition: all 0.25s ease;
          user-select: none;
        }

        .tech-chip:hover {
          background: rgba(76, 95, 255, 0.2);
          border-color: #21A6BF;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 194, 255, 0.2);
        }

        .tech-icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(0, 194, 255, 0.12);
          color: #21A6BF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tech-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.2;
        }

        .tech-chip-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: #FFFFFF;
        }

        .tech-chip-cat {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #94A3B8;
          margin-top: 2px;
        }

        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
