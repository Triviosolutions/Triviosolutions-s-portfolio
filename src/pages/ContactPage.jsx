import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Linkedin, Github, ShieldCheck, Send, CheckCircle2, AlertCircle, ChevronRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'web-dev',
    budget: '10k-25k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your Name, Email, and Message details.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="contact-page">
      {/* Dark Midnight Hero Header matching Home Hero */}
      <section className="contact-hero bg-dark text-center">
        <div className="container">
          <div className="breadcrumb-row justify-center">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span className="current-crumb">Contact & Inquiry</span>
          </div>

          <span className="badge badge-accent mb-2">START A CONVERSATION</span>
          <h1 className="contact-title">Let's build your next project together.</h1>
          <p className="contact-subtitle">
            Whether you need a full-stack web platform, a mobile/desktop app, or AI features layered into your product — we're ready to help you scope it.
          </p>
        </div>
      </section>

      {/* Main Split Contact Section */}
      <section className="contact-main-section section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Interactive Form */}
            <div className="form-card card">
              <h2 className="form-card-title">Send Us a Project Scope</h2>
              <p className="form-card-sub">Fill out the fields below and our founding team will get back to you within 24 hours.</p>

              {submitted ? (
                <div className="success-banner card">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h3 className="success-title">Message Received!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. Our team has received your project request regarding <strong>{formData.projectType.toUpperCase()}</strong>. We will review your requirements and reply to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button className="btn btn-secondary mt-3" onClick={() => setSubmitted(false)}>
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {error && (
                    <div className="error-banner">
                      <AlertCircle size={18} />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Sarah Khan"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. sarah@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company / Organization (Optional)</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="e.g. HealthTech Systems"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="projectType">Project Specialization *</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="web-dev">Web Application Development</option>
                        <option value="app-dev">Mobile App Development</option>
                        <option value="desktop">Desktop Application</option>
                        <option value="ai-ml">AI & Automation Add-Ons</option>
                        <option value="not-sure">Not sure yet / Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Estimated Budget Range (Optional)</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="5k-10k">$5,000 – $10,000</option>
                      <option value="10k-25k">$10,000 – $25,000</option>
                      <option value="25k-50k">$25,000 – $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details & Objectives *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Briefly describe your goals, required tech stack, or problem statement..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input text-area"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-full">
                    <span>Submit Inquiry</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Info Panel */}
            <div className="info-panel-col">
              <div className="info-card card">
                <h3 className="info-title">Direct Contact Channels</h3>
                <p className="info-sub">Reach our founding leads directly via email or social networks.</p>

                <div className="info-list">
                  <div className="info-item">
                    <div className="info-icon-circle">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="info-lbl">Business Email</span>
                      <a href="mailto:hello@triviosolutions.com" className="info-val-link">
                        hello@triviosolutions.com
                      </a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-circle">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="info-lbl">Base Location</span>
                      <span className="info-val">Faisalabad, Pakistan</span>
                      <span className="info-tag">Remote-First • Available Worldwide</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-circle">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <span className="info-lbl">Guaranteed Response Time</span>
                      <span className="info-val">Within 24 hours (Mon – Sat)</span>
                    </div>
                  </div>
                </div>

                <div className="social-connect-block mt-4">
                  <span className="info-lbl mb-2">Connect on Social & GitHub:</span>
                  <div className="social-buttons-grid">
                    <a 
                      href="https://linkedin.com/company/trivio-solutions" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-card-btn"
                    >
                      <Linkedin size={18} />
                      <span>LinkedIn Company</span>
                    </a>

                    <a 
                      href="https://github.com/trivio-solutions" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-card-btn"
                    >
                      <Github size={18} />
                      <span>GitHub Org</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Founder Direct Badge */}
              <div className="founders-direct-badge card bg-dark">
                <h4 className="fd-title text-white">Direct Founder Review</h4>
                <p className="fd-desc">
                  Every inquiry submitted here is read and evaluated directly by Noor Fatima, M. Hashir Tayyab, or M. Fareed Ameeri. No sales reps — only engineering leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-hero {
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

        .contact-title {
          font-size: 2.5rem;
          font-weight: 400;
          color: #FFFFFF;
          margin-bottom: 12px;
        }

        .contact-subtitle {
          font-size: 1.05rem;
          color: #8B98A9;
          max-width: 650px;
          margin: 0 auto;
        }

        .contact-main-section {
          background: #F8FAFC;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 32px;
        }

        .form-card {
          background: #FFFFFF;
          padding: 32px;
        }

        .form-card-title {
          font-size: 1.5rem;
          color: var(--color-text-primary);
          margin-bottom: 4px;
        }

        .form-card-sub {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .form-input {
          padding: 10px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-neutral-border);
          font-family: var(--font-primary);
          font-size: 0.92rem;
          background: #F8FAFC;
          color: var(--color-text-primary);
          transition: border-color 0.2s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #090F1E;
          background: #fff;
        }

        .text-area {
          resize: vertical;
        }

        .w-full {
          width: 100%;
        }

        .error-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          background: rgba(240, 71, 62, 0.1);
          border: 1px solid var(--color-error);
          color: var(--color-error);
          font-size: 0.88rem;
          font-weight: 600;
        }

        .success-banner {
          text-align: center;
          padding: 36px 20px;
          background: #F8FAFC;
        }

        .success-icon {
          color: var(--color-success);
          margin-bottom: 14px;
        }

        .success-title {
          font-size: 1.4rem;
          color: var(--color-text-primary);
          margin-bottom: 8px;
        }

        .success-desc {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
          max-width: 500px;
          margin: 0 auto;
        }

        .info-panel-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-card {
          background: #FFFFFF;
        }

        .info-title {
          font-size: 1.2rem;
          color: var(--color-text-primary);
          margin-bottom: 4px;
        }

        .info-sub {
          font-size: 0.86rem;
          color: var(--color-text-secondary);
          margin-bottom: 20px;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .info-icon-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(22, 82, 246, 0.08);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-lbl {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .info-val-link {
          font-weight: 700;
          font-size: 0.98rem;
          color: var(--color-accent);
        }

        .info-val {
          display: block;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-text-primary);
        }

        .info-tag {
          display: block;
          font-size: 0.76rem;
          color: var(--color-text-secondary);
        }

        .social-connect-block {
          border-top: 1px solid var(--color-neutral-border);
          padding-top: 16px;
        }

        .social-buttons-grid {
          display: flex;
          gap: 8px;
        }

        .social-card-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px;
          border-radius: var(--radius-sm);
          background: #F8FAFC;
          border: 1px solid var(--color-neutral-border);
          color: var(--color-text-primary);
          font-size: 0.82rem;
          font-weight: 600;
          transition: all 0.15s ease;
        }

        .social-card-btn:hover {
          background: #090F1E;
          color: #fff;
          border-color: #090F1E;
        }

        .founders-direct-badge {
          background: #090F1E;
          padding: 20px;
          border-radius: 14px;
        }

        .fd-title {
          font-size: 1.05rem;
          margin-bottom: 6px;
        }

        .fd-desc {
          font-size: 0.86rem;
          color: #8B98A9;
          line-height: 1.5;
        }

        .mb-2 { margin-bottom: 8px; }
        .mt-3 { margin-top: 14px; }
        .mt-4 { margin-top: 18px; }

        @media (max-width: 880px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
