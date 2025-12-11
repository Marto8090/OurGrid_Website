import { useAudience } from "../context/AudienceContext.jsx";
import backgroundImage from "../assets/electricity_poles.png";
import LightBulb from "../assets/light-bulb.png";
import mainPage from "../assets/mainPage.jpg";
import devicesPage from "../assets/devicesPage.jpg";

import { House } from 'lucide-react';
import { BanknoteArrowUp } from 'lucide-react';
import { Earth } from 'lucide-react';
import { TriangleAlert } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Clock10 } from 'lucide-react';
import { History } from 'lucide-react';
import { Handshake } from 'lucide-react';

import Reveal from "../components/Reveal.jsx";

export default function WhatIsCongestion() {
  const { audience } = useAudience();
  const isMunicipality = audience === "municipality";
  const base = isMunicipality ? "/m" : "/u";

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

      {/* TOP STRIP */}
      <Reveal>
        <section className="relative -mb-4 md:mb-0 bg-[#4F2E39] rounded-b-2xl md:rounded-b-[32px] shadow-md shadow-black/20 overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 py-10 md:py-16 md:pb-26 text-center space-y-4">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#F9F5F2]/60">
              Learn about grid congestion
            </p>
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#F9F5F2]">
              Keeping the grid in balance together
            </h1>
            <p className="text-sm md:text-base text-[#F9F5F2]/80">
              See what grid congestion is, why it's a problem, and how{" "}
              <span className="font-semibold text-[#F4B14A]">OurGrid</span> helps.
            </p>
          </div>
        </section>
      </Reveal>

      {/* MAIN PANEL */}
      <section className="bg-[#F9F5F2] text-[#4F2E39] rounded-2xl md:rounded-t-[40px] md:-mt-12">
        <div className="w-full">

          {/* WHAT + WHY SECTION */}
          <Reveal delay={0.1}>
            <div className="grid md:grid-cols-2">

              {/* LEFT CARD */}
              <div className="relative z-20 -mb-6 rounded-2xl overflow-hidden border-2 border-[#F4B14A] shadow-md"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                <div className="absolute inset-0 bg-[#4F2E39]/60"></div>

                <div className="relative z-20 p-6 md:p-8 text-[#F9F5F2] space-y-4">
                  <h2 className="text-center text-2xl md:text-3xl font-bold">{mainTitle}</h2>
                  <p className="text-center text-sm md:text-xl md:px-14 md:pt-12 text-[#F9F5F2]/90">
                    {mainParagraph}
                  </p>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="relative z-15 -mb-6 bg-white text-center border-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl shadow-md p-6 pt-12 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#01AC51] mb-3">
                  {whyTitle}
                </h2>

                <div className="text-sm md:text-xl text-[#01AC51]">
                  <div className="flex flex-col divide-y divide-[#F4B14A]/60">
                    {reasons.map((text, index) => (
                      <div key={index} className="flex items-start gap-3 py-3">
                        <span className="mt-1 text-[#F8D092]"><Zap /></span>
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </Reveal>

          {/* WHY IS IT A PROBLEM */}
          <Reveal delay={0.2}>
            <div className="relative z-10 -mb-4 bg-[#4F2E39] text-[#F9F5F2] border-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl shadow-md p-6 md:p-8 pt-12 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">Why is it a problem?</h2>

              <div className="grid gap-4 md:grid-cols-2 md:py-6 text-sm md:text-xl md:text-base">
                <div className="space-y-5 md:flex md:flex-col md:items-center">
                  <div className="flex items-center gap-3 justify-start md:w-3/4 border-2 border-dashed border-[#F4B14A]/40 rounded-full px-4 py-2">
                    <span className="text-[#F4B14A]"><House /></span>
                    <p className="flex-1 text-center">Harder to connect new homes or EV chargers.</p>
                  </div>

                  <div className="flex items-center gap-3 justify-start md:w-3/4 border-2 border-dashed border-[#F4B14A]/40 rounded-full px-4 py-2">
                    <span className="text-[#F4B14A]"><BanknoteArrowUp /></span>
                    <p className="flex-1 text-center">Higher electricity costs during peaks.</p>
                  </div>
                </div>

                <div className="space-y-5 md:flex md:flex-col md:items-center">
                  <div className="flex items-center gap-3 justify-start md:w-3/4 border-2 border-dashed border-[#F4B14A]/40 rounded-full px-4 py-2">
                    <span className="text-[#F4B14A]"><Earth /></span>
                    <p className="flex-1 text-center">More pressure on the environment.</p>
                  </div>

                  <div className="flex items-center gap-3 justify-start md:w-3/4 border-2 border-dashed border-[#F4B14A]/40 rounded-full px-4 py-2">
                    <span className="text-[#F4B14A]"><TriangleAlert /></span>
                    <p className="flex-1 text-center">Greater risk of local power outages.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* HOW CAN WE HELP */}
          <Reveal delay={0.3}>
            <div className="relative z-5 -mb-5 bg-white rounded-b-2xl md:rounded-2xl shadow-md border-2 border-[#F4B14A] p-6 md:p-8 pt-10 space-y-6 md:space-y-0 md:pt-16 md:pb-10">
              <h2 className="text-2xl md:text-3xl md:pb-6 font-bold text-center text-[#01AC51]">
                How can we help?
              </h2>

              <div className="space-y-4 md:space-y-11 md:grid md:grid-cols-2 md:py-6 text-sm md:text-xl place-items-center">

                <div className="flex items-center gap2 w-full md:w-auto bg-[#E9E2E0] border-2 border-dashed border-[#A49F9D]/40 rounded-full px-4 py-2 md:px-8 md:py-3">
                  <span className="text-[#F4B14A] text-lg"><Clock10 /></span>
                  <p className="md:text-xl text-[#01AC51] ml-4">
                    Shift some use to quieter hours.
                  </p>
                </div>

                <div className="flex items-center gap2 w-full md:w-auto bg-[#E9E2E0] border-2 border-dashed border-[#A49F9D]/40 rounded-full px-4 py-2 md:px-8 md:py-3">
                  <span className="text-[#F4B14A] text-lg"><History /></span>
                  <p className="md:text-xl text-[#01AC51] ml-4">
                    Delay EV charging or laundry.
                  </p>
                </div>

                <div className="flex items-center gap2 w-full md:w-auto bg-[#E9E2E0] border-2 border-dashed border-[#A49F9D]/40 rounded-full px-4 py-2 md:px-8 md:py-3 md:col-span-2 md:justify-self-center">
                  <span className="text-[#F4B14A] text-lg"><Handshake /></span>
                  <p className="md:text-xl text-[#01AC51] ml-4">
                    Small changes = big community impact.
                  </p>
                </div>

              </div>
            </div>
          </Reveal>

          {/* FROM PROBLEM TO SOLUTION */}
          <Reveal delay={0.4}>
            <div className="bg-[#4F2E39] text-[#F9F5F2] border-2 border-[#F4B14A] shadow-md p-6 pt-12 md:pt-16 md:pb-12 md:p-8">
              <div className="grid gap-6 md:gap-10 md:grid-cols-2 items-center">

                {/* TEXT */}
                <div className="flex flex-col items-center md:items-center text-center md:text-left md:pl-14 space-y-4">
                  <img
                    src={LightBulb}
                    alt="Light bulb icon"
                    className="w-18 h-18 md:w-24 md:h-24 object-contain"
                  />

                  <h2 className="text-2xl md:text-3xl font-bold">
                    From problem to solution
                  </h2>

                  {isMunicipality ? (
                    <p className="text-base text-center md:text-lg text-[#F9F5F2]/90 max-w-md">
                      Municipalities, co-ops, and residents can work together to reduce
                      peak loads, avoid costly upgrades, and build more resilient local
                      energy systems.
                    </p>
                  ) : (
                    <p className="text-base text-center md:text-xl max-w-md">
                      <span className="font-semibold text-[#F4B14A]">OurGrid</span>{" "}
                      helps you see when your grid is under stress and rewards you for
                      helping balance it.
                    </p>
                  )}

                  <a href={`${base}/how-ourgrid-works`}
                    className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 mt-2 md:mt-5 rounded-full bg-[#01AC51] text-white font-semibold text-sm md:text-lg shadow-md hover:bg-[#019245] transition-colors">
                    <span>See how</span>
                    <span className="mx-1 font-semibold text-[#F4B14A]">OurGrid</span>
                    <span>works</span>
                  </a>
                </div>

                {/* PHONES */}
                <div className="flex flex-col items-center md:items-center md:pl-14">
                  <div className="relative w-40 h-80 md:w-64 md:h-94">

                    <img
                      src={devicesPage}
                      alt="OurGrid devices screen"
                      className="absolute right-0 top-0 w-32 h-64 md:w-42 md:h-[20rem] rounded-[1.75rem] border-[3px] border-[#F4B14A] shadow-2xl object-cover"
                    />

                    <img
                      src={mainPage}
                      alt="OurGrid main screen"
                      className="absolute left-0 bottom-0 w-32 h-64 md:w-42 md:h-[20rem] rounded-[1.75rem] border-[3px] border-[#F4B14A] shadow-2xl object-cover"
                    />

                  </div>
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
