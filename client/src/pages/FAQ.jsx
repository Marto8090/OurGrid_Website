import { useState } from "react";
import { useAudience } from "../context/AudienceContext"; 
import { 
  ChevronDown, 
  Zap, 
  Smartphone, 
  Coins, 
  Lock, 
  MapPin,
  LayoutDashboard 
} from "lucide-react";

// === RESIDENT (USER) TEXT ===
const RESIDENT_FAQ = [
  {
    key: "using",
    title: "Using the app",
    icon: Smartphone, 
    qa: [
      {
        q: "What do I need to start using OurGrid?",
        a: "Just download the app, sign in, and connect your P1 dongle to your smart meter.",
      },
      {
        q: "What happens during a congestion challenge?",
        a: "The app alerts you and gives a target limit. Stay below it to earn points and help your neighbourhood.",
      },
      {
        q: "Can renters also join?",
        a: "Yes, anyone with access to a smart meter can participate.",
      },
    ],
  },
  {
    key: "rewards",
    title: "Rewards",
    icon: Coins,
    qa: [
      {
        q: "How do I earn rewards?",
        a: "You earn points for each minute you stay below the target during challenges.",
      },
      {
        q: "What can I do with my points?",
        a: "You can convert them into money or donate them to local community projects.",
      },
      {
        q: "Is there a limit to how many points I can earn?",
        a: "No, you can join as many challenges as you like.",
      },
    ],
  },
  {
    key: "privacy",
    title: "Privacy policy",
    icon: Lock,
    qa: [
      {
        q: "Who can see my data?",
        a: "Only anonymised data is used to track challenges – no personal info is shared.",
      },
      {
        q: "How long is my data kept?",
        a: "Usage data is automatically deleted after three months.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes, you can delete your account anytime from the app settings.",
      },
    ],
  },
  {
    key: "technical",
    title: "Technical / Devices",
    icon: Zap,
    qa: [
      {
        q: "Which devices can I connect?",
        a: "You can link your smart meter, EV charger, battery, and heat pump.",
      },
      {
        q: "Does the app control my devices automatically?",
        a: "Only if you allow it — you can always choose manual control.",
      },
    ],
  },
  {
    key: "projects",
    title: "Local projects",
    icon: MapPin,
    qa: [
      {
        q: "What's the goal of OurGrid in my city?",
        a: "To help your neighbourhood avoid grid overload and make energy use smarter and fairer.",
      },
      {
        q: "Who runs these projects?",
        a: "They're led by local municipalities and partners, with technology from OpenRemote.",
      },
    ],
  },
];

// === MUNICIPALITY TEXT (GENERIC & SAFE) ===
const MUNICIPALITY_FAQ = [
  {
    key: "dashboard",
    title: "Dashboard Insights", // Matches "Using the app" position
    icon: LayoutDashboard, 
    qa: [
      {
        q: "What information does the dashboard show?",
        a: "It provides an aggregated view of energy loads, congestion events, and participation levels in your area.",
      },
      {
        q: "How are congestion events managed?",
        a: "You can monitor grid status and set parameters for when to notify residents about peak usage.",
      },
      {
        q: "Can we export the data?",
        a: "Yes, summary reports and aggregated metrics are available for analysis and reporting.",
      },
    ],
  },
  {
    key: "engagement",
    title: "Community Engagement", // Matches "Rewards" position
    icon: Coins,
    qa: [
      {
        q: "How are residents incentivized?",
        a: "A points-based system rewards residents for shifting their energy usage during peak times.",
      },
      {
        q: "Can we define local rewards?",
        a: "Yes, the system allows for flexible reward structures tailored to local community needs.",
      },
      {
        q: "How do we measure impact?",
        a: "The platform tracks participation rates and the total amount of energy shifted away from peak hours.",
      },
    ],
  },
  {
    key: "data-security",
    title: "Data & Privacy", // Matches "Privacy policy" position
    icon: Lock,
    qa: [
      {
        q: "Is individual household data visible?",
        a: "No. The dashboard displays data aggregated at the transformer or neighborhood level to ensure privacy.",
      },
      {
        q: "How is compliance handled?",
        a: "The platform is designed to adhere to standard data protection regulations and GDPR requirements.",
      },
    ],
  },
  {
    key: "infrastructure",
    title: "System Setup", // Matches "Technical / Devices" position
    icon: Zap,
    qa: [
      {
        q: "What hardware is required?",
        a: "The solution primarily uses existing smart meters connected via P1 dongles provided to residents.",
      },
      {
        q: "Is it compatible with our grid?",
        a: "The system is designed to work alongside standard grid infrastructure without requiring heavy modifications.",
      },
    ],
  },
  {
    key: "rollout",
    title: "Project Rollout", // Matches "Local projects" position
    icon: MapPin,
    qa: [
      {
        q: "How do we start a pilot?",
        a: "We recommend identifying a specific neighborhood to test adoption and measure grid relief before scaling.",
      },
      {
        q: "What support is provided?",
        a: "We offer guidance on onboarding residents and setting up the initial dashboard configuration.",
      },
    ],
  },
];

