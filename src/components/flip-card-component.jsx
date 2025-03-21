import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const FlippableCard = ({ frontContent, backContent, className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Setup initial position
  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        x: rect.left,
        y: rect.top
      });
    }
  }, []);

  const handleFlip = (e) => {
    // Only flip if we're not dragging
    if (!isDragging) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleDragStart = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    
    // Calculate where within the card the user clicked
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setDragOffset({
        x: clientX - rect.left,
        y: clientY - rect.top
      });
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    
    setPosition({
      x: clientX - dragOffset.x,
      y: clientY - dragOffset.y
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    // Add event listeners for dragging
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('touchmove', handleDragMove, { passive: false });
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchend', handleDragEnd);
    }

    return () => {
      // Clean up event listeners
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging]);

  return (
    <Box
      ref={cardRef}
      className={`flippable-card ${isDragging ? 'dragging' : ''} ${className}`}
      onClick={handleFlip}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
        transformStyle: 'preserve-3d',
        transition: isDragging ? 'none' : 'transform 0.6s',
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: isDragging ? 1000 : 1
      }}
    >
      <Box
        className="card-front"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
        }}
      >
        {frontContent}
      </Box>
      
      <Box
        className="card-back"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}
      >
        {backContent}
      </Box>
    </Box>
  );
};

FlippableCard.propTypes = {
  frontContent: PropTypes.node.isRequired,
  backContent: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default FlippableCard;
