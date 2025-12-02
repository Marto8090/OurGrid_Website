import { useState } from "react";
import { ChevronDown, ChevronUp, Zap } from "lucide-react";

// Images from /assets (Ensure these paths match your project structure)
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
    <div className="relative w-full min-h-screen bg-[#4F2E39] text-[#F9F5F2] px-4 py-12 lg:py-20 flex justify-center overflow-x-hidden">
      {/* === BACKGROUND DECORATION === */}
      {/* Floating Lightning Icons */}
      <div className="hidden lg:block absolute left-10 top-20 opacity-10 pointer-events-none animate-pulse">
        <Zap size={180} strokeWidth={2} className="text-[#F9F5F2]" />
      </div>
      <div className="hidden lg:block absolute right-10 top-60 opacity-10 -scale-x-100 pointer-events-none animate-pulse delay-700">
        <Zap size={180} strokeWidth={2} className="text-[#F9F5F2]" />
      </div>

      {/* === MAIN GRID === */}
      {/* We add extra padding bottom (pb-40) to the container to ensure 
         the absolute dropdowns don't get cut off if the last row is opened.
      */}
      <div className="relative max-w-6xl w-full flex flex-wrap gap-6 justify-center items-start pb-40">
        {SECTIONS.map((item) => {
          const isOpen = openKey === item.key;

          return (
            <div
              key={item.key}
              // Z-Index Logic: If open, z-50 puts it above neighbors. If closed, z-0 keeps it standard.
              className={`
                relative w-full sm:w-[48%] lg:w-[31%]
                transition-all duration-300 ease-in-out
                ${isOpen ? "z-50" : "z-0 hover:-translate-y-1"}
              `}
            >
              {/* === CARD HEADER (The Clickable Part) === */}
              <button
                onClick={() => toggle(item.key)}
                className={`
                  w-full relative bg-[#F9F5F2] text-[#4F2E39] 
                  flex flex-col items-center justify-center text-center 
                  px-6 py-8 lg:py-10 gap-4 
                  shadow-lg border-2 border-transparent
                  transition-all duration-300
                  focus:outline-none
                  ${
                    isOpen
                      ? "rounded-t-3xl rounded-b-none border-[#01AC51]" // Open State
                      : "rounded-3xl hover:shadow-xl" // Closed State
                  }
                `}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain drop-shadow-md"
                />
                <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl leading-tight">
                  {item.title}
                </h3>

                {/* Arrow Icon */}
                <div
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown className="w-6 h-6 text-[#01AC51]" />
                </div>
              </button>

              {/* === DROPDOWN CONTENT (Absolute Positioned) === */}
              {/* This div sits absolutely relative to the card. 
                  top-full pushes it directly below the header.
                  w-full makes it same width as header.
              */}
              <div
                className={`
                  absolute top-full left-0 w-full 
                  bg-[#F9F5F2] text-[#4F2E39]
                  rounded-b-3xl
                  shadow-2xl
                  border-2 border-t-0 border-[#01AC51]
                  overflow-hidden
                  transition-all duration-300 ease-out origin-top
                  ${
                    isOpen
                      ? "opacity-100 scale-y-100 translate-y-0 visible"
                      : "opacity-0 scale-y-95 -translate-y-2 invisible pointer-events-none"
                  }
                `}
              >
                <div className="px-6 pb-8 pt-2 space-y-6">
                  {item.qa.map((qa, i) => (
                    <div
                      key={i}
                      // Staggered fade-in animation for text using standard Tailwind delay
                      className={`
                         transition-all duration-1500 ease-out
                         ${
                           isOpen
                             ? "opacity-100 translate-y-0"
                             : "opacity-0 translate-y-4"
                         }
                      `}
                      // Add a slight inline style delay so text appears after box expands
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <p className="font-bold text-lg leading-snug">{qa.q}</p>
                      <p className="text-[#01AC51] font-medium text-sm lg:text-base mt-1 leading-relaxed">
                        {qa.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}