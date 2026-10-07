import React, { useEffect, useRef } from 'react';

/**
 * Predictive Arc hero background (Canvas 2D) — Trivio brand palette.
 * Navy base (#090F1E) -> deep navy (#09214A) -> royal blue (#1652F6)
 * -> sky blue -> white core, with a subtle brand-cyan (#21A6BF) shimmer.
 */
const lerp = (a, b, t) => a + (b - a) * t;
const mix = (c1, c2, t) => [lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t)];

const NAVY = [28, 70, 175];
const ROYAL = [22, 82, 246];
const SKY = [110, 175, 255];
const WHITE = [245, 250, 255];
const CYAN = [33, 166, 191];

function brandColor(i, shimmer) {
  let c;
  if (i < 0.5) c = mix(NAVY, ROYAL, i / 0.5);
  else if (i < 0.8) c = mix(ROYAL, SKY, (i - 0.5) / 0.3);
  else c = mix(SKY, WHITE, (i - 0.8) / 0.2);
  // thin cyan accent that drifts through the mid-tones
  if (i > 0.25 && i < 0.75) c = mix(c, CYAN, Math.max(0, shimmer) * 0.28);
  return c;
}

export default function HeroArcBackground({
  speed = 1,
  brightness = 1,
  archHeight = 0.7,
  thickness = 1,
}) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return undefined;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 1;
    let height = 1;
    let time = 0;
    let frame = 0;
    let visible = true;
    let spacing = 6;
    let dotSize = 6;

    const resize = () => {
      const r = host.getBoundingClientRect();
      width = Math.max(1, r.width);
      height = Math.max(1, r.height);
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const small = width < 700;
      spacing = small ? 7 : 6;
      dotSize = small ? 6.5 : 6.5;
      draw();
    };

    const draw = () => {
      // base: deep brand navy
      ctx.globalCompositeOperation = 'source-over';
      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, '#070C19');
      bg.addColorStop(1, '#0A1634');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      time += 0.015 * speed * (reduceMotion ? 0.4 : 1);

      const centerX = width * 0.58; // arc leans toward the right so text on the left stays clean
      const archPeakY = height * 0.38;
      const archWidth = width * 1.5;
      const archH = height * archHeight;
      ctx.globalCompositeOperation = 'lighter';

      for (let x = 0; x < width; x += spacing) {
        const normX = (x - centerX) / (archWidth / 2);
        const edge = Math.max(0, 1 - Math.pow(Math.abs(normX), 2.5));
        if (edge <= 0) continue;
        const curveY = archPeakY + normX * normX * archH;
        const band = (140 + (1 - Math.abs(normX)) * 80) * thickness;
        const waveX = Math.sin(x * 0.015 + time);

        // left side (where the headline sits) is toned down for readability
        const textDim = x < width * 0.5 ? 0.7 + 0.3 * (x / (width * 0.5)) : 1;

        const yStart = Math.max(0, Math.floor((curveY - band) / spacing) * spacing);
        const yEnd = Math.min(height, curveY + band);
        for (let y = yStart; y < yEnd; y += spacing) {
          const d = Math.abs(y - curveY);
          if (d >= band) continue;
          let intensity = 1 - d / band;
          const waveY = Math.cos(y * 0.02 + time);
          intensity = intensity * 0.55 + waveX * waveY * 0.45 * intensity;
          if (intensity <= 0) continue;
          intensity *= edge * textDim;
          if (intensity <= 0.03) continue;

          const [r, g, b] = brandColor(intensity, Math.sin(x * 0.01 - y * 0.008 + time * 1.4));
          const k = brightness * (0.7 + 0.3 * intensity);
          ctx.fillStyle = `rgb(${(r * k) | 0},${(g * k) | 0},${(b * k) | 0})`;
          const s = dotSize * intensity;
          ctx.fillRect(x, y, s, s);
        }
      }
      ctx.globalCompositeOperation = 'source-over';
    };

    const tick = () => {
      draw();
      frame = visible && !document.hidden ? requestAnimationFrame(tick) : 0;
    };
    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    const ro = new ResizeObserver(resize);
    const io = new IntersectionObserver(([e]) => {
      visible = e ? e.isIntersecting : true;
      visible ? start() : stop();
    });
    const onVis = () => (document.hidden ? stop() : visible && start());

    ro.observe(host);
    io.observe(host);
    document.addEventListener('visibilitychange', onVis);
    resize();
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [speed, brightness, archHeight, thickness]);

  return (
    <div ref={hostRef} className="hero-arc-bg" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}