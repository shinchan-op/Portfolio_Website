import React, { useState, useEffect } from 'react';
import './Terminal.css';

const Terminal = ({ commands }) => {
  const [displayedCommands, setDisplayedCommands] = useState([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Blink cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) return;

    const currentCommand = commands[currentCommandIndex];
    
    if (currentCharIndex < currentCommand.text.length) {
      const typingSpeed = currentCommand.instant ? 0 : Math.random() * 50 + 30;
      
      const timeout = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      const nextCommandDelay = setTimeout(() => {
        setDisplayedCommands(prev => [...prev, currentCommand]);
        setCurrentCommandIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, currentCommand.delay || 500);
      
      return () => clearTimeout(nextCommandDelay);
    }
  }, [currentCommandIndex, currentCharIndex, commands]);

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-button red"></div>
        <div className="terminal-button yellow"></div>
        <div className="terminal-button green"></div>
      </div>
      <div className="terminal-body">
        {displayedCommands.map((command, index) => (
          <div key={index} className="terminal-line">
            {command.prompt && <span className="terminal-prompt"></span>}
            <span className={command.className || ''}>{command.text}</span>
          </div>
        ))}
        
        {currentCommandIndex < commands.length && (
          <div className="terminal-line">
            {commands[currentCommandIndex].prompt && <span className="terminal-prompt"></span>}
            <span className={commands[currentCommandIndex].className || ''}>
              {commands[currentCommandIndex].text.substring(0, currentCharIndex)}
            </span>
            {showCursor && <span className="terminal-cursor"></span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;