import { useAudience } from "../context/AudienceContext.jsx";
import PhoneImage from "../assets/OurGrid1.png";
import BackgroundVideo from "../assets/background.mov";
import QR from "../assets/QR.jpeg";
import Question from "../assets/question.png";
import { TrendingDown, Medal, Zap } from "lucide-react";
import PlayStore1 from "../assets/PlayStore1.png";
import AppStore from "../assets/AppStore.png";

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

      {/* Spacer under hero */}
      <div className="h-10 md:h-18 bg-[#4F2E39]" />

      {/* SECTION 2 – phone + 3 bullets */}
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
                  <p className="font-semibold text-lg md:text-2xl">
                    Shift your usage
                  </p>
                  <p className="text-[#F9F5F2]/80 text-sm md:text-base mt-1">
                    Move flexible appliances to less crowded hours and help your
                    neighborhood avoid grid stress.
                  </p>
                </div>
              </div>

              {/* 2. Avoid peaks */}
              <div className="flex items-start gap-8 md:gap-9">
                <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center">
                  <TrendingDown className="w-full h-full text-[#01AC51]" />
                </div>

                <div>
                  <p className="font-semibold text-lg md:text-2xl">
                    Avoid peaks
                  </p>
                  <p className="text-[#F9F5F2]/80 text-sm md:text-base mt-1">
                    When many people use electricity at the same time, cables
                    and transformers hit their limits. OurGrid helps spread that
                    demand.
                  </p>
                </div>
              </div>

              {/* 3. Earn points */}
              <div className="flex items-start gap-8 md:gap-9">
                <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center">
                  <Medal className="w-full h-full text-[#01AC51]" />
                </div>

                <div>
                  <p className="font-semibold text-lg md:text-2xl">
                    Earn points
                  </p>
                  <p className="text-[#F9F5F2]/80 text-sm md:text-base mt-1">
                    Residents can earn points for shifting their usage. Cities
                    can connect these to local rewards and initiatives.
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

      {/* SECTION 3+4 – Start now + Grid congestion cards */}
 <section className="bg-[#4F2E39] text-[#F9F5F2] py-10 md:py-14">
  {/* full-width container with only side padding */}
  <div className="w-full px-4 lg:px-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
      
      {/* START NOW CARD */}
      <div className="rounded-3xl border-2 border-[#F4B14A] bg-[#4F2E39] shadow-lg p-6 md:p-8 flex flex-col justify-between">
        {/* Top: QR + text */}
        <div className="flex items-start gap-4 md:gap-6">
          {/* QR – tablet/desktop only */}
          <div className="hidden lg:block w-32 h-32 lg:w-40 lg:h-40 overflow-hidden flex-shrink-0">
            <img
              src={QR}
              alt="QR"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
              Start now
            </h2>
            <p className="mt-2 text-sm md:text-base lg:text-lg leading-relaxed max-w-md">
              Scan the QR or use the buttons below to download the app
              when OurGrid is available in your area.
            </p>
          </div>
        </div>

        {/* Bottom: store buttons */}
        <div className="mt-6 flex flex-col lg:flex-row gap-4 justify-center md:justify-start flex-wrap">
          <a href="#" className="block">
            <img
              src={PlayStore1}
              alt="Get it on Google Play"
              className="h-20 md:h-24 w-auto object-contain min-w-[210px]"
            />
          </a>

          <a href="#" className="block">
            <img
              src={AppStore}
              alt="Download on the App Store"
              className="h-20 md:h-24 w-auto object-contain min-w-[230px]"
            />
          </a>
        </div>
      </div>

      {/* WHAT IS GRID CONGESTION CARD */}
      <div className="rounded-3xl border-2 border-[#F4B14A] bg-[#4F2E39] shadow-lg p-6 md:p-8 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center lg:text-left">
          Are you curious what grid congestion is?
        </h3>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 md:gap-6">
          <img
            src={Question}
            alt="Question"
            className="w-20 md:w-28 lg:w-32 object-contain flex-shrink-0"
          />

          <div className="flex-1 flex justify-center sm:justify-start">
            <a
              href={
                isMunicipality
                  ? "/m/what-is-grid-congestion"
                  : "/u/what-is-grid-congestion"
              }
              className="
                inline-flex items-center justify-center
                px-8 md:px-10 lg:px-12
                py-3 md:py-3.5 lg:py-4
                rounded-full
                bg-[#01AC51]
                text-white font-semibold
                text-sm md:text-base lg:text-lg
                shadow-md hover:bg-[#019245] transition-colors
              "
            >
              What is Grid congestion?
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  );
}
