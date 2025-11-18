import { useAudience } from "../context/AudienceContext.jsx";
import PhoneImage from "../assets/OurGrid1.png";
import backgroundImage from "../assets/electricity_poles.png";
import LightBulb from "../assets/light-bulb.png";
import mainPage from "../assets/mainPage.jpg";
import devicesPage from "../assets/devicesPage.jpg";

export default function WhatIsCongestion() {
  const { audience } = useAudience();
  const isMunicipality = audience === "municipality";
  const base = isMunicipality ? "/m" : "/u";

  // TEXT THAT CHANGES BY AUDIENCE

  const mainTitle = isMunicipality
    ? "How congestion affects local policy"
    : "What is Grid Congestion?";

  const mainParagraph = isMunicipality
    ? "New housing and EV stations can't connect to the grid. Higher local energy costs and slower renewable rollout. Climate goals delayed by network limits. Reduced reliability in high-density areas."
    : "Grid congestion happens when too many people use electricity at the same time - for example, when everyone cooks, charges their car, and turns on heating in the evening.";

  const whyTitle = isMunicipality
    ? "Why does it matter for cities?"
    : "Why does it happen?";

  const reasons = isMunicipality
    ? [
        "Rapid electrification: Heat pumps, EVs, and solar panels are spreading faster than grid upgrades.",
        "Limited transformer capacity: Urban networks reach overload during cold evenings or sunny afternoons.",
        "Investment delays: Reinforcement projects can take 3-5 years, blocking new developments.",
      ]
    : [
        "The electricity grid wasn't designed for all the new electric cars, heat pumps, and solar panels.",
        "Power demand spikes during the same hours (morning and evening).",
        "Local transformers have limits - if everyone uses power at once, they get overloaded.",
      ];

  return (
    <div className="space-y-0">
      {/* TOP STRIP — BACKGROUND VIDEO AREA */}
      <section className="bg-[#4F2E39] rounded-b-2xl md:rounded-b-[32px] shadow-md shadow-black/20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 flex items-center justify-center">
          {/* Replace this with real video later */}
          <div className="w-full h-40 md:h-56 bg-[#F9F5F2]/5 border-2 border-[#F9F5F2]/30 rounded-2xl flex items-center justify-center text-center text-sm md:text-lg font-semibold tracking-wide text-[#F9F5F2]/70">
            background video
          </div>
        </div>
      </section>

      {/* MAIN PANEL -*/}
      <section className="bg-[#F9F5F2] text-[#4F2E39] md:pt-16 md:pb-20 rounded-t-2xl md:rounded-t-[40px] -mt-8 md:-mt-12">
        <div className="max-w-6xl mx-auto px4  md:space-y-20">
            {/* ROW 1 — WHAT + WHY SECTION */}
            <div className="grid md:grid-cols-2">
            {/* LEFT CARD — WHAT / POLICY IMPACT */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#F4B14A] shadow-md"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}>
              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-[#4F2E39]/60"></div>

              {/* CONTENT */}
              <div className="relative p-6 md:p-8 text-[#F9F5F2] space-y-4">
                <h2 className="text-center text-xl md:text-2xl font-bold">{mainTitle}</h2>
                <p className="text-sm md:text-base text-[#F9F5F2]/90">{mainParagraph}</p>
              </div>
          </div>


            {/* RIGHT CARD — WHY SECTION */}
            
            <div className="bg-white text-center border-2 border-[#F4B14A] rounded-2xl shadow-md p-6 md:p-8">
              <h2 className="text-lg md:text-xl font-bold text-[#01AC51] mb-3">
                {whyTitle}
              </h2>
             <div className="text-sm md:text-base text-[#01AC51]">
                <div className="flex flex-col divide-y divide-[#F4B14A]/60">
                  {reasons.map((text, index) => (
                    <div key={index} className="flex items-start gap-3 py-3">
                      <span className="mt-1 text-[#01AC51] text-lg">
                        {isMunicipality ? "↻" : "⚡"}
                      </span>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2 — WHY IS IT A PROBLEM? (SAME FOR BOTH) */}
          <div className="bg-[#4F2E39] text-[#F9F5F2] border-2 border-[#F4B14A] rounded-2xl shadow-md p-6 md:p-8 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-center">
              Why is it a problem?
            </h2>
            <div className="grid gap-4 md:grid-cols-2 text-sm md:text-base">
              <div className="space-y-3">
             <div className="flex items-center justify-between border-2 border-dashed border-[#F4B14A]/40 rounded-full px-4 py-2">
                  <span className="text-[#F4B14A] text-lg">🏠</span>
                  <p>Harder to connect new homes or EV chargers.</p>
                </div>
               <div className="flex items-center justify-between  border-2 border-dashed border-[#F4B14A]/40 rounded-full px-4 py-2">
                  <span className="text-[#F4B14A] text-lg">💸</span>
                  <p>Higher electricity costs during peaks.</p>
                </div>
              </div>
              <div className="space-y-3">
               <div className="flex items-center justify-between border-2 border-dashed border-[#F4B14A]/40 rounded-full px-4 py-2">
                  <span className="text-[#F4B14A] text-lg">🌍</span>
                  <p>More pressure on the environment.</p>
                </div>
               <div className="flex items-center justify-between  border-2 border-dashed border-[#F4B14A]/40 rounded-full px-4 py-2">
                  <span className="text-[#F4B14A] text-lg">⚠️</span>
                  <p>Greater risk of local power outages.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3 — HOW CAN WE HELP? (SAME STRUCTURE, WORKS FOR BOTH) */}
          <div className="bg-white rounded-2xl shadow-md border-2 border-[#F4B14A] p-6 md:p-8 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-center text-[#01AC51]">
              How can we help?
            </h2>
            <div className="grid gap-4 md:grid-cols-2 text-sm md:text-base">
                 <div className="flex items-center bg-[#E9E2E0] border-2 border-dashed border-[#A49F9D]/40 rounded-full px-4 py-2">
                    <span className="text-[#F4B14A] text-lg" >🌍</span>
                    <p className=" text-[#01AC51] ml-3">Shift some use to quieter hours.</p>
                  </div>
                <div className="flex items-center bg-[#E9E2E0] border-2 border-dashed border-[#A49F9D]/40 rounded-full px-4 py-2">
                  <span className="text-[#F4B14A] text-lg">🌍</span>
                  <p className=" text-[#01AC51] ml-3 ">Delay EV charging or laundry.</p>
                </div>
                <div className="flex items-center bg-[#E9E2E0] border-2 border-dashed border-[#A49F9D]/40 rounded-full px-4 py-2">
                  <span className="text-[#F4B14A] text-lg">🌍</span>
                  <p className=" text-[#01AC51] ml-3">Small changes = big community impact.</p>
                </div>
            </div>
          </div>

          {/* ROW 4 — FROM PROBLEM TO SOLUTION + PHONE MOCKUP */}
          <div className="bg-[#4F2E39] text-[#F9F5F2] border-2 border-[#F4B14A]  shadow-md p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr,1fr] items-center">
              <div className="space-y-4 text-center">
                <div className="flex justify-center">
                  <img src={LightBulb} alt="Light bulb icon" className="w-20 h-20 object-contain" />
                </div>
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
                <a href={`${base}/how-ourgrid-works`}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#01AC51] text-white font-semibold text-sm md:text-base shadow-md hover:bg-[#019245] transition-colors mt-1 md:mt-2"
                >
                  See how OurGrid works
                </a>
              </div>

              {/* STACKED SCREENS */}
              <div className="flex justify-center md:justify-center">
                <div className="relative w-55 h-75 md:w-52 md:h-[22rem]">

                  {/* back phone */}
                  <img  src={devicesPage} alt="OurGrid devices screen"
                    className="absolute right-0 top-0 w-32 h-64 md:w-36 md:h-[18rem] rounded-[1.75rem] border-[3px] border-[#F4B14A] shadow-2xl object-cover"
                  />

                  {/* front phone */}
                  <img src={mainPage} alt="OurGrid main screen"
                    className="absolute left-0 bottom-0 w-32 h-64 md:w-36 md:h-[18rem] rounded-[1.75rem] border-[3px] border-[#F4B14A] shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
