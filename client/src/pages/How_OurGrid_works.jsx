import { useAudience } from "../context/AudienceContext.jsx";
import mainPage from "../assets/mainPage.jpg";
import devicesPage from "../assets/devicesPage.jpg";
import dongle from "../assets/dongle.png";
import powerBrick from "../assets/power brick.png";
import { Cog } from "lucide-react";



export default function HowOurGridWorks() {
  const { audience } = useAudience();
  const isMunicipality = audience === "municipality";

  const heroTitle = isMunicipality
    ? "How OurGrid works in your city"
    : "How OurGrid works for your home";

  return (
    <div className="bg-[#F9F5F2] text-[#4F2E39]">
      {/* TOP STRIP */}
      <section className="bg-[#4F2E39] text-[#F9F5F2] rounded-b-2xl">
        <div className="max-w-md mx-auto py-14 flex flex-col gap-3 items-center">
          {/* Cog icon */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#3A1D27] flex items-center justify-center">
            <Cog className="w-10 h-10 md:w-12 md:h-12 text-[#D96532]" strokeWidth={2.4} />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-extrabold">
            How <span className="text-[#01AC51]">OurGrid</span> Works
          </h1>
        </div>
      </section>

      {/* STEPS CONTAINER */}
      <section className="max-w-md mx-auto">
        {/* STEP 1 */}
        <div className="bg-white rounded-2xl shadow-md border-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl overflow-hidden relative">
          <div className="px-5 pt-6 pb-5 space-y-4">
            {/* Step number */}
            <div className="w-12 h-12 mx-auto rounded-full border-2 border-[#4F2E39] flex items-center justify-center text-xl font-bold">
              1
            </div>
            {/* Title */}
            <h2 className="text-2xl font-semibold text-center">
              Plug your energy dongle
            </h2>
            {/* Grey circle */}
            <div className="absolute top-40 -right-12 w-74 h-110 rounded-full bg-[#E0D7D7] opacity-100"></div>      
            {/* Image container */}
            <div className="relative z-10 mt-2 rounded-xl overflow-hidden border-3 border-[#4F2E39]/60 bg-[#F9F5F2] flex items-center justify-center "> 
              <img
                src={dongle}
                alt="Energy dongle illustration"
                className="w-full h-60 object-cover "
              />
            </div>
            {/* Power brick positioned over the image */}
            <div className="relative left-[132px] top-[-30px] mb-0">
              <img
                src={powerBrick}
                alt="Power brick Illustration"
                className="w-25 h-auto"
              />
            </div>
            {/* Description */}
            <p className="text-lg leading-relaxed text-center relative z-10">
              Start by connecting your device to your home energy meter.
              This allows it to track your real-time energy usage. Once connected,
              link the device to your Wi-Fi network to sync your data securely.
            </p>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="bg-[#4F2E39] text-[#F9F5F2] rounded-2xl shadow-md border-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl overflow-hidden">
          <div className="px-5 pt-6 pb-5 space-y-4">
            <div className="w-10 h-10 mx-auto rounded-full border-2 border-[#F9F5F2] flex items-center justify-center text-lg font-bold">
              2
            </div>
            <h2 className="text-lg font-semibold text-center">
              Sign in or register
            </h2>

            <div className="mt-2 rounded-xl overflow-hidden border border-[#F9F5F2]/10 bg-[#3B202A] flex items-center justify-center py-4">
              <img
                src={mainPage}
                alt="OurGrid login screen"
                className="w-36 h-72 object-cover rounded-2xl border-[3px] border-[#F4B14A]"
              />
            </div>

            <p className="text-sm leading-relaxed text-center mt-3 text-[#F9F5F2]/90">
              After that by opening the OurGrid app and signing in,new users can register in just a few steps - no technical setup needed.Once logged in, you'll be connected to your city's local energy network.
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="bg-white rounded-2xl shadow-md border-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl overflow-hidden">
          <div className="px-5 pt-6 pb-5 space-y-4">
            <div className="w-10 h-10 mx-auto rounded-full border-2 border-[#4F2E39] flex items-center justify-center text-lg font-bold">
              3
            </div>
            <h2 className="text-lg font-semibold text-center">
              See your usage, join challenges & take action
            </h2>

            <div className="mt-2 rounded-xl overflow-hidden border border-[#4F2E39]/10 bg-[#F9F5F2] flex items-center justify-center py-4">
              <img
                src={mainPage}
                alt="OurGrid home screen"
                className="w-36 h-72 object-cover rounded-2xl border-[3px] border-[#F4B14A]"
              />
            </div>

            <p className="text-sm leading-relaxed text-center mt-3">
              The home screen shows your live power use and alerts you when
              your area faces a peak load. Join challenges by keeping your
              usage below the limit.
            </p>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="bg-[#4F2E39] text-[#F9F5F2] rounded-2xl shadow-md border-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl overflow-hidden">
          <div className="px-5 pt-6 pb-5 space-y-4">
            <div className="w-10 h-10 mx-auto rounded-full border-2 border-[#F9F5F2] flex items-center justify-center text-lg font-bold">
              4
            </div>
            <h2 className="text-lg font-semibold text-center">
              Follow tips & take action
            </h2>

            <p className="text-sm leading-relaxed text-center mt-2 text-[#F9F5F2]/90">
              During a challenge, the app gives practical actions:
              delay EV charging, lower heating, discharge your battery, or
              postpone laundry. Each action helps lower the load.
            </p>
          </div>
        </div>

        {/* STEP 5 */}
        <div className="bg-white rounded-2xl shadow-md border-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl overflow-hidden">
          <div className="px-5 pt-6 pb-5 space-y-4">
            <div className="w-10 h-10 mx-auto rounded-full border-2 border-[#4F2E39] flex items-center justify-center text-lg font-bold">
              5
            </div>
            <h2 className="text-lg font-semibold text-center">
              Track your progress
            </h2>

            <p className="text-sm leading-relaxed text-center mt-2">
              See how your daily consumption compares to the predicted grid
              load. Your trophies show things like points earned, completed
              challenges, and peaks avoided.
            </p>
          </div>
        </div>

        {/* STEP 6 */}
        <div className="bg-[#4F2E39] text-[#F9F5F2] rounded-2xl shadow-mdborder-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl overflow-hidden">
          <div className="px-5 pt-6 pb-5 space-y-4">
            <div className="w-10 h-10 mx-auto rounded-full border-2 border-[#F9F5F2] flex items-center justify-center text-lg font-bold">
              6
            </div>
            <h2 className="text-lg font-semibold text-center">
              Manage your devices
            </h2>

            <div className="mt-2 rounded-xl overflow-hidden border border-[#F9F5F2]/10 bg-[#3B202A] flex items-center justify-center py-4">
              <img
                src={devicesPage}
                alt="OurGrid devices screen"
                className="w-36 h-72 object-cover rounded-2xl border-[3px] border-[#F4B14A]"
              />
            </div>

            <p className="text-sm leading-relaxed text-center mt-3 text-[#F9F5F2]/90">
              OurGrid connects to devices like your meter, EV charger, or
              battery. You can choose automatic or manual control so your
              energy use shifts during congestion moments.
            </p>
          </div>
        </div>
      </section>

      {/* COUNTINUE TO APP */}
      <section className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-md border-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl p-5 space-y-4 text-center">
          <p className="font-semibold text-base">
            Do you want a hands on experience?
          </p>
          <p className="text-sm">
            Download the OurGrid app and try it yourself in a pilot project near you.
          </p>
          <button type="button"
            className="inline-flex items-center justify-center px-6 py-2.5 mt-1 rounded-full bg-[#01AC51] text-white font-semibold text-sm shadow-md hover:bg-[#019245] transition-colors"> 
            Download the app → </button>
        </div>
      </section>
    </div>
  );
}
