"use client";

import React, { useState } from "react";
import { Mic, Volume2, CheckCircle2, Sparkles, MessageSquare, ArrowRight, Play, Square } from "lucide-react";

export default function VoiceAssistantSection() {
  const [selectedLanguage, setSelectedLanguage] = useState<"kannada" | "hindi" | "english">("kannada");
  const [isPlaying, setIsPlaying] = useState(false);

  const voiceDemos = {
    kannada: {
      langLabel: "Kannada (ಕನ್ನಡ)",
      speaker: "Anjanappa (Tomato Farmer · Srinivaspur)",
      audioText:
        "ನನ್ನ ಹೊಲದಲ್ಲಿ 2 ಟನ್ ಟೊಮೇಟೊ ಇದೆ, ಕೋಲಾರದಿಂದ ಬೆಂಗಳೂರು ಕೆ.ಆರ್ ಮಾರ್ಕೆಟ್‌ಗೆ ನಾಳೆ ಬೆಳಗ್ಗೆ 5 ಗಂಟೆಗೆ ಕಳುಹಿಸಬೇಕು. ಬಾಡಿಗೆ ಎಷ್ಟು ಆಗುತ್ತೆ?",
      translation:
        "I have 2 tonnes of tomatoes at my farm, need to send from Kolar to Bengaluru KR Market tomorrow morning by 5 AM. How much will freight be?",
      extracted: {
        origin: "Srinivaspur / Kolar Cluster",
        destination: "KR Market Yard, Bengaluru",
        commodity: "Tomatoes (Perishable Grade-A)",
        weight: "2,000 kg (2.0 Tonnes)",
        timeWindow: "Tomorrow, 05:00 AM IST",
        allocatedVehicle: "Tata 407 (KA-07-E-4819)",
        suggestedShare: "₹1,895 (Saved 21% vs Solo Charter)",
      },
    },
    hindi: {
      langLabel: "Hindi (हिंदी)",
      speaker: "Rameshwar (Vegetable Producer · Mulbagal)",
      audioText:
        "हमारे पास मुलबागल में 1 टन पत्तागोभी और बीन्स हैं, कल सुबह 6 बजे तक बेंगलुरु मंडी पहुँचाना है। क्या कोई साझा गाड़ी मिलेगी?",
      translation:
        "We have 1 tonne of cabbage and beans in Mulbagal, needs delivery to Bengaluru Mandi by 6 AM tomorrow. Is there any shared truck available?",
      extracted: {
        origin: "Mulbagal Cross (KM 19)",
        destination: "KR Market Shed 2, Bengaluru",
        commodity: "Cabbages & Beans (Fresh Produce)",
        weight: "1,000 kg (1.0 Tonne)",
        timeWindow: "Tomorrow, 06:00 AM IST",
        allocatedVehicle: "Tata 407 (KA-07-E-4819)",
        suggestedShare: "₹947 (Saved 47% vs Solo Charter)",
      },
    },
    english: {
      langLabel: "English",
      speaker: "Prashanth (Rural Hardware Store Owner · Hoskote)",
      audioText:
        "Need 18 cartons of agricultural sprayers and hybrid seeds picked up from Hoskote depot and delivered to Kalasipalyam yard.",
      translation:
        "Need 18 cartons of agricultural sprayers and hybrid seeds picked up from Hoskote depot and delivered to Kalasipalyam yard.",
      extracted: {
        origin: "Hoskote Industrial Gate (KM 44)",
        destination: "Kalasipalyam Agro Market",
        commodity: "Sprayers & Certified Seeds (Dry Goods)",
        weight: "800 kg (0.8 Tonne)",
        timeWindow: "Tomorrow, 07:00 AM IST",
        allocatedVehicle: "Tata 407 (KA-07-E-4819)",
        suggestedShare: "₹758 (Saved 49% vs Solo Charter)",
      },
    },
  };

  const current = voiceDemos[selectedLanguage];

  const handleSimulateVoice = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, 2800);
  };

  return (
    <section id="voice-assistant" className="w-full bg-[#FAF8F2] border-b border-[#D8D2C2] py-24 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C2] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="rubber-stamp stamp-green text-xs">ACCESSIBLE BHARAT INTERFACE</span>
              <span className="text-xs font-mono text-[#5A5E69]">MULTILINGUAL VOICE DISPATCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#18191B] tracking-tight uppercase leading-tight font-sans">
              Built for Everyone: <br />
              <span className="text-[#16A34A]">Voice-First Freight Booking.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A5E69] max-w-md font-sans leading-relaxed">
            No typing. No complex apps. Farmers and drivers simply speak naturally in their native language, 
            and our neural entity parser instantly extracts coordinates, tonnage, and deadlines.
          </p>
        </div>

        {/* Interactive Voice Console Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Console: Language Selection & Voice Playback */}
          <div className="lg:col-span-5 bg-[#F6F3EA] border-2 border-[#18191B] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#18191B] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#D8D2C2] pb-4 mb-6">
                <span className="text-xs font-mono font-bold text-[#5A5E69] uppercase">
                  INPUT AUDIO CHANNEL
                </span>
                <span className="rubber-stamp stamp-amber text-[10px]">DIALECT-AWARE AI</span>
              </div>

              {/* Language Pills */}
              <div className="flex items-center gap-2 mb-6">
                {(["kannada", "hindi", "english"] as const).map((langKey) => (
                  <button
                    key={langKey}
                    onClick={() => {
                      setSelectedLanguage(langKey);
                      setIsPlaying(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      selectedLanguage === langKey
                        ? "bg-[#18191B] text-[#F6F3EA] shadow-sm"
                        : "bg-[#EBE6D8] text-[#5A5E69] hover:text-[#18191B]"
                    }`}
                  >
                    {langKey.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Speaker Card */}
              <div className="bg-[#FAF8F2] border border-[#D8D2C2] p-4 rounded-xl mb-6">
                <span className="text-[11px] font-mono text-[#808593] uppercase block">CALLER VERIFIED</span>
                <p className="font-bold font-sans text-sm text-[#18191B] mt-0.5">{current.speaker}</p>
              </div>

              {/* Audio Waveform & Speech Trigger */}
              <div className="bg-[#18191B] text-[#F6F3EA] p-6 rounded-2xl text-center flex flex-col items-center justify-center gap-4">
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                      isPlaying
                        ? "bg-[#16A34A] scale-110 shadow-[0_0_25px_rgba(22,163,74,0.6)]"
                        : "bg-[#E89228] hover:scale-105"
                    }`}
                  >
                    <Mic className="w-8 h-8 text-[#18191B]" />
                  </div>
                  {isPlaying && (
                    <span className="absolute inset-0 rounded-full border-2 border-[#16A34A] animate-ping" />
                  )}
                </div>

                <div className="w-full flex items-center justify-center gap-1.5 h-8 my-1">
                  {[40, 75, 95, 30, 85, 60, 100, 45, 90, 70, 50, 80, 65, 35, 90, 60].map((h, i) => (
                    <span
                      key={i}
                      className={`w-1 rounded-full transition-all duration-150 ${
                        isPlaying ? "bg-[#16A34A]" : "bg-[#3A3D44]"
                      }`}
                      style={{
                        height: isPlaying ? `${Math.max(15, Math.round(h * Math.random()))}px` : "8px",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={handleSimulateVoice}
                  disabled={isPlaying}
                  className="w-full py-3 rounded-xl bg-[#FAF8F2] text-[#18191B] font-mono font-bold text-xs uppercase hover:bg-[#EBE6D8] transition-colors flex items-center justify-center gap-2"
                >
                  {isPlaying ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-current text-[#16A34A]" />
                      <span>PARSING SPOKEN PHRASES...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current text-[#E89228]" />
                      <span>TEST SPOKEN VOICE DISPATCH</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="text-[11px] font-mono text-[#808593] mt-4 text-center">
              Works via standard telephone calls (IVR) or WhatsApp voice notes. Zero smartphone required.
            </p>
          </div>

          {/* Right Console: Live Extracted Data Card */}
          <div className="lg:col-span-7 bg-[#FAF8F2] border-2 border-[#18191B] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#18191B] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#D8D2C2] pb-4 mb-6">
                <span className="text-xs font-mono font-bold text-[#18191B] uppercase flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E89228]" />
                  INSTANT ENTITY EXTRACTION
                </span>
                <span className="rubber-stamp stamp-green text-[10px]">99.4% CONFIDENCE</span>
              </div>

              {/* Native Voice Transcript Quote */}
              <div className="bg-[#FAF5E8] border-l-4 border-[#E89228] p-4 rounded-r-xl mb-6">
                <span className="text-[10px] font-mono text-[#808593] uppercase block mb-1">
                  TRANSCRIPTION ({selectedLanguage.toUpperCase()}):
                </span>
                <p className="text-sm sm:text-base font-semibold text-[#18191B] font-sans">
                  &ldquo;{current.audioText}&rdquo;
                </p>
                <p className="text-xs text-[#5A5E69] font-sans italic mt-2">
                  Translation: &ldquo;{current.translation}&rdquo;
                </p>
              </div>

              {/* Extracted JSON/Key-Value Schema */}
              <div className="bg-[#EBE6D8] p-5 rounded-xl border border-[#D8D2C2] space-y-2.5 text-xs font-mono">
                <div className="flex justify-between items-center py-1 border-b border-[#D8D2C2]/60">
                  <span className="text-[#5A5E69]">PICKUP ORIGIN:</span>
                  <strong className="text-[#18191B]">{current.extracted.origin}</strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#D8D2C2]/60">
                  <span className="text-[#5A5E69]">DESTINATION:</span>
                  <strong className="text-[#18191B]">{current.extracted.destination}</strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#D8D2C2]/60">
                  <span className="text-[#5A5E69]">COMMODITY &amp; WEIGHT:</span>
                  <strong className="text-[#E89228]">{current.extracted.commodity} ({current.extracted.weight})</strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#D8D2C2]/60">
                  <span className="text-[#5A5E69]">REQUIRED ARRIVAL:</span>
                  <strong className="text-[#18191B]">{current.extracted.timeWindow}</strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#D8D2C2]/60">
                  <span className="text-[#5A5E69]">ASSIGNED POOLED VEHICLE:</span>
                  <strong className="text-[#16A34A]">{current.extracted.allocatedVehicle}</strong>
                </div>
                <div className="flex justify-between items-center py-1 text-[#16A34A] font-bold">
                  <span>TRANSPARENT FREIGHT QUOTE:</span>
                  <span className="text-sm">{current.extracted.suggestedShare}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D8D2C2] flex items-center justify-between text-xs font-mono text-[#18191B]">
              <span className="flex items-center gap-1.5 text-[#16A34A]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Automatically clustered into NH-75 route schedule</span>
              </span>
              <span className="font-bold">STATUS: READY TO DISPATCH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
