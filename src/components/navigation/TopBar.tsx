"use client";

import React, { useState } from "react";
import { Mic, Shield, ArrowUpRight, Truck, Activity } from "lucide-react";

export default function TopBar() {
  const [lang, setLang] = useState<"EN" | "KN" | "HI">("EN");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F6F3EA]/95 backdrop-blur-md border-b border-[#D8D2C2] px-4 md:px-8 py-2.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono">
        {/* Left: Branding & Tag with consistent height */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 h-8 px-2.5 rounded-lg bg-[#FAF8F2] border border-[#D8D2C2]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
            <span className="font-extrabold tracking-wider text-[#18191B] text-sm font-sans">
              FREIGHTGRID
            </span>
          </div>
          <span className="hidden sm:inline-block text-[#808593]">/</span>
          <div className="hidden lg:flex items-center gap-1.5 h-8 px-3 rounded-lg bg-[#FAF8F2] border border-[#D8D2C2] text-[#5A5E69]">
            <Shield className="w-3.5 h-3.5 text-[#16A34A]" />
            <span className="uppercase tracking-wider">Rural Logistics Intelligence</span>
          </div>
        </div>

        {/* Center: Active Corridor Selector with uniform height and radius */}
        <div className="hidden md:flex items-center gap-2 h-8 px-3.5 rounded-lg bg-[#FAF8F2] border border-[#D8D2C2] text-[#5A5E69]">
          <Truck className="w-3.5 h-3.5 text-[#E89228]" />
          <span>CORRIDOR:</span>
          <strong className="text-[#18191B]">NH-75 (KOLAR ↔ BENGALURU)</strong>
          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] ml-1" />
        </div>

        {/* Right: Language Switcher & Actions - All Uniform H-8 & Rounded-lg */}
        <div className="flex items-center gap-2.5">
          {/* Multilingual Selector */}
          <div className="flex items-center h-8 bg-[#FAF8F2] border border-[#D8D2C2] rounded-lg p-0.5">
            {(["EN", "KN", "HI"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`h-7 px-2.5 rounded-md text-[11px] font-bold transition-all ${
                  lang === l
                    ? "bg-[#18191B] text-[#F6F3EA] shadow-xs"
                    : "text-[#5A5E69] hover:text-[#18191B]"
                }`}
              >
                {l === "EN" ? "EN" : l === "KN" ? "ಕನ್ನಡ" : "हिंदी"}
              </button>
            ))}
          </div>

          {/* Interactive Playground Link */}
          <a
            href="#route-playground"
            className="hidden sm:inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-[#FAF8F2] border border-[#D8D2C2] text-[#18191B] hover:bg-[#EBE6D8] transition-colors font-medium text-xs font-sans"
          >
            <Activity className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Interactive Lab</span>
          </a>

          {/* Voice Dispatch Link */}
          <a
            href="#voice-assistant"
            className="hidden sm:inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-[#FAF8F2] border border-[#D8D2C2] text-[#18191B] hover:bg-[#EBE6D8] transition-colors font-medium text-xs font-sans"
          >
            <Mic className="w-3.5 h-3.5 text-[#E89228]" />
            <span>Voice Dispatch</span>
          </a>

          {/* Highway Link */}
          <a
            href="#highway-corridor"
            className="inline-flex items-center gap-1.5 h-8 px-3.5 rounded-lg bg-[#18191B] text-[#F6F3EA] hover:bg-[#E89228] hover:text-[#18191B] transition-colors font-semibold text-xs font-sans tracking-wide shadow-sm"
          >
            <span>Live Corridor</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
