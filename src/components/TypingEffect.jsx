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
    <div
  className="relative mx-auto flex max-w-4xl flex-col items-center justify-center gap-2 text-center"
  style={{ fontFamily: "'Poppins', 'sans-serif'" }}
>
  {/* Soft glow behind the headline for extra pop */}
  <div className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-40 w-[90%] -translate-x-1/2 rounded-full bg-emerald-300/25 blur-[80px]" />

  <p className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-[3.25rem] lg:leading-[1.15]">
    <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
      Grow Your
    </span>{" "}
    <span className="relative inline-block px-1 text-slate-900">
      Business Globally
      {/* <span className="absolute inset-x-0 -bottom-1 h-3 -rotate-1 rounded-full bg-emerald-200/60 -z-10" /> */}
    </span>{" "}
    <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text px-1 text-transparent">
      with
    </span>{" "}
    <span className="px-1 text-slate-900">
      DIGINTRA’s Bulk SMS Solutions
    </span>
    {/* <span className="text-emerald-600 px-2">&</span> */}
  </p>

  <span className="relative mt-1 inline-flex min-h-[1.4em] items-center text-xl font-bold text-emerald-700 sm:text-2xl md:text-3xl lg:text-[2.25rem]">
    {displayedText}
    <span
      aria-hidden="true"
      className="ml-1 inline-block h-[0.85em] w-[3px] animate-pulse rounded-full bg-emerald-600 align-middle"
    />
  </span>
</div>
  );
};

export default TypingEffect;
