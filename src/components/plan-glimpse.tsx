"use client";

import { useState } from "react";

const stops = [
  { id: "quoz", area: "Al Quoz", kind: "Supply facility", x: 132, y: 196, lx: 118, ly: 178, anchor: "end" },
  { id: "karama", area: "Karama", kind: "Retail destination", x: 196, y: 150, lx: 196, ly: 132, anchor: "middle" },
  { id: "deira", area: "Deira", kind: "Retail destination", x: 268, y: 118, lx: 268, ly: 98, anchor: "middle" },
  { id: "burdubai", area: "Bur Dubai", kind: "Retail destination", x: 312, y: 176, lx: 330, ly: 172, anchor: "start" },
  { id: "jumeirah", area: "Jumeirah", kind: "Retail destination", x: 286, y: 246, lx: 304, ly: 242, anchor: "start" },
  { id: "barsha", area: "Al Barsha", kind: "Retail destination", x: 214, y: 292, lx: 214, ly: 276, anchor: "middle" },
  { id: "marina", area: "Dubai Marina", kind: "Retail destination", x: 140, y: 318, lx: 122, ly: 348, anchor: "middle" },
] as const;

const route =
  "M132 196 L196 150 L268 118 L312 176 L286 246 L214 292 L140 318";

export function PlanGlimpse() {
  const [active, setActive] = useState<string>(stops[0].id);
  const selected = stops.find((stop) => stop.id === active) ?? stops[0];

  return (
    <div className="overflow-hidden rounded-xl border border-[#e6e8ec] bg-white text-[#1c2430] shadow-[0_24px_60px_rgba(16,20,24,0.12)]">
      <div className="flex items-center justify-between gap-4 border-b border-[#eceff3] px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center bg-[#12171c] font-serif text-sm font-semibold text-[#e85d04]">
            N
          </span>
          <div>
            <p className="text-sm font-semibold">Distribution plan</p>
            <p className="text-xs text-[#6b7582]">Dubai · supply facility to retailers</p>
          </div>
        </div>
        <p className="hidden font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[#e85d04] sm:block">
          Illustrative
        </p>
      </div>

      <div className="grid lg:grid-cols-[220px_minmax(0,1fr)_minmax(280px,0.9fr)]">
        <aside className="hidden border-r border-[#eceff3] bg-[#f7f8fa] p-3 lg:block">
          <p className="px-2 pb-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#8b95a1]">
            Plan
          </p>
          {["Sequence", "Stops", "Route"].map((item, index) => (
            <p
              key={item}
              className={`rounded-md px-2 py-2 text-sm ${
                index === 0 ? "bg-white font-medium text-[#12171c] shadow-sm" : "text-[#5d6874]"
              }`}
            >
              {item}
            </p>
          ))}
        </aside>

        <div className="border-b border-[#eceff3] lg:border-b-0 lg:border-r">
          <div className="flex items-end justify-between px-4 py-3">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#8b95a1]">
                Sequence
              </p>
              <p className="text-sm font-medium">{stops.length} destinations</p>
            </div>
            <p className="text-xs text-[#6b7582]">{selected.area}</p>
          </div>
          <ol>
            {stops.map((stop, index) => {
              const isActive = stop.id === active;
              return (
                <li key={stop.id}>
                  <button
                    type="button"
                    onClick={() => setActive(stop.id)}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left ${
                      isActive ? "bg-[#fff4ec]" : "hover:bg-[#f7f8fa]"
                    }`}
                  >
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-semibold ${
                        index === 0
                          ? "bg-[#12171c] text-white"
                          : isActive
                            ? "bg-[#e85d04] text-white"
                            : "bg-[#eef1f4] text-[#12171c]"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-medium">{stop.area}</span>
                      <span className="block text-xs text-[#6b7582]">{stop.kind}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="bg-[#f3f6f8] p-3">
          <svg viewBox="0 0 420 420" role="img" aria-label="Illustrative Dubai delivery sequence" className="h-auto w-full">
            <rect width="420" height="420" rx="12" fill="#e7eef2" />
            <path
              d="M40 40 H250 C300 70 340 120 360 190 C380 270 340 340 250 370 H70 C40 330 30 250 48 180 C60 120 40 70 40 40 Z"
              fill="#f7fbf8"
              stroke="#d5e0e6"
            />
            <path
              d="M0 0 H150 C190 80 170 160 120 220 C80 270 40 300 0 340 Z"
              fill="#d5e6ee"
            />
            <path
              d={route}
              fill="none"
              stroke="#e85d04"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {stops.map((stop, index) => {
              const isActive = stop.id === active;
              return (
                <g key={stop.id} onClick={() => setActive(stop.id)} className="cursor-pointer">
                  <circle
                    cx={stop.x}
                    cy={stop.y}
                    r={isActive ? 16 : 12}
                    fill={index === 0 ? "#12171c" : isActive ? "#e85d04" : "#ffffff"}
                    stroke={index === 0 ? "#12171c" : "#e85d04"}
                    strokeWidth="2"
                  />
                  <text
                    x={stop.x}
                    y={stop.y + 4}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill={index === 0 || isActive ? "#ffffff" : "#12171c"}
                  >
                    {index + 1}
                  </text>
                  <text
                    x={stop.lx}
                    y={stop.ly}
                    textAnchor={stop.anchor}
                    fontSize="11"
                    fill="#31404c"
                  >
                    {stop.area}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
