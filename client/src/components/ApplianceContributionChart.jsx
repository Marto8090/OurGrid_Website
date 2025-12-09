import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = {
  primary: "#4F2E39",
  accent: "#F4B14A",
  success: "#01AC51",
  bg: "#F9F5F2",
  text: "#1D252C",
};

const applianceData = [
  { name: "EV charging", share: 40 },
  { name: "Heat pump", share: 25 },
  { name: "Washing machine", share: 15 },
  { name: "Dishwasher", share: 10 },
  { name: "Oven", share: 10 },
];

export default function ApplianceContributionChart() {
  const [showChart, setShowChart] = useState(false);

  return (
    <section className="w-full max-w-4xl mx-auto px-1 sm:px-0">
      <motion.div
        className="rounded-3xl border shadow-md p-4 sm:p-6 md:p-7 bg-white/90 backdrop-blur-sm"
        style={{ borderColor: COLORS.primary + "20" }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        onViewportEnter={() => setShowChart(true)}
      >
        <h2
          className="text-lg sm:text-xl md:text-2xl font-semibold"
          style={{ color: COLORS.text }}
        >
          Which appliances drive the peak?
        </h2>
        <p
          className="text-xs sm:text-sm md:text-[15px] mt-1 max-w-xl"
          style={{ color: COLORS.text }}
        >
          Heavy, flexible loads like EV chargers and heat pumps dominate the
          evening peak. These are also the best candidates to shift to off-peak
          hours.
        </p>

        <div className="mt-3 sm:mt-4 w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px]">
          {showChart && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={applianceData}>
                <CartesianGrid
                  stroke={COLORS.accent + "35"}
                  strokeDasharray="3 3"
                />
                <XAxis
                  dataKey="name"
                  stroke={COLORS.text}
                  tick={{ fill: COLORS.text, fontSize: 11 }}
                />
                <YAxis
                  stroke={COLORS.text}
                  tick={{ fill: COLORS.text, fontSize: 11 }}
                  label={{
                    value: "Share of peak load (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: COLORS.text,
                    fontSize: 11,
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: COLORS.bg,
                    borderColor: COLORS.primary + "40",
                    borderRadius: 16,
                  }}
                  labelStyle={{ color: COLORS.text, fontWeight: 600 }}
                />
                <Bar
                  dataKey="share"
                  name="Share of peak load"
                  fill={COLORS.accent}
                  radius={[8, 8, 0, 0]}
                  isAnimationActive={true}
                  animationDuration={800}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        <p
          className="mt-3 sm:mt-4 text-xs sm:text-sm"
          style={{ color: COLORS.text }}
        >
          OurGrid helps households see which devices matter most, and how small
          changes in timing can have a big impact on the shared grid.
        </p>
      </motion.div>
    </section>
  );
}
