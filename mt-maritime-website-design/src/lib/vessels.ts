export type Vessel = {
  id: number;
  name: string;
  slug: string;
  imo: string;
  type: string;
  category: string;
  yearBuilt: number;
  flag: string;
  homePort: string;
  classification: string;
  status: string;
  lengthM: string;
  beamM: string;
  deadweightT: number;
  bollardPullT: number | null;
  enginePowerBhp: number;
  deckAreaSqm: number | null;
  crewCapacity: number;
  description: string;
  featured: boolean;
};

type VesselTypeDef = {
  type: string;
  category: string;
  count: number;
  lengthRange: [number, number];
  beamRange: [number, number];
  dwtRange: [number, number];
  bhpRange: [number, number];
  bollardPull: [number, number] | null;
  deckAreaRange: [number, number] | null;
  crewRange: [number, number];
  descriptions: string[];
};

// Deterministic pseudo-random generator.
// This gives us the same vessel data every time the site builds.
let seedValue = 88172645;

function rand() {
  seedValue ^= seedValue << 13;
  seedValue ^= seedValue >>> 17;
  seedValue ^= seedValue << 5;

  return ((seedValue < 0 ? ~seedValue + 1 : seedValue) % 10000) / 10000;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(rand() * arr.length)]!;
}

function randInt(min: number, max: number) {
  return Math.floor(rand() * (max - min + 1)) + min;
}

function randFloat(min: number, max: number, decimals = 1) {
  const value = rand() * (max - min) + min;
  return Number(value.toFixed(decimals));
}

const prefixNames = [
  "Ocean",
  "Atlantic",
  "Pacific",
  "Northern",
  "Southern",
  "Arctic",
  "Tropic",
  "Coastal",
  "Deep Sea",
  "Blue",
  "Star",
  "Horizon",
  "Global",
  "Sovereign",
  "Majestic",
  "Royal",
  "Golden",
  "Silver",
  "Crimson",
  "Emerald",
  "Titan",
  "Neptune",
  "Poseidon",
  "Triton",
  "Mariner",
  "Voyager",
  "Pioneer",
  "Endeavour",
  "Guardian",
  "Sentinel",
  "Defender",
  "Vanguard",
  "Discovery",
  "Explorer",
  "Navigator",
  "Trailblazer",
  "Frontier",
  "Odyssey",
  "Legacy",
  "Liberty",
];

const suffixNames = [
  "Pride",
  "Spirit",
  "Endeavour",
  "Guardian",
  "Sentinel",
  "Star",
  "Wave",
  "Horizon",
  "Voyager",
  "Champion",
  "Falcon",
  "Eagle",
  "Phoenix",
  "Warrior",
  "Ranger",
  "Trader",
  "Runner",
  "Provider",
  "Supporter",
  "Venture",
  "Quest",
  "Titan",
  "Atlas",
  "Compass",
  "Current",
  "Tide",
  "Breeze",
  "Storm",
  "Dawn",
  "Summit",
  "Crest",
  "Point",
  "Bay",
  "Strait",
  "Reach",
  "Passage",
  "Anchor",
];

