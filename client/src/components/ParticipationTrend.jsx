import { useState } from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const COLORS = {
  primary: "#2C6EA4",
  text: "#1D252C",
  bg: "#F9F5F2",
};

const data = [
  { month: "Jan", participants: 110 },
  { month: "Feb", participants: 130 },
  { month: "Mar", participants: 155 },
  { month: "Apr", participants: 190 },
];

export default function ParticipationTrend() {
  const [showChart, setShowChart] = useState(false);

  return (
    <section className="w-full max-w-4xl mx-auto px-1 sm:px-0">
      <motion.div
        className="rounded-3xl border shadow-md p-6 bg-gradient-to-br from-[#EAF3FF] via-[#F4F8FF] to-[#FFFFFF]"
        style={{ borderColor: COLORS.primary + "40" }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        onViewportEnter={() => setShowChart(true)}
      >
        <h2 className="text-xl font-semibold mb-3" style={{ color: COLORS.text }}>
          Household participation trend
        </h2>

        <p className="text-sm mb-4" style={{ color: COLORS.text }}>
          Shows how many households joined energy-shifting challenges over time.
        </p>

        <div className="w-full h-[240px] sm:h-[280px] md:h-[320px]">
          {showChart && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid stroke="#d1e3f5" strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fill: COLORS.text, fontSize: 11 }} />
                <YAxis tick={{ fill: COLORS.text, fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: COLORS.bg,
                    borderColor: COLORS.primary + "40",
                    borderRadius: 14,
                  }}
                />
                <Bar
                  dataKey="participants"
                  fill={COLORS.primary}
                  radius={[8, 8, 0, 0]}
                  isAnimationActive={true}
                  animationDuration={900}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </motion.div>
    </section>
  );
}
