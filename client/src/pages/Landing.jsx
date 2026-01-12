import { useEffect, useRef } from "react";
import { useAudience } from "../context/AudienceContext.jsx";
import PhoneImage from "../assets/OurGrid1.png";
import BackgroundVideo from "../assets/background.h264";
import QR from "../assets/QR.jpeg";
import Question from "../assets/question.png";
import { TrendingDown, Medal, Zap } from "lucide-react";
import PlayStore1 from "../assets/PlayStore1.png";
import AppStore from "../assets/AppStore.png";

export default function Landing() {
  const { audience } = useAudience();
  const isMunicipality = audience === "municipality";

  // REF FOR SCROLL-TRIGGERED ANIMATION CONTAINER
  const circleContainerRef = useRef(null);
  // REF FOR THE SVG RING TO ANIMATE
  const ringRef = useRef(null);

  // HERO TITLE CHANGES BASED ON AUDIENCE
  const heroTitle = isMunicipality
    ? "Local grids are reaching limits"
    : "Electricity peaks overload local grids";

  // HERO SUBTITLE BASED ON AUDIENCE
const heroSubtitle = isMunicipality ? (
  "OurGrid helps reduce peak loads and protect capacity for future development."
  ):
  (
  <>Shift energy use, reduce grid stress, and earn{" "} <span className="text-[#01AC51] font-semibold">money</span> as a reward. </>
);


  // INTERSECTION OBSERVER THAT STARTS THE CIRCLE ANIMATION WHEN VISIBLE
  useEffect(() => {
    const element = circleContainerRef.current;
    const ring = ringRef.current;

    // SAFETY CHECK – EXIT IF ELEMENTS ARE MISSING
    if (!element || !ring) return;

    // CREATES OBSERVER TO WATCH WHEN THE PHONE IMAGE COMES INTO VIEW
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // WHEN 40% OF ELEMENT IS VISIBLE, TRIGGER ANIMATION
          if (entry.isIntersecting) {
            ring.style.strokeDashoffset = "0"; // RING DRAWS ITSELF
          }
        });
      },
      { threshold: 0.4 } // 40% VISIBILITY REQUIRED
    );

    observer.observe(element);

    return () => observer.disconnect(); // CLEANUP ON UNMOUNT
  }, []);

  return (
    <div className="space-y-0">

      {/* HERO SECTION WITH BACKGROUND VIDEO */}
      <section className="relative w-full overflow-hidden bg-black text-[#F9F5F2] h-[85vh] md:h-[95vh]">
        
        {/* FULLSCREEN BACKGROUND VIDEO */}
        <video
          src={BackgroundVideo}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* DARK OVERLAY TO IMPROVE TEXT READABILITY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* TOP GRADIENT TO BLEND VIDEO WITH CONTENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4F2E39]/80 to-transparent opacity-60" />

        {/* HERO TEXT CONTAINER */}
        <div className="relative z-10 flex items-center justify-center w-full h-full px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
              {heroTitle}
            </h1>

            {/* HERO SUBTITLE */}
          <p className="mt-6 text-lg md:text-2xl text-[#F9F5F2]/90 drop-shadow-md max-w-2xl mx-auto">
            {heroSubtitle}
          </p>

          </div>
        </div>
      </section>

      {/* SMALL SPACER TO TRANSITION FROM HERO */}
      <div className="h-10 md:h-18 bg-[#4F2E39]" />

      {/* SECTION 2 – PHONE + 3 BULLETS EXPLAINING BENEFITS */}
      <section className="bg-[#4F2E39] text-[#F9F5F2] pb-8 md:pb-10 lg:pb-4 xl:pb-0">
        <div className="max-w-6xl mx-auto px-4">

          {/* LAYOUT: PHONE RIGHT ON DESKTOP, BOTTOM ON MOBILE */}
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-center md:gap-10 lg:gap-12">
            
            {/* THREE BULLET POINTS SIDE */}
            <div className="w-full md:w-7/12 space-y-16 md:pr-2 pt-8 md:pt-0">
              
              {/* BULLET #1 */}
              <div className="flex items-start gap-6 md:gap-9">
                {/* ICON WRAPPED IN CIRCLE */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5">
                  <Zap className="w-12 h-12 md:w-16 md:h-16 text-[#01AC51]" />
                </div>
                <div>
                  <p className="font-semibold text-xl md:text-2xl text-[#F4B14A]">
                    Shift your usage
                  </p>
                  <p className="text-[#F9F5F2]/80 text-base md:text-lg mt-2 leading-relaxed">
                    Move flexible appliances to less crowded hours and help your
                    neighborhood avoid grid stress.
                  </p>
                </div>
              </div>

              {/* BULLET #2 */}
              <div className="flex items-start gap-6 md:gap-9">
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5">
                  <TrendingDown className="w-12 h-12 md:w-16 md:h-16 text-[#01AC51]" />
                </div>
                <div>
                  <p className="font-semibold text-xl md:text-2xl text-[#F4B14A]">
                    Avoid peaks
                  </p>
                  <p className="text-[#F9F5F2]/80 text-base md:text-lg mt-2 leading-relaxed">
                    When many people use electricity at the same time, cables
                    and transformers hit their limits. OurGrid helps spread that
                    demand.
                  </p>
                </div>
              </div>

              {/* BULLET #3 */}
              <div className="flex items-start gap-6 md:gap-9">
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5">
                  <Medal className="w-12 h-12 md:w-16 md:h-16 text-[#01AC51]" />
                </div>
                <div>
                  <p className="font-semibold text-xl md:text-2xl text-[#F4B14A]">
                    Earn points
                  </p>
                  <p className="text-[#F9F5F2]/80 text-base md:text-lg mt-2 leading-relaxed">
                    Residents can earn points for shifting their usage. Cities
                    can connect these to local rewards and initiatives.
                  </p>
                </div>
              </div>
            </div>

            {/* PHONE + ANIMATED RING */}
            <div className="w-full md:w-4/12 flex justify-center md:justify-end relative md:sticky md:top-28">
              <div
                className="
                  relative
                  w-[220px] sm:w-[240px] md:w-[270px] lg:w-[320px]
                  drop-shadow-2xl
                  [mask-image:linear-gradient(to_top,transparent_0%,transparent_15%,black_80%,black_100%)]
                "
              >
                {/* CIRCLE ANIMATION OVERLAYED ON PHONE */}
                <div
                  ref={circleContainerRef}
                  className="
                    absolute inset-0
                    flex items-center justify-center
                    pointer-events-none
                    -translate-y-[28.6%]
                    z-20
                  "
                >
                  <svg className="w-[54%] h-[54%]" viewBox="0 0 120 120">
                    <circle
                      ref={ringRef}
                      cx="60"
                      cy="60"
                      r="54"
                      stroke="#01AC51"
                      strokeWidth="9"
                      fill="none"
                      strokeLinecap="round"
                      className="transition-all duration-[1800ms] ease-out drop-shadow-[0_0_10px_rgba(1,172,81,0.6)]"
                      strokeDasharray="339"     
                      strokeDashoffset="339"    
                    />
                  </svg>
                </div>

                {/* PHONE IMAGE ITSELF */}
                <img
                  src={PhoneImage}
                  alt="OurGrid app on phone"
                  className="
                    relative z-10
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

      {/* SECTION 3+4 – DOWNLOAD + GRID CONGESTION BUTTON */}
<section className="bg-[#4F2E39] text-[#F9F5F2] py-10 md:py-16">
  {/* MATCHED WIDTH WITH SECTION ABOVE (max-w-6xl) */}
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">

      {/* LEFT CARD – DOWNLOAD / START NOW (Unchanged) */}
      <div className="h-full min-h-[340px] lg:min-h-[380px] rounded-3xl border-2 border-[#F4B14A] bg-[#4F2E39] shadow-lg p-8 md:p-10 flex flex-col justify-between hover:shadow-xl hover:shadow-[#F4B14A]/10 transition-shadow duration-300">
        
        <div className="flex items-start gap-6 md:gap-8">
          {/* QR VISIBLE ON LG+ SCREENS */}
          <div className="hidden lg:block mt-6 w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden border border-[#F4B14A]/30">
            <img
              src={QR}
              alt="Scan to download"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-left flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#F4B14A]">
              Start now
            </h2>
            <p className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed text-[#F9F5F2]/90">
              Scan the QR or use the buttons below to download the app
              when OurGrid is available in your area.
            </p>
          </div>
        </div>

        {/* APP STORE BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://play.google.com/store/apps/details?id=io.openremote.ourgrid&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="block transform transition-transform hover:scale-105 active:scale-95"
          >
            <img
              src={PlayStore1}
              alt="Get it on Google Play"
              className="h-14 md:h-16 lg:h-18 w-auto object-contain"
            />
          </a>
          <a
            href="https://apps.apple.com/nl/app/ourgrid/id6478114711"
            target="_blank"
            rel="noopener noreferrer"
            className="block transform transition-transform hover:scale-105 active:scale-95"
          >
            <img
              src={AppStore}
              alt="Download on the App Store"
              className="h-14 md:h-16 lg:h-18 w-auto object-contain"
            />
          </a>
        </div>
      </div>

      {/* RIGHT CARD – MOBILE FIXED (Compact Height) */}
      <div className="group relative h-full min-h-[280px] lg:min-h-[380px] rounded-3xl border-2 border-[#F4B14A] bg-[#4F2E39] shadow-lg p-6 sm:p-8 md:p-10 overflow-hidden hover:shadow-xl hover:shadow-[#F4B14A]/10 transition-shadow duration-300 flex flex-col justify-center gap-6 lg:gap-8">
        
        {/* DECORATIVE BACKGROUND BLUR */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-[#01AC51]/20 blur-[60px] rounded-full pointer-events-none" />

        {/* TOP: TEXT + ICON SIDE-BY-SIDE */}
        <div className="relative z-10 flex flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold leading-tight">
              Are you curious what <span className="text-[#01AC51]">grid congestion</span> is?
            </h3>
          </div>
          
          <div className="flex-shrink-0">
             <img
              src={Question}
              alt="Question mark"
              className="
                w-16 sm:w-20 md:w-32 lg:w-36 
                object-contain drop-shadow-2xl 
                transition-transform duration-500 
                group-hover:rotate-12 group-hover:scale-110
              "
            />
          </div>
        </div>

        {/* BOTTOM: BUTTON */}
        <div className="relative z-10 w-full">
           <a
            href={
              isMunicipality
                ? "/m/what-is-grid-congestion"
                : "/u/what-is-grid-congestion"
            }
            className="
              w-full flex items-center justify-center
              py-3.5 px-6
              rounded-2xl
              bg-[#01AC51]
              text-white font-bold
              text-lg md:text-xl
              shadow-lg 
              transform transition-all duration-300
              hover:bg-[#019245] hover:scale-[1.02] hover:shadow-xl
              active:scale-[0.98]
            "
          >
            Learn More
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
  );
}