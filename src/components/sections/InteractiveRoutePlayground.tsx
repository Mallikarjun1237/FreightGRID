"use client";

import React, { useState } from "react";
import { Truck, RotateCcw, Play, CheckCircle2, MapPin, Sparkles, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";

interface NodePoint {
  id: string;
  name: string;
  commodity: string;
  weightTonnes: number;
  x: number; // Percentage on canvas 0-100
  y: number; // Percentage on canvas 0-100
  soloCost: number;
}

const AVAILABLE_NODES: NodePoint[] = [
  { id: "node-1", name: "Srinivaspur North", commodity: "Tomatoes", weightTonnes: 1.8, x: 12, y: 24, soloCost: 2200 },
  { id: "node-2", name: "Mulbagal Cross", commodity: "Cabbages & Beans", weightTonnes: 1.2, x: 28, y: 68, soloCost: 1600 },
  { id: "node-3", name: "Kolar Town Depot", commodity: "Mango Pulp & Veggies", weightTonnes: 1.0, x: 44, y: 30, soloCost: 1500 },
  { id: "node-4", name: "Bangarapet Station", commodity: "Grain Sacks", weightTonnes: 0.9, x: 56, y: 74, soloCost: 1400 },
  { id: "node-5", name: "Hoskote Industrial Gate", commodity: "Agro Hardware & Seeds", weightTonnes: 0.8, x: 72, y: 28, soloCost: 1300 },
  { id: "node-6", name: "KR Market Wholesale Yard", commodity: "Final Delivery Hub", weightTonnes: 0, x: 90, y: 55, soloCost: 0 },
];

export default function InteractiveRoutePlayground() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["node-1"]);
  const [truckStep, setTruckStep] = useState<number>(0);
  const [isDispatching, setIsDispatching] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const selectedNodes = selectedIds.map((id) => AVAILABLE_NODES.find((n) => n.id === id)!);
  const totalWeight = selectedNodes.reduce((acc, curr) => acc + curr.weightTonnes, 0);
  const soloSum = selectedNodes.reduce((acc, curr) => acc + curr.soloCost, 0);
  const pooledCost = Math.round(soloSum * 0.62);
  const savedAmount = soloSum - pooledCost;

  const handleNodeClick = (node: NodePoint) => {
    if (isDispatching) return;

    if (selectedIds.includes(node.id)) {
      if (node.id === "node-1" && selectedIds.length === 1) return;
      setSelectedIds(selectedIds.filter((id) => id !== node.id));
      setIsCompleted(false);
    } else {
      if (totalWeight + node.weightTonnes > 5.0 && node.id !== "node-6") {
        alert("Vehicle capacity limit reached (5.0 Tonnes max rated payload).");
        return;
      }
      setSelectedIds([...selectedIds, node.id]);
      setIsCompleted(false);
    }
  };

  const handleReset = () => {
    setSelectedIds(["node-1"]);
    setTruckStep(0);
    setIsDispatching(false);
    setIsCompleted(false);
  };

  const fireGrandCelebration = () => {
    // 1. Initial High Velocity Center Burst
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.55 },
      colors: ["#E89228", "#16A34A", "#F6F3EA", "#FFD700", "#FF4500", "#2563EB"],
      ticks: 350,
      gravity: 0.8,
      scalar: 1.2,
    });

    // 2. Dual Side Cannons Running Continuously for 2.2 Seconds
    const end = Date.now() + 2200;
    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      // Left Cannon
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 60,
        origin: { x: 0.05, y: 0.65 },
        colors: ["#E89228", "#16A34A", "#FFD700", "#F6F3EA"],
      });

      // Right Cannon
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 60,
        origin: { x: 0.95, y: 0.65 },
        colors: ["#E89228", "#16A34A", "#FFD700", "#F6F3EA"],
      });
    }, 80);
  };

  const handleStartDispatch = () => {
    if (selectedIds.length < 2) return;
    setIsDispatching(true);
    setIsCompleted(false);
    setTruckStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step >= selectedIds.length) {
        clearInterval(interval);
        setIsDispatching(false);
        setIsCompleted(true);
        fireGrandCelebration();
      } else {
        setTruckStep(step);
      }
    }, 850);
  };

  const currentTruckPos = selectedNodes[truckStep] || selectedNodes[0];

  return (
    <section id="route-playground" className="w-full bg-[#FAF8F2] border-b border-[#D8D2C2] py-24 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C2] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rubber-stamp stamp-green text-xs">INTERACTIVE SIMULATION LAB</span>
              <span className="text-xs font-mono text-[#5A5E69]">CLICK TO BUILD MULTI-TENANT BUNDLE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18191B] tracking-tight uppercase leading-tight font-sans">
              Connect Nodes &amp; Watch The Truck Move.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A5E69] max-w-md font-sans leading-relaxed">
            Click on farm nodes to link them with glowing transit beams. Watch real-time cargo 
            aggregation, then dispatch the 2D Tata 407 to complete the run!
          </p>
        </div>

        {/* The Interactive Interactive Map Board */}
        <div className="bg-[#18191B] border-4 border-[#25272B] rounded-3xl p-6 sm:p-10 shadow-2xl relative flex flex-col gap-6 text-[#F6F3EA]">
          {/* Top Control Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#3A3D44] pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#E89228] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping" />
                ACTIVE DISPATCH GRID:
              </span>
              <span className="text-xs font-mono text-[#A6ABBA]">
                {selectedIds.length} Nodes Connected · Total Load: <strong className="text-[#16A34A]">{totalWeight.toFixed(1)} / 5.0 T</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                disabled={isDispatching}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25272B] text-xs font-mono text-[#A6ABBA] hover:text-white hover:bg-[#3A3D44] transition-all disabled:opacity-40"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Path</span>
              </button>

              <button
                onClick={handleStartDispatch}
                disabled={isDispatching || selectedIds.length < 2}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#E89228] text-[#18191B] font-sans font-black text-xs uppercase tracking-wider hover:bg-[#F5A338] transition-all shadow-[3px_3px_0px_0px_#FAF8F2] active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-40"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isDispatching ? "VEHICLE IN TRANSIT..." : "DISPATCH TATA 407 TRUCK"}</span>
              </button>
            </div>
          </div>

          {/* Interactive Node Graph Arena with SVG Animated Glowing Light Beams */}
          <div className="relative w-full h-[420px] sm:h-[500px] bg-[#111214] border-2 border-[#3A3D44] rounded-2xl overflow-hidden p-4 select-none">
            {/* Topographical grid texture */}
            <div className="absolute inset-0 opacity-15 blueprint-grid pointer-events-none" />

            {/* SVG Connecting Animated Beams of Light */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Glowing Filter for the Luminous Laser Beam */}
                <filter id="luminous-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Individual Animated Line Segments Between Connected Nodes */}
              {selectedNodes.map((node, i) => {
                if (i === 0) return null;
                const prev = selectedNodes[i - 1];
                const x1 = (prev.x / 100) * 1000;
                const y1 = (prev.y / 100) * 500;
                const x2 = (node.x / 100) * 1000;
                const y2 = (node.y / 100) * 500;

                return (
                  <g key={`${prev.id}-${node.id}`}>
                    {/* Outer Neon Glow Beam */}
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#E89228"
                      strokeWidth="8"
                      strokeOpacity="0.4"
                      strokeLinecap="round"
                      filter="url(#luminous-glow)"
                    />
                    {/* Inner Intense Light Ray with Dash Animation */}
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#FAF8F2"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray={isDispatching ? "12 8" : "none"}
                    />
                    {/* Bright Travelling Light Tracer Pulse */}
                    <circle cx={(x1 + x2) / 2} cy={(y1 + y2) / 2} r="4" fill="#16A34A">
                      <animate
                        attributeName="r"
                        values="3;7;3"
                        dur="1.2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* Traveling 2D Truck Sprite that animates from node to node */}
            {selectedNodes.length > 0 && (
              <div
                className="absolute z-30 transition-all duration-700 ease-in-out -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${currentTruckPos.x}%`,
                  top: `${currentTruckPos.y}%`,
                }}
              >
                <div className="bg-[#FAF8F2] text-[#18191B] border-2 border-[#E89228] px-3.5 py-1.5 rounded-xl shadow-[0_0_20px_rgba(232,146,40,0.6)] flex items-center gap-2 font-mono text-[11px] font-extrabold animate-bounce">
                  <Truck className="w-4 h-4 text-[#E89228]" />
                  <span>TATA 407 ({totalWeight.toFixed(1)}T)</span>
                </div>
              </div>
            )}

            {/* Clickable Waypoint Nodes */}
            {AVAILABLE_NODES.map((node) => {
              const isSelected = selectedIds.includes(node.id);
              const orderIndex = selectedIds.indexOf(node.id);

              return (
                <div
                  key={node.id}
                  onClick={() => handleNodeClick(node)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  {/* Pin Node Outer Ring */}
                  <div
                    className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full border-3 flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-[#E89228] border-white scale-110 shadow-[0_0_25px_rgba(232,146,40,0.9)]"
                        : "bg-[#1F2126] border-[#3A3D44] hover:border-[#E89228] hover:scale-105"
                    }`}
                  >
                    {isSelected ? (
                      <span className="font-mono font-black text-xs text-[#18191B]">
                        #{orderIndex + 1}
                      </span>
                    ) : (
                      <MapPin className="w-4 h-4 text-[#A6ABBA] group-hover:text-[#E89228]" />
                    )}
                  </div>

                  {/* Node Label Tooltip */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 mt-2 w-44 p-2 rounded-lg border text-center transition-all font-mono text-[10px] ${
                      isSelected
                        ? "bg-[#FAF8F2] text-[#18191B] border-[#E89228] shadow-lg z-30 scale-105"
                        : "bg-[#1F2126]/90 text-[#A6ABBA] border-[#3A3D44] opacity-80 group-hover:opacity-100"
                    }`}
                  >
                    <strong className="block font-bold text-[11px] text-[#18191B] dark:text-[#F6F3EA]">
                      {node.name}
                    </strong>
                    <span>{node.commodity}</span>
                    {node.weightTonnes > 0 && (
                      <span className="block text-[#E89228] font-bold">+{node.weightTonnes} Tonnes</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real-time Trip Optimization Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-[#111214] border border-[#3A3D44] p-3.5 rounded-xl">
              <span className="text-[#808593] block mb-1">STOPS LINKED</span>
              <span className="text-xl font-black text-[#F6F3EA]">{selectedIds.length} Waypoints</span>
            </div>

            <div className="bg-[#111214] border border-[#3A3D44] p-3.5 rounded-xl">
              <span className="text-[#808593] block mb-1">CUMULATIVE PAYLOAD</span>
              <span className="text-xl font-black text-[#16A34A]">{totalWeight.toFixed(1)} / 5.0 Tonnes</span>
            </div>

            <div className="bg-[#111214] border border-[#3A3D44] p-3.5 rounded-xl">
              <span className="text-[#808593] block mb-1">SOLO DISPATCH COST</span>
              <span className="text-xl font-black text-[#DC2626] line-through">₹{soloSum.toLocaleString("en-IN")}</span>
            </div>

            <div className="bg-[#111214] border border-[#3A3D44] p-3.5 rounded-xl">
              <span className="text-[#808593] block mb-1">OPTIMIZED POOLED COST</span>
              <span className="text-xl font-black text-[#E89228]">₹{pooledCost.toLocaleString("en-IN")}</span>
            </div>
          </div>

          {/* Completion Celebration Notification Banner */}
          {isCompleted && (
            <div className="p-5 rounded-2xl bg-[#16A34A]/20 border-2 border-[#16A34A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#16A34A] shadow-[0_0_30px_rgba(22,163,74,0.3)] animate-pulse">
              <div className="flex items-center gap-3">
                <PartyPopper className="w-6 h-6 text-[#16A34A] shrink-0" />
                <div>
                  <span className="font-extrabold text-sm block">
                    PARTY CELEBRATION! CONSIGNMENTS DELIVERED TO KR MARKET!
                  </span>
                  <span className="text-[#F6F3EA]">
                    All {selectedIds.length} farm loads successfully pooled. Shippers saved a combined <strong>₹{savedAmount.toLocaleString("en-IN")} (38%)</strong>!
                  </span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-[#16A34A] text-[#18191B] font-extrabold font-sans text-xs uppercase hover:bg-[#22C55E] transition-all shrink-0"
              >
                TRY ANOTHER COMBINATION ➔
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
