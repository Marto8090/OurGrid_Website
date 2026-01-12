import { useState } from "react";
import {
  Shield,
  Users,
  Globe,
  Smartphone,
  BadgeCheck,
  Lock,
  RefreshCw,
  ChevronDown,
} from "lucide-react";

const PRIVACY_SECTIONS = [
  {
    id: "privacy-policy",
    icon: Shield,
    label: "Privacy Policy",
    short: "OurGrid helps neighbourhoods understand and reduce grid congestion.",
    body: [
      "OurGrid helps neighbourhoods understand and reduce grid congestion.",
      "Through the OurGrid app, households can track their energy use, join challenges, and see how collective actions strengthen the grid.",
      "This policy explains how we handle information related to OurGrid and its users.",
    ],
  },
  {
    id: "who-we-are",
    icon: Users,
    label: "Who We Are",
    short: "OurGrid is a collaboration between local energy partners and OpenRemote.",
    body: [
      "OurGrid is a collaboration between local energy partners and OpenRemote in the Netherlands.",
      "We work together to make energy use more sustainable and community-driven.",
      "Different partners may handle specific data parts, but all follow the same privacy standards under EU GDPR.",
    ],
  },
  {
    id: "website-visitors",
    icon: Globe,
    label: "Website Visitors",
    short: "The OurGrid website is public and does not require registration.",
    body: [
      "OurGrid's website is public and does not require registration.",
      "We don't collect or store personal information beyond basic, anonymous analytics used to improve accessibility and performance.",
      "Only essential cookies are used - no tracking or marketing cookies.",
    ],
  },
  {
    id: "app-users",
    icon: Smartphone,
    label: "App Users",
    short: "The OurGrid app collects minimal data needed for the challenges to work.",
    body: [
      "The OurGrid app collects minimal data necessary to function and measure participation in energy challenges. This may include:",
      "• Device information",
      "• Household energy data from the dongle",
      "• Challenge results and points",
      "Data older than three months is automatically deleted, except records needed for payouts or statistics.",
      "Users can delete their data anytime by removing the dongle and uninstalling the app.",
    ],
  },
  {
    id: "your-rights",
    icon: BadgeCheck,
    label: "Your Rights",
    short: "You can always ask to see, correct or delete your data.",
    body: [
      "You can request access to, correction, or deletion of your personal data at any time.",
      "Contact your local project partner for help - details are provided inside the app and on the OurGrid website.",
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    label: "Data Security",
    short: "All data is processed securely within the EU using encrypted connections.",
    body: [
      "All data is processed securely within the EU using encrypted connections and restricted access.",
      "We regularly review our systems to ensure data safety and compliance with GDPR.",
    ],
  },
  {
    id: "updates",
    icon: RefreshCw,
    label: "Updates",
    short: "The privacy rules may change when the project is improved or expanded.",
    body: [
      "This privacy policy may change to reflect improvements or new features.",
      "The latest version is always available on the OurGrid website.",
    ],
  },
];

export default function PrivacyPolicy() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="relative w-full min-h-screen bg-[#4F2E39] text-[#F9F5F2] px-4 py-16 lg:py-24 overflow-x-hidden font-sans">
      
      {/* === BACKGROUND DECORATION === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-5 top-10 opacity-5 animate-pulse">
          <Shield size={150} strokeWidth={1} />
        </div>
        <div className="absolute -right-10 bottom-55 opacity-5 -scale-x-100 animate-pulse delay-1000">
          <Lock size={200} strokeWidth={1} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* === HEADER SECTION === */}
        <div className="text-center mb-12 lg:mb-16 space-y-3">
          <h2 className="text-[#01AC51] font-bold tracking-wider uppercase text-sm md:text-base">
            Privacy & Data Use
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-[#F9F5F2]/80 max-w-2xl mx-auto mt-4">
             Transparent details on how OurGrid and its partners handle information about website visitors and app users.
          </p>
        </div>

        {/* === GRID LAYOUT === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start pb-20">
          {PRIVACY_SECTIONS.map((section, index) => {
            const isOpen = openId === section.id;
            const Icon = section.icon;

            // GRID LOGIC:
            // If it's the first item (index 0), span all columns on Desktop (lg:col-span-3)
            // This creates a layout of: [ 1 (Full) ] then [ 3 cols ] then [ 3 cols ]
            const gridClasses = index === 0 
                ? "col-span-1 md:col-span-2 lg:col-span-3" 
                : "col-span-1";

            return (
              <div
                key={section.id}
                className={`
                  relative w-full
                  transition-all duration-300 ease-in-out
                  ${gridClasses}
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
                        ? "rounded-3xl shadow-2xl scale-[1.01]"
                        : "rounded-3xl shadow-lg hover:-translate-y-1 hover:shadow-xl"
                    }
                  `}
                >
                  {/* === CARD HEADER (Clickable) === */}
                  <button
                    onClick={() => toggle(section.id)}
                    className="w-full relative flex flex-col items-center justify-center text-center p-8 gap-5 outline-none cursor-pointer"
                  >
                    {/* Icon Circle */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#4F2E39]/5 rounded-full scale-110 transform" />
                      <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-white/50">
                        <Icon size={40} className="text-[#01AC51]" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="font-extrabold text-2xl leading-tight">
                      {section.label}
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

                  {/* === CONTENT SECTION === */}
                  <div
                    className={`
                      transition-all duration-500 ease-in-out
                      ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <div className="px-8 pb-8 pt-0 space-y-6">
                      {/* Divider */}
                      <div className="w-full h-[2px] bg-[#4F2E39]/10 mx-auto w-[85%] mb-6" />

                      {/* Summary Text (Bold) */}
                      {/* We limit max width on the first wide card so lines don't get too long to read */}
                      <p className={`font-bold text-lg leading-tight text-[#4F2E39] ${index === 0 ? "max-w-3xl mx-auto text-center" : ""}`}>
                        {section.short}
                      </p>

                      {/* Detailed Body Text */}
                      <div className={`space-y-3 text-[#4F2E39]/80 text-base font-medium leading-relaxed ${index === 0 ? "max-w-3xl mx-auto text-center" : ""}`}>
                        {section.body.map((line, i) => (
                           <p key={i}>{line}</p> 
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom Green Accent Line */}
                    <div className="h-2 w-full bg-[#01AC51]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* === BOTTOM INFO === */}
        <div className="max-w-3xl mx-auto text-center border-t border-[#F9F5F2]/20 pt-10">
          <h4 className="text-[#F4B14A] font-bold uppercase tracking-wide text-sm mb-3">
            Still Curious?
          </h4>
          {/* font-bold makes it bold by default (mobile), md:font-normal drops it back on desktop */}
          <p className="text-[#F9F5F2]/80 font-bold md:font-normal leading-relaxed">
            If you have questions about this policy or want to exercise your
            privacy rights, contact your local OurGrid project partner.
            Their contact details are listed in the app and on the main
            OurGrid website.
          </p>
        </div>

      </div>
    </div>
  );
}