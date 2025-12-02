import { useAudience } from "../context/AudienceContext.jsx";
import RegisterPage from "../assets/RegisterPage.jpg";
import PeakCongestion from "../assets/PeakCongestion.jpg";
import ChallengePopUp from "../assets/ChallengePopUp.jpg";
import TipsActions from "../assets/Tips_Actions.jpg";
import dongle from "../assets/dongle.png";
import powerBrick from "../assets/power brick.png";
import energyCables from "../assets/energyCables.png";
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
            <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#4F2E39] flex items-center justify-center text-2xl font-bold">
              1
            </div>
            {/* Title */}
            <h2 className="text-2xl font-semibold text-center">
              Plug your energy dongle
            </h2>
            {/* Grey circle */}
            <div className="absolute top-40 -right-12 w-74 h-110 rounded-full bg-[#E0D7D7]"></div>      
            {/* Image container */}
            <div className="relative z-10 mt-2 rounded-xl overflow-hidden border-3 border-[#4F2E39]/60 bg-[#F9F5F2] flex items-center justify-center "> 
              <img
                src={dongle}
                alt="Energy dongle illustration"
                className="w-full h-60 object-cover "
              />
            </div>
            {/* Power brick positioned the image */}
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
       <div className="bg-[#4F2E39] text-[#F9F5F2] rounded-2xl shadow-md border-2 border-[#F4B14A] overflow-hidden">
        <div className="px-5 pt-6 pb-5 space-y-4">

          <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#F9F5F2] flex items-center justify-center text-2xl font-bold">
            2
          </div>

          <h2 className="text-2xl font-semibold text-center">Sign in or register</h2>

          {/* Soft background circle */}
          <div className="absolute top-265 -right-8 w-60 h-70 rounded-full bg-[#F4B14A]/6"></div>

          {/* PHONE WITH FADE */}
          <div className="relative w-fit mx-auto">
            <img src={RegisterPage} alt="OurGrid login screen"
              className="w-36 h-72 object-cover rounded-2xl border-[1px] border-[#F4B14A]"/>
            <div className="absolute -bottom-1 left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#4F2E39]/80 to-[#4F2E39]"></div>
          </div>

          <p className="text-lg leading-relaxed text-center mt-3 text-[#F9F5F2]/90">
            After that by opening the OurGrid app and signing in, new users can register in just a few steps -
            no technical setup needed. Once logged in, you'll be connected to your city's local energy network.
          </p>

        </div>
      </div>

        {/* STEP 3 */}
        <div className="bg-white rounded-2xl shadow-md border-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl overflow-hidden">
          <div className="px-5 pt-6 pb-5 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#4F2E39] flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <h2 className="text-2xl font-semibold text-center">
              See your usage, join challenges & take action
            </h2>
            {/* PHONE STACK */}
            <div className="relative w-52 h-75 mx-auto my-6">
              {/* Back phone */}
              <img src={PeakCongestion} alt="Back screen"
                className="absolute right-0 top-2 w-32 h-64 rounded-[25px] border-[3px] border-[#F4B14A] shadow-xl object-cover opacity-90"/>
              {/* Front phone */}
              <img
                src={ChallengePopUp} alt="Front screen"
                 className="absolute left-0 bottom-0 w-32 h-64 rounded-[25px] border-[3px] border-[#F4B14A] shadow-2xl object-cover z-10"/>
            </div>

            <div className="relative p-5 text-center space-y-4">
              {/* top-left curve */}
              <div className="absolute top-0 left-0 w-30 h-20 
                  border-t-2 border-l-2 border-[#4F2E39] rounded-tl-4xl"></div>

              {/* top-right curve */}
              <div className="absolute top-0 right-0 w-40 h-20 
                  border-t-2 border-r-2 border-[#4F2E39] rounded-tr-4xl"></div>

              {/* bottom-left curve */}
              <div className="absolute bottom-0 left-0 w-40 h-20 
                  border-b-2 border-l-2 border-[#4F2E39] rounded-bl-4xl"></div>

              {/* bottom-right curve */}
              <div className="absolute bottom-0 right-0 w-40 h-20 
                  border-b-2 border-r-2 border-[#4F2E39] rounded-br-4xl"></div>

              <p className="text-lg leading-relaxed">
                The home screen shows your live power use and alerts you when your area faces a peak load.
              </p>
              <div className="w-30 h-px border-1 bg-[#4F2E39] mx-auto"></div>
              <p className="text-lg leading-relaxed">
                Join the challenge by keeping your usage below the target limit - every minute counts toward points.
              </p>
            </div>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="bg-[#4F2E39] text-[#F9F5F2] rounded-2xl shadow-md border-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl overflow-hidden">
          <div className="px-5 pt-6 pb-5 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#F9F5F2] flex items-center justify-center text-2xl font-bold">
              4
            </div>
            <h2 className="text-2xl font-semibold text-center">
              Follow tips & take action
            </h2>

            {/* PHONE WITH FADE */}
            <div className="relative w-fit mx-auto pt-4">
              <img src={TipsActions} alt="OurGrid login screen"
                className="w-48 h-70 object-cover rounded-2xl border-[1px] border-[#000000]"/>
              <div className="absolute -bottom-1 left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#4F2E39]/90 to-[#4F2E39]"></div>
            </div>
            <div className="space-y-4 text-[#F9F5F2]/90">
              {/* Intro text */}
              <p className="text-lg leading-relaxed">
                During a challenge, the app gives practical actions:
              </p>
              <div className="relative">
                {/* background image */}
                <img src={energyCables} className="absolute -bottom-20 -right-8 w-40 opacity-80 object-contain pointer-events-none select-none"/>
                {/* Bullet list */}
                <ul className="space-y-4">
                  {/* ITEM 1 */}
                  <li className="flex items-start gap-3">
                    <span className="text-[#F4B14A] text-xl leading-none mt-1">•</span>

                    <span className="relative inline-block px-3 py-1">
                      <span className="relative z-10 text-lg leading-relaxed">
                        Delay charging your EV
                      </span>
                      {/* BOTTOM — full width */}
                      <span className="absolute inset-y-0 right-0 w-1/2 
                        border-b-2 border-r-2 
                        border-[#F4B14A] rounded-r-full -z-0">
                      </span>
                      {/* TOP — shorter width */}
                      <span className="absolute top-0 right-0 h-[17px] w-1/3 
                        border-t-2 border-r-2 
                        border-[#F4B14A] rounded-tr-full -z-0">
                      </span>
                    </span>
                  </li>

                  {/* ITEM 2 */}
                  <li className="flex items-start gap-3">
                    <span className="text-[#F4B14A] text-xl leading-none mt-1">•</span>

                    <span className="relative inline-block px-3 py-1">
                      <span className="relative z-10 text-lg leading-relaxed">
                        Lower heating
                      </span>
                      {/* BOTTOM — full width */}
                      <span className="absolute inset-y-0 right-0 w-1/2 
                        border-b-2 border-r-2 
                        border-[#F4B14A] rounded-r-full -z-0">
                      </span>
                      {/* TOP — shorter width */}
                      <span className="absolute top-0 right-0 h-[17px] w-1/3 
                        border-t-2 border-r-2 
                        border-[#F4B14A] rounded-tr-full -z-0">
                      </span>
                    </span>
                  </li>

                  {/* ITEM 3 */}
                  <li className="flex items-start gap-3">
                    <span className="text-[#F4B14A] text-xl leading-none mt-1">•</span>

                    <span className="relative inline-block px-3 py-1">
                      <span className="relative z-10 text-lg leading-relaxed">
                        Discharge your battery
                      </span>

                      {/* BOTTOM — full width */}
                      <span className="absolute inset-y-0 right-0 w-3/5 
                        border-b-2 border-r-2 
                        border-[#F4B14A] rounded-r-full -z-0">
                      </span>
                      {/* TOP — shorter width */}
                      <span className="absolute top-0 right-0 h-[17px] w-1/3 
                        border-t-2 border-r-2 
                        border-[#F4B14A] rounded-tr-full -z-0">
                      </span>
                    </span>
                  </li>

                  {/* ITEM 4 */}
                  <li className="flex items-start gap-3">
                    <span className="text-[#F4B14A] text-xl leading-none mt-1">•</span>

                    <span className="relative inline-block px-3 py-1">
                      <span className="relative z-10 text-lg leading-relaxed">
                        Postpone laundry
                      </span>
                      {/* BOTTOM — full width */}
                      <span className="absolute inset-y-0 right-0 w-2/3 
                        border-b-2 border-r-2 border-[#F4B14A] rounded-r-full -z-0">
                      </span>
                      {/* TOP — shorter width */}
                      <span className="absolute top-0 right-0 h-[17px] w-1/3 
                        border-t-2 border-r-2 border-[#F4B14A] rounded-tr-full -z-0">
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              {/* Closing text */}
              <p className="text-lg leading-relaxed">
                Each action shows how much power it saves and helps you reach your goal faster.
              </p>
            </div>
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
                src
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
