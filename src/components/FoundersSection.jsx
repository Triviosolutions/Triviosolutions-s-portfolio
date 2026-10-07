import React from 'react';
import { Linkedin, Github, Globe } from 'lucide-react';
import StaggeredScrollCards from './StaggeredScrollCards';
import { founders } from '../data/foundersData';

function FounderCard({ founder }) {
  const links = [
    { label: 'LinkedIn', href: founder.linkedin, Icon: Linkedin },
    { label: 'GitHub', href: founder.github, Icon: Github },
    { label: 'Portfolio', href: founder.portfolio, Icon: Globe }
  ];

  return (
    <>
      <div className="founder-photo">
        <img src={founder.image} alt={founder.name} className="founder-photo-img" loading="lazy" />
      </div>

      <h3 className="founder-name">{founder.name}</h3>
      <p className="founder-role">{founder.role}</p>
      <span className="founder-rule" aria-hidden="true" />

      <p className="founder-bio">{founder.bio}</p>

      <div className="founder-footer">
        {links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title={`${label} Profile`}
          >
            <Icon size={14} />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </>
  );
}

export default function FoundersSection() {
  return (
    <section className="founders-section">
      <div className="container founders-intro">
        <div className="section-header text-center">
          <h2 className="section-title">Meet the Founders</h2>
          <p className="section-subtitle">
            Trivio Solutions is a team of 3 full-stack engineers who each build across web, mobile, and AI-powered features — no handoffs, no silos.
          </p>
        </div>
      </div>

      <StaggeredScrollCards
        items={founders}
        overhang={64}
        getKey={(founder) => founder.name}
        renderItem={(founder) => <FounderCard founder={founder} />}
      />

      <style>{`
        .founders-section {
          background-color: #F8FAFC;
        }

        .founders-intro {
          padding-top: clamp(16px, 2.5vw, 32px);
        }

        .section-header {
          max-width: 600px;
          margin: 0 auto 36px auto;
        }

        .text-center {
          text-align: center;
        }

        .section-title {
          font-size: 2.2rem;
          color: var(--color-text-primary);
          margin-top: 6px;
        }

        .section-subtitle {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* ----- founder card content ----- */
        /* Photo sits flush at the top of the card and rises ~64px above its top border */
        .founder-photo {
          position: relative;
          height: 170px;
          margin: -28px -22px 12px;
        }

        .founder-photo-img {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: calc(100% + 64px);
          object-fit: contain;
          object-position: center bottom;
        }

        .founder-name {
          margin: 0 0 4px;
          font-size: clamp(1.1rem, 1.7vw, 1.3rem);
          font-weight: 800;
          line-height: 1.2;
          color: var(--color-navy-dark);
        }

        .founder-role {
          margin: 0;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--color-accent);
        }

        .founder-rule {
          display: block;
          width: 30px;
          height: 3px;
          margin: 10px 0 10px;
          border-radius: 2px;
          background: var(--color-accent);
        }

        .founder-bio {
          flex-grow: 1;
          margin: 0;
          font-size: 13px;
          line-height: 1.5;
          color: #4B5563;
        }

        .founder-footer {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 8px 12px;
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid var(--color-neutral-border);
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--color-navy-dark);
          transition: color 0.15s ease;
        }

        .social-link:hover {
          color: var(--color-accent);
        }
      `}</style>
    </section>
  );
}