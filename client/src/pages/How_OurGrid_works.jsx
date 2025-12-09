import { useAudience } from "../context/AudienceContext.jsx";
import RegisterPage from "../assets/RegisterPage.jpg";
import PeakCongestion from "../assets/PeakCongestion.jpg";
import ChallengePopUp from "../assets/ChallengePopUp.jpg";
import TipsActions from "../assets/Tips_Actions.jpg";
import dongle from "../assets/dongle.png";
import powerBrick from "../assets/power brick.png";
import energyCables from "../assets/energyCables.png";
import yourConsumption from "../assets/YourConsumption.jpg"; 
import cable from "../assets/cable.png"; 
import hand from "../assets/handHoldingPhone.png"; 
import PlayStore1 from "../assets/PlayStore1.png";
import AppStore from "../assets/AppStore.png";
import devicesPage from "../assets/devicesPage.jpg";
import { Cog } from "lucide-react";
import { useState } from "react";

export default function HowOurGridWorks() {
  const [showOverlay, setShowOverlay] = useState(false);
  const { audience } = useAudience();
  const isMunicipality = audience === "municipality";

  const heroTitle = isMunicipality
    ? "How OurGrid works in your city"
    : "How OurGrid works for your home";

  return (
    <div className="bg-[#F9F5F2] text-[#4F2E39]">
      {/* TOP STRIP */}
      <section className="bg-[#4F2E39] text-[#F9F5F2] rounded-b-2xl">
        <div className="max-w-md mx-auto py-14 pt-12 flex flex-col gap-3 items-center">
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
        <div className="bg-white rounded-2xl shadow-md border-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl overflow-hidden  -mt-6 md:mt-0 relative z-6">
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
       <div className="bg-[#4F2E39] text-[#F9F5F2] rounded-2xl shadow-md border-2 border-[#F4B14A] overflow-hidden pt-7 -mt-6 md:mt-0 relative z-5">
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
        <div className="bg-white rounded-2xl shadow-md border-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl overflow-hidden pt-7 -mt-6 md:mt-0 relative z-4">
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
        <div className="bg-[#4F2E39] text-[#F9F5F2] rounded-2xl shadow-md border-2 border-[#F4B14A] rounded-b-2xl md:rounded-2xl overflow-hidden pt-7 -mt-6 md:mt-0 relative z-3">
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
              <div className="absolute -bottom-1 left-0 w-full h-30 bg-gradient-to-b from-transparent via-[#4F2E39]/90 to-[#4F2E39]"></div>
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
        <div className="bg-white rounded-2xl shadow-md border-2 border-[#F4B14A] overflow-hidden pt-7 -mt-6 md:mt-0 relative z-2">
          <div className="px-5 pt-6 pb-6 space-y-5">
            {/* Step number */}
            <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#4F2E39] flex items-center justify-center text-2xl font-bold">
              5
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-center">
              Track your progress
            </h2>
            
            <div className="relative mt-4">
              {/* GREY CIRCLE */}
              <div className="absolute -left-20 top-13 w-64 h-120 rounded-full bg-[#E0D7D7] -z-0" />

              {/* CONTENT ON TOP */}
              <div className="relative z-10 flex flex-col gap-4">
                {/* Phone */}
                <div className="flex justify-center">
                  <img src={yourConsumption} alt="Your consumption and trophies" className="w-40 rounded-2xl border border-[#4F2E39]/60 shadow-md"/>
                </div>

                {/* Explanation */}
                <p className="text-sm leading-relaxed text-left pt-4">
                  You can see your daily consumption and how it compares to the predicted
                  grid load. Below that, your trophies show:
                </p>

                {/* Green pill stats */}
                <div className="space-y-2 mt-1 -mx-5">
                  <div className="w-10/12 bg-[#01AC51] rounded-r-full text-white text-sm font-semibold px-4 py-1.5 text-left shadow-sm">
                    • Total points earned
                  </div>
                  <div className="w-11/12 bg-[#01AC51] rounded-r-full text-white text-sm font-semibold px-4 py-1.5 text-left shadow-sm">
                    • Completed challenges
                  </div>
                  <div className="w-8/11 bg-[#01AC51] rounded-r-full text-white text-sm font-semibold px-4 py-1.5 text-left shadow-sm">
                    • Peaks avoided
                  </div>
                  <div className="w-9/11 bg-[#01AC51] rounded-r-full text-white text-sm font-semibold px-4 py-1.5 text-left shadow-sm">
                    • Expected earnings
                  </div>
                </div>

                {/* Closing line */}
                <p className="text-sm leading-relaxed text-left">
                  The more you participate, the more rewards you collect.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* STEP 6 */}
        <div className="bg-[#4F2E39] text-[#F9F5F2] rounded-2xl shadow-md border-2 border-[#F4B14A] overflow-hidden pt-7 -mt-6 md:mt-0 relative z-1">
          <div className="px-5 pt-6 pb-6 space-y-4">
            {/* Step number */}
            <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#F9F5F2] flex items-center justify-center text-2xl font-bold">
              6
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-center">
              Manage your devices
            </h2>

            {/* Phone */}
            <div className="mt-3 flex justify-center pb-9">
              <img src={devicesPage} alt="OurGrid devices screen" className="w-40 rounded-3xl border-[3px] border-[#F4B14A] shadow-md"/>
            </div>

            {/* Cable made from two copies of the image */}
            <div className="mt-3 flex justify-center">
              <div className="relative w-1/3 h-1/2">
                {/* left half */}
                <img src={cable} alt="Cable connection" className="absolute -left-12 -top-20 object-contain"/>
                {/* right half (mirrored) */}
                <img src={cable} alt="Cable connection" className="absolute -right-10.5 -top-[62.5px] object-contain scale-x-[-1] transform -scale-y-100"/>
              </div>
            </div>

            {/* Text box with dashed yellow border */}
            <div className="relative mt-4">
              {/* electric glow behind */}
              <div className="absolute inset-0 rounded-3xl bg-[#F4B14A] opacity-30 blur-sm"></div>
              {/* main content box */}
              <div className="relative rounded-3xl border-2 border-[#F4B14A] px-4 py-4 bg-[#3B202A] text-left text-sm leading-relaxed">
                <span className="text-[#F4B14A] font-semibold">OurGrid</span> connects to
                your smart devices - like your meter, EV charger, or battery. You can choose
                automatic or manual control for each one. This helps shift your energy use
                automatically during congestion moments.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUE TO APP */}
      <section className="max-w-md mx-auto -mt-6 md:mt-0 relative z-0">
        <div className="bg-white rounded-2xl rounded-b-none pt-13 md:pt-8 pb-8 shadow-md border-2 border-[#F4B14A] p-5 space-y-4">
          {/* TEXT + HAND IMAGE */}
          <div className="flex items-center gap-3">
              <p className="font-semibold text-xl pl-5 pb-2 text-base">Do you want a hands on experience?</p>
        
            <img src={hand} alt="Hand holding phone" className="w-18 h-18 object-contain"/>
          </div>
          {/* BUTTON OPENS OVERLAY */}
          <button
            onClick={() => setShowOverlay(true)} className="w-3/4 mx-auto flex items-center justify-center px-9 py-2.5 rounded-full 
                bg-[#01AC51] text-white font-semibold text-md shadow-md 
                hover:bg-[#019245] transition-colors"> Download the app →
          </button>
        </div>
        {/* OVERLAY */}
        {showOverlay && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowOverlay(false)}>
            <div
              className="bg-[#4F2E39] rounded-xl border-1 border-[#F4B14A] p-7 w-80 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-center text-2xl font-semibold text-white">Get the OurGrid App</p>
              
              <div className="space-y-3">
                {/* Google Play */}
                <a href="https://play.google.com/store/apps/details?id=io.openremote.ourgrid&hl=en" target="_blank">
                  <img src={PlayStore1} className="w-full rounded-md shadow mb-4" />
                </a>

                {/* App Store */}
                <a href="https://apps.apple.com/nl/app/ourgrid/id6478114711" target="_blank">
                  <img src={AppStore} className="w-full rounded-md shadow" />
                </a>
              </div>

              <button
                onClick={() => setShowOverlay(false)}
                className="w-full mt-2 px-4 py-2 text-white text-sm bg-[#6B3E4C] rounded-full hover:bg-[#5A3541] transition"> Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
