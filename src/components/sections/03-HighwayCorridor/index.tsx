"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CORRIDOR_DATA } from "@/lib/constants";
import { Truck, MapPin, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HighwayCorridorSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [loadTonnes, setLoadTonnes] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const getScrollDistance = () => {
        if (!trackRef.current) return 0;
        return trackRef.current.scrollWidth - window.innerWidth;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${getScrollDistance() + 800}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.22) {
              setLoadTonnes(0);
            } else if (p < 0.46) {
              setLoadTonnes(2.0);
            } else if (p < 0.70) {
              setLoadTonnes(3.0);
            } else {
              setLoadTonnes(3.8);
            }
          },
        },
      });

      tl.to(trackRef.current, {
        x: () => -getScrollDistance(),
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const { shipments } = CORRIDOR_DATA;

  return (
    <section
      id="highway-corridor"
      ref={containerRef}
      className="relative w-full h-screen bg-[#111214] text-[#F6F3EA] overflow-hidden select-none border-b border-[#25272B]"
    >
      {/* Top Telemetry Header - Compact to preserve vertical space */}
      <div className="absolute top-14 left-4 right-4 sm:left-8 sm:right-8 z-30 flex flex-wrap items-center justify-between border border-[#2B2E36] text-[11px] font-mono bg-[#111214]/95 backdrop-blur-md px-4 py-1.5 rounded-lg shadow-md">
        <div className="flex items-center gap-2.5">
          <span className="rubber-stamp stamp-amber text-[9px] py-0.5 px-1.5">NH-75 CORRIDOR</span>
          <span className="text-[#A6ABBA] hidden md:inline">
            SRINIVASPUR ➔ HOSKOTE ➔ KR MARKET (68.4 KM)
          </span>
        </div>

        {/* Live Truck Capacity Gauge */}
        <div className="flex items-center gap-3 bg-[#18191B] border border-[#3A3D44] px-3 py-1 rounded-md">
          <div className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-[#E89228]" />
            <span className="text-[#808593] text-[10px]">PAYLOAD:</span>
            <strong className="text-[#E89228] text-xs tabular-nums">{loadTonnes.toFixed(1)} / 5.0 T</strong>
          </div>
          <div className="w-20 sm:w-24 h-2 bg-[#25272B] rounded-full overflow-hidden border border-[#3A3D44]">
            <div
              className="h-full bg-gradient-to-r from-[#E89228] to-[#16A34A] transition-all duration-300"
              style={{ width: `${(loadTonnes / 5.0) * 100}%` }}
            />
          </div>
          <span className={`text-[10px] font-bold ${loadTonnes >= 3.8 ? "text-[#16A34A]" : "text-[#A6ABBA]"}`}>
            {loadTonnes >= 3.8 ? "76% OPTIMAL" : `${Math.round((loadTonnes / 5.0) * 100)}%`}
          </span>
        </div>
      </div>

      {/* Horizontal World Track (5600px wide for clear travel perception) */}
      <div
        ref={trackRef}
        className="relative h-full flex items-center will-change-transform"
        style={{ width: "5600px" }}
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid" />

        {/* COMPACT & PROPORTIONAL HIGHWAY (Height: 112px = h-28) */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-28 bg-[#18191B] border-y-2 border-[#3A3D44] flex flex-col justify-between z-10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          {/* Top Shoulder */}
          <div className="w-full h-1.5 bg-[#25272B] border-b border-[#3A3D44]" />

          {/* Upper Lane: Traveling Truck */}
          <div className="relative flex-1 flex items-center px-4">
            <div
              className="absolute z-25 flex items-center gap-2 transition-all duration-700 ease-out"
              style={{
                left:
                  loadTonnes === 0
                    ? "240px"
                    : loadTonnes === 2.0
                    ? "1450px"
                    : loadTonnes === 3.0
                    ? "2700px"
                    : "3950px",
              }}
            >
              <div className="bg-[#1F2126] border-2 border-[#E89228] rounded-lg px-3 py-1 shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping" />
                <span className="text-[10px] font-mono font-bold text-[#F6F3EA]">
                  TATA 407: {loadTonnes === 0 ? "EMPTY" : `${loadTonnes.toFixed(1)}T LOADED`}
                </span>
                <div className="w-6 h-3 bg-gradient-to-r from-[#E89228]/50 to-transparent rounded-r-full" />
              </div>
            </div>
          </div>

          {/* Highway Divider with Amber Dash Line */}
          <div className="w-full h-2 bg-[#111214] flex items-center justify-center border-y border-[#2B2E36]">
            <div className="w-full h-0.5 border-t border-dashed border-[#E89228]" />
          </div>

          {/* Lower Lane */}
          <div className="relative flex-1 flex items-center px-4">
            <span className="text-[9px] font-mono text-[#5A5E69] tracking-wider uppercase">
              NH-75 EASTBOUND // MANDI TRUCK CORRIDOR
            </span>
          </div>

          {/* Bottom Shoulder */}
          <div className="w-full h-1.5 bg-[#25272B] border-t border-[#3A3D44]" />

          {/* Road Milestones */}
          <div className="absolute left-12 -top-6 text-[10px] font-mono text-[#808593] bg-[#111214] px-2 py-0.5 rounded border border-[#2B2E36]">
            KM 00 // ORIGIN
          </div>
          <div className="absolute left-[1350px] -top-6 text-[10px] font-mono text-[#808593] bg-[#111214] px-2 py-0.5 rounded border border-[#2B2E36]">
            KM 08.2 // SRINIVASPUR
          </div>
          <div className="absolute left-[2600px] -top-6 text-[10px] font-mono text-[#808593] bg-[#111214] px-2 py-0.5 rounded border border-[#2B2E36]">
            KM 19.4 // MULBAGAL
          </div>
          <div className="absolute left-[3850px] -top-6 text-[10px] font-mono text-[#808593] bg-[#111214] px-2 py-0.5 rounded border border-[#2B2E36]">
            KM 44.1 // HOSKOTE
          </div>
          <div className="absolute left-[4750px] -top-6 text-[10px] font-mono text-[#808593] bg-[#111214] px-2 py-0.5 rounded border border-[#2B2E36]">
            KM 68.4 // KR MARKET
          </div>
        </div>

        {/* 1. ORIGIN DEPOT: Srinivaspur (Positioned Above Road with Strict Clearance) */}
        <div
          style={{ bottom: "calc(50% + 68px)" }}
          className="absolute left-12 z-20 w-80 bg-[#1F2126] border-2 border-[#3A3D44] p-4 rounded-xl shadow-xl text-xs font-mono"
        >
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#3A3D44] text-[#808593]">
            <span className="text-[#E89228] font-bold">DEPOT ORIGIN</span>
            <span className="rubber-stamp stamp-amber text-[9px] py-0 px-1">KM 00.0</span>
          </div>
          <h4 className="text-base font-bold font-sans uppercase text-[#F6F3EA]">
            Srinivaspur Transit Point
          </h4>
          <p className="text-[11px] text-[#A6ABBA] mt-1 font-sans leading-snug">
            Vehicle: <strong>KA-07-E-4819 (Tata 407)</strong>. Departs empty.
            Solo booking rate would cost ₹2,400 to first farmer.
          </p>
          <div className="mt-2.5 bg-[#111214] px-2.5 py-1 rounded text-[10px] text-[#E89228] flex justify-between border border-[#3A3D44]">
            <span>STATUS: DISPATCHED</span>
            <span>04:30 AM IST</span>
          </div>
          {/* Connector to Road */}
          <div className="absolute left-1/2 -bottom-3 w-0.5 bg-[#E89228] -translate-x-1/2 h-3" />
        </div>

        {/* 2. STOP 1 (ABOVE ROAD): Anjanappa (Tomatoes) - Compact & Clean Clearance */}
        <div
          style={{ bottom: "calc(50% + 68px)" }}
          className="absolute left-[1300px] z-20 w-84 sm:w-88 bg-[#FAF8F2] text-[#18191B] border-2 border-[#18191B] p-4 rounded-xl shadow-[4px_4px_0px_0px_#E89228]"
        >
          <div className="flex items-center justify-between text-[11px] font-mono pb-1 border-b border-[#D8D2C2]">
            <span className="text-[#E89228] font-black">PICKUP 01 // LOAD ADDED</span>
            <span className="rubber-stamp stamp-amber text-[9px] py-0 px-1">KM 08.2</span>
          </div>
          <div className="mt-2">
            <h4 className="text-base font-extrabold uppercase font-sans text-[#18191B]">
              {shipments[0].shipper}
            </h4>
            <p className="text-[11px] font-mono text-[#5A5E69]">{shipments[0].role}</p>

            <div className="mt-2 bg-[#EBE6D8] p-2.5 rounded-lg text-[11px] font-mono space-y-1">
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">COMMODITY:</span>
                <span className="font-bold text-[#18191B]">85 Crates Tomatoes (2.0T)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">SOLO RATE:</span>
                <span className="line-through text-[#DC2626]">₹2,400</span>
              </div>
              <div className="flex justify-between font-bold text-[#16A34A] border-t border-[#D8D2C2] pt-0.5">
                <span>POOLED SHARE:</span>
                <span>₹1,895 (Save ₹505 · 21%)</span>
              </div>
            </div>
          </div>
          {/* Connector to Road */}
          <div className="absolute left-1/2 -bottom-3 w-0.5 bg-[#E89228] -translate-x-1/2 h-3" />
        </div>

        {/* 3. STOP 2 (BELOW ROAD): Gowramma Cooperative - Positioned with Strict Clearance */}
        <div
          style={{ top: "calc(50% + 68px)" }}
          className="absolute left-[2500px] z-20 w-84 sm:w-88 bg-[#FAF8F2] text-[#18191B] border-2 border-[#18191B] p-4 rounded-xl shadow-[4px_4px_0px_0px_#16A34A]"
        >
          {/* Connector up to Road */}
          <div className="absolute left-1/2 -top-3 w-0.5 bg-[#16A34A] -translate-x-1/2 h-3" />

          <div className="flex items-center justify-between text-[11px] font-mono pb-1 border-b border-[#D8D2C2]">
            <span className="text-[#16A34A] font-black">PICKUP 02 // LOAD ADDED</span>
            <span className="rubber-stamp stamp-green text-[9px] py-0 px-1">KM 19.4</span>
          </div>
          <div className="mt-2">
            <h4 className="text-base font-extrabold uppercase font-sans text-[#18191B]">
              {shipments[1].shipper}
            </h4>
            <p className="text-[11px] font-mono text-[#5A5E69]">{shipments[1].role}</p>

            <div className="mt-2 bg-[#EBE6D8] p-2.5 rounded-lg text-[11px] font-mono space-y-1">
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">COMMODITY:</span>
                <span className="font-bold text-[#18191B]">40 Bags Cabbage &amp; Beans (1.0T)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">SOLO RATE:</span>
                <span className="line-through text-[#DC2626]">₹1,800</span>
              </div>
              <div className="flex justify-between font-bold text-[#16A34A] border-t border-[#D8D2C2] pt-0.5">
                <span>POOLED SHARE:</span>
                <span>₹947 (Save ₹853 · 47%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. STOP 3 (ABOVE ROAD): Prashanth Agro Supplies - Clean Clearance */}
        <div
          style={{ bottom: "calc(50% + 68px)" }}
          className="absolute left-[3700px] z-20 w-84 sm:w-88 bg-[#FAF8F2] text-[#18191B] border-2 border-[#18191B] p-4 rounded-xl shadow-[4px_4px_0px_0px_#2563EB]"
        >
          <div className="flex items-center justify-between text-[11px] font-mono pb-1 border-b border-[#D8D2C2]">
            <span className="text-[#2563EB] font-black">PICKUP 03 // LOAD ADDED</span>
            <span className="rubber-stamp stamp-amber text-[9px] py-0 px-1">KM 44.1</span>
          </div>
          <div className="mt-2">
            <h4 className="text-base font-extrabold uppercase font-sans text-[#18191B]">
              {shipments[2].shipper}
            </h4>
            <p className="text-[11px] font-mono text-[#5A5E69]">{shipments[2].role}</p>

            <div className="mt-2 bg-[#EBE6D8] p-2.5 rounded-lg text-[11px] font-mono space-y-1">
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">COMMODITY:</span>
                <span className="font-bold text-[#18191B]">18 Cartons Seeds &amp; Sprayers (0.8T)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">SOLO RATE:</span>
                <span className="line-through text-[#DC2626]">₹1,500</span>
              </div>
              <div className="flex justify-between font-bold text-[#16A34A] border-t border-[#D8D2C2] pt-0.5">
                <span>POOLED SHARE:</span>
                <span>₹758 (Save ₹742 · 49%)</span>
              </div>
            </div>
          </div>
          {/* Connector to Road */}
          <div className="absolute left-1/2 -bottom-3 w-0.5 bg-[#2563EB] -translate-x-1/2 h-3" />
        </div>

        {/* 5. DESTINATION TERMINAL: KR Market Yard (Centered at End of Road) */}
        <div
          className="absolute left-[4700px] top-1/2 -translate-y-1/2 z-20 w-96 sm:w-[440px] bg-[#1F2126] border-2 border-[#16A34A] p-5 rounded-2xl shadow-2xl"
        >
          <div className="flex items-center justify-between text-xs font-mono mb-2 pb-1.5 border-b border-[#3A3D44]">
            <span className="text-[#16A34A] font-extrabold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
              TERMINAL ARRIVAL &amp; WEIGHBRIDGE
            </span>
            <span className="rubber-stamp stamp-green text-[9px] py-0 px-1">KM 68.4</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black font-sans uppercase text-[#F6F3EA] leading-tight">
            KR Market Wholesale Yard
          </h3>
          <p className="text-[11px] text-[#A6ABBA] mt-1 font-sans leading-snug">
            Delivered at 07:15 AM. Total Payload: <strong className="text-[#F6F3EA]">3.8 Tonnes (76% Capacity)</strong> across all 3 shippers.
          </p>

          <div className="mt-3 bg-[#111214] border border-[#3A3D44] p-3 rounded-lg space-y-1 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-[#808593]">SOLO 3 TRIPS:</span>
              <span className="line-through text-[#DC2626]">₹5,700</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#808593]">POOLED 1 RUN:</span>
              <span className="text-[#F6F3EA] font-bold">₹3,600</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-[#3A3D44] text-[#16A34A] font-extrabold">
              <span>NET SAVINGS:</span>
              <span>₹2,100 (37% SAVED)</span>
            </div>
          </div>
        </div>

        {/* Generous Breathing Room at Far Right */}
        <div className="absolute left-[5300px] w-48 h-10" />
      </div>

      {/* Bottom Route Indicator Bar - Compact to preserve vertical room */}
      <div className="absolute bottom-2 left-4 right-4 sm:left-8 sm:right-8 z-30 flex items-center justify-between text-[10px] font-mono text-[#808593] border-t border-[#2B2E36] pt-1.5 bg-[#111214]/90 backdrop-blur-sm px-4 rounded-md">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E89228] inline-block animate-ping" />
          <span>NH-75 CORRIDOR: SRINIVASPUR ➔ MULBAGAL ➔ HOSKOTE ➔ KR MARKET</span>
        </div>
        <div className="hidden sm:block">
          <span>SCROLL DOWN TO INSPECT TWO-STAGE ENGINE ➔</span>
        </div>
      </div>
    </section>
  );
}
