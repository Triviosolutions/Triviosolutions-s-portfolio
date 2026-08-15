import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Cpu, Layers, Smartphone, Monitor, Stethoscope, ShoppingCart, Landmark, Truck, Store, FlaskConical } from 'lucide-react';
import trivioLogo from '../assets/trivio-logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const serviceSubItems = [
    { label: 'Web Applications', icon: Layers, path: '/services/web-dev' },
    { label: 'Mobile Apps', icon: Smartphone, path: '/services/app-dev' },
    { label: 'Desktop Software', icon: Monitor, path: '/services/desktop' },
    { label: 'AI & Automation Add-Ons', icon: Cpu, path: '/services/ai-ml' }
  ];

  const industrySubItems = [
    { label: 'Healthcare', icon: Stethoscope, slug: 'healthcare' },
    { label: 'E-commerce', icon: ShoppingCart, slug: 'e-commerce' },
    { label: 'Fintech', icon: Landmark, slug: 'fintech' },
    { label: 'Logistics', icon: Truck, slug: 'logistics' },
    { label: 'Retail & SMB', icon: Store, slug: 'retail-smb' },
    { label: 'R&D / SaaS', icon: FlaskConical, slug: 'rnd-saas' }
  ];

  const handleDropdownItemClick = (path) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIndustryClick = (slug) => {
    setIndustriesDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(`/industries/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="logo-lockup" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={trivioLogo} alt="Trivio Solutions" className="logo-image" />
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

          {/* Industries Dropdown */}
          <div
            className="dropdown-trigger"
            onMouseEnter={() => setIndustriesDropdownOpen(true)}
            onMouseLeave={() => setIndustriesDropdownOpen(false)}
          >
            <button className="nav-link">
              <span>Industries</span>
              <ChevronDown size={14} className="dropdown-arrow" />
            </button>

            {industriesDropdownOpen && (
              <div className="dropdown-menu">
                {industrySubItems.map((sub, idx) => {
                  const SubIcon = sub.icon;
                  return (
                    <button
                      key={idx}
                      className="dropdown-item"
                      onClick={() => handleIndustryClick(sub.slug)}
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

            <span className="mobile-nav-link mobile-section-label">Industries</span>

            <div className="mobile-sub-services">
              {industrySubItems.map((sub, idx) => (
                <button
                  key={idx}
                  className="mobile-sub-link"
                  onClick={() => handleIndustryClick(sub.slug)}
                >
                  • {sub.label}
                </button>
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
          height: 84px;
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
          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
          height: 100%;
          padding: 4px 0;
        }

        .logo-image {
          height: 76px;
          width: auto;
          max-width: min(320px, 42vw);
          display: block;
          border-radius: 4px;
          object-fit: contain;
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

        button.nav-link {
          background: none;
          border: none;
          font-family: var(--font-primary);
          cursor: pointer;
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
          top: 84px;
          left: 0;
          right: 0;
          background: #FFFFFF;
          border-bottom: 1px solid var(--color-neutral-border);
          padding: 16px;
          box-shadow: var(--shadow-md);
          max-height: calc(100vh - 84px);
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

        button.mobile-sub-link {
          background: none;
          border: none;
          text-align: left;
          font-family: var(--font-primary);
          cursor: pointer;
          width: 100%;
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
          .logo-image {
            height: 68px;
            max-width: min(280px, 55vw);
          }
        }

        @media (max-width: 380px) {
          .nav-contact-btn {
            display: none;
          }
          .site-header {
            height: 76px;
          }
          .mobile-drawer {
            top: 76px;
            max-height: calc(100vh - 76px);
          }
          .logo-image {
            height: 64px;
            max-width: min(240px, 62vw);
          }
        }
      `}</style>
    </header>
  );
}
