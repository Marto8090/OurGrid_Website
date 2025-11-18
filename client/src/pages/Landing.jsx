import { useAudience } from "../context/AudienceContext.jsx";
import PhoneImage from "../assets/OurGrid1.png";
import BackgroundVideo from "../assets/background.mov";
import QR from "../assets/QR.jpeg";
import Question from "../assets/question.png";
import { TrendingDown, Medal, Zap } from "lucide-react";

export default function Landing() {
  const { audience } = useAudience();
  const isMunicipality = audience === "municipality";

  const heroTitle = isMunicipality
    ? "OurGrid for Municipalities"
    : "OurGrid for your neighborhood";

  const heroSubtitle = isMunicipality
    ? "Help your city reduce grid stress, support local energy co-ops, and give residents a clear, fair way to join in."
    : "Help your neighborhood avoid grid stress  and get money using our app";

  return (
    <div className="space-y-0">
      {/* HERO - full width background video */}
      <section className="relative w-full overflow-hidden bg-black text-[#F9F5F2] h-[85vh] md:h-[95vh]">
        <video
          src={BackgroundVideo}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex items-center justify-center w-full h-full px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              {heroTitle}
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-[#F9F5F2]/90">
              {heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-10 md:h-18 bg-[#4F2E39]" />

{/* SECTION 2 */}
<section className="bg-[#4F2E39] text-[#F9F5F2] pb-8 md:pb-10 lg:pb-4 xl:pb-0">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-center md:gap-10 lg:gap-12">

      {/* Bullets */}
      <div className="w-full md:w-7/12 space-y-16 md:pr-2">

        {/* 1. Shift your usage */}
        <div className="flex items-start gap-8 md:gap-9">
          <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center">
            <Zap className="w-full h-full text-[#01AC51]" />
          </div>

          <div>
            <p className="font-semibold text-lg md:text-2xl">Shift your usage</p>
            <p className="text-[#F9F5F2]/80 text-sm md:text-base mt-1">
              Move flexible appliances to less crowded hours and help your neighborhood avoid grid stress.
            </p>
          </div>
        </div>

        {/* 2. Avoid peaks */}
        <div className="flex items-start gap-8 md:gap-9">
          <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center">
            <TrendingDown className="w-full h-full text-[#01AC51]" />
          </div>

          <div>
            <p className="font-semibold text-lg md:text-2xl">Avoid peaks</p>
            <p className="text-[#F9F5F2]/80 text-sm md:text-base mt-1">
              When many people use electricity at the same time, cables and transformers hit their limits.
              OurGrid helps spread that demand.
            </p>
          </div>
        </div>

        {/* 3. Earn points */}
        <div className="flex items-start gap-8 md:gap-9">
          <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center">
            <Medal className="w-full h-full text-[#01AC51]" />
          </div>

          <div>
            <p className="font-semibold text-lg md:text-2xl">Earn points</p>
            <p className="text-[#F9F5F2]/80 text-sm md:text-base mt-1">
              Residents can earn points for shifting their usage. Cities can connect these to local rewards
              and initiatives.
            </p>
          </div>
        </div>

      </div>

      {/* Phone */}
      <div className="w-full md:w-4/12 flex justify-center md:justify-end">
        <div
          className="
            relative
            w-[220px] sm:w-[240px] md:w-[270px] lg:w-[320px]
            drop-shadow-2xl
            [mask-image:linear-gradient(to_top,transparent_0%,transparent_25%,black_80%,black_100%)]
          "
        >
          <img
            src={PhoneImage}
            alt="OurGrid app on phone"
            className="
              w-full h-auto
              rounded-[32px]
              border-4 border-[#F4B14A]/70
              shadow-2xl shadow-black/60
              object-cover
            "
          />
        </div>
      </div>

    </div>
  </div>
</section>


      {/* SECTION 3 */}
      <section className="bg-[#F9F5F2] text-[#4F2E39] py-12 md:py-18">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-extrabold">
            Start now
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12">
            {/* QR – hidden on mobile/tablet */}
            <div className="hidden lg:block w-40 h-40 bg-[#4F2E39]/5 border-2 border-[#4F2E39]/30 rounded-2xl overflow-hidden">
              <img src={QR} alt="QR code" className="w-full h-full object-cover" />
            </div>

            {/* Text + buttons */}
            <div className="space-y-4 md:space-y-5 text-center md:text-left max-w-xl">
              <p className="text-sm md:text-base">
                Scan the QR or use the buttons below to download the app when OurGrid is available in your area.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button className="px-5 py-2.5 md:px-7 md:py-3 rounded-xl bg-black text-white text-sm md:text-base font-semibold flex items-center gap-2 shadow-md">
                  <span className="text-lg md:text-xl">▶</span>
                  <span>Get it on Google Play</span>
                </button>

                <button className="px-5 py-2.5 md:px-7 md:py-3 rounded-xl bg-black text-white text-sm md:text-base font-semibold flex items-center gap-2 shadow-md">
                  <span className="text-lg md:text-xl"></span>
                  <span>Download on the App Store</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 – CTA */}
      <section className="bg-[#4F2E39] text-[#F9F5F2] py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl bg-[#4F2E39] border border-[#F4B14A] shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-7 px-5 py-6 md:px-8 md:py-8">
              {/* Icon + text */}
              <div className="flex items-center gap-3 md:gap-4 md:flex-1">
                <img
                  src={Question}
                  alt="Question icon"
                  className="w-16 h-auto md:w-32 lg:w-40 object-contain flex-shrink-0"
                />
                <p className="font-semibold text-sm md:text-2xl md:whitespace-nowrap flex-1">
                  Are you curious what grid congestion is?
                </p>
              </div>

              {/* Button */}
              <div className="flex-1 flex justify-center md:justify-end w-full mt-4 md:mt-0">
                <a
                  href={
                    isMunicipality
                      ? "/m/what-is-grid-congestion"
                      : "/u/what-is-grid-congestion"
                  }
                  className="
                    inline-flex items-center justify-center
                    px-6 md:px-9 py-2.5 md:py-3
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
