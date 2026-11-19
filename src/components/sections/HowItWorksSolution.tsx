"use client";

import React, { useState } from "react";
import { PhoneCall, Layers, CheckSquare, Receipt, CornerDownLeft, Sparkles, Truck, Users } from "lucide-react";

export default function HowItWorksSolution() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: "1. The Request Arrives (No Smartphone App Needed)",
      subtitle: "DEMAND INTAKE",
      icon: PhoneCall,
      color: "#E89228",
      summary: "A farmer, trader, or village workshop calls in or sends a 10-second voice note in Kannada or Hindi.",
      details: [
        "Ramesh says: 'I have 2 tonnes of tomatoes ready in Srinivaspur, needs to reach KR Market by 6 AM.'",
        "No complex app installation, no OTP logins, no English forms.",
        "The system instantly logs the location, tonnage, commodity type, and delivery deadline.",
      ],
      previewTag: "VOICE / PHONE INTAKE",
    },
    {
      step: 2,
      title: "2. The Pooling Engine Combines Compatible Loads",
      subtitle: "SHARED INVENTORY HOTSPOT",
      icon: Layers,
      color: "#16A34A",
      summary: "Instead of sending separate half-empty tempos, the system acts as a regional freight hotspot, pooling neighbouring loads into available vehicle space.",
      details: [
        "Ramesh (2.0t Tomatoes) + Suresh (1.0t Cabbages) + Ram (0.8t Seeds) = 3.8 Tonnes total.",
        "Consolidates perfectly into 1 local 5-tonne Tata 407 tempo from our active vehicle inventory.",
        "Respects physical rules: Perishable crops never wait, and chemicals never share space with food.",
      ],
      previewTag: "AUTOMATIC MILK-RUN CLUSTERING",
    },
    {
      step: 3,
      title: "3. Transporter Accepts by Choice (Freedom of Route)",
      subtitle: "VOLUNTARY MANIFEST",
      icon: CheckSquare,
      color: "#2563EB",
      summary: "A local tempo or tractor owner receives a complete route proposal with guaranteed earnings and decides whether to accept.",
      details: [
        "Driver gets an SMS / WhatsApp message: '3 pickups along NH-75 · Total payload: 3.8T · Outbound fare: ₹3,600.'",
        "Driver accepts or declines freely—no forced penalties, no algorithmic locks.",
        "The system acts as a coordinator, not an automated dispatcher.",
      ],
      previewTag: "VOLUNTARY ACCEPTANCE",
    },
    {
      step: 4,
      title: "4. Transparent Settlement (Every Farmer Sees the Math)",
      subtitle: "FAIR COST SPLIT",
      icon: Receipt,
      color: "#DC2626",
      summary: "The shared truck bill is divided fairly based on weight, distance, and detour contribution.",
      details: [
        "Total truck cost: ₹3,600 (compared to ₹5,700 if all three hired separate private tempos).",
        "Ramesh pays ₹1,895 (Saves ₹505 · 21%).",
        "Suresh pays ₹947 (Saves ₹853 · 47%).",
        "Ram pays ₹758 (Saves ₹742 · 49%).",
        "Every participant sees the exact receipt showing why their price was set.",
      ],
      previewTag: "COOPERATIVE COST SHARING",
    },
    {
      step: 5,
      title: "5. Return Journey Optimization (Zero Empty Kilometers)",
      subtitle: "BACKHAUL INTEGRATION",
      icon: CornerDownLeft,
      color: "#E89228",
      summary: "Before the vehicle even departs, the system pre-matches reverse demand so the tempo never returns empty.",
      details: [
        "Sham (Agro Input Dealer) needs 3.2 tonnes of IFFCO fertilizer moved from Yeshwanthpur depot back to Kolar.",
        "The vehicle delivers produce at KR Market by 07:15 AM, loads Sham's fertilizer by 08:30 AM, and returns fully laden.",
        "Driver earns an extra +₹2,200 on the return trip; 54 km of empty travel is eliminated.",
      ],
      previewTag: "ZERO DEADHEAD BACKHAUL",
    },
  ];

  const current = steps[activeStep - 1];

  return (
    <section className="w-full bg-[#F6F3EA] border-b border-[#D8D2C2] py-20 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C2] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rubber-stamp stamp-green text-xs">REGIONAL LOGISTICS HOTSPOT</span>
              <span className="text-xs font-mono text-[#5A5E69]">5-STAGE COORDINATION WORKFLOW</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18191B] tracking-tight uppercase leading-tight font-sans">
              What We Build.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A5E69] max-w-md font-sans leading-relaxed">
            FREIGHTGRID operates as a <strong>regional freight hotspot</strong>—a shared inventory of available 
            vehicle capacity and customer demand that clusters nearby loads rather than acting like a traditional booking platform.
          </p>
        </div>

        {/* 5 Interactive Step Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {steps.map((s) => {
            const Icon = s.icon;
            const isActive = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-3.5 rounded-xl border-2 text-left transition-all flex flex-col justify-between gap-3 ${
                  isActive
                    ? "bg-[#18191B] text-[#F6F3EA] border-[#18191B] shadow-[4px_4px_0px_0px_#E89228] scale-[1.02]"
                    : "bg-[#FAF8F2] text-[#18191B] border-[#D8D2C2] hover:border-[#18191B]"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
                    style={{
                      backgroundColor: isActive ? s.color : "#E5DFD0",
                      color: isActive ? "#F6F3EA" : "#18191B",
                    }}
                  >
                    0{s.step}
                  </span>
                  <Icon className="w-4 h-4" style={{ color: isActive ? s.color : "#808593" }} />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-wider text-[#808593] uppercase font-bold">
                    {s.subtitle}
                  </p>
                  <p className={`text-xs font-bold leading-tight mt-0.5 line-clamp-2 ${isActive ? "text-[#F6F3EA]" : "text-[#18191B]"}`}>
                    {s.title.replace(/^\d\.\s/, "")}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="bg-[#FAF8F2] border-2 border-[#18191B] rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_0px_#18191B] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rubber-stamp stamp-amber text-xs font-bold">STAGE {current.step} OF 5</span>
              <span className="text-xs font-mono text-[#808593]">{current.previewTag}</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#18191B] font-sans tracking-tight">
                {current.title}
              </h3>
              <p className="text-base text-[#5A5E69] mt-2 font-sans font-medium leading-relaxed">
                {current.summary}
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-[#D8D2C2]">
              {current.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#18191B] text-[#F6F3EA] text-xs font-mono flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-[#18191B] font-sans leading-snug">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Visual Blueprint for this Step */}
          <div className="lg:col-span-5 bg-[#18191B] text-[#F6F3EA] p-6 rounded-xl border border-[#3A3D44] shadow-inner font-mono text-xs flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#3A3D44] pb-3 text-[#808593]">
              <span className="text-[#E89228] font-bold">HOTSPOT SIMULATION // STAGE 0{current.step}</span>
              <span>LIVE</span>
            </div>

            {current.step === 1 && (
              <div className="space-y-3">
                <div className="bg-[#25272B] p-3 rounded border border-[#3A3D44]">
                  <p className="text-[#808593] text-[10px]">INCOMING VOICE CALL (KANNADA)</p>
                  <p className="text-[#F6F3EA] text-xs font-sans mt-1">
                    "ರಮೇಶ್ ಇಲ್ಲಿ, ಶ್ರೀನಿವಾಸಪುರದಿಂದ 85 ಕ್ರೇಟ್ ಟೊಮ್ಯಾಟೋ ಇದೆ, ಬೆಳಗ್ಗೆ 6ಕ್ಕೆ ಕೆ.ಆರ್. ಮಾರ್ಕೆಟ್ ತಲುಪಬೇಕು."
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-[#111214] p-2 rounded border border-[#2B2E36]">
                    <span className="text-[#808593] block text-[9px]">SHIPPER:</span>
                    <span className="text-[#E89228] font-bold">Ramesh</span>
                  </div>
                  <div className="bg-[#111214] p-2 rounded border border-[#2B2E36]">
                    <span className="text-[#808593] block text-[9px]">PAYLOAD:</span>
                    <span className="text-[#16A34A] font-bold">2.0 Tonnes</span>
                  </div>
                </div>
                <p className="text-[10px] text-[#A6ABBA]">
                  Transcription + NER extracted intent in 420ms without manual operator data entry.
                </p>
              </div>
            )}

            {current.step === 2 && (
              <div className="space-y-3">
                <p className="text-[10px] text-[#808593]">CLUSTER SOLVER COMPATIBILITY MATRIX</p>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between items-center bg-[#25272B] px-2.5 py-1.5 rounded">
                    <span>Ramesh (Tomatoes)</span>
                    <span className="text-[#16A34A] font-bold">2.0T · KM 8</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#25272B] px-2.5 py-1.5 rounded">
                    <span>Suresh (Cabbages)</span>
                    <span className="text-[#16A34A] font-bold">1.0T · KM 19</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#25272B] px-2.5 py-1.5 rounded">
                    <span>Ram (Agro Seeds)</span>
                    <span className="text-[#16A34A] font-bold">0.8T · KM 44</span>
                  </div>
                </div>
                <div className="bg-[#16A34A]/20 border border-[#16A34A]/50 p-2 rounded text-[11px] text-[#16A34A] flex justify-between font-bold">
                  <span>TOTAL POOLED BATCH:</span>
                  <span>3.8T / 5.0T (76% CAP)</span>
                </div>
              </div>
            )}

            {current.step === 3 && (
              <div className="space-y-3">
                <p className="text-[10px] text-[#808593]">SMS DISPATCH SENT TO LOCAL TRANSPORTER</p>
                <div className="bg-[#25272B] p-3 rounded border border-[#2563EB] text-xs">
                  <p className="text-[#A6ABBA] text-[10px]">FROM: FREIGHTGRID DISPATCH</p>
                  <p className="text-[#F6F3EA] mt-1 font-sans">
                    "KA-07-E-4819: 3-stop milk-run ready along NH-75 corridor. Total load: 3.8 tonnes. 
                    Net trip earnings: <strong>₹3,600</strong>. Reply 1 to Accept, 2 to Decline."
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-[#16A34A]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Transporter accepted voluntarily within 8 minutes</span>
                </div>
              </div>
            )}

            {current.step === 4 && (
              <div className="space-y-2 text-[11px]">
                <p className="text-[10px] text-[#808593]">COOPERATIVE SHAPLEY COST SETTLEMENT</p>
                <div className="bg-[#111214] p-2.5 rounded border border-[#2B2E36] space-y-1">
                  <div className="flex justify-between">
                    <span>Ramesh (2.0T / 68km):</span>
                    <span className="font-bold text-[#E89228]">₹1,895 (Save 21%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Suresh (1.0T / 49km):</span>
                    <span className="font-bold text-[#16A34A]">₹947 (Save 47%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ram (0.8T / 24km):</span>
                    <span className="font-bold text-[#2563EB]">₹758 (Save 49%)</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-[#3A3D44] font-bold text-[#F6F3EA]">
                    <span>Total Outbound Freight:</span>
                    <span>₹3,600 (Solo: ₹5,700)</span>
                  </div>
                </div>
                <p className="text-[10px] text-[#808593]">
                  No hidden margins. Transparent proportional cost attribution.
                </p>
              </div>
            )}

            {current.step === 5 && (
              <div className="space-y-2.5 text-[11px]">
                <p className="text-[10px] text-[#808593]">ZERO DEADHEAD RETURN LOOP (BACKHAUL)</p>
                <div className="bg-[#111214] p-2.5 rounded border border-[#E89228]/50 space-y-1.5">
                  <div className="flex justify-between text-[#E89228] font-bold">
                    <span>CLIENT: Sham (Fertilizer Dealer)</span>
                    <span>3.2 Tonnes</span>
                  </div>
                  <p className="text-[10px] text-[#A6ABBA]">
                    Pickup: Yeshwanthpur Agro Depot (08:30 AM) ➔ Drop: Kolar Co-op Union (11:00 AM)
                  </p>
                  <div className="flex justify-between pt-1 border-t border-[#3A3D44] text-[#16A34A] font-bold">
                    <span>Transporter Return Fare:</span>
                    <span>+₹2,200 Guaranteed</span>
                  </div>
                </div>
                <div className="p-2 bg-[#16A34A]/20 border border-[#16A34A]/50 rounded text-[10px] text-[#16A34A]">
                  ✓ Deadhead miles cut by 100% · Transporter round-trip earnings jump from ₹3,600 to ₹5,800.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
