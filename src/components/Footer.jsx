import React from 'react';
import { Mail, MapPin, Linkedin, Github, ShieldCheck } from 'lucide-react';
import trivioLogo from '../assets/trivio-logo.png';

export default function Footer({ setActivePage }) {
  const handleNavClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <div className="footer-logo-lockup" onClick={() => handleNavClick('home')}>
              <img src={trivioLogo} alt="Trivio Solutions" className="footer-logo-image" />
            </div>

            <p className="brand-tagline">
              A full-stack software studio building web, mobile, and desktop applications — with AI features added in where they add real value.
            </p>

            <div className="social-links-row">
              <a 
                href="https://linkedin.com/company/trivio-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                title="LinkedIn Organization"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="https://github.com/trivio-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                title="GitHub Organization"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleNavClick('home')}>Home</button></li>
              <li><button onClick={() => handleNavClick('services')}>Services</button></li>
              <li><button onClick={() => handleNavClick('case-studies')}>Case Studies</button></li>
              <li><button onClick={() => handleNavClick('about')}>About Us</button></li>
              <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
            </ul>
          </div>

          {/* Column 3: Specializations */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleNavClick('services')}>Web Application Engineering</button></li>
              <li><button onClick={() => handleNavClick('services')}>Mobile Apps (iOS & Android)</button></li>
              <li><button onClick={() => handleNavClick('services')}>Desktop Applications</button></li>
              <li><button onClick={() => handleNavClick('services')}>AI & Automation Add-Ons</button></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Get In Touch</h4>
            
            <div className="contact-item">
              <Mail size={15} className="contact-icon" />
              <a href="mailto:hello@triviosolutions.com" className="contact-link">
                hello@triviosolutions.com
              </a>
            </div>

            <div className="contact-item">
              <MapPin size={15} className="contact-icon" />
              <span>Faisalabad, Pakistan (Remote-First)</span>
            </div>

            <div className="response-badge">
              <ShieldCheck size={14} />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Trivio Solutions. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="https://triviosolutions.com" target="_blank" rel="noopener noreferrer">triviosolutions.com</a>
            <span>•</span>
            <button onClick={() => handleNavClick('contact')}>Privacy & Scope</button>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          padding: 64px 0 28px 0;
          background: #090F1E;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.4fr 0.9fr 1fr 1.1fr;
          gap: 40px;
          margin-bottom: 48px;
        }

        .brand-col {
          display: flex;
          flex-direction: column;
        }

        .footer-logo-lockup {
          display: flex;
          align-items: center;
          cursor: pointer;
          user-select: none;
          margin-bottom: 16px;
        }

        .footer-logo-image {
          height: 64px;
          width: auto;
          max-width: 100%;
          display: block;
          border-radius: 4px;
          object-fit: contain;
        }

        .brand-tagline {
          font-size: 0.88rem;
          color: #94A3B8;
          line-height: 1.55;
          margin-bottom: 16px;
        }

        .social-links-row {
          display: flex;
          gap: 10px;
        }

        .footer-social-link {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .footer-social-link:hover {
          background: var(--color-accent);
          border-color: var(--color-accent);
          transform: translateY(-2px);
        }

        .footer-col-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 18px;
          letter-spacing: 0.02em;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-list button {
          font-size: 0.88rem;
          color: #94A3B8;
          transition: color 0.15s ease;
          text-align: left;
        }

        .footer-links-list button:hover {
          color: #21A6BF;
        }

        .contact-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.86rem;
          color: #94A3B8;
        }

        .contact-icon {
          color: #21A6BF;
          flex-shrink: 0;
        }

        .contact-link {
          color: #21A6BF;
          font-weight: 500;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .response-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: rgba(0, 194, 255, 0.1);
          border: 1px solid rgba(0, 194, 255, 0.25);
          border-radius: var(--radius-sm);
          font-size: 0.76rem;
          color: #21A6BF;
          margin-top: 6px;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.82rem;
          color: #64748B;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-bottom-links a,
        .footer-bottom-links button {
          color: #64748B;
          font-size: 0.82rem;
          transition: color 0.15s ease;
        }

        .footer-bottom-links a:hover,
        .footer-bottom-links button:hover {
          color: #21A6BF;
        }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
        }

        @media (max-width: 600px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