export default function FAQ() {
  const [openKey, setOpenKey] = useState(null);
  const { audience } = useAudience();
  
  const isMunicipality = audience === "municipality";
  const sections = isMunicipality ? MUNICIPALITY_FAQ : RESIDENT_FAQ;

  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <div className="relative w-full bg-[#F9F5F2] text-[#4F2E39] px-4 py-16 lg:py-24 overflow-x-hidden font-sans">
      
      {/* === BACKGROUND DECORATION === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Changed opacity from 0.03 to 0.01 */}
        <div className="absolute left-5 top-10 opacity-[0.01] animate-pulse text-[#4F2E39]">
          <Zap size={150} strokeWidth={1} />
        </div>
        {/* Changed opacity from 0.03 to 0.01 */}
        <div className="absolute right-5 bottom-20 opacity-[0.01] -scale-x-100 animate-pulse delay-1000 text-[#4F2E39]">
          <Zap size={200} strokeWidth={1} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* === HEADER SECTION === */}
        <div className="text-center mb-12 lg:mb-16 space-y-3">
          <h2 className="text-[#01AC51] font-bold tracking-wider uppercase text-sm md:text-base">
            {isMunicipality ? "Municipal Support" : "Support"}
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#4F2E39]">
            Frequently Asked Questions
          </h1>
          <p className="text-[#4F2E39]/70 text-lg">
            {isMunicipality 
              ? "Guidance for city officials and grid managers" 
              : "Help for residents and participants"
            }
          </p>
        </div>

        {/* === GRID LAYOUT === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-start pb-20">
          {sections.map((item, index) => {
            const isOpen = openKey === item.key;
            const isFirst = index === 0;
            const Icon = item.icon;

            return (
              <div
                key={item.key}
                className={`
                  relative w-full
                  transition-all duration-300 ease-in-out
                  ${isFirst ? "md:col-span-2 lg:col-span-6" : "md:col-span-1 lg:col-span-3"}
                  ${isOpen ? "z-10" : "z-0"}
                `}
              >
                <div
                  className={`
                    group relative flex flex-col 
                    bg-white text-[#4F2E39] 
                    transition-all duration-300
                    overflow-hidden
                    border border-[#4F2E39]/10
                    ${
                      isOpen
                        ? "rounded-3xl shadow-[0_25px_50px_-12px_rgba(79,46,57,0.25)] scale-[1.01]"
                        : "rounded-3xl shadow-[0_10px_30px_-10px_rgba(79,46,57,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(79,46,57,0.2)] hover:-translate-y-1"
                    }
                  `}
                >
                  {/* === CARD HEADER === */}
                  <button
                    onClick={() => toggle(item.key)}
                    className="w-full relative flex flex-col items-center justify-center text-center p-8 gap-5 outline-none cursor-pointer"
                  >
                    <div className="relative">
                      {/* Icon Background matches page bg for cutout effect */}
                      <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-[#F9F5F2]">
                         <Icon size={40} className="text-[#01AC51]" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="font-extrabold text-2xl leading-tight">
                      {item.title}
                    </h3>

                    <div
                      className={`
                        flex items-center justify-center w-8 h-8 rounded-full 
                        transition-all duration-300 
                        ${
                          isOpen
                            ? "bg-[#01AC51] text-white rotate-180"
                            : "bg-[#4F2E39]/5 text-[#4F2E39] group-hover:bg-[#01AC51] group-hover:text-white"
                        }
                      `}
                    >
                      <ChevronDown size={20} strokeWidth={3} />
                    </div>
                  </button>

                  {/* === CONTENT SECTION === */}
                  <div
                    className={`
                      transition-all duration-500 ease-in-out
                      ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <div className="px-8 pb-8 pt-0 space-y-6">
                      <div className="w-full h-[2px] bg-[#4F2E39]/10 mx-auto w-[85%] mb-6" />

                      <div className={isFirst ? "max-w-3xl mx-auto" : ""}>
                          {item.qa.map((qa, i) => (
                            <div key={i} className="space-y-2 mb-6 last:mb-0">
                              <p className={`font-bold text-lg leading-tight text-[#4F2E39] ${isFirst ? "text-center" : "text-left"}`}>
                                {qa.q}
                              </p>
                              <p className={`text-[#4F2E39]/80 text-base font-medium leading-relaxed ${isFirst ? "text-center" : "text-left"}`}>
                                {qa.a}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                    
                    <div className="h-2 w-full bg-[#01AC51]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}