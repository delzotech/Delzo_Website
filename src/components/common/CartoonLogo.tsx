import React from "react";

export function CartoonLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="hardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="4" stdDeviation="0" floodColor="#000" floodOpacity="1" />
        </filter>
        <style>
          {`
            .text-main {
              font-family: 'Arial Black', Impact, sans-serif;
              font-size: 52px;
              font-weight: 900;
              text-transform: uppercase;
              paint-order: stroke fill;
              stroke: #000;
              stroke-width: 10px;
              stroke-linejoin: round;
              stroke-linecap: round;
              letter-spacing: -2px;
            }
            .sparkle {
              fill: #FFF;
              stroke: #000;
              stroke-width: 3px;
              stroke-linejoin: round;
            }
            .accent {
              fill: #FFFF00;
              stroke: #000;
              stroke-width: 4px;
              stroke-linejoin: round;
            }
          `}
        </style>
      </defs>

      <g filter="url(#hardShadow)" transform="translate(10, 0)">
        {/* Decorative Pill/Bubble Background */}
        <path d="M -5 18 C 30 0, 180 0, 205 18 C 230 40, 210 70, 180 75 C 130 80, 20 80, -5 65 C -20 50, -20 25, -5 18 Z" className="accent" />
        
        {/* Main Text */}
        <text x="10" y="58" className="text-main" style={{ fill: "#FFFF00", transform: "rotate(-2deg)", transformOrigin: "center" }}>
          Delzo
        </text>

        {/* Sparkles */}
        <path d="M 185 10 L 190 20 L 205 22 L 192 28 L 195 40 L 185 32 L 175 40 L 178 28 L 165 22 L 180 20 Z" className="sparkle" />
        <path d="M 10 10 L 13 16 L 20 18 L 15 22 L 17 30 L 10 24 L 3 30 L 5 22 L 0 18 L 7 16 Z" className="sparkle" transform="scale(0.6) translate(-20, -10)" />
      </g>
    </svg>
  );
}