const vesselTypes: VesselTypeDef[] = [
  {
    type: "AHTS",
    category: "Anchor Handling Tug Supply",
    count: 28,
    lengthRange: [55, 95],
    beamRange: [14, 24],
    dwtRange: [1800, 4200],
    bhpRange: [8000, 25000],
    bollardPull: [90, 320],
    deckAreaRange: [400, 900],
    crewRange: [16, 26],
    descriptions: [
      "A high-specification anchor handling tug supply vessel built for rig moves, towage and deep-water anchor handling operations in the harshest offshore environments.",
      "Purpose-built for anchor handling and rig positioning, delivering exceptional bollard pull and dynamic positioning accuracy for major offshore energy projects.",
      "A powerful multi-role AHTS combining towing, anchor handling and supply capabilities, trusted by operators for demanding deep-water field developments.",
    ],
  },
  {
    type: "PSV",
    category: "Platform Supply Vessel",
    count: 30,
    lengthRange: [60, 90],
    beamRange: [15, 20],
    dwtRange: [2500, 5200],
    bhpRange: [5000, 12000],
    bollardPull: null,
    deckAreaRange: [500, 1100],
    crewRange: [14, 22],
    descriptions: [
      "A modern platform supply vessel configured for the efficient transport of bulk cargo, fuel, water and deck cargo to offshore installations.",
      "Designed for high-capacity cargo runs, this PSV supports drilling campaigns and production platforms with reliable, fuel-efficient logistics.",
      "Built to DP2 standard, this platform supply vessel delivers safe, weather-resilient resupply operations for offshore oil and gas facilities.",
    ],
  },
  {
    type: "MPSV",
    category: "Multi-Purpose Support Vessel",
    count: 12,
    lengthRange: [80, 130],
    beamRange: [18, 28],
    dwtRange: [3500, 7000],
    bhpRange: [10000, 22000],
    bollardPull: [120, 200],
    deckAreaRange: [800, 1600],
    crewRange: [40, 90],
    descriptions: [
      "A versatile multi-purpose support vessel equipped for subsea construction, IMR campaigns, and heavy-lift operations across global offshore fields.",
      "Featuring a moonpool, cranes and accommodation for project personnel, this MPSV supports complex subsea installation and maintenance work.",
      "A flexible construction support vessel capable of switching between IMR, cable-lay and light construction duties with minimal downtime.",
    ],
  },
  {
    type: "ROVSV",
    category: "ROV Support Vessel",
    count: 10,
    lengthRange: [65, 100],
    beamRange: [16, 22],
    dwtRange: [2000, 4500],
    bhpRange: [7000, 15000],
    bollardPull: [80, 150],
    deckAreaRange: [500, 1000],
    crewRange: [30, 55],
    descriptions: [
      "Equipped with dual work-class ROV spreads, this vessel supports subsea inspection, repair and maintenance for offshore infrastructure operators.",
      "A dynamically positioned ROV support vessel purpose-built for survey, inspection and light construction tasks on subsea assets.",
    ],
  },
  {
    type: "OAV",
    category: "Offshore Accommodation Vessel",
    count: 8,
    lengthRange: [90, 145],
    beamRange: [20, 32],
    dwtRange: [4000, 9000],
    bhpRange: [8000, 18000],
    bollardPull: null,
    deckAreaRange: [600, 1200],
    crewRange: [200, 450],
    descriptions: [
      "A large-capacity offshore accommodation vessel providing safe, comfortable berths and workspace for maintenance and hook-up campaigns.",
      "Featuring a motion-compensated gangway and extensive accommodation, this vessel supports major offshore brownfield and decommissioning projects.",
    ],
  },
  {
    type: "CTV",
    category: "Crew Transfer Vessel",
    count: 15,
    lengthRange: [24, 40],
    beamRange: [8, 12],
    dwtRange: [80, 250],
    bhpRange: [3000, 7000],
    bollardPull: null,
    deckAreaRange: [60, 150],
    crewRange: [4, 12],
    descriptions: [
      "A fast, low-motion crew transfer vessel designed for the safe daily transport of technicians to offshore wind and oil & gas installations.",
      "Built for speed and comfort, this crew transfer vessel minimises transit time between shore bases and offshore assets in variable sea states.",
    ],
  },
  {
    type: "SSV",
    category: "Standby Safety Vessel",
    count: 10,
    lengthRange: [45, 65],
    beamRange: [11, 15],
    dwtRange: [500, 1200],
    bhpRange: [4000, 8000],
    bollardPull: null,
    deckAreaRange: [150, 300],
    crewRange: [10, 16],
    descriptions: [
      "A dedicated emergency response and rescue vessel providing 24/7 standby cover, fast rescue craft and medical facilities for offshore platforms.",
      "Fitted with fast rescue craft and firefighting monitors, this standby safety vessel safeguards personnel across offshore production fields.",
    ],
  },
  {
    type: "CLSV",
    category: "Cable Lay & Survey Vessel",
    count: 8,
    lengthRange: [90, 140],
    beamRange: [20, 30],
    dwtRange: [4000, 8500],
    bhpRange: [9000, 20000],
    bollardPull: [100, 180],
    deckAreaRange: [700, 1400],
    crewRange: [50, 100],
    descriptions: [
      "A specialised cable lay and survey vessel equipped with cable tanks, ROV spreads and survey suites for offshore wind and telecom projects.",
      "Purpose-built for submarine cable installation and route survey work, supporting the expansion of offshore renewable energy infrastructure.",
    ],
  },
  {
    type: "HLCV",
    category: "Heavy Lift & Construction Vessel",
    count: 6,
    lengthRange: [130, 185],
    beamRange: [30, 45],
    dwtRange: [8000, 20000],
    bhpRange: [15000, 30000],
    bollardPull: [150, 260],
    deckAreaRange: [1500, 3200],
    crewRange: [80, 150],
    descriptions: [
      "A heavy-lift construction vessel with a main crane capacity exceeding a thousand tonnes, supporting platform installation and decommissioning.",
      "Engineered for jacket and topside installation, this heavy-lift vessel is a cornerstone of major offshore construction campaigns.",
    ],
  },
  {
    type: "TUG",
    category: "Harbour & Terminal Tug",
    count: 10,
    lengthRange: [24, 40],
    beamRange: [9, 13],
    dwtRange: [150, 500],
    bhpRange: [3500, 8000],
    bollardPull: [40, 80],
    deckAreaRange: [80, 180],
    crewRange: [6, 10],
    descriptions: [
      "A powerful harbour tug providing ship-handling, berthing and terminal support services for tankers and bulk carriers around the clock.",
      "A highly manoeuvrable terminal tug delivering safe escort and berthing assistance across busy port and terminal operations.",
    ],
  },
];

