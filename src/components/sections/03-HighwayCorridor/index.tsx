"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CORRIDOR_DATA } from "@/lib/constants";
import { Truck, CheckCircle2 } from "lucide-react";

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
      {/* Top Telemetry Header - Slim docked header, max-h 32px to guarantee ample vertical breathing space */}
      <div className="absolute top-12 sm:top-14 left-4 right-4 sm:left-8 sm:right-8 z-30 flex items-center justify-between border border-[#2B2E36] text-[11px] font-mono bg-[#111214]/95 backdrop-blur-md px-3.5 py-1 rounded-lg shadow-md">
        <div className="flex items-center gap-2.5">
          <span className="rubber-stamp stamp-amber text-[9px] py-0.5 px-1.5 font-bold">NH-75 CORRIDOR</span>
          <span className="text-[#A6ABBA] hidden md:inline text-[10px]">
            SRINIVASPUR ➔ MULBAGAL ➔ HOSKOTE ➔ KR MARKET (68.4 KM)
          </span>
        </div>

        {/* Live Truck Capacity Gauge */}
        <div className="flex items-center gap-2.5 bg-[#18191B] border border-[#3A3D44] px-2.5 py-0.5 rounded-md">
          <div className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-[#E89228]" />
            <span className="text-[#808593] text-[9px]">PAYLOAD:</span>
            <strong className="text-[#E89228] text-xs tabular-nums">{loadTonnes.toFixed(1)} / 5.0 T</strong>
          </div>
          <div className="w-16 sm:w-24 h-1.5 bg-[#25272B] rounded-full overflow-hidden border border-[#3A3D44]">
            <div
              className="h-full bg-gradient-to-r from-[#E89228] to-[#16A34A] transition-all duration-300"
              style={{ width: `${(loadTonnes / 5.0) * 100}%` }}
            />
          </div>
          <span className={`text-[9px] font-bold ${loadTonnes >= 3.8 ? "text-[#16A34A]" : "text-[#A6ABBA]"}`}>
            {loadTonnes >= 3.8 ? "76% OPTIMAL" : `${Math.round((loadTonnes / 5.0) * 100)}%`}
          </span>
        </div>
      </div>

      {/* Horizontal World Track: Total Width 4450px */}
      <div
        ref={trackRef}
        className="relative h-full flex items-center will-change-transform"
        style={{ width: "4450px" }}
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid" />

        {/* HIGHWAY CORRIDOR ROADWAY: Height 80px (h-20), centered vertically at 50% */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-20 bg-[#18191B] border-y-2 border-[#3A3D44] flex flex-col justify-between z-10 shadow-[0_0_40px_rgba(0,0,0,0.85)]">
          {/* Top Shoulder Curb */}
          <div className="w-full h-1 bg-[#25272B] border-b border-[#3A3D44]" />

          {/* Upper Driving Lane with Traveling Truck */}
          <div className="relative flex-1 flex items-center px-4">
            <div
              className="absolute z-25 flex items-center transition-all duration-500 ease-out"
              style={{
                left:
                  loadTonnes === 0
                    ? "130px"
                    : loadTonnes === 2.0
                    ? "1020px"
                    : loadTonnes === 3.0
                    ? "1920px"
                    : "2820px",
              }}
            >
              <div className="bg-[#1F2126] border-2 border-[#E89228] rounded-md px-2.5 py-0.5 shadow-xl flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-ping" />
                <span className="text-[10px] font-mono font-bold text-[#F6F3EA]">
                  TATA 407 (KA-07-E-4819) • {loadTonnes === 0 ? "EMPTY DISPATCH" : `${loadTonnes.toFixed(1)}T / 5.0T (${Math.round((loadTonnes / 5.0) * 100)}%)`}
                </span>
              </div>
            </div>
          </div>

          {/* Highway Divider with Amber Dash Line */}
          <div className="w-full h-1.5 bg-[#111214] flex items-center justify-center border-y border-[#2B2E36]">
            <div className="w-full h-0.5 border-t border-dashed border-[#E89228]" />
          </div>

          {/* Lower Driving Lane */}
          <div className="relative flex-1 flex items-center px-4">
            <span className="text-[9px] font-mono text-[#5A5E69] tracking-wider uppercase">
              NH-75 EASTBOUND // REGIONAL FREIGHT HOTSPOT INVENTORY
            </span>
          </div>

          {/* Bottom Shoulder Curb */}
          <div className="w-full h-1 bg-[#25272B] border-t border-[#3A3D44]" />

          {/* Road Milestones */}
          <div className="absolute left-16 -top-5 text-[9px] font-mono text-[#808593] bg-[#111214] px-1.5 py-0.5 rounded border border-[#2B2E36]">
            KM 00.0 // DEPOT ORIGIN
          </div>
          <div className="absolute left-[950px] -top-5 text-[9px] font-mono text-[#808593] bg-[#111214] px-1.5 py-0.5 rounded border border-[#2B2E36]">
            KM 08.2 // RAMESH
          </div>
          <div className="absolute left-[1850px] -bottom-5 text-[9px] font-mono text-[#808593] bg-[#111214] px-1.5 py-0.5 rounded border border-[#2B2E36]">
            KM 19.4 // SURESH
          </div>
          <div className="absolute left-[2750px] -top-5 text-[9px] font-mono text-[#808593] bg-[#111214] px-1.5 py-0.5 rounded border border-[#2B2E36]">
            KM 44.1 // RAM
          </div>
          <div className="absolute left-[3850px] -top-5 text-[9px] font-mono text-[#808593] bg-[#111214] px-1.5 py-0.5 rounded border border-[#2B2E36]">
            KM 68.4 // KR MARKET
          </div>

          {/* Road Waypoint Nodes (Positioned on the road curb edges) */}
          <div className="absolute left-[1075px] -top-1 w-2 h-2 rounded-full bg-[#E89228] border border-[#18191B]" />
          <div className="absolute left-[1975px] -bottom-1 w-2 h-2 rounded-full bg-[#16A34A] border border-[#18191B]" />
          <div className="absolute left-[2875px] -top-1 w-2 h-2 rounded-full bg-[#2563EB] border border-[#18191B]" />
        </div>

        {/* 1. DEPOT ORIGIN (ABOVE ROAD): Srinivaspur Transit Depot */}
        <div
          style={{ bottom: "calc(50% + 50px)" }}
          className="absolute left-14 z-20 w-72 sm:w-76 bg-[#1F2126] border-2 border-[#3A3D44] p-3 rounded-xl shadow-xl text-xs font-mono"
        >
          <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-[#3A3D44] text-[#808593]">
            <span className="text-[#E89228] font-bold text-[10px]">DEPOT ORIGIN</span>
            <span className="rubber-stamp stamp-amber text-[9px] py-0 px-1">KM 00.0</span>
          </div>
          <h4 className="text-sm font-bold font-sans uppercase text-[#F6F3EA]">
            Srinivaspur Transit Point
          </h4>
          <p className="text-[10px] text-[#A6ABBA] mt-0.5 font-sans leading-snug">
            Vehicle: <strong>KA-07-E-4819 (Tata 407)</strong> departs empty.
            Solo hire would cost ₹2,400 to first farmer.
          </p>
          <div className="mt-1.5 bg-[#111214] px-2 py-0.5 rounded text-[9px] text-[#E89228] flex justify-between border border-[#3A3D44]">
            <span>STATUS: DISPATCHED</span>
            <span>04:30 AM IST</span>
          </div>
          {/* Connector down to road curb */}
          <div className="absolute left-1/2 -bottom-2.5 w-0.5 bg-[#E89228] -translate-x-1/2 h-2.5" />
        </div>

        {/* 2. STOP 1 (ABOVE ROAD): Ramesh (Tomatoes) - Distance ~890px from Depot (80% compression) */}
        <div
          style={{ bottom: "calc(50% + 50px)" }}
          className="absolute left-[950px] z-20 w-72 sm:w-80 bg-[#FAF8F2] text-[#18191B] border-2 border-[#18191B] p-3 rounded-xl shadow-[3px_3px_0px_0px_#E89228]"
        >
          <div className="flex items-center justify-between text-[10px] font-mono pb-1 border-b border-[#D8D2C2]">
            <span className="text-[#E89228] font-black tracking-wider">PICKUP 01 // LOAD CONSOLIDATED</span>
            <span className="rubber-stamp stamp-amber text-[9px] py-0 px-1">KM 08.2</span>
          </div>
          <div className="mt-1.5">
            <h4 className="text-sm font-black uppercase font-sans text-[#18191B] tracking-tight">
              {shipments[0].shipper}
            </h4>
            <p className="text-[10px] font-mono text-[#5A5E69]">{shipments[0].role}</p>

            <div className="mt-1.5 bg-[#EBE6D8] px-2.5 py-1.5 rounded-md text-[10px] font-mono space-y-0.5">
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">COMMODITY:</span>
                <span className="font-bold text-[#18191B]">85 Crates Tomatoes (2.0T)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">PRIVATE CHARTER:</span>
                <span className="line-through text-[#DC2626]">₹2,400</span>
              </div>
              <div className="flex justify-between font-bold text-[#16A34A] border-t border-[#D8D2C2] pt-0.5">
                <span>OPTIMIZED SHARE:</span>
                <span>₹1,895 (Save ₹505 · 21%)</span>
              </div>
            </div>
          </div>
          {/* Connector down to road curb */}
          <div className="absolute left-1/2 -bottom-2.5 w-0.5 bg-[#E89228] -translate-x-1/2 h-2.5" />
        </div>

        {/* 3. STOP 2 (BELOW ROAD): Suresh (Cabbages & Beans) - Distance 900px from Ramesh (80% compression) */}
        <div
          style={{ top: "calc(50% + 50px)" }}
          className="absolute left-[1850px] z-20 w-72 sm:w-80 bg-[#FAF8F2] text-[#18191B] border-2 border-[#18191B] p-3 rounded-xl shadow-[3px_3px_0px_0px_#16A34A]"
        >
          {/* Connector up to road curb */}
          <div className="absolute left-1/2 -top-2.5 w-0.5 bg-[#16A34A] -translate-x-1/2 h-2.5" />

          <div className="flex items-center justify-between text-[10px] font-mono pb-1 border-b border-[#D8D2C2]">
            <span className="text-[#16A34A] font-black tracking-wider">PICKUP 02 // LOAD CONSOLIDATED</span>
            <span className="rubber-stamp stamp-green text-[9px] py-0 px-1">KM 19.4</span>
          </div>
          <div className="mt-1.5">
            <h4 className="text-sm font-black uppercase font-sans text-[#18191B] tracking-tight">
              {shipments[1].shipper}
            </h4>
            <p className="text-[10px] font-mono text-[#5A5E69]">{shipments[1].role}</p>

            <div className="mt-1.5 bg-[#EBE6D8] px-2.5 py-1.5 rounded-md text-[10px] font-mono space-y-0.5">
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">COMMODITY:</span>
                <span className="font-bold text-[#18191B]">40 Bags Cabbage & Beans (1.0T)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">PRIVATE CHARTER:</span>
                <span className="line-through text-[#DC2626]">₹1,800</span>
              </div>
              <div className="flex justify-between font-bold text-[#16A34A] border-t border-[#D8D2C2] pt-0.5">
                <span>OPTIMIZED SHARE:</span>
                <span>₹947 (Save ₹853 · 47%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. STOP 3 (ABOVE ROAD): Ram (Seeds & Sprayers) - Distance 900px from Suresh (80% compression) */}
        <div
          style={{ bottom: "calc(50% + 50px)" }}
          className="absolute left-[2750px] z-20 w-72 sm:w-80 bg-[#FAF8F2] text-[#18191B] border-2 border-[#18191B] p-3 rounded-xl shadow-[3px_3px_0px_0px_#2563EB]"
        >
          <div className="flex items-center justify-between text-[10px] font-mono pb-1 border-b border-[#D8D2C2]">
            <span className="text-[#2563EB] font-black tracking-wider">PICKUP 03 // LOAD CONSOLIDATED</span>
            <span className="rubber-stamp stamp-amber text-[9px] py-0 px-1">KM 44.1</span>
          </div>
          <div className="mt-1.5">
            <h4 className="text-sm font-black uppercase font-sans text-[#18191B] tracking-tight">
              {shipments[2].shipper}
            </h4>
            <p className="text-[10px] font-mono text-[#5A5E69]">{shipments[2].role}</p>

            <div className="mt-1.5 bg-[#EBE6D8] px-2.5 py-1.5 rounded-md text-[10px] font-mono space-y-0.5">
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">COMMODITY:</span>
                <span className="font-bold text-[#18191B]">18 Cartons Seeds & Sprayers (0.8T)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">PRIVATE CHARTER:</span>
                <span className="line-through text-[#DC2626]">₹1,500</span>
              </div>
              <div className="flex justify-between font-bold text-[#16A34A] border-t border-[#D8D2C2] pt-0.5">
                <span>OPTIMIZED SHARE:</span>
                <span>₹758 (Save ₹742 · 49%)</span>
              </div>
            </div>
          </div>
          {/* Connector down to road curb */}
          <div className="absolute left-1/2 -bottom-2.5 w-0.5 bg-[#2563EB] -translate-x-1/2 h-2.5" />
        </div>

        {/* 5. DESTINATION TERMINAL: KR Market Wholesale Yard - Distance 1100px from Ram (Full 100% Uncompressed Final Leg) */}
        <div
          className="absolute left-[3850px] top-1/2 -translate-y-1/2 z-20 w-84 sm:w-96 bg-[#1F2126] border-2 border-[#16A34A] p-4 rounded-xl shadow-2xl"
        >
          <div className="flex items-center justify-between text-xs font-mono mb-1.5 pb-1 border-b border-[#3A3D44]">
            <span className="text-[#16A34A] font-extrabold flex items-center gap-1.5 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
              TERMINAL ARRIVAL & WEIGHBRIDGE
            </span>
            <span className="rubber-stamp stamp-green text-[9px] py-0 px-1">KM 68.4</span>
          </div>

          <h3 className="text-lg sm:text-xl font-black font-sans uppercase text-[#F6F3EA] leading-tight">
            KR Market Wholesale Yard
          </h3>
          <p className="text-[10px] text-[#A6ABBA] mt-0.5 font-sans leading-snug">
            Delivered at 07:15 AM. Total Payload: <strong className="text-[#F6F3EA]">3.8 Tonnes (76% Optimal Consolidation)</strong> across all 3 shippers.
          </p>

          <div className="mt-2.5 bg-[#111214] border border-[#3A3D44] p-2.5 rounded-lg space-y-1 text-[11px] font-mono">
            <div className="flex justify-between">
              <span className="text-[#808593]">SOLO 3 SEPARATE TRIPS:</span>
              <span className="line-through text-[#DC2626]">₹5,700</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#808593]">CONSOLIDATED 1 RUN:</span>
              <span className="text-[#F6F3EA] font-bold">₹3,600</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-[#3A3D44] text-[#16A34A] font-extrabold">
              <span>NET FARMER SAVINGS:</span>
              <span>₹2,100 (37% SAVED)</span>
            </div>
          </div>
        </div>

        {/* Generous End-of-Corridor Buffer */}
        <div className="absolute left-[4350px] w-28 h-10 pointer-events-none" />
      </div>

      {/* Bottom Route Indicator Bar - Slim & unobtrusive at bottom-2 */}
      <div className="absolute bottom-2 left-4 right-4 sm:left-8 sm:right-8 z-30 flex items-center justify-between text-[10px] font-mono text-[#808593] border-t border-[#2B2E36] pt-1 bg-[#111214]/90 backdrop-blur-sm px-3 rounded-md">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E89228] inline-block animate-ping" />
          <span>NH-75 CORRIDOR: SRINIVASPUR ➔ MULBAGAL ➔ HOSKOTE ➔ KR MARKET</span>
        </div>
        <div className="hidden sm:block text-[9px] text-[#A6ABBA]">
          <span>SCROLL DOWN TO INSPECT TWO-STAGE ENGINE ➔</span>
        </div>
      </div>
    </section>
  );
}
