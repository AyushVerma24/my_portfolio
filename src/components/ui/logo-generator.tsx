
import React, { useEffect, useRef } from 'react';

// This component is only used to generate a PNG version of the logo
const LogoGenerator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = 512;
    canvas.height = 512;
    
    // Background circle
    const gradient = ctx.createLinearGradient(112, 128, 400, 384);
    gradient.addColorStop(0, '#1A1F2C');
    gradient.addColorStop(1, '#252A35');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(256, 256, 248, 0, Math.PI * 2);
    ctx.fill();
    
    // Border
    const borderGradient = ctx.createLinearGradient(64, 64, 448, 448);
    borderGradient.addColorStop(0, '#6E44FF');
    borderGradient.addColorStop(0.5, '#9B87F5');
    borderGradient.addColorStop(1, '#0EA5E9');
    
    ctx.strokeStyle = borderGradient;
    ctx.lineWidth = 8;
    ctx.stroke();
    
    // Letter A
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(190, 140);
    ctx.lineTo(240, 360);
    ctx.lineTo(280, 360);
    ctx.lineTo(330, 140);
    ctx.lineTo(290, 140);
    ctx.lineTo(255, 310);
    ctx.lineTo(220, 140);
    ctx.closePath();
    ctx.fill();
    
    // Letter V
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.moveTo(320, 140);
    ctx.lineTo(270, 360);
    ctx.lineTo(230, 360);
    ctx.lineTo(180, 140);
    ctx.lineTo(220, 140);
    ctx.lineTo(255, 310);
    ctx.lineTo(290, 140);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
    
    // Outer glow
    const glowGradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    glowGradient.addColorStop(0, 'rgba(110, 68, 255, 0.8)');
    glowGradient.addColorStop(1, 'rgba(110, 68, 255, 0)');
    
    ctx.strokeStyle = glowGradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(256, 256, 252, 0, Math.PI * 2);
    ctx.stroke();
    
    // Export as PNG - in a real app, you would download this
    // For now, we'll just log to console
    console.log('Logo generated - in a real app, you would save this as PNG');
  }, []);
  
  return (
    <div style={{ display: 'none' }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default LogoGenerator;
