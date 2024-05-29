import React from "react";

export const SwitchNeonBaseSvg = () => {
  return (
    <svg className="switch__base-neon" viewBox="0 0 40 24" width="40px" height="24px">
      <defs>
        <filter id="switch-glow">
          <feGaussianBlur result="coloredBlur" stdDeviation="1"></feGaussianBlur>
          <feMerge>
            <feMergeNode in="coloredBlur"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <linearGradient id="switch-gradient1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(var(--on-hue1),90%,70%)"/>
          <stop offset="100%" stopColor="hsl(var(--on-hue2),90%,70%)"/>
        </linearGradient>
        <linearGradient id="switch-gradient2" x1="0.7" y1="0" x2="0.3" y2="1">
          <stop offset="25%" stopColor="hsla(var(--on-hue1),90%,70%,0)"/>
          <stop offset="50%" stopColor="hsla(var(--on-hue1),90%,70%,0.3)"/>
          <stop offset="100%" stopColor="hsla(var(--on-hue2),90%,70%,0.3)"/>
        </linearGradient>
      </defs>
      <path fill="none" filter="url(#switch-glow)" stroke="url(#switch-gradient1)" strokeWidth="1"
            strokeDasharray="0 104.26 0" strokeDashoffset="0.01" strokeLinecap="round"
            d="m.5,12C.5,5.649,5.649.5,12,.5h16c6.351,0,11.5,5.149,11.5,11.5s-5.149,11.5-11.5,11.5H12C5.649,23.5.5,18.351.5,12Z"/>
    </svg>
  )
}
