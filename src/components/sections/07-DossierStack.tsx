"use client";

import React from "react";
import { BarChart3, Clock, Zap, ArrowUpRight, Award, CheckCircle, Users, Truck, Factory, Sprout, ArrowRight } from "lucide-react";
import { CORRIDOR_DATA } from "@/lib/constants";

export default function DossierStackSection() {
  const { benchmarks } = CORRIDOR_DATA;

  return (
    <div className="relative w-full bg-[#FAF8F2]">
      {/* LAYER 1: EMPIRICAL BENCHMARKING LAB */}
      <section className="w-full bg-[#FAF8F2] border-t-2 border-[#18191B] py-20 px-4 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C2] pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rubber-stamp stamp-red text-xs">SECTION 07 · EMPIRICAL VERIFICATION</span>
                <span className="text-xs font-mono text-[#5A5E69]">HEAD-TO-HEAD SOLVER AUDIT</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18191B] tracking-tight uppercase leading-tight font-sans">
                Rigorous Quantitative Benchmarks.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A5E69] max-w-md font-sans leading-relaxed">
              We test the identical 26-shipment regional scenario across three distinct computational 
              engines to measure the exact cost, capacity utilization, and runtime trade-offs.
            </p>
          </div>

          {/* 3 Solver Benchmark Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benchmarks.map((bench, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border-2 p-6 flex flex-col justify-between transition-all ${
                  idx === 2
                    ? "bg-[#18191B] text-[#F6F3EA] border-[#E89228] shadow-[6px_6px_0px_0px_#E89228]"
                    : "bg-[#F6F3EA] text-[#18191B] border-[#18191B] shadow-[4px_4px_0px_0px_#18191B]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b pb-3 mb-4 border-current/20">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center font-mono font-black text-xs"
                      style={{
                        backgroundColor: bench.color,
                        color: idx === 2 ? "#18191B" : "#F6F3EA",
                      }}
                    >
                      0{idx + 1}
                    </span>
                    <span className="rubber-stamp text-[10px] py-0.5 px-2 font-mono">
                      {idx === 2 ? "HIGHEST EFFICIENCY" : "COMPARISON BASELINE"}
                    </span>
                  </div>

                  <h3 className="text-lg font-black font-sans uppercase mb-2">
                    {bench.solver}
                  </h3>
                  <p className="text-xs text-current/70 mb-6 font-sans leading-normal">
                    {bench.summary}
                  </p>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-2.5 rounded-lg border border-current/20 flex justify-between items-center bg-black/5 dark:bg-white/5">
                      <span className="text-current/70">TOTAL COST:</span>
                      <strong className="text-base font-black">₹{bench.totalCost.toLocaleString("en-IN")}</strong>
                    </div>

                    <div className="p-2.5 rounded-lg border border-current/20 flex justify-between items-center bg-black/5 dark:bg-white/5">
                      <span className="text-current/70">EMPTY DEADHEAD:</span>
                      <strong className="text-base font-black">{bench.emptyKm} KM</strong>
                    </div>

                    <div className="p-2.5 rounded-lg border border-current/20 flex justify-between items-center bg-black/5 dark:bg-white/5">
                      <span className="text-current/70">CAPACITY USE:</span>
                      <strong className="text-base font-black text-[#16A34A]">{bench.capacityUtilizationPct}%</strong>
                    </div>

                    <div className="p-2.5 rounded-lg border border-current/20 flex justify-between items-center bg-black/5 dark:bg-white/5">
                      <span className="text-current/70">SOLVER SPEED:</span>
                      <strong className="text-base font-black">{bench.runtimeSec}s</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-current/20 text-[11px] font-mono text-current/80 flex items-center justify-between">
                  <span>REQUESTS SERVED: <strong>{bench.requestsServed}/26</strong></span>
                  {idx === 2 && <span className="text-[#16A34A] font-bold">✓ 28.2% SAVINGS</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYER 2: THE UNIVERSAL ECOSYSTEM (Targeting Everyone) */}
      <section className="w-full bg-[#EBE6D8] border-t-4 border-[#18191B] rounded-t-[2.5rem] -mt-8 py-20 px-4 md:px-12 relative z-20 shadow-[0_-12px_40px_rgba(0,0,0,0.12)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C2] pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rubber-stamp stamp-green text-xs">SECTION 08 · NETWORK PARTICIPANTS</span>
                <span className="text-xs font-mono text-[#5A5E69]">OPEN COORDINATION FOR BHARAT</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18191B] tracking-tight uppercase leading-tight font-sans">
                An Open System for Every Rural Stakeholder.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#5A5E69] max-w-md font-sans leading-relaxed">
              We do not restrict access. FREIGHTGRID coordinates transportation across the entire rural commercial web.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF8F2] border-2 border-[#18191B] p-6 rounded-2xl shadow-[4px_4px_0px_0px_#18191B] flex flex-col justify-between">
              <div>
                <Sprout className="w-8 h-8 text-[#16A34A] mb-4" />
                <h3 className="text-xl font-bold font-sans uppercase text-[#18191B]">Farmers &amp; FPOs</h3>
                <p className="text-xs text-[#5A5E69] mt-2 font-sans leading-relaxed">
                  Ship small batches of 0.5 to 2 tonnes at fair, pooled wholesale rates without waiting for exploitative middlemen.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#D8D2C2] text-xs font-mono text-[#16A34A] font-bold">
                ✓ 21%–47% Cost Cut
              </div>
            </div>

            <div className="bg-[#FAF8F2] border-2 border-[#18191B] p-6 rounded-2xl shadow-[4px_4px_0px_0px_#18191B] flex flex-col justify-between">
              <div>
                <Truck className="w-8 h-8 text-[#E89228] mb-4" />
                <h3 className="text-xl font-bold font-sans uppercase text-[#18191B]">Transporters</h3>
                <p className="text-xs text-[#5A5E69] mt-2 font-sans leading-relaxed">
                  Vehicle owners get higher daily revenue by consolidating compatible cargo and eliminating empty backhauls.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#D8D2C2] text-xs font-mono text-[#E89228] font-bold">
                ✓ Zero Empty Deadhead
              </div>
            </div>

            <div className="bg-[#FAF8F2] border-2 border-[#18191B] p-6 rounded-2xl shadow-[4px_4px_0px_0px_#18191B] flex flex-col justify-between">
              <div>
                <Factory className="w-8 h-8 text-[#2563EB] mb-4" />
                <h3 className="text-xl font-bold font-sans uppercase text-[#18191B]">Rural Enterprises</h3>
                <p className="text-xs text-[#5A5E69] mt-2 font-sans leading-relaxed">
                  Fertilizer dealers, agro-hardware shops, and rural factories receive and send inventory on scheduled corridor runs.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#D8D2C2] text-xs font-mono text-[#2563EB] font-bold">
                ✓ Predictable Supply
              </div>
            </div>

            <div className="bg-[#FAF8F2] border-2 border-[#18191B] p-6 rounded-2xl shadow-[4px_4px_0px_0px_#18191B] flex flex-col justify-between">
              <div>
                <Users className="w-8 h-8 text-[#18191B] mb-4" />
                <h3 className="text-xl font-bold font-sans uppercase text-[#18191B]">Mandi Aggregators</h3>
                <p className="text-xs text-[#5A5E69] mt-2 font-sans leading-relaxed">
                  Regional desks monitor arriving freight volumes in advance, smoothing market arrivals and reducing gate bottlenecks.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#D8D2C2] text-xs font-mono text-[#18191B] font-bold">
                ✓ Coordinated Dispatch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYER 3: THE DEEP CHARCOAL FINALE & ARCHITECTURE */}
      <section className="w-full bg-[#111214] text-[#F6F3EA] border-t-4 border-[#3A3D44] rounded-t-[3rem] -mt-8 py-24 px-4 md:px-12 relative z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2B2E36] pb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rubber-stamp stamp-amber text-xs">FINAL MANIFESTO</span>
                <span className="text-xs font-mono text-[#A6ABBA]">COMMERCIAL &amp; TECHNICAL BLUEPRINT</span>
              </div>
              <h2 className="text-3xl sm:text-6xl font-black tracking-tight uppercase leading-tight font-sans text-[#F6F3EA]">
                The Future of Rural Freight <br />
                <span className="text-[#E89228]">Starts Here.</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#A6ABBA] max-w-md font-sans leading-relaxed">
              FREIGHTGRID is built as production-grade enterprise software combining Next.js, 
              FastAPI, OpenStreetMap OSRM routing, and quantum-inspired combinatorial optimization.
            </p>
          </div>

          {/* Academic Citations & Call to Action */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#18191B] border-2 border-[#3A3D44] p-8 rounded-3xl">
            <div className="lg:col-span-8 flex flex-col gap-3 font-mono text-xs">
              <span className="text-[#E89228] font-bold uppercase tracking-wider">
                PEER-REVIEWED THEORETICAL FOUNDATIONS:
              </span>
              <ul className="space-y-2 text-[#A6ABBA] list-disc list-inside">
                <li>
                  <strong className="text-[#F6F3EA]">Feld, S., et al.</strong> &ndash; <em>A Hybrid Quantum-Classical Approach to Solving the Capacitated Vehicle Routing Problem with Time Windows (CVRPTW).</em>
                </li>
                <li>
                  <strong className="text-[#F6F3EA]">World Bank India Logistics Division</strong> &ndash; <em>Addressing Inefficiencies in Agricultural Freight and First-Mile Aggregation.</em>
                </li>
                <li>
                  <strong className="text-[#F6F3EA]">Guajardo, M., &amp; Jörnsten, K.</strong> &ndash; <em>Cost Allocation in Collaborative Transportation: Game Theory Approaches.</em>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="#highway-corridor"
                className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl bg-[#E89228] text-[#18191B] font-sans font-black text-sm tracking-wide hover:bg-[#F5A338] transition-colors shadow-lg"
              >
                <span>Back to Live Corridor Run</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] font-mono text-[#808593]">
                SYSTEM DEPLOYMENT STATUS: PRODUCTION READY
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
