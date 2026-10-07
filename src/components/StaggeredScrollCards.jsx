import React, { useEffect, useRef } from 'react';

/**
 * StaggeredScrollCards
 *
 * A row of bordered cards. Every card after the first starts pushed down
 * (staggered) and rises into one aligned row while the page scrolls.
 *
 * The rise starts early - as soon as the first card is only a little bit visible
 * (START_VISIBLE) - and is finished when the row reaches its resting spot under
 * the header. There is no pinned hold and no extra scroll after that.
 *
 *   items       array of data objects
 *   renderItem  (item, index) => node   - the inside of one card
 *   getKey      (item, index) => string - optional stable key
 *   stagger     starting offset step as a fraction of card height (default 0.7: each card starts 70% of a card height below the previous one)
 *   overhang    px that card content (e.g. a photo) may rise above the cards' top border
 *
 * Below 900px the effect is switched off and the cards simply stack.
 */
const MOBILE_QUERY = '(max-width: 900px)';

// fraction of the first card that is visible when the rise begins (0.5 = half; lower = earlier)
const START_VISIBLE = 0.2;
// px of scroll BEFORE the resting spot at which the row is already fully lined up
// (0 = the row reaches its final place exactly when the stage pins)
const FINISH_BEFORE_PIN = 6;

export default function StaggeredScrollCards({ items, renderItem, getKey, stagger = 0.7, overhang = 0 }) {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky) return undefined;

    const mobile = window.matchMedia(MOBILE_QUERY);
    let frame = 0;

    const reset = () => {
      cardRefs.current.forEach((card) => {
        if (card) card.style.transform = '';
      });
    };

    const update = () => {
      frame = 0;
      if (mobile.matches) {
        reset();
        return;
      }

      const cards = cardRefs.current.filter(Boolean);
      if (!cards.length) return;

      const vh = window.innerHeight;
      const cardHeight = cards[0].offsetHeight || 400;

      // virtualTop: where the first card currently sits in the viewport
      // reference line: the row's final resting spot is right under the site header
      const pinTop = parseFloat(window.getComputedStyle(container).getPropertyValue('--ssc-header')) || 56;
      const virtualTop = container.getBoundingClientRect().top + cards[0].offsetTop;

      const startTop = vh - cardHeight * START_VISIBLE;                    // rise begins
      const endTop = pinTop + cards[0].offsetTop + FINISH_BEFORE_PIN;      // fully lined up, just before the pin
      const span = startTop - endTop;
      const raw = span > 0 ? (startTop - virtualTop) / span : 1;
      const progress = Math.max(0, Math.min(1, raw));

      cards.forEach((card, index) => {
        // whole pixels only (fractional offsets leave a card a hair off its neighbour), and
        // an exact reset once the rise is done so every card rests perfectly aligned
        const offset = Math.round(cardHeight * stagger * index * (1 - progress));
        card.style.transform = index === 0 || progress >= 0.999 || offset <= 0
          ? ''
          : `translateY(${offset}px)`;
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    mobile.addEventListener('change', requestUpdate);
    update();

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      mobile.removeEventListener('change', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [items.length, stagger, overhang]);

  return (
    <div className="ssc" ref={containerRef} style={{ '--ssc-overhang': `${overhang}px` }}>
      <div className="ssc-sticky" ref={stickyRef}>
        <div className="ssc-row">
          {items.map((item, index) => (
            <article
              key={getKey ? getKey(item, index) : index}
              className="ssc-card"
              ref={(el) => { cardRefs.current[index] = el; }}
            >
              {renderItem(item, index)}
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .ssc {
          --ssc-header: 56px;
          position: relative;
        }

        /* Stage is exactly as tall as the cards: no pinned hold, no empty scroll below.
           It clips the cards that are still lower down, so they rise out of its bottom edge. */
        .ssc-sticky {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 2vh 24px 32px;
          overflow: hidden;
        }

        .ssc-row {
          display: flex;
          align-items: stretch;
          width: 100%;
          max-width: 1232px; /* = .container (1280px) minus its 24px side padding */
          padding-top: var(--ssc-overhang, 0px);
        }

        .ssc-card {
          position: relative;
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 28px 22px 22px;
          background-color: #FFFFFF;
          border: 1px solid #D1D9E0;
          will-change: transform;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, z-index 0.2s ease;
        }

        /* Neighbouring cards share ONE line, and it belongs to the card on its right
           (every card except the last has no right border). Later cards paint over
           earlier ones, so that line can never be covered by a neighbour's background
           when widths land on fractional pixels. */
        .ssc-card:not(:last-child) {
          border-right-width: 0;
        }

        .ssc-card:hover {
          z-index: 10;
          border-color: var(--color-accent);
          /* also draws the edge this card has no border on */
          outline: 1px solid var(--color-accent);
          outline-offset: -1px;
          box-shadow: 0 12px 32px rgba(31, 35, 40, 0.12);
        }

        @media (max-width: 380px) {
          .ssc { --ssc-header: 50px; }
        }

        @media (max-width: 900px) {
          .ssc-sticky {
            padding: 8px 24px 0;
            overflow: visible;
          }
          .ssc-row {
            flex-direction: column;
            gap: calc(16px + var(--ssc-overhang, 0px));
          }
          .ssc-card {
            transform: none !important;
          }
          .ssc-card:not(:last-child) {
            border-right-width: 1px; /* stacked vertically: full border again */
          }
        }

        /* side margins follow .container on small screens */
        @media (max-width: 640px) {
          .ssc-sticky { padding-left: 16px; padding-right: 16px; }
        }
        @media (max-width: 320px) {
          .ssc-sticky { padding-left: 10px; padding-right: 10px; }
        }
      `}</style>
    </div>
  );
}