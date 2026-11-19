"use client";

import React from "react";
import { CheckCircle2, XCircle, TrendingDown, Fuel, Users } from "lucide-react";

export default function DeadheadVoidSection() {
  return (
    <section className="w-full bg-[#FAF8F2] border-b border-[#D8D2C2] py-20 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C2] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="rubber-stamp stamp-red text-xs">SECTION 02 · ECONOMIC ANALYSIS</span>
              <span className="text-xs font-mono text-[#5A5E69]">THE DEADHEAD VOID IN RURAL FREIGHT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18191B] tracking-tight uppercase leading-tight font-sans">
              Why rural freight is broken <br />
              <span className="text-[#DC2626]">and why individual charter fails.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A5E69] max-w-md font-sans leading-relaxed">
            Every farmer books alone, every truck runs alone, and nobody sees the whole picture. 
            Because empty returns must be paid for somewhere, transporters charge double the one-way fare to the first shipper.
          </p>
        </div>

        {/* 3 Hard Facts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F6F3EA] border-2 border-[#18191B] p-6 rounded-xl shadow-[4px_4px_0px_0px_#18191B] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#5A5E69]">OPERATIONAL LOSS RATE</span>
                <Fuel className="w-5 h-5 text-[#DC2626]" />
              </div>
              <p className="text-4xl sm:text-5xl font-mono font-black text-[#18191B] tracking-tight">35–45%</p>
              <h3 className="text-lg font-bold text-[#18191B] mt-2 uppercase font-sans">Trips Return Empty</h3>
            </div>
            <p className="text-xs text-[#5A5E69] mt-4 font-sans leading-normal">
              Trucks return from regional mandis with zero payload (deadheading), burning diesel and emitting carbon without producing economic value.
            </p>
          </div>

          <div className="bg-[#F6F3EA] border-2 border-[#18191B] p-6 rounded-xl shadow-[4px_4px_0px_0px_#18191B] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#5A5E69]">PART-LOAD PENALTY</span>
                <TrendingDown className="w-5 h-5 text-[#DC2626]" />
              </div>
              <p className="text-4xl sm:text-5xl font-mono font-black text-[#18191B] tracking-tight">+40%</p>
              <h3 className="text-lg font-bold text-[#18191B] mt-2 uppercase font-sans">LTL Surcharge</h3>
            </div>
            <p className="text-xs text-[#5A5E69] mt-4 font-sans leading-normal">
              A farmer or small shopkeeper with only 1 tonne of cargo must pay full mini-truck charter rates or wait days for an informal broker to pool it.
            </p>
          </div>

          <div className="bg-[#F6F3EA] border-2 border-[#18191B] p-6 rounded-xl shadow-[4px_4px_0px_0px_#18191B] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#5A5E69]">BATCH CONSTRAINTS</span>
                <Users className="w-5 h-5 text-[#E89228]" />
              </div>
              <p className="text-4xl sm:text-5xl font-mono font-black text-[#18191B] tracking-tight">0.5 – 2 T</p>
              <h3 className="text-lg font-bold text-[#18191B] mt-2 uppercase font-sans">Fragmented Demand</h3>
            </div>
            <p className="text-xs text-[#5A5E69] mt-4 font-sans leading-normal">
              Small and marginal farmers harvest in daily micro-batches that cannot fill a standard 5-tonne truck, creating severe pooling friction.
            </p>
          </div>
        </div>

        {/* The Fundamental Insight: Individual Charter vs Hotspot Coordination */}
        <div className="border-2 border-[#18191B] rounded-2xl bg-[#F6F3EA] p-6 md:p-10 shadow-[6px_6px_0px_0px_#18191B]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="rubber-stamp stamp-amber text-xs mb-2">SYSTEM ARCHITECTURE THESIS</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#18191B] uppercase tracking-tight font-sans">
              Why Point-to-Point Charter Apps Fail in Rural Logistics
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5E69] mt-2">
              Rural freight is an <strong>inventory aggregation problem</strong>, not an individual booking problem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* The Flawed Approach */}
            <div className="bg-[#FAF8F2] border-2 border-[#DC2626]/40 rounded-xl p-6 relative flex flex-col justify-between">
              <div className="absolute -top-3 left-6 bg-[#DC2626] text-white px-3 py-0.5 rounded text-xs font-mono font-bold uppercase">
                ✕ Individual Charter Booking
              </div>
              <div className="pt-2">
                <p className="text-sm font-semibold text-[#DC2626] uppercase font-mono tracking-wide mb-4">
                  What traditional booking platforms try:
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-[#5A5E69] font-sans">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>Forces drivers and farmers to install complex apps and read English notifications.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>Treats each 1-tonne harvest as a private chartered trip, multiplying costs and empty return trips.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>Requires mandatory digital escrow, alienating cash-reliant rural transport operators.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DC2626]/20 text-xs font-mono text-[#DC2626]">
                FIELD RESULT: 92% churn rate within 30 days due to high costs and zero local trust.
              </div>
            </div>

            {/* The FREIGHTGRID Approach */}
            <div className="bg-[#FAF8F2] border-2 border-[#16A34A] rounded-xl p-6 relative flex flex-col justify-between">
              <div className="absolute -top-3 left-6 bg-[#16A34A] text-white px-3 py-0.5 rounded text-xs font-mono font-bold uppercase">
                ✓ FREIGHTGRID Hotspot Inventory
              </div>
              <div className="pt-2">
                <p className="text-sm font-semibold text-[#16A34A] uppercase font-mono tracking-wide mb-4">
                  How our system operates in practice:
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-[#18191B] font-sans">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span><strong>Shared Vehicle Hotspot:</strong> Pools nearby tempo capacity and farmer demand into an active local inventory.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span><strong>Pre-Planned Demand Bundling:</strong> Loads are mathematically pooled before any vehicle turns on its engine.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span><strong>Preserves Freedom of Choice:</strong> Transporters take runs by voluntary choice without penalty.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#16A34A]/30 text-xs font-mono text-[#16A34A] font-semibold">
                FIELD RESULT: Frictionless adoption through existing agricultural and transport networks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
