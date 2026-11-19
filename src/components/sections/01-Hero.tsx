"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Zap, Compass, Truck, MapPin, Layers, Radio, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const odometerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const kmNumberRef = useRef<HTMLSpanElement>(null);
  const radarPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !odometerRef.current || !radarPanelRef.current) return;

    const ctx = gsap.context(() => {
      // Pin hero and scrub odometer COMPLETELY to the far left edge
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Move odometer completely from right to the far left margin
      tl.to(
        odometerRef.current,
        {
          x: () => {
            if (!odometerRef.current || !containerRef.current) return -window.innerWidth * 0.7;
            const odoRect = odometerRef.current.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();
            // Exactly travel from current position to the container's left padding (36px)
            return -(odoRect.left - containerRect.left - 36);
          },
          scale: 0.88,
          ease: "power1.inOut",
        },
        0
      );

      // 2. Spin numbers on odometer proxy from 0.0 to 42.8 KM
      const counterProxy = { km: 0 };
      tl.to(
        counterProxy,
        {
          km: 42.8,
          ease: "none",
          onUpdate: () => {
            if (kmNumberRef.current) {
              kmNumberRef.current.textContent = counterProxy.km.toFixed(1);
            }
          },
        },
        0
      );

      // 3. Fade headline gracefully as odometer transitions
      if (textContentRef.current) {
        tl.to(
          textContentRef.current,
          {
            opacity: 0.1,
            y: -25,
            ease: "power1.out",
          },
          0
        );
      }

      // 4. Reveal the Live Dispatch Telemetry Radar on the right side
      tl.fromTo(
        radarPanelRef.current,
        {
          opacity: 0,
          x: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          ease: "power2.out",
        },
        0.08
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen blueprint-grid flex flex-col justify-between pt-24 pb-8 px-4 md:px-12 border-b border-[#D8D2C2] overflow-hidden"
    >
      {/* Top Metadata Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono border-b border-[#D8D2C2]/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="rubber-stamp stamp-green text-[11px] py-0.5 px-2">NETWORK ONLINE</span>
          <span className="text-[#5A5E69]">REGIONAL LOGISTICS DISPATCH REGISTER · NO. 2026-BHT</span>
        </div>
        <div className="flex items-center gap-6 text-[#5A5E69]">
          <span>GEO-ZONE: <strong>13.13° N, 78.13° E (KOLAR REGION)</strong></span>
          <span className="hidden sm:inline">ARCHITECTURE: <strong>HYBRID QUBO-HEURISTIC OPTIMIZATION</strong></span>
        </div>
      </div>

      {/* Main Content Arena */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4 relative">
        {/* Left Column: Headline & Platform Mission */}
        <div ref={textContentRef} className="lg:col-span-7 flex flex-col gap-5 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE6D8] border border-[#D8D2C2] text-xs font-mono text-[#18191B] w-fit">
            <Zap className="w-3.5 h-3.5 text-[#E89228]" />
            <span>Tech4Bharat · Open Rural Freight Intelligence Network</span>
          </div>

          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#18191B] uppercase leading-[1.03] font-sans">
            Turning fragmented <br className="hidden sm:block" />
            <span className="text-[#E89228] underline decoration-[#18191B] decoration-4 underline-offset-4">
              rural freight
            </span>{" "}
            into coordinated supply.
          </h1>

          <p className="text-base sm:text-lg text-[#5A5E69] leading-relaxed max-w-2xl font-sans">
            An open coordination system for farmers, small rural businesses, and vehicle owners. 
            We intelligently combine part-loads, eliminate empty return trips, and calculate fair 
            cost sharing—without requiring anyone to install complicated apps.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <div className="flex items-center gap-3 bg-[#FAF8F2] border-2 border-[#18191B] px-4 py-2.5 rounded-lg shadow-[4px_4px_0px_0px_#18191B]">
              <Truck className="w-5 h-5 text-[#E89228]" />
              <div>
                <p className="text-[11px] font-mono text-[#5A5E69] uppercase">Shipper Freight Savings</p>
                <p className="text-base font-mono font-extrabold text-[#18191B]">25% – 38% / Trip</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#FAF8F2] border-2 border-[#18191B] px-4 py-2.5 rounded-lg shadow-[4px_4px_0px_0px_#18191B]">
              <Compass className="w-5 h-5 text-[#16A34A]" />
              <div>
                <p className="text-[11px] font-mono text-[#5A5E69] uppercase">Deadhead Reduction</p>
                <p className="text-base font-mono font-extrabold text-[#18191B]">40% Fewer Empty KM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Mechanical Odometer that travels completely to the left on scroll */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-20">
          <div
            ref={odometerRef}
            className="w-72 sm:w-80 md:w-96 rounded-2xl bg-[#18191B] text-[#F6F3EA] p-6 shadow-2xl border-4 border-[#25272B] relative flex flex-col justify-between"
          >
            {/* Odometer Header */}
            <div className="flex items-center justify-between border-b border-[#3A3D44] pb-3 text-xs font-mono">
              <span className="text-[#A6ABBA] uppercase tracking-wider flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-[#16A34A] animate-pulse" />
                CORRIDOR ODOGRAPH
              </span>
              <span className="rubber-stamp stamp-amber text-[10px] py-0.5 px-2">LIVE GPS TELEMETRY</span>
            </div>

            {/* Central Mechanical Roller Counter */}
            <div className="py-6 my-auto text-center">
              <div className="inline-block bg-[#111214] border-2 border-[#3A3D44] rounded-lg px-6 py-4 shadow-inner">
                <div className="flex items-baseline justify-center gap-2">
                  <span
                    ref={kmNumberRef}
                    className="text-5xl sm:text-6xl font-mono font-black text-[#E89228] tracking-widest tabular-nums"
                  >
                    00.0
                  </span>
                  <span className="text-xl font-mono text-[#A6ABBA] font-bold">KM</span>
                </div>
              </div>
              <p className="text-xs font-mono text-[#A6ABBA] mt-3">
                NH-75: SRINIVASPUR ➔ HOSKOTE ➔ KR MARKET
              </p>
            </div>

            {/* Odometer Mechanical Gauge Foot */}
            <div className="pt-4 border-t border-[#3A3D44] flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-[#808593] block text-[10px]">VEHICLE CAPACITY</span>
                <span className="text-[#F6F3EA] font-semibold">TATA 407 (5.0 T)</span>
              </div>
              <div className="text-right">
                <span className="text-[#808593] block text-[10px]">PAYLOAD STATUS</span>
                <span className="text-[#16A34A] font-semibold flex items-center gap-1 justify-end">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] inline-block animate-pulse" /> POOLED (3.8T)
                </span>
              </div>
            </div>

            {/* Brass Milestone Stamp Badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#E89228] text-[#18191B] border-2 border-[#18191B] px-3 py-1 rounded font-mono text-xs font-black shadow-[3px_3px_0px_0px_#18191B]">
              MILESTONE 01
            </div>
          </div>
        </div>

        {/* Revealed Right Panel: Regional Dispatch Radar (Fills the entire right half when odometer moves to the far left!) */}
        <div
          ref={radarPanelRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[48%] bg-[#FAF8F2] border-2 border-[#18191B] rounded-2xl p-6 shadow-[8px_8px_0px_0px_#18191B] z-15 pointer-events-none opacity-0 flex flex-col gap-4 font-mono text-xs"
        >
          <div className="flex items-center justify-between border-b border-[#D8D2C2] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-ping" />
              <span className="font-bold text-[#18191B] uppercase">LIVE REGIONAL CORRIDOR RADAR</span>
            </div>
            <span className="rubber-stamp stamp-green text-[10px]">OPTIMIZATION ACTIVE</span>
          </div>

          <div className="space-y-3">
            <div className="bg-[#EBE6D8] p-3 rounded-lg flex items-center justify-between">
              <span className="text-[#5A5E69]">ACTIVE POOLED BUNDLE:</span>
              <span className="font-bold text-[#18191B]">3 Consignments · 3.8 Tonnes</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#F6F3EA] border border-[#D8D2C2] p-2 rounded">
                <span className="text-[10px] text-[#5A5E69] block">SOLO COST</span>
                <span className="line-through text-[#DC2626] font-bold">₹5,700</span>
              </div>
              <div className="bg-[#F6F3EA] border border-[#D8D2C2] p-2 rounded">
                <span className="text-[10px] text-[#5A5E69] block">POOLED COST</span>
                <span className="text-[#16A34A] font-extrabold">₹3,600</span>
              </div>
              <div className="bg-[#F6F3EA] border border-[#D8D2C2] p-2 rounded">
                <span className="text-[10px] text-[#5A5E69] block">NET SAVED</span>
                <span className="text-[#E89228] font-extrabold">₹2,100</span>
              </div>
            </div>

            <div className="border border-[#D8D2C2] rounded-lg p-3 bg-[#FAF8F2] space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2 text-[#18191B]">
                <MapPin className="w-3.5 h-3.5 text-[#E89228]" />
                <span>KM 08: Ramesh (2.0T Tomatoes)</span>
              </div>
              <div className="flex items-center gap-2 text-[#18191B]">
                <MapPin className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>KM 19: Suresh (1.0T Cabbages)</span>
              </div>
              <div className="flex items-center gap-2 text-[#18191B]">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>KM 44: Ram (0.8T Supplies)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt Bar */}
      <div className="flex items-center justify-between pt-4 border-t border-[#D8D2C2] text-xs font-mono text-[#5A5E69]">
        <div className="flex items-center gap-2">
          <ArrowDown className="w-4 h-4 text-[#E89228] animate-bounce" />
          <span>SCROLL TO FOLLOW FREIGHT FLOW ALONG NH-75</span>
        </div>
        <div className="hidden sm:block">
          <span>COORDINATION DISPATCH CONSOLE // VERSION 2.6</span>
        </div>
      </div>
    </section>
  );
}
