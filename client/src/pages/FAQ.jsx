import { useState } from "react";
import { ChevronDown, ChevronUp, Zap } from "lucide-react";
// import { useAudience } from "../context/AudienceContext.jsx"; 

// Images from /assets
import SettingImg from "../assets/setting.png";
import MoneyImg from "../assets/money.png";
import PadlockImg from "../assets/padlock.png";
import LightningImg from "../assets/lightning.png";
import CircleImg from "../assets/circle.png";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (key) => setOpen(open === key ? null : key);

  const sections = [
    {
      key: "using",
      title: "Using the app",
      img: SettingImg,
      qa: [
        { q: "What do I need to start using OurGrid?", a: "Just download the app, sign in, and connect your P1 dongle to your smart meter." },
        { q: "What happens during a congestion challenge?", a: "The app alerts you and gives a target limit. Stay below it to earn points and help your neighbourhood." },
        { q: "Can renters also join?", a: "Yes, anyone with access to a smart meter can participate." },
      ],
    },
    {
      key: "rewards",
      title: "Rewards",
      img: MoneyImg,
      qa: [
        { q: "How do I earn rewards?", a: "You earn points for each minute you stay below the target during challenges." },
        { q: "What can I do with my points?", a: "You can convert them into money or donate them to local community projects." },
        { q: "Is there a limit to how many points I can earn?", a: "No, you can join as many challenges as you like." },
      ],
    },
    {
      key: "privacy",
      title: "Privacy policy",
      img: PadlockImg,
      qa: [
        { q: "Who can see my data?", a: "Only anonymised data is used to track challenges – no personal info is shared." },
        { q: "How long is my data kept?", a: "Usage data is automatically deleted after three months." },
        { q: "Can I delete my account?", a: "Yes, you can delete your account anytime from the app settings." },
      ],
    },
    {
      key: "technical",
      title: "Technical / Devices",
      img: LightningImg,
      qa: [
        { q: "Which devices can I connect?", a: "You can link your smart meter, EV charger, battery, and heat pump." },
        { q: "Does the app control my devices automatically?", a: "Only if you allow it — you can always choose manual control." },
      ],
    },
    {
      key: "projects",
      title: "Local projects",
      img: CircleImg,
      qa: [
        { q: "What's the goal of OurGrid in my city?", a: "To help your neighbourhood avoid grid overload and make energy use smarter and fairer." },
        { q: "Who runs these projects?", a: "They're led by local municipalities and partners, with technology from OpenRemote." },
      ],
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#4F2E39] text-[#F9F5F2] px-4 py-12 flex justify-center">

      {/* FLOATING LIGHTNING ICONS */}
      <div className="hidden lg:block absolute left-20 top-40 opacity-20 pointer-events-none">
        <Zap size={140} strokeWidth={3} className="text-[#F9F5F2]" />
      </div>
      <div className="hidden lg:block absolute right-20 top-60 opacity-20 -scale-x-100 pointer-events-none">
        <Zap size={140} strokeWidth={3} className="text-[#F9F5F2]" />
      </div>

      <div className="max-w-6xl w-full flex flex-wrap gap-x-8 gap-y-8 lg:gap-y-4 justify-center items-start">

        {sections.map((item) => {
          const isOpen = open === item.key;

          return (
            <div
              key={item.key}
              className={`
                relative self-start w-full
                sm:w-[48%] lg:w-[31%]
                bg-[#F9F5F2] text-[#4F2E39]
                rounded-3xl shadow-lg border-2
                transition-all duration-200 ease-in-out
                ${isOpen ? "border-[#01AC51] shadow-xl z-20 rounded-b-none" : "border-transparent z-0"}
              `}
              style={{ overflow: "visible" }}
            >

              {/* HEADER BUTTON */}
              <button
                onClick={() => toggle(item.key)}
                className="w-full bg-[#F9F5F2] rounded-3xl flex flex-col items-center justify-center text-center px-6 py-8 lg:py-10 gap-4 focus:outline-none"
              >
                <img src={item.img} alt={item.title} className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain" />
                <p className="font-semibold text-xl sm:text-2xl lg:text-3xl">{item.title}</p>

                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-[#01AC51]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#01AC51]" />
                )}
              </button>


              {/* DROPDOWN */}
              {isOpen && (
                <div
                  className="absolute left-[-2px] right-[-2px] top-full z-30"
                  style={{ overflow: "visible" }}
                >
                  <div
                    className="
                      bg-[#F9F5F2] text-[#4F2E39]
                      rounded-b-3xl
                      shadow-2xl
                      border-2 border-[#01AC51] border-t-0
                      px-6 pb-8 pt-4
                      animate-dropdownReveal
                    "
                    // SEQUENCE STEP 2:
                    // Wait 200ms (for button border to change), then slide down for 300ms.
                    // 'animationFillMode: both' ensures it is invisible (opacity 0) during the 200ms wait.
                    style={{ 
                      animationDelay: "200ms", 
                      animationFillMode: "both" 
                    }}
                  >
                    <div className="space-y-6">
                      {item.qa.map((qa, i) => (
                        <div
                          key={i}
                          className="animate-qaFade"
                          // SEQUENCE STEP 3:
                          // Start fading text in AFTER the box has finished sliding (200 delay + 300 duration = 500ms).
                          // We add a tiny extra (50ms) to be safe.
                          style={{
                            animationDelay: `${550 + (i * 150)}ms`, 
                            animationFillMode: "both"
                          }}
                        >
                          <p className="font-semibold text-lg lg:text-xl">{qa.q}</p>
                          <p className="text-[#01AC51] text-sm lg:text-base mt-1">{qa.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}