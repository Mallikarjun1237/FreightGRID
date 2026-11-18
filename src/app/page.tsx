"use client";

import TopBar from "@/components/navigation/TopBar";
import HeroSection from "@/components/sections/01-Hero";
import DeadheadVoidSection from "@/components/sections/02-DeadheadVoid";
import InteractiveRoutePlayground from "@/components/sections/InteractiveRoutePlayground";
import VoiceAssistantSection from "@/components/sections/VoiceAssistantSection";
import HighwayCorridorSection from "@/components/sections/03-HighwayCorridor";
import QuboEngineSection from "@/components/sections/04-QuboEngine";
import LorryBiltiSection from "@/components/sections/05-LorryBilti";
import BackhaulLoopSection from "@/components/sections/06-BackhaulLoop";
import DossierStackSection from "@/components/sections/07-DossierStack";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#F6F3EA] text-[#18191B] overflow-x-clip">
      {/* Top Telemetry Header (Harmonized, uniform button heights & shapes) */}
      <TopBar />

      {/* Section 01: Hero with Scrubbing Odometer traveling completely to left edge */}
      <HeroSection />

      {/* Section 02: Ground Reality & Why Uber for Trucks Fails */}
      <DeadheadVoidSection />

      {/* Interactive Node-Linking Simulation Game */}
      <InteractiveRoutePlayground />

      {/* Voice Assistant: Multilingual Voice Dispatch Interface */}
      <VoiceAssistantSection />

      {/* Section 03: The Pinned Horizontal Highway (Broader Road + Wider Spacing) */}
      <HighwayCorridorSection />

      {/* Section 04: The Two-Stage QUBO Optimization & Visual Interactive Route Map */}
      <QuboEngineSection />

      {/* Section 05: The Lorry Bilti & Money Reveal */}
      <LorryBiltiSection />

      {/* Section 06: Backhaul Reverse Freight Matching */}
      <BackhaulLoopSection />

      {/* Section 07: Layered Stacking Folds (Benchmarks, Stakeholder Network, Manifesto) */}
      <DossierStackSection />

      {/* Production Footer */}
      <footer className="w-full bg-[#111214] text-[#F6F3EA] py-12 px-4 md:px-12 border-t border-[#25272B] text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-extrabold text-sm font-sans tracking-wider text-[#E89228]">
              FREIGHTGRID // BHARAT FREIGHT INTELLIGENCE NETWORK
            </span>
            <span className="text-[#808593]">
              Autonomous Rural Freight Optimization &amp; Collaborative Multi-Tenant Logistics
            </span>
          </div>
          <div className="flex items-center gap-6 text-[#A6ABBA]">
            <span>OPEN TO FARMERS, TRANSPORTERS &amp; TRADERS</span>
            <span>·</span>
            <span>MATHEMATICALLY VERIFIED</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
