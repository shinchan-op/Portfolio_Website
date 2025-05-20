import React, { useEffect, useRef } from 'react';
import './MatrixBackground.css';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Function to set canvas dimensions
    const setCanvasDimensions = () => {
      // Get the document's full height instead of just the viewport
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      
      canvas.width = window.innerWidth;
      canvas.height = docHeight; // Use document height instead of window height
      
      // Redraw after resize
      initMatrix();
    };
    
    // Initialize matrix effect
    const initMatrix = () => {
      // Characters to display (you can customize this)
      const characters = '0123456789!@#$%^&*()_+{}[]<>?/';
      
      // Font size and columns
      const fontSize = 20;
      const columns = Math.floor(canvas.width / fontSize);
      
      // Array to track the y position of each column
      const drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100; // Random starting position above the canvas
      }
      
      // Drawing function
      const draw = () => {
        // Semi-transparent black to create fade effect
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Green text
        // In the draw function, change:
        ctx.fillStyle = '#00ff00';
        
        // To something with better contrast against medium backgrounds:
        ctx.fillStyle = '#00cc00'; // Slightly darker green
        ctx.font = `${fontSize}px monospace`;
        
        // Loop through each column
        for (let i = 0; i < drops.length; i++) {
          // Choose a random character
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          
          // Draw the character
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          
          // Move the drop down
          drops[i]++;
          
          // Send the drop back to the top randomly after it crosses the screen
          // Also randomize the reset position to make the rain look more natural
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
        }
      };
      
      // Animation loop
      return setInterval(draw, 5);
    };
    
    // Set initial dimensions
    setCanvasDimensions();
    
    // Handle window resize and scroll events
    window.addEventListener('resize', setCanvasDimensions);
    window.addEventListener('scroll', () => {
      // Check if we need to extend the canvas height when scrolling
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      
      if (canvas.height < docHeight) {
        canvas.height = docHeight;
      }
    });
    
    // Start the animation
    const interval = initMatrix();
    
    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('scroll', setCanvasDimensions);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-background"></canvas>;
};

export default MatrixBackground;