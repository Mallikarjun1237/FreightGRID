"use client";

import React, { useState } from "react";
import { Check, Info, FileSpreadsheet, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function LorryBiltiSection() {
  const [stamped, setStamped] = useState(false);

  const triggerStamp = () => {
    setStamped(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#E89228", "#16A34A", "#18191B"],
    });
  };

  return (
    <section className="w-full bg-[#FAF8F2] border-b border-[#D8D2C2] py-24 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C2] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="rubber-stamp stamp-green text-xs">SECTION 05 · ECONOMIC TRANSPARENCY</span>
              <span className="text-xs font-mono text-[#5A5E69]">MARGINAL COST SHARING MODEL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18191B] tracking-tight uppercase leading-tight font-sans">
              The Money Reveal: <br />
              <span className="text-[#16A34A]">Every Participant Pays Less.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A5E69] max-w-md font-sans leading-relaxed">
            Pooling only works when farmers trust the split. FREIGHTGRID allocates costs based on 
            weight, distance, and detour contribution using cooperative marginal-cost game theory.
          </p>
        </div>

        {/* The Skeuomorphic Lorry Bilti (Consignment Note) */}
        <div className="max-w-4xl mx-auto w-full bilti-paper rounded-2xl p-6 sm:p-10 border-2 border-[#D8D1BD] shadow-2xl relative">
          {/* Top Bilti Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-dashed border-[#D8D1BD] pb-6">
            <div>
              <span className="text-xs font-mono text-[#808593] uppercase tracking-widest block">
                CONSIGNMENT NOTE / BILTI NO.
              </span>
              <p className="text-2xl sm:text-3xl font-black font-mono text-[#DC2626]">
                LR-2026/KA-4819
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-[#808593] uppercase tracking-widest block">
                CARRIER &amp; REGION
              </span>
              <p className="text-base font-bold font-sans text-[#18191B]">
                Manjunath Transport Co-op (Kolar)
              </p>
              <p className="text-xs font-mono text-[#5A5E69]">VEHICLE: TATA 407 (KA-07-E-4819)</p>
            </div>
          </div>

          {/* Table of Shipments & Math Breakdown */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full text-left font-mono text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-[#18191B] text-[#18191B] uppercase">
                  <th className="py-3 px-2">Shipper &amp; Cargo</th>
                  <th className="py-3 px-2">Weight</th>
                  <th className="py-3 px-2">Solo Rate</th>
                  <th className="py-3 px-2 text-[#16A34A] font-extrabold">Pooled Share</th>
                  <th className="py-3 px-2 text-right">Net Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8D1BD] text-[#18191B]">
                <tr>
                  <td className="py-4 px-2 font-semibold">
                    Anjanappa (Srinivaspur)
                    <span className="block text-[11px] text-[#5A5E69]">85 Crates Ripe Tomatoes</span>
                  </td>
                  <td className="py-4 px-2">2.0 T</td>
                  <td className="py-4 px-2 line-through text-[#DC2626]">₹2,400</td>
                  <td className="py-4 px-2 font-black text-base text-[#16A34A]">₹1,895</td>
                  <td className="py-4 px-2 text-right font-black text-[#16A34A]">
                    ₹505 (21%)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-2 font-semibold">
                    Gowramma (Mulbagal)
                    <span className="block text-[11px] text-[#5A5E69]">40 Gunny Bags Cabbages</span>
                  </td>
                  <td className="py-4 px-2">1.0 T</td>
                  <td className="py-4 px-2 line-through text-[#DC2626]">₹1,800</td>
                  <td className="py-4 px-2 font-black text-base text-[#16A34A]">₹947</td>
                  <td className="py-4 px-2 text-right font-black text-[#16A34A]">
                    ₹853 (47%)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-2 font-semibold">
                    Prashanth Traders (Hoskote)
                    <span className="block text-[11px] text-[#5A5E69]">18 Cartons Hardware &amp; Seeds</span>
                  </td>
                  <td className="py-4 px-2">0.8 T</td>
                  <td className="py-4 px-2 line-through text-[#DC2626]">₹1,500</td>
                  <td className="py-4 px-2 font-black text-base text-[#16A34A]">₹758</td>
                  <td className="py-4 px-2 text-right font-black text-[#16A34A]">
                    ₹742 (49%)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Totals & Stamping Footer */}
          <div className="bg-[#FAF8F2] border-2 border-[#18191B] p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-mono text-[#5A5E69] uppercase">
                TOTAL TRIP INVOICE SUMMARY
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-mono line-through text-[#DC2626]">
                  SOLO SUM: ₹5,700
                </span>
                <span className="text-2xl sm:text-3xl font-mono font-black text-[#18191B]">
                  CONSOLIDATED: ₹3,600
                </span>
              </div>
              <p className="text-xs text-[#5A5E69]">
                Shared truck bill covers fuel, driver toll, driver allowance, and operator margin.
              </p>
            </div>

            {/* Rubber Stamp Interaction */}
            <div className="flex items-center gap-4">
              <button
                onClick={triggerStamp}
                className="rubber-stamp stamp-green text-sm sm:text-base py-3 px-6 shadow-lg hover:scale-105 transition-transform cursor-pointer"
              >
                {stamped ? "✓ CONFIRMED: ₹2,100 SAVED" : "CLICK TO STAMP SAVINGS"}
              </button>
            </div>
          </div>

          {/* Watermark Stamp Overlay */}
          {stamped && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 rotate-[-18deg] select-none text-center">
              <div className="border-8 border-[#16A34A] rounded-3xl p-8 text-6xl sm:text-8xl font-black font-mono text-[#16A34A] tracking-widest uppercase">
                SETTLED
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
