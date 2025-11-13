import { useAudience } from "../context/AudienceContext.jsx";
import PhoneImage from "../assets/OurGrid1.png";

export default function Landing() {
  const { audience } = useAudience();
  const isMunicipality = audience === "municipality";

  const heroTitle = isMunicipality
    ? "OurGrid for Municipalities"
    : "OurGrid for your neighborhood";

  const heroSubtitle = isMunicipality
    ? "Help your city reduce grid stress, support local energy co-ops, and give residents a clear, fair way to join in."
    : "Help your neighborhood avoid grid stress, save money, and get rewarded for using electricity at smarter moments.";

  return (
    <div className="space-y-0">
      {/* 1. Background video section */}
      <section className="bg-[#F4B14A] text-[#4F2E39] rounded-b-3xl md:rounded-b-[32px] shadow-md shadow-black/20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 flex items-center justify-center">
          <div className="w-full h-40 md:h-64 bg-[#F9F5F2]/40 border-2 border-[#F9F5F2]/70 rounded-3xl flex items-center justify-center text-center text-sm md:text-lg font-semibold tracking-wide">
            Background video placeholder
          </div>
        </div>
      </section>

      {/* 2. Purple feature band */}
      <section className="bg-[#4F2E39] text-[#F9F5F2] pt-10 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          
          {/* Left text */}
          <div className="md:w-1/2 space-y-5">
            <h1 className="text-2xl md:text-3xl font-extrabold leading-snug">
              {heroTitle}
            </h1>
            <p className="text-sm md:text-base text-[#F9F5F2]/90">{heroSubtitle}</p>

            <div className="mt-3 space-y-3 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-semibold">Shift your usage</p>
                  <p className="text-[#F9F5F2]/80 text-xs md:text-sm">
                    Move flexible appliances to less crowded hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📉</span>
                <div>
                  <p className="font-semibold">Avoid peaks</p>
                  <p className="text-[#F9F5F2]/80 text-xs md:text-sm">
                    Reduce neighborhood stress on cables and transformers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🏅</span>
                <div>
                  <p className="font-semibold">Earn points</p>
                  <p className="text-[#F9F5F2]/80 text-xs md:text-sm">
                    Rewards for shifting usage at the right moments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: PHONE MOCKUP */}
          <div className="md:w-1/2 flex justify-center">
            <div
              className="
                w-[180px] sm:w-[200px] md:w-[260px] lg:w-[300px]
                aspect-[9/19]
                bg-[#2D1820]
                rounded-[32px]
                border-4 border-[#F4B14A]/70
                shadow-2xl shadow-black/50
                flex flex-col items-center
                relative
              "
            >
              {/* Top bar */}
              <div className="w-16 h-1 rounded-full bg-[#F9F5F2]/40 mt-3"></div>

              {/* ACTUAL SCREEN CONTENT */}
              <div
                className="
                  absolute top-[40px] bottom-[40px] left-3 right-3
                  rounded-[22px]
                  overflow-hidden
                  bg-black
                "
              >
                <img
                  src={PhoneImage}
                  alt="OurGrid app"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-3 w-20 h-1.5 rounded-full bg-[#F9F5F2]/40"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Start now section */}
      <section className="bg-[#F9F5F2] text-[#4F2E39] py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 space-y-6">

          <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-2">
            Start now
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">

            {/* QR Placeholder */}
            <div className="w-40 h-40 md:w-44 md:h-44 bg-[#4F2E39]/5 border-2 border-[#4F2E39]/30 rounded-2xl flex items-center justify-center text-xs text-center">
              QR code placeholder
            </div>

            {/* Buttons */}
            <div className="space-y-3 text-center md:text-left">
              <p className="text-sm md:text-base">
                Scan the QR or download the app when OurGrid is available.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button className="px-5 py-2.5 rounded-xl bg-black text-white text-sm font-semibold flex items-center gap-2 shadow-md">
                  <span className="text-lg">▶</span>
                  <span>Get it on Google Play</span>
                </button>

                <button className="px-5 py-2.5 rounded-xl bg-black text-white text-sm font-semibold flex items-center gap-2 shadow-md">
                  <span className="text-lg"></span>
                  <span>Download on the App Store</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CTA banner */}
      <section className="bg-[#4F2E39] text-[#F9F5F2] py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4">

          <div className="rounded-3xl bg-[#4F2E39] border border-[#F4B14A] shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 px-4 py-5 md:px-6 md:py-6">

              {/* Icon + text */}
              <div className="flex items-center gap-3 md:w-1/3">
                <div className="w-14 h-14 rounded-2xl bg-[#F9F5F2]/10 flex items-center justify-center">
                  <span className="text-3xl">🤔</span>
                </div>
                <p className="font-semibold text-sm md:text-base">
                  Are you curious what grid congestion is?
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex-1 flex justify-center md:justify-end w-full">
                <a
                  href={
                    isMunicipality
                      ? "/m/what-is-grid-congestion"
                      : "/u/what-is-grid-congestion"
                  }
                  className="
                    inline-flex items-center justify-center
                    px-6 md:px-8 py-2.5
                    rounded-full
                    bg-[#01AC51]
                    text-white font-semibold text-sm md:text-base
                    shadow-md hover:bg-[#019245] transition-colors
                  "
                >
                  What Grid Congestion is?
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
