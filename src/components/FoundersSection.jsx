import React from 'react';
import { Linkedin, Github, Code2 } from 'lucide-react';

export default function FoundersSection() {
  const founders = [
    {
      name: 'Noor Fatima',
      initials: 'NF',
      role: 'Co-Founder & Software Engineer',
      expertiseTag: 'Full-Stack Engineer',
      icon: Code2,
      bio: "Noor builds across the full stack at Trivio — from React/Next.js web platforms and React Native apps to AI-assisted features like chatbots and automation tools.",
      skills: ['React & Next.js', 'React Native', 'FastAPI', 'AI Integrations'],
      linkedin: 'https://linkedin.com/in/noor-fatima-trivio',
      github: 'https://github.com/noorfatima-trivio'
    },
    {
      name: 'M. Hashir Tayyab',
      initials: 'HT',
      role: 'Co-Founder & Software Engineer',
      expertiseTag: 'Full-Stack Engineer',
      icon: Code2,
      bio: "Hashir builds across the full stack at Trivio — architecting FastAPI/Django backends, React and Next.js frontends, and mobile apps, with AI features layered in where they add real value.",
      skills: ['System Architecture', 'FastAPI', 'React', 'React Native'],
      linkedin: 'https://linkedin.com/in/hashir-tayyab-trivio',
      github: 'https://github.com/hashirtayyab-trivio'
    },
    {
      name: 'M. Fareed Ameeri',
      initials: 'FA',
      role: 'Co-Founder & Software Engineer',
      expertiseTag: 'Full-Stack Engineer',
      icon: Code2,
      bio: "Fareed builds across the full stack at Trivio — mobile and desktop apps, web platforms, and the AI-powered features that go into them, with a focus on speed and offline-first reliability.",
      skills: ['React Native', 'Electron', 'Web Development', 'AI Integrations'],
      linkedin: 'https://linkedin.com/in/fareed-ameeri-trivio',
      github: 'https://github.com/fareedameeri-trivio'
    }
  ];

  return (
    <section className="founders-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow-text">EXPERT LEADERSHIP</span>
          <h2 className="section-title">Meet the Founders</h2>
          <p className="section-subtitle">
            Trivio Solutions is a team of 3 full-stack engineers who each build across web, mobile, and AI-powered features — no handoffs, no silos.
          </p>
        </div>

        <div className="founders-grid">
          {founders.map((founder, idx) => {
            const DomainIcon = founder.icon;
            return (
              <div key={idx} className="founder-card card">
                <div className="founder-header">
                  <div className="avatar-circle">
                    <span className="avatar-initials">{founder.initials}</span>
                    <div className="domain-badge-overlay">
                      <DomainIcon size={12} />
                    </div>
                  </div>
                  <div className="founder-title-block">
                    <span className="badge badge-accent mb-1">{founder.expertiseTag}</span>
                    <h3 className="founder-name">{founder.name}</h3>
                    <p className="founder-role">{founder.role}</p>
                  </div>
                </div>

                <p className="founder-bio">{founder.bio}</p>

                <div className="skills-block">
                  <div className="skills-tags">
                    {founder.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="badge badge-neutral">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="founder-footer">
                  <a 
                    href={founder.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn" 
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={15} />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href={founder.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn" 
                    title="GitHub Profile"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .founders-section {
          background-color: #F8FAFC;
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

        .founders-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .founder-card {
          background: #FFFFFF;
          border: 1px solid var(--color-neutral-border);
          border-radius: 14px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .founder-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .avatar-circle {
          position: relative;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #090F1E;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--color-accent);
          flex-shrink: 0;
        }

        .avatar-initials {
          font-family: var(--font-primary);
          font-weight: 700;
          font-size: 1.15rem;
          color: #FFFFFF;
        }

        .domain-badge-overlay {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--color-accent);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #FFFFFF;
        }

        .founder-title-block {
          display: flex;
          flex-direction: column;
        }

        .mb-1 {
          margin-bottom: 4px;
          align-self: flex-start;
        }

        .founder-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .founder-role {
          font-size: 0.82rem;
          color: var(--color-text-secondary);
        }

        .founder-bio {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin-bottom: 20px;
        }

        .skills-block {
          margin-bottom: 20px;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .founder-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid var(--color-neutral-border);
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: var(--radius-sm);
          background: #F8FAFC;
          color: var(--color-text-primary);
          font-size: 0.82rem;
          font-weight: 600;
          transition: all 0.15s ease;
          border: 1px solid var(--color-neutral-border);
        }

        .social-btn:hover {
          background: #090F1E;
          color: #fff;
          border-color: #090F1E;
        }
      `}</style>
    </section>
  );
}
