"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CORRIDOR_DATA } from "@/lib/constants";
import { Truck, MapPin, Package, ArrowRight, ShieldCheck, CheckCircle2, Clock, Scale } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HighwayCorridorSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [loadTonnes, setLoadTonnes] = useState(0);
  const [activeCheckpoint, setActiveCheckpoint] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const getScrollDistance = () => {
        if (!trackRef.current) return 0;
        return trackRef.current.scrollWidth - window.innerWidth;
      };

      // Main horizontal translation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${getScrollDistance() + 1000}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            // Update payload state dynamically across the wider track
            if (progress < 0.22) {
              setLoadTonnes(0);
              setActiveCheckpoint(0);
            } else if (progress < 0.46) {
              setLoadTonnes(2.0);
              setActiveCheckpoint(1);
            } else if (progress < 0.70) {
              setLoadTonnes(3.0);
              setActiveCheckpoint(2);
            } else {
              setLoadTonnes(3.8);
              setActiveCheckpoint(3);
            }
          },
        },
      });

      // Move horizontal track
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
      {/* Top Telemetry Overlay */}
      <div className="absolute top-4 left-6 right-6 z-30 flex flex-wrap items-center justify-between border border-[#2B2E36] text-xs font-mono bg-[#111214]/90 backdrop-blur-md px-5 py-2.5 rounded-xl shadow-lg">
        <div className="flex items-center gap-3">
          <span className="rubber-stamp stamp-amber text-[10px]">SECTION 03 // ACTIVE CORRIDOR</span>
          <span className="text-[#A6ABBA] hidden md:inline">
            NH-75: SRINIVASPUR ➔ HOSKOTE ➔ KR MARKET (68.4 KM)
          </span>
        </div>

        {/* Live Truck Capacity Gauge */}
        <div className="flex items-center gap-4 bg-[#18191B] border border-[#3A3D44] px-4 py-1.5 rounded-lg">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#E89228]" />
            <span className="text-[#808593]">TATA 407 CARGO BAY:</span>
            <strong className="text-[#E89228] text-sm tabular-nums">{loadTonnes.toFixed(1)} / 5.0 T</strong>
          </div>
          <div className="w-32 h-2.5 bg-[#25272B] rounded-full overflow-hidden border border-[#3A3D44]">
            <div
              className="h-full bg-gradient-to-r from-[#E89228] to-[#16A34A] transition-all duration-300"
              style={{ width: `${(loadTonnes / 5.0) * 100}%` }}
            />
          </div>
          <span className={`text-[11px] font-bold ${loadTonnes >= 3.8 ? "text-[#16A34A]" : "text-[#A6ABBA]"}`}>
            {loadTonnes >= 3.8 ? "76% OPTIMAL" : `${Math.round((loadTonnes / 5.0) * 100)}%`}
          </span>
        </div>
      </div>

      {/* Horizontal World Track (Broadened to 5600px so transit movement is clearly visible!) */}
      <div
        ref={trackRef}
        className="relative h-full flex items-center will-change-transform"
        style={{ width: "5600px" }}
      >
        {/* Subtle Topographical Elevation Grid lines in Background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none blueprint-grid" />

        {/* BROADER 2-LANE NATIONAL HIGHWAY (Height h-48 with realistic asphalt features) */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-48 bg-[#18191B] border-y-4 border-[#3A3D44] flex flex-col justify-between z-10 shadow-[0_0_60px_rgba(0,0,0,0.85)]">
          {/* Top Highway Shoulder & Guardrail */}
          <div className="w-full h-3 bg-[#25272B] border-b border-[#3A3D44] flex items-center px-4">
            <div className="w-full h-0.5 bg-white/30" />
          </div>

          {/* Upper Lane Driving Area */}
          <div className="relative flex-1 flex items-center px-6">
            {/* Visual 2D Tata 407 Truck Riding on Road */}
            <div
              className="absolute z-25 flex items-center gap-2 transition-all duration-700 ease-out"
              style={{
                left:
                  loadTonnes === 0
                    ? "280px"
                    : loadTonnes === 2.0
                    ? "1520px"
                    : loadTonnes === 3.0
                    ? "2760px"
                    : "4100px",
              }}
            >
              {/* 2D Truck Chassis SVG */}
              <div className="relative bg-[#1F2126] border-2 border-[#E89228] rounded-xl px-4 py-2 shadow-2xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#16A34A] animate-ping" />
                <div>
                  <span className="text-[10px] font-mono text-[#E89228] font-bold block">TATA 407 (KA-07-E-4819)</span>
                  <span className="text-xs font-mono font-extrabold text-[#F6F3EA]">
                    {loadTonnes === 0
                      ? "EMPTY EN ROUTE"
                      : loadTonnes === 2.0
                      ? "40% LOADED (TOMATOES)"
                      : loadTonnes === 3.0
                      ? "60% LOADED (+CABBAGE)"
                      : "76% OPTIMAL PAYLOAD"}
                  </span>
                </div>
                {/* Visual Headlight Beam */}
                <div className="w-12 h-6 bg-gradient-to-r from-[#E89228]/40 to-transparent rounded-r-full" />
              </div>
            </div>
          </div>

          {/* Broad Center Highway Divider with Glowing Amber Stripes */}
          <div className="w-full h-4 bg-[#111214] flex items-center justify-center border-y border-[#3A3D44]">
            <div className="w-full h-1 border-t-2 border-dashed border-[#E89228]" />
          </div>

          {/* Lower Lane Driving Area */}
          <div className="relative flex-1 flex items-center px-6">
            <span className="text-[10px] font-mono text-[#5A5E69] tracking-widest uppercase">
              NH-75 EASTBOUND LANE // SPEED REGULATED // TRUCK CORRIDOR
            </span>
          </div>

          {/* Bottom Highway Shoulder */}
          <div className="w-full h-3 bg-[#25272B] border-t border-[#3A3D44] flex items-center px-4">
            <div className="w-full h-0.5 bg-white/30" />
          </div>

          {/* Prominent Highway Milestone Distance Markers along Road */}
          <div className="absolute left-16 -top-7 text-[11px] font-mono text-[#808593] flex items-center gap-1.5 bg-[#111214] px-3 py-1 rounded border border-[#2B2E36]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
            KM 00 // SRINIVASPUR CLUSTER (ORIGIN)
          </div>
          <div className="absolute left-[1350px] -top-7 text-[11px] font-mono text-[#808593] flex items-center gap-1.5 bg-[#111214] px-3 py-1 rounded border border-[#2B2E36]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E89228]" />
            KM 08.2 // SRINIVASPUR NORTH (FARMER ANJANAPPA)
          </div>
          <div className="absolute left-[2600px] -top-7 text-[11px] font-mono text-[#808593] flex items-center gap-1.5 bg-[#111214] px-3 py-1 rounded border border-[#2B2E36]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
            KM 19.4 // MULBAGAL CROSS (CO-OP GOWRAMMA)
          </div>
          <div className="absolute left-[3850px] -top-7 text-[11px] font-mono text-[#808593] flex items-center gap-1.5 bg-[#111214] px-3 py-1 rounded border border-[#2B2E36]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
            KM 44.1 // HOSKOTE GATE (PRASHANTH AGRO)
          </div>
          <div className="absolute left-[4800px] -top-7 text-[11px] font-mono text-[#808593] flex items-center gap-1.5 bg-[#111214] px-3 py-1 rounded border border-[#2B2E36]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
            KM 68.4 // KR MARKET WHOLESALE HUB
          </div>
        </div>

        {/* 1. ORIGIN DEPOT: Srinivaspur Logistics Point */}
        <div
          style={{ bottom: "calc(50% + 120px)" }}
          className="absolute left-16 z-20 w-88 bg-[#1F2126] border-2 border-[#3A3D44] p-6 rounded-2xl shadow-2xl"
        >
          <div className="flex items-center justify-between text-xs font-mono text-[#808593] mb-2 pb-2 border-b border-[#3A3D44]">
            <span className="text-[#E89228] font-bold">DEPOT ORIGIN</span>
            <span className="rubber-stamp stamp-amber text-[10px]">KM 00.0</span>
          </div>
          <h4 className="text-xl font-bold font-sans uppercase text-[#F6F3EA]">
            Srinivaspur Transit Point
          </h4>
          <p className="text-xs text-[#A6ABBA] mt-2 font-sans leading-relaxed">
            Carrier: <strong>Manjunath Transport (KA-07-E-4819)</strong>. Driver: Manjunath Gowda (18 yrs experience).
            Tata 407 departs empty. Solo private booking would charge ₹2,400 to the first farmer.
          </p>
          <div className="mt-4 bg-[#111214] p-3 rounded-lg text-xs font-mono text-[#E89228] flex items-center justify-between border border-[#3A3D44]">
            <span>STATUS: DISPATCHED</span>
            <span>04:30 AM IST</span>
          </div>
          {/* Vertical Feeder down to Road */}
          <div className="absolute left-1/2 -bottom-7 w-1 bg-[#E89228] -translate-x-1/2 h-7">
            <div className="w-3.5 h-3.5 rounded-full bg-[#E89228] absolute -bottom-1 -left-1.5 border-2 border-[#18191B]" />
          </div>
        </div>

        {/* 2. STOP 1 (ABOVE THE ROAD): Anjanappa & Sons (Tomatoes) - Positioned with guaranteed clearance */}
        <div
          style={{ bottom: "calc(50% + 120px)" }}
          className="absolute left-[1300px] z-20 w-96 bg-[#FAF8F2] text-[#18191B] border-2 border-[#18191B] p-5 rounded-2xl shadow-[6px_6px_0px_0px_#E89228]"
        >
          <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#D8D2C2]">
            <span className="text-[#E89228] font-black">PICKUP 01 // LOAD CONSOLIDATED</span>
            <span className="rubber-stamp stamp-amber text-[10px]">KM 08.2</span>
          </div>
          <div className="mt-3">
            <h4 className="text-xl font-extrabold uppercase font-sans text-[#18191B]">{shipments[0].shipper}</h4>
            <p className="text-xs font-mono text-[#5A5E69]">{shipments[0].role}</p>

            <div className="mt-3 bg-[#EBE6D8] p-3 rounded-xl text-xs font-mono space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">COMMODITY:</span>
                <span className="font-bold text-[#18191B]">85 Crates Ripe Tomatoes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">WEIGHT:</span>
                <span className="font-bold text-[#E89228]">2.0 Tonnes (40% Capacity)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">PRIVATE CHARTER:</span>
                <span className="line-through text-[#DC2626]">₹2,400</span>
              </div>
              <div className="flex justify-between font-bold text-[#16A34A] border-t border-[#D8D2C2] pt-1">
                <span>OPTIMIZED SHARE:</span>
                <span>₹1,895 (Save ₹505 · 21%)</span>
              </div>
            </div>
          </div>
          {/* Visual Vertical Drop Feeder to Highway */}
          <div className="absolute left-1/2 -bottom-7 w-1 bg-[#E89228] -translate-x-1/2 h-7">
            <div className="w-3.5 h-3.5 rounded-full bg-[#E89228] absolute -bottom-1 -left-1.5 border-2 border-[#18191B]" />
          </div>
        </div>

        {/* 3. STOP 2 (BELOW THE ROAD): Gowramma Cooperative (Cabbages) - Positioned with guaranteed clearance */}
        <div
          style={{ top: "calc(50% + 120px)" }}
          className="absolute left-[2500px] z-20 w-96 bg-[#FAF8F2] text-[#18191B] border-2 border-[#18191B] p-5 rounded-2xl shadow-[6px_6px_0px_0px_#16A34A]"
        >
          {/* Visual Vertical Feeder up to Highway */}
          <div className="absolute left-1/2 -top-7 w-1 bg-[#16A34A] -translate-x-1/2 h-7">
            <div className="w-3.5 h-3.5 rounded-full bg-[#16A34A] absolute -top-1 -left-1.5 border-2 border-[#18191B]" />
          </div>
          <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#D8D2C2]">
            <span className="text-[#16A34A] font-black">PICKUP 02 // LOAD CONSOLIDATED</span>
            <span className="rubber-stamp stamp-green text-[10px]">KM 19.4</span>
          </div>
          <div className="mt-3">
            <h4 className="text-xl font-extrabold uppercase font-sans text-[#18191B]">{shipments[1].shipper}</h4>
            <p className="text-xs font-mono text-[#5A5E69]">{shipments[1].role}</p>

            <div className="mt-3 bg-[#EBE6D8] p-3 rounded-xl text-xs font-mono space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">COMMODITY:</span>
                <span className="font-bold text-[#18191B]">40 Bags Cabbages &amp; Beans</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">WEIGHT:</span>
                <span className="font-bold text-[#16A34A]">1.0 Tonne (Total: 3.0 T)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">PRIVATE CHARTER:</span>
                <span className="line-through text-[#DC2626]">₹1,800</span>
              </div>
              <div className="flex justify-between font-bold text-[#16A34A] border-t border-[#D8D2C2] pt-1">
                <span>OPTIMIZED SHARE:</span>
                <span>₹947 (Save ₹853 · 47%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. STOP 3 (ABOVE THE ROAD): Prashanth Agro Supplies - Positioned with guaranteed clearance */}
        <div
          style={{ bottom: "calc(50% + 120px)" }}
          className="absolute left-[3700px] z-20 w-96 bg-[#FAF8F2] text-[#18191B] border-2 border-[#18191B] p-5 rounded-2xl shadow-[6px_6px_0px_0px_#2563EB]"
        >
          <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#D8D2C2]">
            <span className="text-[#2563EB] font-black">PICKUP 03 // LOAD CONSOLIDATED</span>
            <span className="rubber-stamp stamp-amber text-[10px]">KM 44.1</span>
          </div>
          <div className="mt-3">
            <h4 className="text-xl font-extrabold uppercase font-sans text-[#18191B]">{shipments[2].shipper}</h4>
            <p className="text-xs font-mono text-[#5A5E69]">{shipments[2].role}</p>

            <div className="mt-3 bg-[#EBE6D8] p-3 rounded-xl text-xs font-mono space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">COMMODITY:</span>
                <span className="font-bold text-[#18191B]">18 Cartons Sprayers &amp; Seeds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">WEIGHT:</span>
                <span className="font-bold text-[#2563EB]">0.8 Tonne (Total: 3.8 T)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5E69]">PRIVATE CHARTER:</span>
                <span className="line-through text-[#DC2626]">₹1,500</span>
              </div>
              <div className="flex justify-between font-bold text-[#16A34A] border-t border-[#D8D2C2] pt-1">
                <span>OPTIMIZED SHARE:</span>
                <span>₹758 (Save ₹742 · 49%)</span>
              </div>
            </div>
          </div>
          {/* Visual Vertical Drop Feeder to Highway */}
          <div className="absolute left-1/2 -bottom-7 w-1 bg-[#2563EB] -translate-x-1/2 h-7">
            <div className="w-3.5 h-3.5 rounded-full bg-[#2563EB] absolute -bottom-1 -left-1.5 border-2 border-[#18191B]" />
          </div>
        </div>

        {/* 5. DESTINATION TERMINAL: KR Market Wholesale Hub (Positioned at 4750px with ample space) */}
        <div className="absolute left-[4700px] z-20 w-[500px] bg-[#1F2126] border-4 border-[#16A34A] p-8 rounded-3xl shadow-[0_0_70px_rgba(22,163,74,0.35)]">
          <div className="flex items-center justify-between text-xs font-mono mb-3 pb-2 border-b border-[#3A3D44]">
            <span className="text-[#16A34A] font-extrabold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              TERMINAL ARRIVAL &amp; WEIGHBRIDGE
            </span>
            <span className="rubber-stamp stamp-green text-[10px]">KM 68.4</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black font-sans uppercase text-[#F6F3EA] leading-tight">
            KR Market Wholesale Yard
          </h3>
          <p className="text-xs text-[#A6ABBA] mt-2 font-sans leading-relaxed">
            Vehicle arrives at 07:15 AM (ahead of 07:30 AM market opening). 
            Total Payload: <strong className="text-[#F6F3EA]">3.8 Tonnes (76% Capacity)</strong> across 3 shippers.
          </p>

          <div className="mt-5 bg-[#111214] border border-[#3A3D44] p-4 rounded-xl space-y-2 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-[#808593]">UNCOORDINATED SUM:</span>
              <span className="line-through text-[#DC2626]">₹5,700 (3 Trips)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#808593]">CONSOLIDATED RUN:</span>
              <span className="text-[#F6F3EA] font-bold">₹3,600 (1 Trip)</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-[#3A3D44] text-[#16A34A] font-extrabold text-sm">
              <span>NET CORRIDOR SAVINGS:</span>
              <span>₹2,100 (37% REDUCTION)</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#808593]">
            <span>WEIGHBRIDGE SLIP #WB-8819</span>
            <span className="text-[#16A34A] font-bold">ALL 3 SHIPMENTS DELIVERED</span>
          </div>
        </div>

        {/* Generous Breathing Room at the far right */}
        <div className="absolute left-[5350px] w-64 h-10" />
      </div>

      {/* Bottom Route Indicator Bar */}
      <div className="absolute bottom-4 left-6 right-6 z-30 flex items-center justify-between text-[11px] font-mono text-[#808593] border-t border-[#2B2E36] pt-2 bg-[#111214]/80 backdrop-blur-md px-5 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E89228] inline-block animate-ping" />
          <span>NH-75 CORRIDOR: SRINIVASPUR ➔ MULBAGAL ➔ HOSKOTE ➔ KR MARKET</span>
        </div>
        <div className="hidden sm:block">
          <span>SCROLL DOWN TO INSPECT THE TWO-STAGE ENGINE ➔</span>
        </div>
      </div>
    </section>
  );
}
