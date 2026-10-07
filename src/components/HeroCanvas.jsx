import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 450;
    };

    window.addEventListener('resize', handleResize);

    // 3D Polyhedral Constellation Graph
    const numPoints = 32;
    const points = [];
    const radius = Math.min(width, height) * 0.38;
    const center = { x: width * 0.52, y: height * 0.5 };

    const colors = ['#FFFFFF', '#21A6BF', '#FF9F43', '#4C5FFF'];

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      points.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        color: colors[i % colors.length],
        pulse: Math.random() * Math.PI * 2
      });
    }

    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left - width / 2) * 0.0006;
      mouse.targetY = (e.clientY - rect.top - height / 2) * 0.0006;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let angleX = 0.002;
    let angleY = 0.003;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const currentAngleX = angleX + mouse.y * 0.015;
      const currentAngleY = angleY + mouse.x * 0.015;

      // Rotate points
      points.forEach((p) => {
        let x1 = p.x * Math.cos(currentAngleY) - p.z * Math.sin(currentAngleY);
        let z1 = p.z * Math.cos(currentAngleY) + p.x * Math.sin(currentAngleY);
        let y2 = p.y * Math.cos(currentAngleX) - z1 * Math.sin(currentAngleX);
        let z2 = z1 * Math.cos(currentAngleX) + p.y * Math.sin(currentAngleX);

        p.x = x1;
        p.y = y2;
        p.z = z2;
        p.pulse += 0.02;
      });

      // Draw geometric facet lines
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dz = points[i].z - points[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < radius * 1.15) {
            const alpha = (1 - dist / (radius * 1.15)) * 0.35;
            const p1 = { x: points[i].x + center.x, y: points[i].y + center.y };
            const p2 = { x: points[j].x + center.x, y: points[j].y + center.y };

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 194, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes matching image
      points.forEach((p) => {
        const px = p.x + center.x;
        const py = p.y + center.y;
        const scale = (p.z + radius) / (2 * radius);
        const pRadius = 2.5 + Math.sin(p.pulse) * 1 + scale * 3;

        ctx.beginPath();
        ctx.arc(px, py, Math.max(1.5, pRadius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10 * scale;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px', position: 'relative' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
}
