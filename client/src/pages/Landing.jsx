import { useAudience } from "../context/AudienceContext.jsx";
import PhoneImage from "../assets/OurGrid1.png";
import BackgroundVideo from "../assets/background.mov";

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
      {/* SECTION 1 - FULL WIDTH HERO VIDEO */}
      <section
        className="
          relative
          w-screen
          left-1/2 right-1/2
          -ml-[50vw] -mr-[50vw]
          overflow-hidden
          text-[#F9F5F2]
          bg-black
        "
      >
        {/* VIDEO BACKGROUND */}
        <video
          src={BackgroundVideo}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* DARK OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* HERO CONTENT */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-full px-6 py-24 md:py-40 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
              {heroTitle}
            </h1>
            <p className="mt-5 text-base md:text-xl text-[#F9F5F2]/90 max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* EXTRA SPACE AFTER HERO TO SEPARATE SECTIONS */}
      <div className="h-12 md:h-20 bg-[#4F2E39]" />

      {/* SECTION 2 - MAIN FEATURE BAND */}
      <section className="bg-[#4F2E39] text-[#F9F5F2] pt-10 md:pt-12 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-center gap-8 md:gap-10 lg:gap-12">
            {/* LEFT - BULLETS */}
            <div className="w-full md:w-7/12 space-y-8 md:pr-2">
              {/* BULLET 1 */}
              <div className="flex items-start gap-4 md:gap-5">
                <span className="text-3xl md:text-5xl lg:text-6xl leading-none">⚡</span>
                <div>
                  <p className="font-semibold text-base md:text-2xl">Shift your usage</p>
                  <p className="text-[#F9F5F2]/80 text-xs md:text-base mt-1">
                    Move flexible appliances to less crowded hours and help your neighborhood avoid grid stress.
                  </p>
                </div>
              </div>

              {/* BULLET 2 */}
              <div className="flex items-start gap-4 md:gap-5">
                <span className="text-3xl md:text-5xl lg:text-6xl leading-none">📉</span>
                <div>
                  <p className="font-semibold text-base md:text-2xl">Avoid peaks</p>
                  <p className="text-[#F9F5F2]/80 text-xs md:text-base mt-1">
                    When many people use electricity at the same time, cables and transformers hit their limits. OurGrid helps spread that demand.
                  </p>
                </div>
              </div>

              {/* BULLET 3 */}
              <div className="flex items-start gap-4 md:gap-5">
                <span className="text-3xl md:text-5xl lg:text-6xl leading-none">🏅</span>
                <div>
                  <p className="font-semibold text-base md:text-2xl">Earn points</p>
                  <p className="text-[#F9F5F2]/80 text-xs md:text-base mt-1">
                    Residents can earn points for shifting their usage. Cities can connect these to local rewards and initiatives.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT - PHONE MOCKUP */}
            <div className="w-full md:w-4/12 flex justify-center md:justify-end">
              <div
                className="
                  relative
                  w-[220px] sm:w-[240px] md:w-[270px] lg:w-[320px]
                  transition-transform
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

      {/* SECTION 3 - DOWNLOAD */}
      <section className="bg-[#F9F5F2] text-[#4F2E39] py-12 md:py-18">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-extrabold">
            Start now
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12">
            {/* QR PLACEHOLDER */}
            <div className="w-40 h-40 md:w-44 md:h-44 bg-[#4F2E39]/5 border-2 border-[#4F2E39]/30 rounded-2xl flex items-center justify-center text-xs md:text-sm text-center">
              QR code placeholder
            </div>

            {/* DOWNLOAD TEXT AND BUTTONS */}
            <div className="space-y-4 md:space-y-5 text-center md:text-left max-w-xl">
              <p className="text-sm md:text-base">
                Scan the QR or use the buttons below to download the app when OurGrid is available in your area.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                {/* GOOGLE PLAY BUTTON */}
                <button className="px-5 py-2.5 md:px-7 md:py-3 rounded-xl bg-black text-white text-sm md:text-base font-semibold flex items-center gap-2 shadow-md">
                  <span className="text-lg md:text-xl">▶</span>
                  <span>Get it on Google Play</span>
                </button>

                {/* APP STORE BUTTON */}
                <button className="px-5 py-2.5 md:px-7 md:py-3 rounded-xl bg-black text-white text-sm md:text-base font-semibold flex items-center gap-2 shadow-md">
                  <span className="text-lg md:text-xl"></span>
                  <span>Download on the App Store</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - CTA BANNER */}
      <section className="bg-[#4F2E39] text-[#F9F5F2] py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl bg-[#4F2E39] border border-[#F4B14A] shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-7 px-5 py-6 md:px-8 md:py-8">
              {/* LEFT - TEXT */}
              <div className="flex items-center gap-3 md:gap-4 md:w-1/3">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#F9F5F2]/10 flex items-center justify-center">
                  <span className="text-3xl md:text-5xl leading-none">🤔</span>
                </div>
                <p className="font-semibold text-sm md:text-lg">
                  Are you curious what grid congestion is?
                </p>
              </div>

              {/* RIGHT - BUTTON */}
              <div className="flex-1 flex justify-center md:justify-end w-full">
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
