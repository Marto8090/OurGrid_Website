import { useAudience } from "../context/AudienceContext.jsx";
import RegisterPage from "../assets/RegisterPage.jpg";
import PeakCongestion from "../assets/PeakCongestion.jpg";
import ChallengePopUp from "../assets/ChallengePopUp.jpg";
import TipsActions from "../assets/Tips_Actions.jpg";
import dongle from "../assets/Dongle.png";
import powerBrick from "../assets/power brick.png";
import energyCables from "../assets/energyCables.png";
import yourConsumption from "../assets/YourConsumption.jpg"; 
import cable from "../assets/cable.png"; 
import cable2 from "../assets/cable2.png"; 
import hand from "../assets/handHoldingPhone.png"; 
import PlayStore1 from "../assets/PlayStore1.png";
import AppStore from "../assets/AppStore.png";
import devicesPage2 from "../assets/DevicesPage2.jpeg";
import line from "../assets/line.png"
import { motion } from "framer-motion";
import { Cog } from "lucide-react";
import { useState, useEffect } from "react";

export default function HowOurGridWorks() {
  const [showOverlay, setShowOverlay] = useState(false);
  
  //Locking the scrolling while in the overlay
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";     
    }
    else {
      document.body.style.overflow = "auto";      
    }
  }, [showOverlay]);

  const { audience } = useAudience();
  const isMunicipality = audience === "municipality";

  const heroTitle = isMunicipality
    ? "How OurGrid works in your city"
    : "How OurGrid works for your home";

  // --- ANIMATION CONFIGURATION ---
  // This makes the text/images slide up gently (y: 20) and fade in
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-[#F9F5F2] text-[#4F2E39]">
      {/* TOP STRIP */}
      <section className="bg-[#4F2E39] text-[#F9F5F2] rounded-b-2xl min-h-[240px] md:min-h-[280px]">
        {/* Animated Header Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-md mx-auto py-14 pt-12 flex flex-col gap-6 items-center"
        >
          {/* Cog icon */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#3A1D27] flex items-center justify-center">
            <Cog className="w-10 h-10 md:w-12 md:h-12 text-[#D96532]" strokeWidth={2.4} />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-extrabold">
            How <span className="text-[#01AC51]">OurGrid</span> Works
          </h1>
        </motion.div>
      </section>

      {/* STEPS CONTAINER */}
      <section className="mx-auto">
      {/* STEP 1 */}
      <div className="bg-white rounded-4xl shadow-md border-2 border-[#F4B14A] overflow-hidden pb-4 -mt-10 md:-mt-10 relative z-60 md:z-10 md:min-h-[500px]">
        {/* MOBILE LAYOUT */}
        <div className="px-5 pt-6 pb-5 space-y-4 md:hidden relative">
          
          {/* Grey circle - STATIC (Outside animation so it doesn't jump) */}
          <div className="absolute top-40 -right-12 w-72 h-72 rounded-full bg-[#E0D7D7]" />

          {/* Animated Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="relative z-10 space-y-4"
          >
            {/* Step number */}
            <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#4F2E39] flex items-center justify-center text-2xl font-bold">
              1
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-center">
              Plug your energy dongle
            </h2>

            {/* Image */}
            <div className="relative z-10 mt-2 rounded-xl overflow-hidden border-[3px] border-[#4F2E39]/60 bg-[#F9F5F2] flex items-center justify-center">
              <img
                src={dongle}
                alt="Energy dongle illustration"
                className="w-full h-60 object-cover"
              />
            </div>

            {/* Power brick */}
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
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:block md:px-10 md:py-10 relative">
          {/* grey circle behind image - STATIC */}
          <div className="absolute right-55 bottom-30 w-230 h-76 rounded-full bg-[#E0D7D7] rotate-[-35deg]" />

          {/* Animated Desktop Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="flex items-center gap-10 relative z-10"
          >
            {/* step + text */}
            <div className="flex-1 relative z-10 pb-8">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                {/* Step circle */}
                <div className="w-14 h-14 rounded-full border-2 border-[#4F2E39] flex items-center justify-center text-2xl font-bold mx-auto md:mx-0">
                  1
                </div>
                {/* Title + text */}
                <div className="space-y-5 text-center md:text-left">
                  <h2 className="text-3xl font-semibold">
                    Plug your energy dongle
                  </h2>

                  <p className="text-xl leading-relaxed max-w-xl">
                    Start by connecting your device to your home energy meter.
                    This allows it to track your real-time energy usage. Once connected,
                    link the device to your Wi-Fi network to sync your data securely.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: image */}
            <div className="flex-1 flex justify-center pl-18">
              <div className="relative w-full max-w-md">

                {/* ICON BEHIND IMAGE */}
                <img
                  src={powerBrick}
                  alt="Power brick Illustration"
                  className="hidden md:block absolute -bottom-19 right-1/10 -translate-x-1/2 w-28 z-0 opacity-90"
                />

                {/* IMAGE ABOVE ICON */}
                <div className="relative z-10 rounded-xl overflow-hidden border-[3px] border-[#4F2E39]/60 bg-[#F9F5F2]">
                  <img
                    src={dongle}
                    alt="Energy dongle illustration"
                    className="w-full h-76 object-cover"
                  />
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ROW: STEP 2 + STEP 3 */}
      <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2">
          {/* STEP 2 */}
          <div className="bg-[#4F2E39] text-[#F9F5F2] rounded-4xl shadow-md border-2 border-[#F4B14A] overflow-hidden pt-7 pb-4 -mt-13 md:-mt-36 relative z-50 md:z-20">
            {/* MOBILE LAYOUT */}
            <div className="px-5 pt-14 pb-5 space-y-4 md:hidden relative">
              {/* Soft background circle - STATIC */}
              <div className="absolute top-64 -right-8 w-60 h-70 rounded-full bg-[#F4B14A]/6 "></div>

              {/* Animated Content */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {/* Step number */}
                <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#F9F5F2] flex items-center justify-center text-2xl font-bold">
                  2
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-center">Sign in or register</h2>

                {/* Phone with fade */}
                <div className="relative w-fit mx-auto mt-4">
                  <img
                    src={RegisterPage}
                    alt="OurGrid login screen"
                    className="w-36 h-72 object-cover rounded-2xl border-[1px] border-[#F4B14A]"
                  />
                  <div className="absolute -bottom-1 left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#4F2E39]/80 to-[#4F2E39]"></div>
                </div>

                <p className="text-lg leading-relaxed text-center mt-3 text-[#F9F5F2]/90">
                  After that by opening the OurGrid app and signing in, new users can register
                  in just a few steps - no technical setup needed. Once logged in, you'll be
                  connected to your city's local energy network.
                </p>
              </motion.div>
            </div>

            {/* DESKTOP LAYOUT */}
            <div className="hidden md:block md:px-10 md:py-10 relative">
              {/* soft circle on the right - STATIC */}
              <div className="absolute top-20 right-101 w-72 h-170 rounded-full bg-[#F4B14A]/10 rotate-[-55deg]"/>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative flex items-center"
              >
                {/*title + text */}
                <div className="flex-1 space-y-6 pb-20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border-2 border-[#F9F5F2] flex items-center justify-center text-2xl font-bold">
                      2
                    </div>
                    <h2 className="text-3xl font-semibold">
                      Sign in or register
                    </h2>
                  </div>

                  <p className="text-xl leading-relaxed max-w-xl pt-10 pr-10">
                    Start by opening the OurGrid app and signing in. New users can register
                    in just a few steps - no technical setup needed. Once logged in, you'll
                    be connected to your city's local energy network.
                  </p>
                </div>
                {/* PHONE WITH FADE */}
                <div className="relative w-2/5 mx-auto pl-8">
                  <img src={RegisterPage} alt="OurGrid login screen"
                    className="w-50 h-90 object-cover rounded-2xl border-[1px] border-[#F4B14A]"/>
                  <div className="absolute -bottom-1 left-6 w-full h-40 bg-gradient-to-b from-transparent via-[#4F2E39]/80 to-[#4F2E39]"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="bg-white rounded-4xl shadow-md border-2 border-[#F4B14A] md:rounded-4xl overflow-hidden pb-10 pt-7 -mt-19 md:-mt-13 relative z-40">
            {/* MOBILE VERSION */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="px-5 pt-12 space-y-4 md:hidden"
            >
              <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#4F2E39] flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h2 className="text-2xl font-semibold text-center">
                See your usage, join challenges & take action
              </h2>

              {/* PHONE STACK */}
              <div className="relative w-52 h-75 mx-auto my-6">
                {/* Back phone */}
                <img
                  src={PeakCongestion}
                  alt="Back screen"
                  className="absolute right-0 top-2 w-32 h-64 rounded-[25px] border-[3px] border-[#F4B14A] shadow-xl object-cover opacity-90"
                />
                {/* Front phone */}
                <img
                  src={ChallengePopUp}
                  alt="Front screen"
                  className="absolute left-0 bottom-0 w-32 h-64 rounded-[25px] border-[3px] border-[#F4B14A] shadow-2xl object-cover z-10"
                />
              </div>

              <div className="relative p-5 text-center space-y-4">
                {/* top-left curve */}
                <div className="absolute top-0 left-0 w-30 h-20 
                    border-t-2 border-l-2 border-[#4F2E39] rounded-tl-4xl" />
                {/* top-right curve */}
                <div className="absolute top-0 right-0 w-40 h-20 
                    border-t-2 border-r-2 border-[#4F2E39] rounded-tr-4xl" />
                {/* bottom-left curve */}
                <div className="absolute bottom-0 left-0 w-40 h-20 
                    border-b-2 border-l-2 border-[#4F2E39] rounded-bl-4xl" />
                {/* bottom-right curve */}
                <div className="absolute bottom-0 right-0 w-40 h-20 
                    border-b-2 border-r-2 border-[#4F2E39] rounded-br-4xl" />

                <p className="text-lg leading-relaxed">
                  The home screen shows your live power use and alerts you when your area faces a peak load.
                </p>
                <div className="w-30 h-px border-1 bg-[#4F2E39] mx-auto" />
                <p className="text-lg leading-relaxed">
                  Join the challenge by keeping your usage below the target limit - every minute counts toward points.
                </p>
              </div>
            </motion.div>

            {/* DESKTOP VERSION */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="hidden md:flex flex-col px-10 pt-6 pb-12 gap-10"
            >
              {/* Step + heading on top */}
              <div className="flex flex-row items-center gap-4">
                <div className="w-16 h-14 rounded-full border-2 border-[#4F2E39] flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h2 className="text-3xl font-semibold text-center max-w-3xl">
                  See your usage, join challenges & take action
                </h2>
              </div>

              {/* Content row: text left, phones right */}
              <div className="flex items-center gap-14">
                {/* LEFT: text */}
                <div className="relative p-5 text-center space-y-4">
                  {/* top-left curve */}
                  <div className="absolute top-0 left-0 w-30 h-20 
                      border-t-2 border-l-2 border-[#4F2E39] rounded-tl-4xl" />
                  {/* top-right curve */}
                  <div className="absolute top-0 right-0 w-30 h-20 
                      border-t-2 border-r-2 border-[#4F2E39] rounded-tr-4xl" />
                  {/* bottom-left curve */}
                  <div className="absolute bottom-0 left-0 w-30 h-20 
                      border-b-2 border-l-2 border-[#4F2E39] rounded-bl-4xl" />
                  {/* bottom-right curve */}
                  <div className="absolute bottom-0 right-0 w-30 h-20 
                      border-b-2 border-r-2 border-[#4F2E39] rounded-br-4xl" />

                  <p className="text-xl leading-relaxed">
                    The home screen shows your live power use and alerts you when your area faces a peak load.
                  </p>
                  <div className="w-30 h-px border-1 bg-[#4F2E39] mx-auto" />
                  <p className="text-xl leading-relaxed">
                    Join the challenge by keeping your usage below the target limit - every minute counts toward points.
                  </p>
                </div>

                {/* RIGHT: phone stack */}
                <div className="flex-1 flex justify-center pr-8">
                  <div className="relative w-64 h-80">
                    {/* Back phone */}
                    <img
                      src={PeakCongestion}
                      alt="Back screen"
                      className="absolute right-0 top-4 w-36 h-72 rounded-[28px] border-[3px] border-[#F4B14A] shadow-xl object-cover opacity-90"
                    />
                    {/* Front phone */}
                    <img
                      src={ChallengePopUp}
                      alt="Front screen"
                      className="absolute left-0 bottom-0 w-40 h-80 rounded-[28px] border-[3px] border-[#F4B14A] shadow-2xl object-cover z-10"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ROW: STEP 4 + STEP 5 */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 ">
          {/* STEP 4 */}
          <div className="bg-[#4F2E39] text-[#F9F5F2] rounded-4xl shadow-md border-2 border-[#F4B14A] rounded-b-2xl md:rounded-4xl overflow-hidden pt-7 -mt-13 md:-mt-55 relative z-30">
            
            {/* MOBILE LAYOUT - FIXED ANIMATION */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="px-5 pt-14 pb-5 space-y-4 md:hidden"
            >
              <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#F9F5F2] flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <h2 className="text-2xl font-semibold text-center">
                Follow tips &amp; take action
              </h2>

              {/* PHONE WITH FADE */}
              <div className="relative w-fit mx-auto pt-4">
                <img
                  src={TipsActions}
                  alt="OurGrid tips screen"
                  className="w-48 h-70 object-cover rounded-2xl border-[1px] border-[#000000]"
                />
                <div className="absolute -bottom-1 left-0 w-full h-30 bg-gradient-to-b from-transparent via-[#4F2E39]/90 to-[#4F2E39]" />
              </div>

              <div className="space-y-4 text-[#F9F5F2]/90">
                <p className="text-lg leading-relaxed">
                  During a challenge, the app gives practical actions:
                </p>

                <div className="relative">
                  <img
                    src={energyCables}
                    className="absolute -bottom-20 -right-8 w-40 opacity-80 object-contain pointer-events-none select-none z-0"
                  />
                  
                  {/* MOBILE LIST: Exact Desktop Logic, adjusted for spacing */}
                  {/* MOBILE LIST: w-fit ensures the bracket hugs the text, creating 'different sizes' for each item */}
                  <ul className="space-y-6 relative z-10">
                    {[
                      "Delay charging your EV",
                      "Lower heating",
                      "Discharge your battery",
                      "Postpone laundry"
                    ].map((text, index) => (
                      <li key={index} className="flex items-start gap-3 relative group">
                        <span className="text-[#F4B14A] text-xl leading-none mt-1">•</span>
                        
                        {/* FIX: 'w-fit' makes the container shrink to the text length. 'pr-7' adds space for the bracket. */}
                        <span className="relative inline-block px-3 py-1 w-fit pr-7">
                          <span className="relative z-10 text-lg leading-relaxed">
                            {text}
                          </span>
                          
                          {/* 1. TOP-RIGHT BRACKET */}
                          <motion.span 
                            initial={{ clipPath: "inset(0 100% 0 0)" }}
                            whileInView={{ clipPath: "inset(0 0 0 0)" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.2), duration: 0.6, ease: "linear" }}
                            // Increased width to w-2/5 for better visibility on short text
                            className="absolute top-0 right-0 h-[17px] w-2/5 border-t-2 border-r-2 border-[#F4B14A] rounded-tr-full -z-0"
                          />

                          {/* 2. BOTTOM-RIGHT BRACKET */}
                          <motion.span 
                            initial={{ clipPath: "circle(0% at 100% 0)" }} 
                            whileInView={{ clipPath: "circle(200% at 100% 0)" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + (index * 0.2), duration: 0.8, ease: "linear" }}
                            // Increased width to w-3/5 for better visibility on short text
                            className="absolute inset-y-0 top-[15px] right-0 w-3/5 border-b-2 border-r-2 border-[#F4B14A] rounded-br-full -z-0"
                          />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg leading-relaxed pt-4">
                  Each action shows how much power it saves and helps you reach your goal faster.
                </p>
              </div>
            </motion.div>

            {/* DESKTOP LAYOUT - UNCHANGED */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="hidden md:flex md:flex-col md:px-10 md:py-8 md:space-y-10 relative"
            >
              {/* STEP + TITLE*/}
              <div className="flex items-center justify-left gap-6 w-full">
                <div className="w-14 h-14 rounded-full border-2 border-[#F9F5F2] flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <h2 className="text-3xl font-semibold text-center">
                  Follow tips &amp; take action
                </h2>
              </div>

            {/* PHONE + TEXT LAYOUT */}
            <div className="mt-6 flex flex-col md:flex-row md:items-start md:gap-10">
              <div className="order-2 md:order-1 flex-1 relative w-full max-w-4xl space-y-6 text-left text-[#F9F5F2]/90 mt-4 md:mt-0">
                <p className="text-xl leading-relaxed pl-8">
                  During a challenge, the app gives practical actions:
                </p>

                <div className="relative">
                  {/* background image */}
                  <img
                    src={energyCables}
                    className="absolute -bottom-30 right-36 w-52 opacity-70 object-contain transform scale-x-[-1] "
                  />

                <ul className="space-y-4 pl-6">
  {/* ITEM 1 */}
  <li className="flex items-start gap-3">
    <span className="text-[#F4B14A] text-xl leading-none mt-1">•</span>
    <span className="relative inline-block px-3 py-1">
      <span className="relative z-10 text-xl leading-relaxed">
        Delay charging your EV
      </span>
      
      {/* 1. TOP PART: Duration 0.6s */}
      <motion.span 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: "linear" }}
        className="absolute top-0 right-0 h-[17px] w-1/3 border-t-2 border-r-2 border-[#F4B14A] rounded-tr-full -z-0" 
      />

      {/* 2. BOTTOM PART: Starts at 0.7s (Overlaps previous by 0.1s) */}
      <motion.span 
        initial={{ clipPath: "circle(0% at 100% 0)" }} 
        whileInView={{ clipPath: "circle(200% at 100% 0)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.8, ease: "linear" }}
        className="absolute inset-y-0 right-0 w-1/2 border-b-2 border-r-2 border-[#F4B14A] rounded-r-full -z-0" 
      />
    </span>
  </li>

  {/* ITEM 2 */}
  <li className="flex items-start gap-3">
    <span className="text-[#F4B14A] text-xl leading-none mt-1">•</span>
    <span className="relative inline-block px-3 py-1">
      <span className="relative z-10 text-xl leading-relaxed">
        Lower heating
      </span>
      {/* Top Part */}
      <motion.span 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6, ease: "linear" }}
        className="absolute top-0 right-0 h-[17px] w-1/3 border-t-2 border-r-2 border-[#F4B14A] rounded-tr-full -z-0" 
      />
      {/* Bottom Part - Overlaps by 0.1s */}
      <motion.span 
        initial={{ clipPath: "circle(0% at 100% 0)" }}
        whileInView={{ clipPath: "circle(200% at 100% 0)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.8, ease: "linear" }}
        className="absolute inset-y-0 right-0 w-1/2 border-b-2 border-r-2 border-[#F4B14A] rounded-r-full -z-0" 
      />
    </span>
  </li>

  {/* ITEM 3 */}
  <li className="flex items-start gap-3">
    <span className="text-[#F4B14A] text-xl leading-none mt-1">•</span>
    <span className="relative inline-block px-3 py-1">
      <span className="relative z-10 text-xl leading-relaxed">
        Discharge your battery
      </span>
      {/* Top Part */}
      <motion.span 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6, ease: "linear" }}
        className="absolute top-0 right-0 h-[17px] w-1/3 border-t-2 border-r-2 border-[#F4B14A] rounded-tr-full -z-0" 
      />
      {/* Bottom Part - Overlaps by 0.1s */}
      <motion.span 
        initial={{ clipPath: "circle(0% at 100% 0)" }}
        whileInView={{ clipPath: "circle(200% at 100% 0)" }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.8, ease: "linear" }}
        className="absolute inset-y-0 right-0 w-3/5 border-b-2 border-r-2 border-[#F4B14A] rounded-r-full -z-0" 
      />
    </span>
  </li>

  {/* ITEM 4 */}
  <li className="flex items-start gap-3">
    <span className="text-[#F4B14A] text-xl leading-none mt-1">•</span>
    <span className="relative inline-block px-3 py-1">
      <span className="relative z-10 text-xl leading-relaxed">
        Postpone laundry
      </span>
      {/* Top Part */}
      <motion.span 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6, ease: "linear" }}
        className="absolute top-0 right-0 h-[17px] w-1/3 border-t-2 border-r-2 border-[#F4B14A] rounded-tr-full -z-0" 
      />
      {/* Bottom Part - Overlaps by 0.1s */}
      <motion.span 
        initial={{ clipPath: "circle(0% at 100% 0)" }}
        whileInView={{ clipPath: "circle(200% at 100% 0)" }}
        viewport={{ once: true }}
        transition={{ delay: 1.3, duration: 0.8, ease: "linear" }}
        className="absolute inset-y-0 right-0 w-2/3 border-b-2 border-r-2 border-[#F4B14A] rounded-r-full -z-0" 
      />
    </span>
  </li>
</ul>

                </div>

                <p className="text-xl pl-8 leading-relaxed">
                  Each action shows how much power it saves and helps you reach your goal faster.
                </p>
              </div>

              {/* PHONE WITH FADE */}
              <div className="order-1 md:order-2 flex-1 flex justify-center md:justify-end pr-6">
                <div className="relative w-fit mx-auto md:mx-0 pt-8">
                  <img
                    src={TipsActions}
                    alt="OurGrid login screen"
                    className="w-54 h-80 object-cover rounded-2xl border border-[#000000]"
                  />
                  <div className="absolute -bottom-1 left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#4F2E39]/80 to-[#4F2E39]" />
                </div>
              </div>
            </div>
            </motion.div>
          </div>

          {/* STEP 5 */}
          <div className="bg-white rounded-4xl shadow-md border-2 border-[#F4B14A] overflow-hidden pt-2 -mt-16 md:-mt-15 relative z-20 md:z-40">
            {/* MOBILE LAYOUT */}
            <div className="px-5 pt-14 pb-6 space-y-5 md:hidden relative">
              {/* STATIC GREY CIRCLE: Moved OUTSIDE motion.div so it stays static */}
              <div className="absolute -left-20 top-13 w-64 h-120 rounded-full bg-[#E0D7D7] -z-0" />

              {/* Animated Content */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="relative z-10"
              >
                {/* Step number */}
                <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#4F2E39] flex items-center justify-center text-2xl font-bold">
                  5
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-center mt-4">
                  Track your progress
                </h2>

                {/* Phone */}
                <div className="flex justify-center mt-4">
                  <img
                    src={yourConsumption}
                    alt="Your consumption and trophies"
                    className="w-40 rounded-2xl border border-[#4F2E39]/60 shadow-md"
                  />
                </div>

                {/* Explanation */}
                <p className="text-smdleading-relaxed text-left pt-4">
                  You can see your daily consumption and how it compares to the predicted
                  grid load. Below that, your trophies show:
                </p>

                {/* Green pill stats */}
                {/* Green pill stats - MOBILE ANIMATION */}
<div className="space-y-2 mt-1 -mx-5 overflow-hidden rounded-r-full">
  
  {/* Bar 1: Total points (was w-10/12 -> ~83.3%) */}
  <motion.div 
    initial={{ width: 0 }} 
    whileInView={{ width: "83.3%" }} 
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    className="bg-[#01AC51] rounded-r-full text-white text-ms font-semibold px-4 py-1.5 text-left shadow-sm whitespace-nowrap"
  >
    • Total points earned
  </motion.div>

  {/* Bar 2: Completed challenges (was w-11/12 -> ~91.6%) */}
  <motion.div 
    initial={{ width: 0 }} 
    whileInView={{ width: "91.6%" }} 
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    className="bg-[#01AC51] rounded-r-full text-white text-md font-semibold px-4 py-1.5 text-left shadow-sm whitespace-nowrap"
  >
    • Completed challenges
  </motion.div>

  {/* Bar 3: Peaks avoided (was w-8/11 -> ~72.7%) */}
  <motion.div 
    initial={{ width: 0 }} 
    whileInView={{ width: "72.7%" }} 
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
    className="bg-[#01AC51] rounded-r-full text-white text-md font-semibold px-4 py-1.5 text-left shadow-sm whitespace-nowrap"
  >
    • Peaks avoided
  </motion.div>

  {/* Bar 4: Expected earnings (was w-9/11 -> ~81.8%) */}
  <motion.div 
    initial={{ width: 0 }} 
    whileInView={{ width: "81.8%" }} 
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
    className="bg-[#01AC51] rounded-r-full text-white text-md font-semibold px-4 py-1.5 text-left shadow-sm whitespace-nowrap"
  >
    • Expected earnings
  </motion.div>
</div>

                {/* Closing line */}
                <p className="text-md leading-relaxed text-left">
                  The more you participate, the more rewards you collect.
                </p>
              </motion.div>
            </div>

            {/* DESKTOP LAYOUT */}
            <div className="hidden md:block md:pt-10 md:pb-16 relative">
              {/* STATIC GREY CIRCLE BEHIND CONTENT */}
              <div className="absolute -left-32 top-24 w-80 h-100 rounded-full bg-[#E0D7D7] -z-0" />

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="relative z-10 space-y-10"
              >
                {/* STEP + TITLE */}
                <div className="flex items-center px-10 gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-[#4F2E39] flex items-center justify-center text-2xl font-bold">
                    5
                  </div>
                  <h2 className="text-3xl font-semibold">
                    Track your progress
                  </h2>
                </div>

                {/* TEXT LEFT - PHONE RIGHT */}
                <div className="flex items-start gap-10">
                  {/* LEFT: TEXT + BARS */}
                  <div className="flex-1 space-y-5 text-left">
                    <p className="text-xl leading-relaxed px-10">
                      You can see your daily consumption and how it compares to the
                      predicted grid load. Below that, your trophies show:
                    </p>

                   {/* Green pill stats - DESKTOP ANIMATION */}
<div className="space-y-3 overflow-hidden rounded-r-full py-2">
  
  {/* Bar 1 */}
  <motion.div 
     initial={{ width: 0 }} 
     whileInView={{ width: "80%" }} // w-11/12
     viewport={{ once: true }}
     transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
     className="bg-[#01AC51] rounded-r-full text-white text-md font-semibold px-4 py-2 shadow-sm whitespace-nowrap"
  >
    <div className="px-10"> • Total points earned</div>
  </motion.div>

  {/* Bar 2 */}
  <motion.div 
     initial={{ width: 0 }} 
     whileInView={{ width: "94%" }} // w-full
     viewport={{ once: true }}
     transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
     className="bg-[#01AC51] rounded-r-full text-white text-md font-semibold px-4 py-2 shadow-sm whitespace-nowrap"
  >
    <div className="px-10"> • Completed challenges</div>
  </motion.div>
  
  {/* Bar 3 */}
  <motion.div 
     initial={{ width: 0 }} 
     whileInView={{ width: "70%" }} // w-9/12
     viewport={{ once: true }}
     transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
     className="bg-[#01AC51] rounded-r-full text-white text-md font-semibold px-4 py-2 shadow-sm whitespace-nowrap"
  >
    <div className="px-10">• Peaks avoided</div>
  </motion.div>

  {/* Bar 4 */}
  <motion.div 
     initial={{ width: 0 }} 
     whileInView={{ width: "85%" }} // w-17/20
     viewport={{ once: true }}
     transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
     className="bg-[#01AC51] rounded-r-full text-white text-md font-semibold px-4 py-2 shadow-sm whitespace-nowrap"
  >
    <div className="px-10"> • Expected earnings</div>
  </motion.div>
</div>

                    <p className="text-xl px-10 leading-relaxed">
                      The more you participate, the more rewards you collect.
                    </p>
                  </div>

                  {/* RIGHT: PHONE */}
                  <div className="flex-1 flex justify-center">
                    <img
                      src={yourConsumption}
                      alt="Your consumption and trophies"
                      className="w-56 rounded-2xl border border-[#4F2E39]/60 shadow-md"/>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          {/* STEP 6 */}
          <div className="bg-[#4F2E39] text-[#F9F5F2] rounded-4xl shadow-md border-2 border-[#F4B14A] overflow-hidden pt-4 -mt-14 md:-mt-40 relative z-10 md:z-30">
            {/* MOBILE LAYOUT */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="px-5 pt-16 pb-8 space-y-4 md:hidden"
            >
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
                <img
                  src={devicesPage2}
                  alt="OurGrid devices screen"
                  className="w-40 rounded-3xl border-[3px] border-[#F4B14A] shadow-md"/>
              </div>

              {/* Cable made from two copies of the image */}
              <div className="mt-3 flex justify-center">
                <div className="relative w-1/3 h-1/2">
                  {/* left half */}
                  <img
                    src={cable}
                    alt="Cable connection"
                    className="absolute -left-12 -top-20 object-contain"/>
                  {/* right half (mirrored) */}
                  <img
                    src={cable}
                    alt="Cable connection"
                    className="absolute -right-10.5 -top-[62.5px] object-contain scale-x-[-1] transform -scale-y-100"/>
                </div>
              </div>

              {/* Text box with dashed yellow border */}
              <div className="relative mt-4">
                {/* electric glow behind */}
                <div className="absolute inset-0 rounded-3xl bg-[#F4B14A] opacity-30 blur-sm"></div>
                {/* main content box */}
                <div className="relative rounded-3xl border-2 border-[#F4B14A] px-4 py-4 bg-[#3B202A] text-left text-md leading-relaxed">
                  <span className="text-[#F4B14A] font-semibold">OurGrid</span> connects to
                  your smart devices - like your meter, EV charger, or battery. You can choose
                  automatic or manual control for each one. This helps shift your energy use
                  automatically during congestion moments.
                </div>
              </div>
            </motion.div>

            {/* DESKTOP LAYOUT */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="hidden md:flex md:flex-col md:gap-10 md:px-10 md:py-6"
            >
              {/* Step + heading in one row */}
              <div className="flex items-center justify-left gap-6">
                <div className="w-14 h-14 rounded-full border-2 border-[#F9F5F2] flex items-center justify-center text-2xl font-bold">
                  6
                </div>
                <h2 className="text-3xl font-semibold text-center">
                  Manage your devices
                </h2>
              </div>
              {/*Glow Behind Phone*/}
              <div className="hidden md:block absolute left-93 top-22 -translate-x-1/2 w-[300px] h-[550px] rounded-full bg-[#F4B14A] opacity-40 blur-3xl z-0"/>

              {/* Phone + cables left, text right */}
              <div className="flex items-center gap-10">
                {/* LEFT: phone + cables */}
                <div className="flex-1 flex justify-center">
                  <div className="relative w-full max-w-xs">
                    {/* phone */}
                    <div className="order-1 md:order-2 flex-1 flex justify-center md:justify-end pr-12 pb-6">
                      <div className="relative w-fit mx-auto md:mx-0 z-20">
                        <img
                          src={devicesPage2}
                          alt="OurGrid login screen"
                          className="w-56 h-112 object-cover rounded-2xl border border-[#000000]"/>
                      </div>
                    </div>

                    {/* cables under phone - INSIDE the Animated container so they move WITH the phone */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[220px]">
                      <img
                        src={cable2}
                        alt="Cable connection"
                        className="absolute left-82 -top-66 object-contain rotate-90 w-30"/>
                      <img
                        src={cable2}
                        alt="Cable connection"
                        className="absolute left-97 -top-66 object-contain scale-x-[-1] transform -scale-y-100  rotate-90 w-30"/>
                      <img
                        src={line}
                        alt="Cable connection"
                        className="absolute left-71 -top-[231.5px] object-contain h-13.5"/>
                      <img
                        src={line}
                        alt="Cable connection"
                        className="absolute left-60 -top-[231.5px] object-contain h-13.5"/>
                      <img
                        src={line}
                        alt="Cable connection"
                        className="absolute left-135 -top-[231.5px] object-contain h-13.5"/>
                       <img
                        src={line}
                        alt="Cable connection"
                        className="absolute left-125 -top-[231.5px] object-contain h-13.5"/>
                         <img
                        src={line}
                        alt="Cable connection"
                        className="absolute left-50 -top-[231.5px] object-contain h-13.5"/>
                    </div>
                  </div>
                </div>

                {/* RIGHT: glowing text box */}
                <div className="flex-1 pl-25 pt-15">
                  <div className="relative max-w-xl">
                    {/* glow */}
                    <div className="absolute inset-0 rounded-3xl bg-[#F4B14A] opacity-30 blur-sm" />
                    {/* box */}
                    <div className="relative rounded-3xl border-2 border-[#F4B14A] px-6 py-6 bg-[#3B202A] text-left text-xl leading-relaxed">
                      <span className="text-[#F4B14A] font-semibold">OurGrid</span> connects to
                      your smart devices - like your meter, EV charger, or battery. You can choose
                      automatic or manual control for each one. This helps shift your energy use
                      automatically during congestion moments.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTINUE TO APP */}
      <section className="mx-auto -mt-6 md:-mt-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-white pt-13 md:pt-8 pb-8 shadow-md border-2 border-[#F4B14A] p-5"
        >
          <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 md:pt-6">
            {/* TEXT + HAND IMAGE */}
            <div className="flex items-center gap-3 flex-1 justify-center md:justify-start md:pl-16 lg:pl-50">
              <p className="font-semibold text-xl md:text-2xl">
                Do you want a hands on experience?
              </p>
              <img src={hand} alt="Hand holding phone" className="w-18 h-18 object-contain"/>
            </div>

            {/* BUTTON OPENS OVERLAY */}
            <div className="flex justify-center md:justify-end w-full md:w-auto md:pr-16 lg:pr-60">
              <button
                onClick={() => setShowOverlay(true)}
                className="inline-flex items-center justify-center px-8 pt md:px-10 lg:px-12 py-3 md:py-4
                          rounded-full bg-[#01AC51] text-white font-bold text-md md:text-base lg:text-lg
                          shadow-lg shadow-[#01AC51]/30 transform transition-all duration-300 hover:bg-[#019245]
                          hover:scale-105 hover:shadow-xl active:scale-95"> Download the app →
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* OVERLAY */}
        {showOverlay && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]" onClick={() => setShowOverlay(false)}>
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