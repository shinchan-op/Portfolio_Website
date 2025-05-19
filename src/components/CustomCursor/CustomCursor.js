import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const cursorRingRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    // Make sure the DOM is fully loaded
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    let isMounted = true;
    
    const onMouseMove = (e) => {
      if (!isMounted) return;
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
      if (!isMounted) return;
      setHidden(true);
    };

    const onMouseEnter = () => {
      if (!isMounted) return;
      setHidden(false);
    };

    const onMouseDown = () => {
      if (!isMounted) return;
      setClicked(true);
    };

    const onMouseUp = () => {
      if (!isMounted) return;
      setClicked(false);
    };

    const handleLinkHoverEvents = () => {
      try {
        if (!isMounted) return;
        
        // Use a more specific selector to avoid errors
        const elements = document.querySelectorAll('a, button, input, textarea, select');
        
        // Add class-based selectors only if they exist in the DOM
        const classSelectors = ['.social-link', '.project-card', '.skill-name'];
        classSelectors.forEach(selector => {
          if (document.querySelector(selector)) {
            document.querySelectorAll(selector).forEach(el => {
              el.addEventListener('mouseenter', () => isMounted && setLinkHovered(true));
              el.addEventListener('mouseleave', () => isMounted && setLinkHovered(false));
            });
          }
        });
        
        // Add event listeners to standard elements
        elements.forEach(el => {
          el.addEventListener('mouseenter', () => isMounted && setLinkHovered(true));
          el.addEventListener('mouseleave', () => isMounted && setLinkHovered(false));
        });
      } catch (error) {
        console.error('Error setting up link hover events:', error);
      }
    };

    // Add event listeners with a delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (!isMounted) return;
      
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      
      handleLinkHoverEvents();
    }, 500);
    
    return () => {
      isMounted = false;
      clearTimeout(timer);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRingRef}
        className={`cursor-ring ${hidden ? 'cursor-hidden' : ''} ${clicked ? 'cursor-clicked' : ''} ${linkHovered ? 'cursor-link-hovered' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        ref={cursorDotRef}
        className={`cursor-dot ${hidden ? 'cursor-hidden' : ''} ${clicked ? 'cursor-clicked' : ''} ${linkHovered ? 'cursor-link-hovered' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default CustomCursor;