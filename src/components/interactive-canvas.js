import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const InteractiveCanvas = ({ children, className = "" }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const isDrawing = useRef(false);
  const lastPoint = useRef({ x: 0, y: 0 });
  const drawingPoints = useRef([]);
  
  useEffect(() => {
    // Set up the canvas
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.strokeStyle = '#3498db';
    context.lineWidth = 2;
    contextRef.current = context;
    
    // Handle window resize
    const handleResize = () => {
      const tempCanvas = document.createElement('canvas');
      const tempContext = tempCanvas.getContext('2d');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      tempContext.drawImage(canvas, 0, 0);
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      context.lineCap = 'round';
      context.strokeStyle = '#3498db';
      context.lineWidth = 2;
      context.drawImage(tempCanvas, 0, 0);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const startDrawing = (e) => {
    isDrawing.current = true;
    const { offsetX, offsetY } = getCoordinates(e);
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    lastPoint.current = { x: offsetX, y: offsetY };
    drawingPoints.current.push({ x: offsetX, y: offsetY });
  };
  
  const draw = (e) => {
    if (!isDrawing.current) return;
    
    const { offsetX, offsetY } = getCoordinates(e);
    
    // Draw line
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    
    // Add point for later fading
    drawingPoints.current.push({ x: offsetX, y: offsetY });
    lastPoint.current = { x: offsetX, y: offsetY };
  };
  
  const stopDrawing = () => {
    isDrawing.current = false;
  };
  
  const getCoordinates = (e) => {
    let offsetX, offsetY;
    
    if (e.type.includes('touch')) {
      const rect = canvasRef.current.getBoundingClientRect();
      offsetX = e.touches[0].clientX - rect.left;
      offsetY = e.touches[0].clientY - rect.top;
    } else {
      offsetX = e.nativeEvent.offsetX;
      offsetY = e.nativeEvent.offsetY;
    }
    
    return { offsetX, offsetY };
  };
  
  useEffect(() => {
    // Fade lines over time
    const fadeLines = () => {
      const canvas = canvasRef.current;
      const context = contextRef.current;
      
      context.fillStyle = 'rgba(142, 177, 199, 0.1)'; // Your background color with opacity
      context.fillRect(0, 0, canvas.width, canvas.height);
    };
    
    const fadeInterval = setInterval(fadeLines, 50);
    
    return () => {
      clearInterval(fadeInterval);
    };
  }, []);
  
  return (
    <Box className={`interactive-canvas-container ${className}`} style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      <Box className="cards-container" style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

InteractiveCanvas.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default InteractiveCanvas;
