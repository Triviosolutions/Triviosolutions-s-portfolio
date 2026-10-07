import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroArcBackground from '../components/HeroArcBackground';
import technologySvg from '../assets/technology.svg';
import webImage from '../assets/web-image.webp';
import FoundersSection from '../components/FoundersSection';
import { caseStudies } from '../data/caseStudiesData';
import { ArrowRight, Check, CheckCircle2, Github, Users, ShieldCheck, Zap, Globe } from 'lucide-react';

// Custom thin-outline icons for the "Why Trivio" cards
const whyIconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true
};

const TeamIcon = () => (
  <svg {...whyIconProps}>
    <circle cx="12" cy="8.2" r="2.5" />
    <path d="M7.8 19.5v-3.6a4.2 4.2 0 0 1 8.4 0v3.6" fill="currentColor" fillOpacity=".18" />
    <path d="M9.9 14.3l2.1 2.4 2.1-2.4" />
    <circle cx="5" cy="6.2" r="1.9" />
    <path d="M2.4 12.6c.1-1.6 1.2-2.7 2.6-2.7.6 0 1.1.2 1.5.5" />
    <circle cx="19" cy="6.2" r="1.9" />
    <path d="M21.6 12.6c-.1-1.6-1.2-2.7-2.6-2.7-.6 0-1.1.2-1.5.5" />
  </svg>
);

const BellIcon = () => (
  <svg {...whyIconProps}>
    <path d="M5.4 17.4c1.1-.9 1.5-2.2 1.5-4.2v-2.6a5.1 5.1 0 0 1 10.2 0v2.6c0 2 .4 3.3 1.5 4.2z" />
    <path d="M10.3 20.1c.4.7 1 1 1.7 1s1.3-.3 1.7-1" />
  </svg>
);

const ChartIcon = () => (
  <svg {...whyIconProps}>
    <rect x="3.5" y="14.5" width="3.6" height="6.5" rx=".6" />
    <rect x="10.2" y="11.5" width="3.6" height="9.5" rx=".6" />
    <rect x="16.9" y="8.5" width="3.6" height="12.5" rx=".6" />
    <path d="M3.5 10.8l4.2-4.2 3 2.6 7.3-6" />
    <path d="M14.2 3.2h3.8v3.8" />
  </svg>
);

const GlobeIcon = () => (
  <svg {...whyIconProps}>
    <circle cx="12" cy="12" r="9" />
    <ellipse cx="12" cy="12" rx="4" ry="9" />
    <path d="M3 12h18" />
    <path d="M4.2 7.6c2.2 1 4.6 1.4 7.8 1.4s5.6-.4 7.8-1.4" />
    <path d="M4.2 16.4c2.2-1 4.6-1.4 7.8-1.4s5.6.4 7.8 1.4" />
    <path d="M12 3v18" />
  </svg>
);

const TargetIcon = () => (
  <svg {...whyIconProps}>
    <path d="M20.2 12.6A8.6 8.6 0 1 1 11.4 3.8" />
    <path d="M16.6 12.4a5 5 0 1 1-5-5" />
    <circle cx="12" cy="12.2" r="1.3" />
    <path d="M12.3 11.9L20 4.2" />
    <path d="M16.4 3.9h3.7v3.7" />
    <path d="M16.2 7.8l3.6-3.6" />
  </svg>
);

