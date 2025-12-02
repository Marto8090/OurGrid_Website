import { Shield, Users, Globe, Smartphone, BadgeCheck, Lock, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const PRIVACY_SECTIONS = [
  {
    id: "privacy-policy",
    icon: Shield,
    label: "Privacy Policy",
    short:
      "OurGrid helps neighbourhoods understand and reduce grid congestion.",
    body: [
      "OurGrid helps neighbourhoods understand and reduce grid congestion.",
      "Through the OurGrid app, households can track their energy use, join challenges, and see how collective actions strengthen the grid.",
      "This policy explains how we handle information related to OurGrid and its users."
    ],
  },
  {
    id: "who-we-are",
    icon: Users,
    label: "Who We Are",
    short:
      "OurGrid is a collaboration between local energy partners and OpenRemote.",
    body: [
      "OurGrid is a collaboration between local energy partners and OpenRemote in the Netherlands.",
      "We work together to make energy use more sustainable and community-driven.",
      "Different partners may handle specific data parts, but all follow the same privacy standards under EU GDPR."
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
      "Only essential cookies are used – no tracking or marketing cookies."
    ],
  },
  {
    id: "app-users",
    icon: Smartphone,
    label: "App Users",
    short:
      "The OurGrid app collects minimal data needed for the challenges to work.",
    body: [
      "The OurGrid app collects minimal data necessary to function and measure participation in energy challenges. This may include:",
      "• Device information",
      "• Household energy data from the dongle",
      "• Challenge results and points",
      "Data older than three months is automatically deleted, except records needed for payouts or statistics.",
      "Users can delete their data anytime by removing the dongle and uninstalling the app."
    ],
  },
  {
    id: "your-rights",
    icon: BadgeCheck,
    label: "Your Rights",
    short: "You can always ask to see, correct or delete your data.",
    body: [
      "You can request access to, correction, or deletion of your personal data at any time.",
      "Contact your local project partner for help – details are provided inside the app and on the OurGrid website."
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    label: "Data Security",
    short:
      "All data is processed securely within the EU using encrypted connections.",
    body: [
      "All data is processed securely within the EU using encrypted connections and restricted access.",
      "We regularly review our systems to ensure data safety and compliance with GDPR."
    ],
  },
  {
    id: "updates",
    icon: RefreshCw,
    label: "Updates",
    short:
      "The privacy rules may change when the project is improved or expanded.",
    body: [
      "This privacy policy may change to reflect improvements or new features.",
      "The latest version is always available on the OurGrid website."
    ],
  },
];

export default function PrivacyPolicy() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-[#F9F5F2] flex flex-col">
      <section className="relative flex-1">
        {/* BACKGROUND IMAGE – swap URL with your real image */}
        <div className="absolute inset-0 bg-[url('/assets/privacy-background-placeholder.jpg')] bg-cover bg-center" />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E5F4FF]/85 via-[#E5F4FF]/90 to-[#F9F5F2]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-6">
          {/* HEADER STRIP (like screenshot) */}
          <div className="rounded-2xl bg-[#2C6EA4] text-white px-4 py-3 sm:px-6 sm:py-4 shadow-md max-w-xl">
            <p className="text-xs sm:text-sm uppercase tracking-wide opacity-90">
              Privacy & data use
            </p>
            <h1 className="text-xl sm:text-2xl font-semibold mt-1">
              Privacy policy
            </h1>
            <p className="text-xs sm:text-sm mt-1 opacity-90">
              How OurGrid and its partners handle information about website visitors and app users.
            </p>
          </div>

          {/* CARDS */}
          {/* On mobile: 1 column (like your design). On md+: 2 or 3 columns to use space better */}
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PRIVACY_SECTIONS.map((section) => {
              const Icon = section.icon;
              const isOpen = openId === section.id;

              return (
                <article
                  key={section.id}
                  className="group relative rounded-2xl bg-white/95 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggle(section.id)}
                    className="w-full text-left p-4 sm:p-5 flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01AC51] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-2xl"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#F4B14A]">
                          Privacy
                        </p>
                        <h2 className="mt-1 text-sm sm:text-base font-semibold text-[#1D252C]">
                          {section.label}
                        </h2>
                      </div>
                      <div className="flex flex-col items-end gap-1 ml-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#01AC51] text-white shadow-sm">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F4B14A]/90 text-[#4F2E39] shadow-sm">
                          {isOpen ? (
                            <ChevronUp className="h-4 w-4" aria-hidden="true" />
                          ) : (
                            <ChevronDown className="h-4 w-4" aria-hidden="true" />
                          )}
                        </span>
                      </div>
                    </div>

                    <p className="mt-2 text-xs sm:text-sm text-[#384450]">
                      {section.short}
                    </p>

                    {/* Expandable body – keeps cards compact on mobile but readable */}
                    <div
                      className={`mt-3 text-xs sm:text-sm text-[#384450] transition-all duration-200 ${
                        isOpen
                          ? "max-h-56 sm:max-h-64 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <div className="pt-1 border-t border-[#E2E8F0] space-y-1">
                        {section.body.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>

          {/* STILL CURIOUS STRIP ABOVE THE PHOTO, LIKE YOUR SCREENSHOT */}
          <div className="max-w-xl">
            <div className="rounded-2xl bg-[#4F2E39] text-[#F9F5F2] px-5 py-4 sm:py-5 shadow-md">
              <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#F4B14A]">
                Still curious?
              </p>
              <p className="mt-1 text-sm sm:text-base">
                If you have questions about this policy or want to exercise your privacy rights,
                contact your local OurGrid project partner. Their contact details are listed in
                the app and on the main OurGrid website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
