import {
  Shield,
  Users,
  Globe,
  Smartphone,
  BadgeCheck,
  Lock,
  RefreshCw,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import PrivacyBg from "../assets/PrivPol.png"; 

// Centralized colors makes it easier to theme or change later
const COLORS = {
  bg: "#F9F5F2",
  primary: "#4F2E39", // Dark plum
  secondary: "#2C6EA4", // Blue
  accent: "#F4B14A", // Orange/Gold
  success: "#01AC51", // Green
  textDark: "#1D252C",
  textGray: "#384450",
  border: "#E2E8F0",
};

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
      "We don’t collect or store personal information beyond basic, anonymous analytics used to improve accessibility and performance.",
      "Only essential cookies are used – no tracking or marketing cookies.",
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
      "Contact your local project partner for help – details are provided inside the app and on the OurGrid website.",
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
    <main
      className="min-h-screen flex flex-col font-sans"
      style={{ backgroundColor: COLORS.bg }}
    >
      <section className="relative flex-1">
        {/* === BACKGROUND LAYER === */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {/* The Image: Lower opacity (0.15) and subtle blur for better text readability */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15 blur-[2px]"
            style={{ backgroundImage: `url(${PrivacyBg})` }}
          />
          {/* A soft gradient overlay to ensure the bottom text is always readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F9F5F2]" />
        </div>

        {/* === CONTENT LAYER === */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 space-y-8">
          
          {/* Header */}
          <div
            className="rounded-2xl text-white px-5 py-5 shadow-lg max-w-xl backdrop-blur-sm"
            style={{ backgroundColor: COLORS.primary }}
          >
            <p
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: COLORS.accent }}
            >
              Privacy & Data Use
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold mt-2">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base mt-2 opacity-90 leading-relaxed">
              Transparent details on how OurGrid and its partners handle information about website visitors and app users.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-start">
            {PRIVACY_SECTIONS.map((section) => {
              const Icon = section.icon;
              const isOpen = openId === section.id;

              return (
                <article
                  key={section.id}
                  className={`group relative rounded-2xl bg-white shadow-md transition-all duration-300 ${
                    isOpen ? "ring-2" : "hover:shadow-xl hover:-translate-y-1"
                  }`}
                  style={{ 
                    borderColor: isOpen ? COLORS.success : "transparent",
                    ringColor: isOpen ? COLORS.success : "transparent"
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggle(section.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 flex flex-col focus:outline-none rounded-2xl"
                  >
                    {/* Card Header */}
                    <div className="flex items-start gap-4 w-full">
                      <div className="flex-1">
                        <p
                          className="text-[10px] font-bold uppercase tracking-widest mb-1"
                          style={{ color: COLORS.primary }}
                        >
                          Privacy
                        </p>
                        <h2
                          className="text-base font-bold"
                          style={{ color: COLORS.textDark }}
                        >
                          {section.label}
                        </h2>
                      </div>
                      
                      {/* Icons */}
                      <div className="flex flex-col items-end gap-2">
                        <span
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white shadow-sm"
                          style={{ backgroundColor: COLORS.success }}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full shadow-sm transition-transform duration-300"
                          style={{ 
                            backgroundColor: COLORS.accent, 
                            color: COLORS.primary,
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                          }}
                        >
                           <ChevronDown className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>

                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{ color: COLORS.textGray }}
                    >
                      {section.short}
                    </p>

                    {/* Smooth Expansion Animation using Grid Rows */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="pt-4 border-t space-y-2 text-sm leading-relaxed"
                          style={{ 
                            borderColor: COLORS.border,
                            color: COLORS.textGray 
                          }}
                        >
                          {section.body.map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>

          {/* Footer / Still Curious */}
          <div className="max-w-xl">
            <div
              className="rounded-2xl px-6 py-6 shadow-md"
              style={{ backgroundColor: COLORS.primary, color: COLORS.bg }}
            >
              <p
                className="text-xs font-bold tracking-wide uppercase mb-2"
                style={{ color: COLORS.accent }}
              >
                Still curious?
              </p>
              <p className="text-sm sm:text-base leading-relaxed opacity-95">
                If you have questions about this policy or want to exercise your
                privacy rights, contact your local OurGrid project partner.
                Their contact details are listed in the app and on the main
                OurGrid website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}