export default function HomePage({ setSelectedCaseStudy }) {
  const featuredCases = caseStudies.slice(0, 4);
  const [showText, setShowText] = useState(false);
  const [showAsset, setShowAsset] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 1000);
    const assetTimer = setTimeout(() => setShowAsset(true), 1500);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(assetTimer);
    };
  }, []);

  // Word arrays for word-by-word animation
  const headingPart1 = "Transforming Your Bussiness Vision into Intelligent".split(" ");
  const headingPart2 = "Digital Reality.".split(" ");
  const subtextWords = "Supercharge your business with premium enterprise software, custom ERPs, and custom-built web, desktop & mobile applications powered by cutting-edge AI.".split(" ");

  const whyTrivio = [
    { name: 'Full-Stack Team', Icon: TeamIcon, lines: ['Skilled experts across', 'all technologies.'], stops: ['#FF9F43', '#FF832F'], color: '#F0701E' },
    { name: 'Direct Founder Access', Icon: BellIcon, lines: ['Work directly with', 'our leadership team.'], stops: ['#21A6BF', '#1B8CA2'], color: '#1B8CA2' },
    { name: 'Modern Tech Stack', Icon: ChartIcon, lines: ['Built for performance,', 'scalability and growth.'], stops: ['#14B8A6', '#0D9488'], color: '#0D9488' },
    { name: 'Remote-First & Global', Icon: GlobeIcon, lines: ['Flexible engagement', 'from anywhere in the world.'], stops: ['#24396B', '#0F182E'], color: '#1A2A4F' },
    { name: 'Results Driven', Icon: TargetIcon, lines: ['Your goals. Our priority.'], stops: ['#0194AB', '#00C6C1'], color: '#0194AB' }
  ];

  // "Our Services" stacking deck (content from the approved sample design)
  const ourServices = [
    {
      slug: 'web-dev',
      title: 'Web Development',
      desc: 'We build fast, good-looking websites and online stores that work perfectly on every device. Your site gets found on Google, stays secure and up to date, and keeps bringing you new customers.',
      points: ['Google ranking (SEO)', 'Ongoing maintenance & security', 'Visitor & performance tracking', 'Easy growth reports'],
      bg: '#090F1E',
      image: webImage
    },
    {
      slug: 'app-dev',
      title: 'Mobile App Development (iOS & Android)',
      desc: "We build fast, secure iPhone and Android apps with smooth screens and safe payments. Your business lives in your customers' pockets, and your app keeps getting better with every update.",
      points: ['App Store optimization (ASO)', 'Fast, even on slow networks', 'User activity tracking', 'Updates & ongoing support'],
      bg: '#0F182E',
      image: webImage
    },
    {
      slug: 'desktop',
      title: 'Desktop Software Development',
      desc: 'We build reliable software for Windows, Mac and Linux, from simple billing tools to full business systems. It runs smoothly on your own computers, even without internet.',
      points: ['Works on Windows, Mac & Linux', 'Secure data with auto backup', 'Connects to printers & scanners', 'Reports in PDF / Excel'],
      bg: '#16223F',
      image: webImage
    },
    {
      slug: 'ai-ml',
      title: 'AI Solutions & Automation',
      desc: 'We add smart chatbots and automation to your daily work. Repetitive jobs like replies, data entry and reports get done automatically, so you save time and cut costs.',
      points: ['24/7 AI chatbots', 'Automatic data entry & emails', 'Sales & trend predictions', 'Time & money saved reports'],
      bg: '#1D2C52',
      image: webImage
    }
  ];

  // "Cards fan-out on scroll" for the Why Trivio cards.
  // Same idea as the Founders cards: NO sticky / pinned stage and no extra scroll space.
  // Only the middle card shows at first; the others fan out while the section scrolls
  // naturally up the page. The fan starts once the whole stage is fully in view
  // (WHY_START_GAP) and is fully open when the section reaches its resting spot
  // right under the site header.
  const whyRef = useRef(null);
  const whyStickyRef = useRef(null); // the stage (heading + cards); it is NOT sticky any more
  const whyCardRefs = useRef([]);
  useEffect(() => {
    const container = whyRef.current;
    const stage = whyStickyRef.current;
    if (!container || !stage) return undefined;

    const desktop = window.matchMedia('(min-width: 1101px)');
    let frame = 0;

    // The fan begins only once the WHOLE stage (heading + centre card) is inside the viewport,
    // so the first card is seen in full before the others come out.
    // px gap kept between the stage's bottom edge and the viewport bottom when the fan begins
    const WHY_START_GAP = 0;
    // minimum scroll distance (px) the fan always gets, even on short screens
    const WHY_MIN_SPAN = 240;
    // px of scroll BEFORE the resting spot at which the row is already fully open
    const WHY_FINISH_BEFORE_REST = 6;

    const reset = () => {
      whyCardRefs.current.forEach((card) => {
        if (card) { card.style.transform = ''; card.style.opacity = ''; card.style.zIndex = ''; }
      });
    };

    const update = () => {
      frame = 0;
      const cards = whyCardRefs.current.filter(Boolean);
      if (!desktop.matches || cards.length < 2) { reset(); return; }

      const vh = window.innerHeight;
      const stageHeight = stage.offsetHeight || 400;
      // resting spot = just under the site header (CSS var on .why-fan)
      const restTop = parseFloat(window.getComputedStyle(container).getPropertyValue('--why-rest')) || 88;
      const stageTop = stage.getBoundingClientRect().top;

      const startTop = vh - stageHeight - WHY_START_GAP;          // stage fully in view -> fan begins
      const endTop = Math.min(restTop + WHY_FINISH_BEFORE_REST, startTop - WHY_MIN_SPAN); // fully open
      const span = startTop - endTop;
      const raw = span > 0 ? (startTop - stageTop) / span : 1;
      const t = Math.max(0, Math.min(1, raw));
      const e = t * t * (3 - 2 * t); // smoothstep

      const step = cards[1].offsetLeft - cards[0].offsetLeft; // card width + gap (unaffected by transforms)
      const mid = (cards.length - 1) / 2;
      cards.forEach((card, i) => {
        const d = i - mid;
        // exact reset once open so every card rests perfectly aligned
        if (e >= 0.999) {
          card.style.transform = '';
          card.style.opacity = '';
          card.style.zIndex = '';
          return;
        }
        const x = -d * step * (1 - e);
        const rot = d * 9 * (1 - e);
        const y = Math.abs(d) * 18 * (1 - e);
        const scale = 0.88 + 0.12 * e;
        card.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg) scale(${scale})`;
        card.style.opacity = d === 0 ? 1 : Math.min(1, e * 2.5);
        card.style.zIndex = String(10 - Math.round(Math.abs(d)));
      });
    };

    const requestUpdate = () => { if (!frame) frame = window.requestAnimationFrame(update); };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    desktop.addEventListener('change', requestUpdate);
    update();

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      desktop.removeEventListener('change', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const deckRef = useRef(null);
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return undefined;

    const wrappers = Array.from(deck.querySelectorAll('.os-wrapper'));
    const cards = wrappers.map((w) => w.querySelector('.os-card'));
    // fallback sticky offsets (header 56px + 16px gap, 20px step) if computed `top` is unreadable
    const readHeader = () => parseFloat(window.getComputedStyle(deck).getPropertyValue('--os-header')) || 56;
    let ticking = false;

    const stickyTop = (el, index) => {
      const top = parseFloat(window.getComputedStyle(el).top);
      return Number.isFinite(top) ? top : readHeader() + 16 + index * 20;
    };

    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      wrappers.forEach((wrapper, index) => {
        let scale = 1;
        if (wrapper.getBoundingClientRect().top <= stickyTop(wrapper, index) + 0.5) {
          for (let j = index + 1; j < wrappers.length; j += 1) {
            const nextTop = wrappers[j].getBoundingClientRect().top;
            if (nextTop <= vh) {
              const distance = nextTop - stickyTop(wrappers[j], j);
              if (distance < vh) {
                const progress = Math.max(0, Math.min(1, (vh - distance) / vh));
                scale -= progress * 0.03;
              }
            }
          }
        }
        cards[index].style.transform = `scale(${Math.max(0.91, scale)})`;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="home-page">
      {/* 1. Hero Section (Header + Hero = 100vh MAX on Desktop, Fluid on Mobile) */}
      <section className="hero-section">
        <HeroArcBackground />
        <div className="hero-overlay"></div>

        <div className="container hero-container">
          <div className={`hero-content ${showText ? 'hero-loaded' : ''}`}>
            <h1 className="hero-title">
              {headingPart1.map((word, i) => (
                <span
                  key={`h1-${i}`}
                  className="word-blur-up"
                  style={{ animationDelay: `${0.06 * i}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
              <span className="hero-title-accent">
                {headingPart2.map((word, i) => (
                  <span
                    key={`h2-${i}`}
                    className="word-blur-up"
                    style={{ animationDelay: `${0.06 * (headingPart1.length + i)}s` }}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </span>
            </h1>

            <p className="hero-subtext">
              {subtextWords.map((word, i) => (
                <span
                  key={`s-${i}`}
                  className="word-fade-scale"
                  style={{ animationDelay: `${0.45 + 0.035 * i}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
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

          <div className={`hero-canvas-wrapper ${showAsset ? 'hero-visible' : ''}`}>
            <img src={technologySvg} alt="Technology" className="hero-tech-asset" />
          </div>
        </div>
      </section>

      {/* 2. Why Trivio Bar */}
      <section className="trust-strip">
        <div className="why-fan" ref={whyRef}>
         <div className="why-fan-sticky" ref={whyStickyRef}>
          <div className="container">
          <h2 className="section-title trust-heading">Why Businesses Choose Trivio</h2>
          <div className="why-cards-grid">
            {whyTrivio.map((item, idx) => {
              const CardIcon = item.Icon;
              return (
                <div key={idx} className="why-card" ref={(el) => { whyCardRefs.current[idx] = el; }}>
                  <div className="why-card-inner" style={{ '--why-color': item.color, '--why-gradient': `linear-gradient(90deg, ${item.stops.join(', ')})` }}>
                    <svg className="why-card-band" viewBox="0 0 706 205" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <linearGradient id={`whyGrad${idx}`} x1="0" y1="0" x2="1" y2="0">
                          {item.stops.map((c, i) => (
                            <stop key={i} offset={`${(i / (item.stops.length - 1)) * 100}%`} stopColor={c} />
                          ))}
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,85 V67 A67,67 0 0 1 67,0 H639 A67,67 0 0 1 706,67 V85 C596,108 501,135 424,176 C396,191 381,205 353,205 C325,205 310,191 282,176 C205,135 110,108 0,85 Z"
                        fill={`url(#whyGrad${idx})`}
                      />
                    </svg>
                    <div className="why-card-icon">
                      <CardIcon />
                    </div>
                    <h3 className="why-card-title">{item.name}</h3>
                    <p className="why-card-desc">
                      {item.lines.map((line, i) => (
                        <span key={i} className="why-card-line">{line}</span>
                      ))}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
         </div>
        </div>
      </section>

      {/* 3. "Our Services" sticky stacking deck */}
      <section className="os-section">
        <div className="container">
          <div className="os-grid" style={{ '--os-n': ourServices.length }}>
            <div className="os-title-col">
              <h2 className="os-title">Our Services</h2>
            </div>

            <div className="os-deck" ref={deckRef}>
              {ourServices.map((svc, i) => (
                <div
                  key={svc.slug}
                  className="os-wrapper"
                  style={{ '--os-i': i, '--os-n': ourServices.length, zIndex: (i + 1) * 10 }}
                >
                  <Link
                    to={`/services/${svc.slug}`}
                    className="os-card"
                    style={{ background: svc.bg }}
                  >
                    <span className="os-num">{String(i + 1).padStart(2, '0')}</span>

                    <div className="os-body">
                      <h3 className="os-card-title">{svc.title}</h3>
                      <p className="os-card-desc">{svc.desc}</p>
                      <ul className="os-list">
                        {svc.points.map((point) => (
                          <li key={point}>
                            <span className="os-check" aria-hidden="true">
                              <Check size={13} strokeWidth={3.2} />
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="os-cta">
                        <span>Learn More</span>
                        <ArrowRight size={18} />
                      </span>
                    </div>

                    <div className="os-media" aria-hidden="true">
                      <img
                        className="os-img"
                        src={svc.image}
                        alt=""
                        loading={i === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    </div>
                  </Link>
                </div>
              ))}
              <div className="os-spacer" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

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
          height: calc(100vh - 64px - 18px);
          max-height: calc(100vh - 64px - 18px);
          min-height: 480px;
          display: flex;
          align-items: center;
          background: #090F1E;
          overflow: hidden;
          position: relative;
          margin: 6px 12px 12px 12px;
          border-radius: 24px;
        }

        .hero-arc-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: #070C19;
        }

        .hero-arc-bg canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(60% 70% at 78% 45%, rgba(33,166,191,0.16) 0%, transparent 70%),
            linear-gradient(100deg, rgba(7,12,25,0.55) 0%, rgba(9,33,74,0.12) 55%, rgba(7,12,25,0.15) 100%);
          z-index: 1;
          pointer-events: none;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: clamp(20px, 4vw, 40px);
          height: 100%;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-title {
          font-size: clamp(1.7rem, 4.4vw, 3.1rem);
          font-weight: 500;
          line-height: 1.18;
          color: #FFFFFF;
          margin-bottom: 20px;
        }

        .hero-title-accent {
          color: #21A6BF;
        }

        /* ===== WORD-BY-WORD: Blur-Up reveal (Heading) ===== */
        .word-blur-up {
          display: inline-block;
          opacity: 0;
          filter: blur(6px);
          transform: translateY(25px);
        }

        .hero-content.hero-loaded .word-blur-up {
          animation: wordBlurUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes wordBlurUp {
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }

        .hero-subtext {
          font-size: clamp(1rem, 1.8vw, 1.05rem);
          color: #8B98A9;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 560px;
        }

        /* ===== WORD-BY-WORD: Fade + Scale reveal (Subtext) ===== */
        .word-fade-scale {
          display: inline-block;
          opacity: 0;
          transform: scale(0.85) translateY(10px);
        }

        .hero-content.hero-loaded .word-fade-scale {
          animation: wordFadeScale 0.5s ease forwards;
        }

        @keyframes wordFadeScale {
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* ===== BUTTONS: Elastic Pop from BOTTOM (staggered) ===== */
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hero-cta-group .btn {
          opacity: 0;
        }

        .hero-content.hero-loaded .hero-cta-group .btn:nth-child(1) {
          animation: buttonPop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 0.9s;
        }

        .hero-content.hero-loaded .hero-cta-group .btn:nth-child(2) {
          animation: buttonPop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 1.05s;
        }

        @keyframes buttonPop {
          0% {
            opacity: 0;
            transform: translateY(35px) scale(0.8);
          }
          60% {
            opacity: 1;
            transform: translateY(-4px) scale(1.04);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* ===== RIGHT ASSET: Single entrance animation only (no loop), bigger size ===== */
        .hero-canvas-wrapper {
          width: 100%;
          height: 100%;
          max-height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-tech-asset {
          width: 100%;
          height: auto;
          max-width: 100%;
          max-height: 560px;
          object-fit: contain;
          opacity: 0;
        }

        .hero-canvas-wrapper.hero-visible .hero-tech-asset {
          animation: assetFloatIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes assetFloatIn {
          0% {
            opacity: 0;
            transform: translateX(70px) rotate(6deg) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg) scale(1.18);
          }
        }

        .trust-strip {
          /* bottom = same gap the other sections use (.section-padding), so the space before "Our Services" matches */
          padding: clamp(20px, 3vw, 32px) 0 clamp(32px, 6vw, 64px);
        }

        /* Fan-out: plain, normally-scrolling block (no sticky, no extra spacer).
           --why-rest = where the stage rests under the site header; the fan is fully open there. */
        .why-fan {
          --why-rest: 88px;
          position: relative;
        }

        .why-fan-sticky {
          position: relative; /* kept only as the class name of the stage; it no longer sticks */
        }

        .why-fan-sticky > .container {
          overflow: visible;
        }

        .why-card {
          transform-origin: 50% 100%;
          will-change: transform, opacity;
        }

        .trust-heading {
          text-align: center;
          margin-bottom: clamp(20px, 3vw, 32px);
        }

        .why-cards-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(14px, 2vw, 24px);
          align-items: stretch;
        }

        /* Each card is a size container so every measurement scales
           proportionally (cqw) and the card keeps its exact look at any width */
        .why-card {
          container-type: inline-size;
          display: flex;
          flex-direction: column;
        }

        .why-card-inner {
          position: relative;
          flex: 1;
          margin-top: 14.5cqw;
          padding: 35.7cqw 3cqw 11cqw;
          background: #FFFFFF;
          border-radius: 9.5cqw;
          box-shadow: 0 2.4cqw 7cqw rgba(9, 15, 30, 0.10);
          text-align: center;
        }

        .why-card,
        .why-card-inner {
          transition: none;
        }

        .why-card-band {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          aspect-ratio: 706 / 205;
          display: block;
        }

        .why-card-icon {
          position: absolute;
          top: -12.8cqw;
          left: 50%;
          transform: translateX(-50%);
          width: 29.3cqw;
          height: 29.3cqw;
          border: 1cqw solid transparent;
          border-radius: 50%;
          /* white fill + border painted with the same gradient as the card head.
             The gradient is sized to the full card width and shifted so it lines up
             exactly with the head behind it */
          background:
            linear-gradient(#FFFFFF, #FFFFFF) padding-box,
            var(--why-gradient) border-box;
          background-repeat: no-repeat;
          background-size: 100% 100%, 100cqw 100%;
          background-position: 0 0, -35.35cqw 0;
          color: var(--why-color);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2cqw 4.5cqw rgba(9, 15, 30, 0.12);
        }

        .why-card-icon svg {
          width: 60%;
          height: 60%;
          display: block;
        }

        .why-card-title {
          margin: 0 0 4.9cqw;
          font-family: var(--font-primary);
          font-size: 6.85cqw;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0;
          color: var(--color-navy-dark);
          white-space: nowrap;
        }

        .why-card-desc {
          margin: 0;
          font-family: var(--font-primary);
          font-size: 5.6cqw;
          line-height: 1.6;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .why-card-line {
          display: block;
          white-space: nowrap;
        }

        @media (max-width: 1100px) {
          .why-cards-grid {
            grid-template-columns: repeat(6, minmax(0, 1fr));
            row-gap: 20px;
          }
          .why-card { grid-column: span 2; }
          .why-card:nth-child(4) { grid-column: 2 / span 2; }
          .why-card:nth-child(5) { grid-column: 4 / span 2; }
        }

        @media (max-width: 640px) {
          .why-cards-grid {
            grid-template-columns: minmax(0, 1fr);
            max-width: 320px;
            margin: 0 auto;
            row-gap: 12px;
          }
          .why-card,
          .why-card:nth-child(4),
          .why-card:nth-child(5) { grid-column: auto; }
        }

        /* ---------- Our Services (sticky stacking deck) ---------- */
        .os-section {
          --os-header: 56px;
          --os-top: calc(var(--os-header) + 16px);
          background: #F8FAFC;
          padding: clamp(20px, 3vw, 32px) 0 clamp(8px, 1.5vw, 16px);
        }

        .os-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 3rem;
          align-items: start;
        }

        .os-title-col {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .os-title {
          margin: 0;
          font-family: var(--font-primary);
          font-size: clamp(2rem, 6vw, 3.1rem);
          font-weight: 500;
          line-height: 1.18;
          letter-spacing: 0;
          white-space: nowrap;
          color: var(--color-text-primary);
          user-select: none;
        }

        .os-deck {
          display: flex;
          flex-direction: column;
          gap: 0; /* spacing comes from each wrapper's margin-bottom below */
          position: relative;
          /* the last card's 48px margin-bottom is only needed for the sticky release, pull it back so it is not visible white space */
          margin-bottom: -48px;
        }

        .os-wrapper {
          position: sticky;
          top: calc(var(--os-top) + var(--os-i) * 20px);
          /* A sticky box has to stay inside .os-deck, margin box included.
             top + margin-bottom is the same for every card (top grows 20px per card,
             margin shrinks 20px per card), so all cards hit the end of the deck at the
             same moment and leave together as one stack, instead of the last card
             sliding up over the others. 48px is the normal gap between cards. */
          margin-bottom: calc(48px + (var(--os-n) - 1 - var(--os-i)) * 20px);
        }

        .os-card {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          align-items: center;
          gap: 1.25rem;
          min-height: max(calc(100vh - var(--os-top) - 104px), 420px);
          padding: 2rem 1.5rem;
          border-radius: 1.5rem;
          overflow: hidden;
          color: #FFFFFF;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
          transform-origin: top center;
          transition: transform 0.1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .os-card:focus-visible {
          outline: 3px solid #21A6BF;
          outline-offset: 3px;
        }

        .os-num {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.5);
        }

        /* ----- left: text ----- */
        .os-body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
          padding-top: 4.5rem; /* room for the image row on mobile */
        }

        .os-card-title {
          max-width: 34rem;
          margin: 0 0 0.75rem;
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: #FFFFFF;
        }

        .os-card-desc {
          max-width: 34rem;
          margin: 0 0 1.5rem;
          font-size: 0.95rem;
          line-height: 1.65;
          color: #D5DCE8;
        }

        .os-list {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 0.7rem 1.75rem;
          max-width: 36rem;
          margin: 0;
          padding: 1.25rem 0 0;
          list-style: none;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .os-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          font-size: 0.9rem;
          font-weight: 500;
          line-height: 1.45;
          color: #EEF2F8;
        }

        .os-check {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          margin-top: 0.05rem;
          border-radius: 50%;
          color: #4CC9DE;
          background: rgba(33, 166, 191, 0.16);
          border: 1px solid rgba(33, 166, 191, 0.4);
        }

        .os-cta {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          gap: 8px;
          margin-top: 1.75rem;
          font-size: 0.92rem;
          font-weight: 700;
          color: #21A6BF;
        }

        .os-cta svg {
          transition: transform 0.2s ease;
        }

        .os-card:hover .os-cta svg {
          transform: translateX(4px);
        }

        /* ----- right: plain image (no effects) ----- */
        .os-media {
          position: absolute;
          top: 1.25rem;
          right: 1rem;
          width: 40%;
          height: 88px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .os-img {
          display: block;
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        .os-spacer {
          height: 4vh;
        }

        @media (max-width: 380px) {
          .os-section { --os-header: 50px; }
        }

        @media (min-width: 768px) {
          .os-card {
            grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
            gap: 2rem;
            padding: 3rem;
          }
          .os-num { top: 2rem; left: auto; right: 2rem; }
          .os-body { padding-top: 0; }
          .os-card-title { font-size: clamp(1.6rem, 2.5vw, 1.9rem); line-height: 1.2; }
          .os-card-desc { font-size: 1rem; }
          .os-list li { font-size: 0.93rem; }
          .os-media {
            position: static;
            width: auto;
            height: auto;
          }
          .os-img {
            width: 100%;
            max-height: min(440px, 60vh);
          }
        }

        @media (min-width: 1100px) {
          .os-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (min-width: 1024px) {
          .os-grid {
            /* title column is only as wide as the vertical title; cards take the rest */
            grid-template-columns: max-content minmax(0, 1fr);
            gap: 3rem;
          }
          .os-title-col {
            position: sticky;
            top: var(--os-top);
            /* same top, height and end-margin as card 01, so the title pins and releases together with the cards */
            height: max(calc(100vh - var(--os-top) - 104px), 420px);
            margin-bottom: calc(48px + (var(--os-n) - 1) * 20px);
            justify-content: center;
            padding: 1rem 0;
          }
          .os-title {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            /* centre the title in the space BELOW the sticky site header (not in the card box):
               the box starts 16px under the header and ends 104px above the viewport bottom,
               so its middle sits 44px higher than the middle of the visible area */
            position: relative;
            top: 44px;
            font-size: min(6.5rem, calc((100vh - var(--os-top) - 104px - 2rem) / 7.8));
          }
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
            min-height: auto;
            display: flex;
            align-items: center;
            background: #090F1E;
            overflow: hidden;
            position: relative;
            margin: 2px 8px 8px 8px;
            border-radius: 24px;
            padding: 28px 0;
          }
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-canvas-wrapper {
            order: 1;
            max-height: 260px;
            margin-bottom: 12px;
          }
          .hero-content {
            order: 2;
          }
          .hero-subtext {
            margin-left: auto;
            margin-right: auto;
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