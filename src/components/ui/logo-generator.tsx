
import React, { useEffect, useRef, useState } from 'react';

// This component generates and displays PNG versions of the logo
const LogoGenerator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [iconGenerated, setIconGenerated] = useState(false);
  
  // Generate the icon only once
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || iconGenerated) return;
    
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
    
    // Generate a smaller 32x32 version for favicon
    const smallCanvas = document.createElement('canvas');
    smallCanvas.width = 32;
    smallCanvas.height = 32;
    const smallCtx = smallCanvas.getContext('2d');
    if (smallCtx) {
      smallCtx.drawImage(canvas, 0, 0, 512, 512, 0, 0, 32, 32);
      
      // Force browser to recognize the favicon update by creating a link and updating it
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.setAttribute('rel', 'icon');
      link.setAttribute('href', smallCanvas.toDataURL('image/png'));
      document.head.appendChild(link);
    }
    
    // Generate 192x192 version for app icon
    const mediumCanvas = document.createElement('canvas');
    mediumCanvas.width = 192;
    mediumCanvas.height = 192;
    const mediumCtx = mediumCanvas.getContext('2d');
    if (mediumCtx) {
      mediumCtx.drawImage(canvas, 0, 0, 512, 512, 0, 0, 192, 192);
      
      // Force browser to recognize the apple touch icon update
      const appleLink = document.querySelector("link[rel='apple-touch-icon']") || document.createElement('link');
      appleLink.setAttribute('rel', 'apple-touch-icon');
      appleLink.setAttribute('href', mediumCanvas.toDataURL('image/png'));
      document.head.appendChild(appleLink);
    }
    
    console.log('AV logo icon generated and updated');
    setIconGenerated(true);
  }, [iconGenerated]);
  
  return (
    <div style={{ display: 'none' }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default LogoGenerator;
