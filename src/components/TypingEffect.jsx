// src/TypingEffect.js
import React, { useState, useEffect } from 'react';

const TypingEffect = ({ messages, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const message = messages[msgIndex];
    let timer;

    if (displayedText.length < message.length) {
      timer = setTimeout(() => {
        setDisplayedText(prev => prev + message[displayedText.length]);
      }, speed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText('');
        setMsgIndex((prev) => (prev + 1) % messages.length);
      }, 2000); // Pause after message completion
    }

    return () => clearTimeout(timer);
  }, [displayedText, msgIndex, messages, speed]);

  return (
      <div className=' ' style={{ display: 'inline', fontFamily: "'Familjen Grotesk', 'sans-serif'" }} >
      <p className="md:text-[36px] text-xl font-bold text-center md:leading-[60px] font-mono text-white" style={{fontFamily:"'Montserrat',sans-serif"}}>
      Grow Your <span className='text-green-800 bg-green-100 p-1 rounded-lg '>Business Globally</span> with <span className='text-green-800 bg-green-100 p-1 rounded-lg '>DIGINTRA’s Messaging</span> &
              </p>  <span className='inline-block min-h-[1em]'>{displayedText}</span>
              
      </div>
  );
};

export default TypingEffect;
