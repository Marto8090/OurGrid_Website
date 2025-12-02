import { useState } from "react";
import { ChevronDown, Zap } from "lucide-react";

// Images
import SettingImg from "../assets/setting.png";
import MoneyImg from "../assets/money.png";
import PadlockImg from "../assets/padlock.png";
import LightningImg from "../assets/lightning.png";
import CircleImg from "../assets/circle.png";

const SECTIONS = [
  {
    key: "using",
    title: "Using the app",
    img: SettingImg,
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
    img: MoneyImg,
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
    img: PadlockImg,
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
    img: LightningImg,
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
    img: CircleImg,
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

export default function FAQ() {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    // Removed fixed height, removed overflowing padding
    <div className="relative w-full bg-[#4F2E39] text-[#F9F5F2] px-4 py-16 lg:py-24 overflow-x-hidden font-sans">
      
      {/* === BACKGROUND DECORATION === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-5 top-10 opacity-5 animate-pulse">
          <Zap size={150} strokeWidth={1} />
        </div>
        <div className="absolute right-5 bottom-20 opacity-5 -scale-x-100 animate-pulse delay-1000">
          <Zap size={200} strokeWidth={1} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* === HEADER SECTION === */}
        <div className="text-center mb-12 lg:mb-16 space-y-3">
          <h2 className="text-[#01AC51] font-bold tracking-wider uppercase text-sm md:text-base">
            Support
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h1>
        </div>

        {/* === MASONRY-STYLE GRID === */}
        {/* items-start prevents empty cards from stretching to match the open card's height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {SECTIONS.map((item) => {
            const isOpen = openKey === item.key;

            return (
              <div
                key={item.key}
                // Removed z-50 to prevent Navbar overlap. 
                // z-10 is safer (above background, below navbar)
                className={`
                  relative w-full
                  transition-all duration-300 ease-in-out
                  ${isOpen ? "z-10" : "z-0"}
                `}
              >
                <div
                  className={`
                    group relative flex flex-col 
                    bg-[#F9F5F2] text-[#4F2E39] 
                    transition-all duration-300
                    overflow-hidden
                    ${
                      isOpen
                        ? "rounded-3xl shadow-2xl scale-[1.02]" // Subtle pop
                        : "rounded-3xl shadow-lg hover:-translate-y-1 hover:shadow-xl"
                    }
                  `}
                >
                  {/* === CARD HEADER === */}
                  <button
                    onClick={() => toggle(item.key)}
                    className="w-full relative flex flex-col items-center justify-center text-center p-8 gap-5 outline-none cursor-pointer"
                  >
                    {/* Icon Circle */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#4F2E39]/5 rounded-full scale-110 transform" />
                      <img
                        src={item.img}
                        alt={item.title}
                        className="relative w-20 h-20 object-contain"
                      />
                    </div>

                    <h3 className="font-extrabold text-2xl leading-tight">
                      {item.title}
                    </h3>

                    {/* Chevron Indicator */}
                    <div
                      className={`
                        flex items-center justify-center w-8 h-8 rounded-full 
                        transition-all duration-300 
                        ${
                          isOpen
                            ? "bg-[#01AC51] text-white rotate-180"
                            : "bg-[#4F2E39]/10 text-[#4F2E39] group-hover:bg-[#01AC51] group-hover:text-white"
                        }
                      `}
                    >
                      <ChevronDown size={20} strokeWidth={3} />
                    </div>
                  </button>

                  {/* === CONTENT SECTION (Relative Flow) === */}
                  {/* We use max-height animation for smooth slide down */}
                  <div
                    className={`
                      transition-all duration-500 ease-in-out
                      ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <div className="px-8 pb-8 pt-0 space-y-6">
                      {/* Divider */}
                      <div className="w-full h-[2px] bg-[#4F2E39]/10 mx-auto w-[85%] mb-6" />

                      {item.qa.map((qa, i) => (
                        <div key={i} className="space-y-2">
                          <p className="font-bold text-lg leading-tight text-[#4F2E39]">
                            {qa.q}
                          </p>
                          <p className="text-[#4F2E39]/80 text-base font-medium leading-relaxed">
                            {qa.a}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom Green Accent Line */}
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