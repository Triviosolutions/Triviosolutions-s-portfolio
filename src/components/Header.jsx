import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Cpu, Layers, Smartphone, Monitor } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const serviceSubItems = [
    { label: 'Web Applications', icon: Layers, path: '/services/web-dev' },
    { label: 'Mobile Apps', icon: Smartphone, path: '/services/app-dev' },
    { label: 'Desktop Software', icon: Monitor, path: '/services/desktop' },
    { label: 'AI & Automation Add-Ons', icon: Cpu, path: '/services/ai-ml' }
  ];

  const handleDropdownItemClick = (path) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Logo Lockup */}
        <Link to="/" className="logo-lockup" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="logo-badge-icon">
            <span className="logo-t-char">T</span>
          </div>
          <div className="logo-text-wrapper">
            <span className="logo-title">Trivio</span>
            <span className="logo-subtitle">Solutions</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {/* Services Dropdown */}
          <div 
            className="dropdown-trigger"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <NavLink 
              to="/services" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <span>Services</span>
              <ChevronDown size={14} className="dropdown-arrow" />
            </NavLink>

            {servicesDropdownOpen && (
              <div className="dropdown-menu">
                {serviceSubItems.map((sub, idx) => {
                  const SubIcon = sub.icon;
                  return (
                    <button
                      key={idx}
                      className="dropdown-item"
                      onClick={() => handleDropdownItemClick(sub.path)}
                    >
                      <SubIcon size={15} className="dropdown-icon" />
                      <span>{sub.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <NavLink
            to="/case-studies"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Case Studies
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About Us
          </NavLink>
        </nav>

        {/* Header Right Action Button */}
        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary nav-contact-btn">
            <span>Contact Us</span>
          </Link>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-content">
            <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            <Link to="/services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Services Overview
            </Link>

            <div className="mobile-sub-services">
              {serviceSubItems.map((sub, idx) => (
                <Link
                  key={idx}
                  to={sub.path}
                  className="mobile-sub-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  • {sub.label}
                </Link>
              ))}
            </div>

            <Link to="/case-studies" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Case Studies
            </Link>

            <Link to="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>

            <Link to="/contact" className="btn btn-primary mt-2 w-full" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #FFFFFF;
          border-bottom: 1px solid var(--color-neutral-border);
          height: 70px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .logo-lockup {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
        }

        .logo-badge-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #090F1E;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-family: var(--font-primary);
          font-weight: 800;
          font-size: 1.15rem;
          flex-shrink: 0;
        }

        .logo-t-char {
          line-height: 1;
        }

        .logo-text-wrapper {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-title {
          font-family: var(--font-primary);
          font-weight: 800;
          font-size: clamp(1rem, 3vw, 1.15rem);
          color: #090F1E;
          letter-spacing: -0.01em;
        }

        .logo-subtitle {
          font-family: var(--font-primary);
          font-weight: 600;
          font-size: clamp(0.8rem, 2vw, 0.95rem);
          color: #090F1E;
          letter-spacing: -0.01em;
          margin-top: 1px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: clamp(16px, 2.5vw, 32px);
        }

        .dropdown-trigger {
          position: relative;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 600;
          font-size: 0.92rem;
          color: #1E293B;
          padding: 6px 0;
          transition: color 0.15s ease;
          white-space: nowrap;
        }

        .nav-link:hover, .nav-link.active {
          color: #090F1E;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #FFFFFF;
          border: 1px solid var(--color-neutral-border);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-md);
          min-width: 230px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          text-align: left;
          padding: 9px 12px;
          border-radius: 6px;
          font-size: 0.86rem;
          font-weight: 500;
          color: #1E293B;
          transition: background 0.15s ease, color 0.15s ease;
          width: 100%;
        }

        .dropdown-item:hover {
          background: var(--color-neutral-bg);
          color: #090F1E;
        }

        .dropdown-icon {
          color: var(--color-accent);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .nav-contact-btn {
          background: #090F1E;
          color: #FFFFFF;
          padding: 9px 20px;
          font-size: 0.88rem;
          border-radius: 10px;
          font-weight: 600;
          white-space: nowrap;
        }

        .nav-contact-btn:hover {
          background: #152244;
        }

        .mobile-toggle {
          display: none;
          color: #090F1E;
          padding: 4px;
        }

        .mobile-drawer {
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          background: #FFFFFF;
          border-bottom: 1px solid var(--color-neutral-border);
          padding: 16px;
          box-shadow: var(--shadow-md);
          max-height: calc(100vh - 70px);
          overflow-y: auto;
        }

        .mobile-drawer-content {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-nav-link {
          text-align: left;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 8px 0;
          color: #090F1E;
          border-bottom: 1px solid var(--color-neutral-border);
        }

        .mobile-sub-services {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-left: 10px;
        }

        .mobile-sub-link {
          font-size: 0.84rem;
          color: var(--color-text-secondary);
          font-weight: 500;
          padding: 4px 0;
        }

        .w-full {
          width: 100%;
        }

        .mt-2 { margin-top: 8px; }

        @media (max-width: 860px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }

        @media (max-width: 380px) {
          .nav-contact-btn {
            display: none;
          }
          .logo-subtitle {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
