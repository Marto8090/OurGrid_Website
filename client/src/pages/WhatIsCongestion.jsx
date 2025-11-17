import { useAudience } from "../context/AudienceContext.jsx";
import PhoneImage from "../assets/OurGrid1.png";

export default function WhatIsCongestion() {
  const { audience } = useAudience();
  const isMunicipality = audience === "municipality";
  const base = isMunicipality ? "/m" : "/u";

  // TEXT THAT CHANGES BY AUDIENCE

  const mainTitle = isMunicipality
    ? "How congestion affects local policy"
    : "What is Grid Congestion?";

  const mainParagraph = isMunicipality
    ? "New housing and EV stations can’t connect to the grid. Higher local energy costs and slower renewable rollout. Climate goals delayed by network limits. Reduced reliability in high-density areas."
    : "Grid congestion happens when too many people use electricity at the same time – for example, when everyone cooks, charges their car, and turns on heating in the evening.";

  const whyTitle = isMunicipality
    ? "Why does it matter for cities?"
    : "Why does it happen?";

  const reasons = isMunicipality
    ? [
        "Rapid electrification: Heat pumps, EVs, and solar panels are spreading faster than grid upgrades.",
        "Limited transformer capacity: Urban networks reach overload during cold evenings or sunny afternoons.",
        "Investment delays: Reinforcement projects can take 3–5 years, blocking new developments.",
      ]
    : [
        "The electricity grid wasn’t designed for all the new electric cars, heat pumps, and solar panels.",
        "Power demand spikes during the same hours (morning and evening).",
        "Local transformers have limits – if everyone uses power at once, they get overloaded.",
      ];

  return (
    <div className="space-y-0">
      {/* TOP STRIP — BACKGROUND VIDEO AREA */}
      <section className="bg-[#4F2E39] rounded-b-3xl md:rounded-b-[32px] shadow-md shadow-black/20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 flex items-center justify-center">
          {/* Replace this with real video later */}
          <div className="w-full h-40 md:h-56 bg-[#F9F5F2]/5 border-2 border-[#F9F5F2]/30 rounded-3xl flex items-center justify-center text-center text-sm md:text-lg font-semibold tracking-wide text-[#F9F5F2]/70">
            background video
          </div>
        </div>
      </section>

      {/* MAIN PANEL */}
      <section className="bg-[#F9F5F2] text-[#4F2E39] pt-12 pb-16 md:pt-16 md:pb-20 rounded-t-3xl md:rounded-t-[40px] -mt-8 md:-mt-12">
        <div className="max-w-6xl mx-auto px4 space-y-14 md:space-y-20">
          {/* ROW 1 — MAIN EXPLAINER + WHY SECTION */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* LEFT CARD — WHAT / POLICY IMPACT */}
            <div className="bg-[#4F2E39] text-[#F9F5F2] border-2 border-[#F4B14A] rounded-3xl shadow-md p-6 md:p-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">{mainTitle}</h2>
              <p className="text-sm md:text-base text-[#F9F5F2]/90">
                {mainParagraph}
              </p>
            </div>

            {/* RIGHT CARD — WHY SECTION */}
            <div className="bg-white border border-[#01AC51]/30 rounded-3xl shadow-md p-6 md:p-8">
              <h2 className="text-lg md:text-xl font-bold text-[#01AC51] mb-3">
                {whyTitle}
              </h2>
              <div className="space-y-4 text-sm md:text-base">
                {reasons.map((text, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[#01AC51] text-lg">
                      {isMunicipality ? "↻" : "⚡"}
                    </span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ROW 2 — WHY IS IT A PROBLEM? (SAME FOR BOTH) */}
          <div className="bg-[#4F2E39] text-[#F9F5F2] rounded-3xl shadow-md p-6 md:p-8 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-center">
              Why is it a problem?
            </h2>
            <div className="grid gap-4 md:grid-cols-2 text-sm md:text-base">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#F4B14A] text-lg">🏠</span>
                  <p>Harder to connect new homes or EV chargers.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#F4B14A] text-lg">💸</span>
                  <p>Higher electricity costs during peaks.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#F4B14A] text-lg">🌍</span>
                  <p>More pressure on the environment.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#F4B14A] text-lg">⚠️</span>
                  <p>Greater risk of local power outages.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3 — HOW CAN WE HELP? (SAME STRUCTURE, WORKS FOR BOTH) */}
          <div className="bg-white rounded-3xl shadow-md border border-[#4F2E39]/10 p-6 md:p-8 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-center text-[#01AC51]">
              How can we help?
            </h2>
            <div className="grid gap-3 md:grid-cols-3 text-sm md:text-base">
              <div className="border border-[#4F2E39]/20 rounded-full px-4 py-2 text-center">
                Shift some use to quieter hours.
              </div>
              <div className="border border-[#4F2E39]/20 rounded-full px-4 py-2 text-center">
                Delay EV charging or laundry.
              </div>
              <div className="border border-[#4F2E39]/20 rounded-full px-4 py-2 text-center">
                Small changes = big community impact.
              </div>
            </div>
          </div>

          {/* ROW 4 — FROM PROBLEM TO SOLUTION + PHONE MOCKUP */}
          <div className="bg-[#4F2E39] text-[#F9F5F2] rounded-3xl shadow-md p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr,1fr] items-center">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold">
                  From problem to solution
                </h2>
                <p className="text-sm md:text-base">
                  <span className="font-semibold text-[#F4B14A]">OurGrid</span>{" "}
                  helps you see when your grid is under stress and rewards you
                  for helping balance it.
                </p>
                <p className="text-sm md:text-base text-[#F9F5F2]/90">
                  Municipalities, co-ops, and residents can work together to
                  reduce peak loads, avoid costly upgrades, and build more
                  resilient local energy systems.
                </p>
                <a
                  href={`${base}/how-ourgrid-works`}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#01AC51] text-white font-semibold text-sm md:text-base shadow-md hover:bg-[#019245] transition-colors mt-1 md:mt-2"
                >
                  See how OurGrid works
                </a>
              </div>

              {/* PHONE MOCKUP */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-40 h-80 md:w-48 md:h-[21rem] rounded-[2.25rem] bg-[#1e1b24] shadow-2xl border-[3px] border-black/30 overflow-hidden">
                  <div className="absolute inset-[6px] rounded-[1.9rem] bg-black overflow-hidden">
                    <img
                      src={PhoneImage}
                      alt="OurGrid app screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* decorative notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-black/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
