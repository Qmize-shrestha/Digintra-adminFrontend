// src/TypingEffect.js
import React, { useState, useEffect } from 'react';

const Blogtypingeffect = ({ messages, speed = 100 }) => {
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
    <span style={{ display: 'inline', fontFamily: "'poppins', 'sans-serif'" }} >
     <p className="md:text-5xl text-xl text-center md:leading-[80px] font-mono md:-ml-[150px] " style={{fontFamily:"'Montserrat','sans-serif'"}}>
     Faster Messaging 
            </p> {displayedText}
    </span>
  );
};

export default Blogtypingeffect;
