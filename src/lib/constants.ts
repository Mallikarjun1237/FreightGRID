export interface ShipmentNode {
  id: string;
  shipper: string;
  role: string;
  cargo: string;
  weightTonnes: number;
  location: string;
  destination: string;
  soloCost: number;
  pooledCost: number;
  savingsPct: number;
  position: "above" | "below";
  detourKm: number;
  timeWindow: string;
  status: "Optimized & Pooled" | "Pending";
}

export const CORRIDOR_DATA = {
  name: "NH-75 Regional Logistics Corridor",
  code: "KA-CR-04",
  origin: "Srinivaspur / Kolar Agricultural Belt",
  destination: "KR Market Wholesale Hub, Bengaluru",
  totalDistanceKm: 68.4,
  vehicle: {
    model: "Tata 407 LPT Heavy Duty",
    regNumber: "KA-07-E-4819",
    ratedCapacityTonnes: 5.0,
    currentLoadTonnes: 3.8,
    utilizationPct: 76,
    operator: "Manjunath Transport Co-op",
    fuelBaselineKmpl: 7.2,
  },
  shipments: [
    {
      id: "FR-101",
      shipper: "Ramesh",
      role: "Tomato Grower · Srinivaspur North",
      cargo: "85 Plastic Crates (Grade-A Ripe Tomatoes)",
      weightTonnes: 2.0,
      location: "KM 08 · Srinivaspur Depot",
      destination: "KR Market Shed 4",
      soloCost: 2400,
      pooledCost: 1895,
      savingsPct: 21,
      position: "above",
      detourKm: 2.1,
      timeWindow: "04:30 - 05:30 IST",
      status: "Optimized & Pooled",
    },
    {
      id: "FR-102",
      shipper: "Suresh",
      role: "Farmer Producer · Mulbagal",
      cargo: "40 Gunny Sacks (Fresh Cabbages & Green Beans)",
      weightTonnes: 1.0,
      location: "KM 19 · Mulbagal Cross",
      destination: "KR Market Shed 2",
      soloCost: 1800,
      pooledCost: 947,
      savingsPct: 47,
      position: "below",
      detourKm: 1.4,
      timeWindow: "05:00 - 06:00 IST",
      status: "Optimized & Pooled",
    },
    {
      id: "FR-103",
      shipper: "Ram",
      role: "Rural Agro-Store Owner · Hoskote",
      cargo: "18 Corrugated Cartons (Sprayers & Certified Seeds)",
      weightTonnes: 0.8,
      location: "KM 44 · Hoskote Industrial Gate",
      destination: "Kalasipalyam Agro Market",
      soloCost: 1500,
      pooledCost: 758,
      savingsPct: 49,
      position: "above",
      detourKm: 3.2,
      timeWindow: "06:15 - 07:00 IST",
      status: "Optimized & Pooled",
    },
  ] as ShipmentNode[],
  backhaul: {
    id: "BH-884",
    client: "Sham",
    role: "Agricultural Input Distributor",
    source: "Yeshwanthpur Agro Depot (Bengaluru)",
    destination: "Kolar Agricultural Co-op Union",
    cargo: "IFFCO Urea & NPK Fertilizer Sacks",
    weightTonnes: 3.2,
    routeDeviationKm: 5.8,
    returnEarnings: 2200,
    deadheadSavedKm: 54,
  },
  benchmarks: [
    {
      solver: "Uncoordinated Nearest-Vehicle Baseline",
      totalCost: 12400,
      emptyKm: 98,
      capacityUtilizationPct: 52,
      requestsServed: 18,
      runtimeSec: 0.04,
      color: "#DC2626",
      tag: "CONVENTIONAL LOGISTICS DISPATCH",
      summary: "High fuel burn, fragmented loads, each vehicle runs at half capacity with return trip empty.",
    },
    {
      solver: "Classical Local Search (2-Opt Genetic)",
      totalCost: 10600,
      emptyKm: 76,
      capacityUtilizationPct: 64,
      requestsServed: 21,
      runtimeSec: 0.82,
      color: "#2563EB",
      tag: "STANDARD HEURISTIC OPTIMIZATION",
      summary: "Better route sequencing but frequently gets trapped in sub-optimal local clustering minima.",
    },
    {
      solver: "QUBO + Simulated Annealing (FREIGHTGRID)",
      totalCost: 8900,
      emptyKm: 42,
      capacityUtilizationPct: 81,
      requestsServed: 26,
      runtimeSec: 1.45,
      color: "#E89228",
      tag: "QUANTUM-INSPIRED GLOBAL ENERGY SOLVER",
      summary: "Escapes local traps via stochastic thermal tunneling; finds optimal multi-tenant bundles in 1.45s.",
    },
  ],
};