const flags = [
  "Panama",
  "Marshall Islands",
  "Singapore",
  "Liberia",
  "Malta",
  "United Kingdom",
  "Norway",
  "Vanuatu",
  "Cyprus",
  "Isle of Man",
  "India",
  "United Arab Emirates",
];

const homePorts = [
  "Singapore",
  "Aberdeen, UK",
  "Dubai, UAE",
  "Rotterdam, Netherlands",
  "Houston, USA",
  "Rio de Janeiro, Brazil",
  "Perth, Australia",
  "Lagos, Nigeria",
  "Mumbai, India",
  "Bergen, Norway",
  "Batam, Indonesia",
  "Port Klang, Malaysia",
];

const classifications = [
  "DNV",
  "ABS",
  "Lloyd's Register",
  "Bureau Veritas",
  "ClassNK",
  "RINA",
];

const statuses = [
  "In Service",
  "In Service",
  "In Service",
  "Available for Charter",
  "Under Charter",
  "In Drydock",
];

function slugify(name: string, id: number) {
  return `${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}-${id}`;
}

function generateVessels(): Vessel[] {
  const records: Vessel[] = [];
  const usedNames = new Set<string>();
  let globalId = 1;

  for (const def of vesselTypes) {
    for (let i = 0; i < def.count; i++) {
      let name = `MT ${pick(prefixNames)} ${pick(suffixNames)}`;

      while (usedNames.has(name)) {
        name = `MT ${pick(prefixNames)} ${pick(suffixNames)} ${randInt(2, 9)}`;
      }

      usedNames.add(name);

      const yearBuilt = randInt(2004, 2024);

      const bollardPull = def.bollardPull
        ? randInt(def.bollardPull[0], def.bollardPull[1])
        : null;

      records.push({
        id: globalId,
        name,
        slug: slugify(name, globalId),
        imo: `IMO ${randInt(9100000, 9899999)}`,
        type: def.type,
        category: def.category,
        yearBuilt,
        flag: pick(flags),
        homePort: pick(homePorts),
        classification: pick(classifications),
        status: pick(statuses),
        lengthM: randFloat(
          def.lengthRange[0],
          def.lengthRange[1]
        ).toString(),
        beamM: randFloat(
          def.beamRange[0],
          def.beamRange[1]
        ).toString(),
        deadweightT: randInt(
          def.dwtRange[0],
          def.dwtRange[1]
        ),
        bollardPullT: bollardPull,
        enginePowerBhp: randInt(
          def.bhpRange[0],
          def.bhpRange[1]
        ),
        deckAreaSqm: def.deckAreaRange
          ? randInt(
              def.deckAreaRange[0],
              def.deckAreaRange[1]
            )
          : null,
        crewCapacity: randInt(
          def.crewRange[0],
          def.crewRange[1]
        ),
        description: pick(def.descriptions),
        featured: rand() > 0.92,
      });

      globalId++;
    }
  }

  return records;
}

export const vessels = generateVessels();

export const vesselCount = vessels.length;

export const vesselTypes = Array.from(
  new Map(
    vessels.map((vessel) => [
      vessel.type,
      {
        type: vessel.type,
        category: vessel.category,
      },
    ])
  ).values()
).sort((a, b) => a.category.localeCompare(b.category));

export const vesselCategories = Array.from(
  vessels.reduce((map, vessel) => {
    map.set(
      vessel.category,
      (map.get(vessel.category) ?? 0) + 1
    );
    return map;
  }, new Map<string, number>())
).map(([category, count]) => ({
  category,
  count,
}));

export function getVesselBySlug(slug: string) {
  return vessels.find((vessel) => vessel.slug === slug) ?? null;
}

export function getRelatedVessels(vessel: Vessel, limit = 3) {
  return vessels
    .filter(
      (item) =>
        item.type === vessel.type &&
        item.id !== vessel.id
    )
    .slice(0, limit);
}