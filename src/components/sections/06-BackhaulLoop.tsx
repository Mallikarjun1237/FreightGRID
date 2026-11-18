"use client";

import React from "react";
import { CornerDownLeft, ArrowRight, ShieldCheck, DollarSign, Leaf } from "lucide-react";
import { CORRIDOR_DATA } from "@/lib/constants";

export default function BackhaulLoopSection() {
  const { backhaul } = CORRIDOR_DATA;

  return (
    <section className="w-full bg-[#F6F3EA] border-b border-[#D8D2C2] py-24 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C2] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="rubber-stamp stamp-amber text-xs">SECTION 06 · BACKHAUL LOGISTICS</span>
              <span className="text-xs font-mono text-[#5A5E69]">RETURN LOAD INTELLIGENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18191B] tracking-tight uppercase leading-tight font-sans">
              Eliminating the empty return: <br />
              <span className="text-[#E89228]">Zero Deadhead Kilometers.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A5E69] max-w-md font-sans leading-relaxed">
            When a truck drops produce in Bengaluru, standard practice is returning empty. 
            FREIGHTGRID scans reverse logistics demand to fill the return leg with agricultural inputs.
          </p>
        </div>

        {/* Visual Comparison: Two Legs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Leg 1: Outbound Mandi Run */}
          <div className="bg-[#FAF8F2] border-2 border-[#18191B] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#18191B] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#D8D2C2] pb-4 mb-6">
                <span className="text-xs font-mono font-bold text-[#5A5E69] uppercase">
                  LEG 01 // OUTBOUND TRIP
                </span>
                <span className="rubber-stamp stamp-green text-[10px]">PRODUCE DELIVERY</span>
              </div>

              <div className="flex items-center gap-3 text-lg font-bold font-sans text-[#18191B] mb-2">
                <span>Kolar Farms</span>
                <ArrowRight className="w-5 h-5 text-[#E89228]" />
                <span>KR Market Yard</span>
              </div>
              <p className="text-xs font-mono text-[#5A5E69]">DISTANCE: 68.4 KM · TIME: 04:30 - 07:15 IST</p>

              <div className="mt-6 bg-[#EBE6D8] p-4 rounded-xl space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#5A5E69]">PAYLOAD:</span>
                  <span className="font-bold text-[#18191B]">3.8 T (Tomatoes, Cabbages, Seeds)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5A5E69]">REVENUE COLLECTED:</span>
                  <span className="font-bold text-[#16A34A]">₹3,600 (Pooled Freight)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5A5E69]">UNLOAD COMPLETED:</span>
                  <span className="text-[#18191B]">07:30 IST at KR Market Shed 4</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D8D2C2] text-xs font-mono text-[#5A5E69]">
              WITHOUT FREIGHTGRID: Driver drives back 68 km empty, burning ₹1,400 diesel with zero earnings.
            </div>
          </div>

          {/* Leg 2: Inbound Backhaul Match */}
          <div className="bg-[#18191B] text-[#F6F3EA] border-2 border-[#25272B] rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between border-b border-[#3A3D44] pb-4 mb-6">
                <span className="text-xs font-mono font-bold text-[#E89228] uppercase">
                  LEG 02 // RETURN BACKHAUL MATCH
                </span>
                <span className="rubber-stamp stamp-amber text-[10px]">REVERSE FREIGHT FOUND</span>
              </div>

              <div className="flex items-center gap-3 text-lg font-bold font-sans text-[#F6F3EA] mb-2">
                <span>Yeshwanthpur Agro Depot</span>
                <CornerDownLeft className="w-5 h-5 text-[#16A34A]" />
                <span>Kolar Co-op Union</span>
              </div>
              <p className="text-xs font-mono text-[#A6ABBA]">MATCH IDENTIFIED: {backhaul.id}</p>

              <div className="mt-6 bg-[#111214] border border-[#3A3D44] p-4 rounded-xl space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#808593]">CARGO:</span>
                  <span className="font-bold text-[#F6F3EA]">{backhaul.cargo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#808593]">WEIGHT:</span>
                  <span className="font-bold text-[#E89228]">{backhaul.weightTonnes} TONNES</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#808593]">ROUTE DEVIATION:</span>
                  <span className="text-[#A6ABBA]">+{backhaul.routeDeviationKm} KM ONLY</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-[#3A3D44] text-[#16A34A] font-bold">
                  <span>ADDITIONAL RETURN EARNINGS:</span>
                  <span>+₹{backhaul.returnEarnings}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#3A3D44] flex items-center justify-between text-xs font-mono text-[#16A34A]">
              <span className="flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-[#16A34A]" />
                <span>{backhaul.deadheadSavedKm} KM EMPTY TRAVEL AVOIDED</span>
              </span>
              <span className="font-bold">STATUS: MATCHED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
