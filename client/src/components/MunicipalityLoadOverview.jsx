import { useState } from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
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
  { hour: "00:00", load: 30 },
  { hour: "06:00", load: 45 },
  { hour: "12:00", load: 90 },
  { hour: "18:00", load: 130 },
  { hour: "21:00", load: 110 },
];

export default function MunicipalityLoadOverview() {
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
        <h2 className="text-xl font-semibold mb-2" style={{ color: COLORS.text }}>
          Daily transformer load overview
        </h2>

        <p className="text-sm mb-4" style={{ color: COLORS.text }}>
          Shows neighbourhood-level load and when congestion risk increases in a typical day.
        </p>

        <div className="w-full h-[240px] sm:h-[280px] md:h-[320px]">
          {showChart && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid stroke="#d1e3f5" strokeDasharray="3 3" />
                <XAxis dataKey="hour" tick={{ fill: COLORS.text, fontSize: 11 }} />
                <YAxis tick={{ fill: COLORS.text, fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: COLORS.bg,
                    borderColor: COLORS.primary + "40",
                    borderRadius: 14,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="load"
                  stroke={COLORS.primary}
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={true}
                  animationDuration={900}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </motion.div>
    </section>
  );
}
