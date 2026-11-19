"use client";

import React, { useState } from "react";
import { Cpu, Layers, GitBranch, ArrowRight, CheckCircle2, XCircle, TrendingDown, Fuel, BarChart2 } from "lucide-react";

export default function QuboEngineSection() {
  const [viewMode, setViewMode] = useState<"uncoordinated" | "optimized">("optimized");

  return (
    <section className="w-full bg-[#F6F3EA] border-b border-[#D8D2C2] py-24 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C2] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="rubber-stamp stamp-amber text-xs">SECTION 04 · COMPUTATIONAL ENGINE</span>
              <span className="text-xs font-mono text-[#5A5E69]">TWO-STAGE FREIGHT CONSOLIDATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18191B] tracking-tight uppercase leading-tight font-sans">
              The Optimization Engine: <br />
              <span className="text-[#E89228]">Turning 3 Trips Into 1 Coordinated Route.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A5E69] max-w-md font-sans leading-relaxed">
            Instead of abstract theories, see how our two-stage optimization transforms chaotic, 
            competing farm trips into a mathematically synchronized supply chain.
          </p>
        </div>

        {/* Intuitive Quantum Analogy Callout Box */}
        <div className="bg-[#FAF8F2] border-2 border-[#18191B] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#18191B] relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#D8D2C2] pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#E89228]" />
              <h3 className="text-lg font-bold font-sans uppercase text-[#18191B]">
                Why Quantum-Inspired Math? (In Plain English)
              </h3>
            </div>
            <span className="rubber-stamp stamp-green text-[10px]">THE INTUITIVE ANALOGY</span>
          </div>

          <blockquote className="text-sm sm:text-base text-[#18191B] font-sans leading-relaxed italic">
            &ldquo;Traditional routing software solves problems like an ant walking through a maze—one turn at a time, 
            often getting permanently trapped in expensive local dead-ends. <strong>Quantum-inspired Simulated Annealing</strong> acts 
            like shaking a container of marbles until they effortlessly settle into the lowest gravitational hollows. 
            By expressing regional vehicle capacities and delivery deadlines as an energy equation (QUBO), the system evaluates 
            millions of bundling combinations simultaneously, discovering the global lowest-cost transport plan in 1.45 seconds on normal computers.&rdquo;
          </blockquote>

          <div className="mt-4 pt-3 border-t border-[#D8D2C2] flex flex-wrap items-center gap-6 text-xs font-mono text-[#5A5E69]">
            <span>FORMULATION: <strong>QUBO Binary Energy Minimization: E(x) = xᵀ Q x</strong></span>
            <span>·</span>
            <span>SOLVER EXECUTION: <strong>Classical Hardware Compatible (No Quantum Rig Needed)</strong></span>
          </div>
        </div>

        {/* Interactive Visual Route Map & Comparison Studio */}
        <div className="bg-[#18191B] text-[#F6F3EA] border-4 border-[#25272B] rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-8">
          {/* Top Control Bar with Toggle Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3A3D44] pb-6">
            <div>
              <span className="text-xs font-mono text-[#E89228] font-bold uppercase tracking-widest block mb-1">
                INTERACTIVE CORRIDOR SIMULATOR
              </span>
              <h4 className="text-xl sm:text-2xl font-black font-sans uppercase">
                Compare Dispatch Approaches on NH-75
              </h4>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center bg-[#111214] border-2 border-[#3A3D44] rounded-xl p-1">
              <button
                onClick={() => setViewMode("uncoordinated")}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  viewMode === "uncoordinated"
                    ? "bg-[#DC2626] text-white shadow-md"
                    : "text-[#A6ABBA] hover:text-white"
                }`}
              >
                🔴 UNCOORDINATED TRADITIONAL DISPATCH
              </button>
              <button
                onClick={() => setViewMode("optimized")}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  viewMode === "optimized"
                    ? "bg-[#16A34A] text-white shadow-md"
                    : "text-[#A6ABBA] hover:text-white"
                }`}
              >
                🟢 FREIGHTGRID OPTIMIZED (QUBO + OSRM)
              </button>
            </div>
          </div>

          {/* Interactive Visual SVG Route Graphic */}
          <div className="relative w-full h-80 sm:h-96 bg-[#111214] border-2 border-[#3A3D44] rounded-2xl overflow-hidden p-6 flex items-center justify-center">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 blueprint-grid pointer-events-none" />

            {/* Interactive SVG Diagram representing the Geographic Route */}
            <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 320" fill="none">
              {/* Waypoint Nodes */}
              {/* Node 1: Srinivaspur */}
              <circle cx="100" cy="80" r="14" fill="#FAF8F2" stroke="#18191B" strokeWidth="4" />
              <text x="100" y="50" textAnchor="middle" fill="#FAF8F2" fontSize="12" fontFamily="monospace" fontWeight="bold">
                KM 08 · Ramesh (2.0T)
              </text>

              {/* Node 2: Mulbagal */}
              <circle cx="280" cy="240" r="14" fill="#FAF8F2" stroke="#18191B" strokeWidth="4" />
              <text x="280" y="280" textAnchor="middle" fill="#FAF8F2" fontSize="12" fontFamily="monospace" fontWeight="bold">
                KM 19 · Suresh (1.0T)
              </text>

              {/* Node 3: Hoskote */}
              <circle cx="500" cy="110" r="14" fill="#FAF8F2" stroke="#18191B" strokeWidth="4" />
              <text x="500" y="80" textAnchor="middle" fill="#FAF8F2" fontSize="12" fontFamily="monospace" fontWeight="bold">
                KM 44 · Ram (0.8T)
              </text>

              {/* Node 4: KR Market Yard */}
              <circle cx="720" cy="170" r="20" fill="#16A34A" stroke="#FAF8F2" strokeWidth="4" />
              <text x="720" y="220" textAnchor="middle" fill="#16A34A" fontSize="14" fontFamily="monospace" fontWeight="bold">
                KR MARKET YARD
              </text>

              {/* Route Lines Based on Selected Mode */}
              {viewMode === "uncoordinated" ? (
                // 3 Separate Chaotic Paths
                <g>
                  {/* Trip 1 */}
                  <path d="M 100 80 Q 400 30 720 170" stroke="#DC2626" strokeWidth="3" strokeDasharray="6 6" />
                  <text x="360" y="60" fill="#DC2626" fontSize="11" fontFamily="monospace">Trip 1: Solo Mini-Truck (2.0T / ₹2,400)</text>

                  {/* Trip 2 */}
                  <path d="M 280 240 Q 500 270 720 170" stroke="#DC2626" strokeWidth="3" strokeDasharray="6 6" />
                  <text x="440" y="270" fill="#DC2626" fontSize="11" fontFamily="monospace">Trip 2: Solo Mini-Truck (1.0T / ₹1,800)</text>

                  {/* Trip 3 */}
                  <path d="M 500 110 L 720 170" stroke="#DC2626" strokeWidth="3" strokeDasharray="6 6" />
                  <text x="580" y="130" fill="#DC2626" fontSize="11" fontFamily="monospace">Trip 3: Solo Auto/Truck (0.8T / ₹1,500)</text>
                </g>
              ) : (
                // 1 Single Optimized Daisy-Chain Path
                <g>
                  <path
                    d="M 100 80 L 280 240 L 500 110 L 720 170"
                    stroke="#16A34A"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Glowing Pulse Signal */}
                  <circle cx="280" cy="240" r="8" fill="#E89228" className="animate-ping" />
                  <circle cx="500" cy="110" r="8" fill="#E89228" className="animate-ping" />

                  <text x="360" y="160" fill="#E89228" fontSize="13" fontFamily="monospace" fontWeight="bold">
                    1 SINGLE CONSOLIDATED TATA 407 (3.8T / ₹3,600)
                  </text>
                </g>
              )}
            </svg>

            {/* Mode Banner Overlay */}
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between text-xs font-mono bg-[#18191B]/90 px-4 py-2 rounded-xl border border-[#3A3D44]">
              {viewMode === "uncoordinated" ? (
                <>
                  <span className="text-[#DC2626] font-bold flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> 3 VEHICLES DISPATCHED · 205 TOTAL KM · ZERO RETURN LOAD
                  </span>
                  <span className="text-[#DC2626] font-black">TOTAL SPEND: ₹5,700</span>
                </>
              ) : (
                <>
                  <span className="text-[#16A34A] font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> 1 VEHICLE CONSOLIDATED · 75.1 KM (INCL. DETOURS) · 76% UTILIZATION
                  </span>
                  <span className="text-[#16A34A] font-black">TOTAL SPEND: ₹3,600 (SAVE ₹2,100)</span>
                </>
              )}
            </div>
          </div>

          {/* Key Metric Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-[#111214] border border-[#3A3D44] p-4 rounded-xl">
              <span className="text-[#808593] block mb-1">TOTAL FLEET TRIPS</span>
              <span className={`text-2xl font-black ${viewMode === "uncoordinated" ? "text-[#DC2626]" : "text-[#16A34A]"}`}>
                {viewMode === "uncoordinated" ? "3 Trucks" : "1 Truck (-66%)"}
              </span>
            </div>

            <div className="bg-[#111214] border border-[#3A3D44] p-4 rounded-xl">
              <span className="text-[#808593] block mb-1">CAPACITY UTILIZATION</span>
              <span className={`text-2xl font-black ${viewMode === "uncoordinated" ? "text-[#DC2626]" : "text-[#16A34A]"}`}>
                {viewMode === "uncoordinated" ? "38% Average" : "76% Optimal"}
              </span>
            </div>

            <div className="bg-[#111214] border border-[#3A3D44] p-4 rounded-xl">
              <span className="text-[#808593] block mb-1">TOTAL FUEL DIESEL SPENT</span>
              <span className={`text-2xl font-black ${viewMode === "uncoordinated" ? "text-[#DC2626]" : "text-[#16A34A]"}`}>
                {viewMode === "uncoordinated" ? "₹2,680" : "₹1,120 (-58%)"}
              </span>
            </div>

            <div className="bg-[#111214] border border-[#3A3D44] p-4 rounded-xl">
              <span className="text-[#808593] block mb-1">TOTAL FARMER SPEND</span>
              <span className={`text-2xl font-black ${viewMode === "uncoordinated" ? "text-[#DC2626]" : "text-[#16A34A]"}`}>
                {viewMode === "uncoordinated" ? "₹5,700" : "₹3,600 (Saved ₹2,100)"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
