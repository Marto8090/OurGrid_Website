import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = {
  primary: "#4F2E39",
  secondary: "#2C6EA4",
  accent: "#F4B14A",
  success: "#01AC51",
  bg: "#F9F5F2",
  text: "#1D252C",
};

const dailyLoadData = [
  { time: "06:00", typical: 0.8, shifted: 0.7 },
  { time: "09:00", typical: 1.2, shifted: 1.0 },
  { time: "12:00", typical: 1.0, shifted: 0.9 },
  { time: "15:00", typical: 1.3, shifted: 1.1 },
  { time: "18:00", typical: 2.5, shifted: 1.6 },
  { time: "20:00", typical: 2.2, shifted: 1.5 },
  { time: "23:00", typical: 1.0, shifted: 0.8 },
];

export default function DailyLoadChart() {
  return (
    <section className="w-full max-w-4xl mx-auto">
      <div
        className="rounded-3xl border shadow-md p-6 md:p-7 bg-gradient-to-br from-[#FDF7EF] via-[#F9F5F2] to-[#F2F5FB] transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
        style={{
          borderColor: COLORS.primary + "20",
        }}
      >
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <h2
              className="text-xl md:text-2xl font-semibold"
              style={{ color: COLORS.text }}
            >
              Daily load curve of a neighbourhood
            </h2>
            <p
              className="text-sm max-w-xl"
              style={{ color: COLORS.text }}
            >
              Most homes use the most electricity in the{" "}
              <span className="font-semibold">early evening</span>. That creates
              a steep peak. Shifting a few tasks to earlier or later helps
              flatten the curve and reduces congestion risk.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span
              className="text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap"
              style={{
                backgroundColor: COLORS.accent + "26",
                color: COLORS.primary,
              }}
            >
              Static example · Not live data
            </span>
            <span className="text-[11px] text-[#384450]">
              Values shown as{" "}
              <span className="font-medium">relative load</span>, not kW.
            </span>
          </div>
        </div>

        {/* Legend chips */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <span className="inline-flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: COLORS.primary }}
            />
            <span style={{ color: COLORS.text }}>Typical day (evening peak)</span>
          </span>

          <span className="inline-flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: COLORS.success }}
            />
            <span style={{ color: COLORS.text }}>
              Smoothed day (after shifting)
            </span>
          </span>
        </div>

        {/* Chart */}
        <div className="mt-4" style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dailyLoadData}>
              <CartesianGrid
                stroke={COLORS.accent + "40"}
                strokeDasharray="3 3"
              />
              <XAxis
                dataKey="time"
                stroke={COLORS.text}
                tick={{ fill: COLORS.text, fontSize: 12 }}
              />
              <YAxis
                stroke={COLORS.text}
                tick={{ fill: COLORS.text, fontSize: 12 }}
                label={{
                  value: "Relative load",
                  angle: -90,
                  position: "insideLeft",
                  fill: COLORS.text,
                  fontSize: 12,
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: COLORS.bg,
                  borderColor: COLORS.primary + "40",
                  borderRadius: 16,
                  boxShadow: "0 16px 40px rgba(0,0,0,0.10)",
                }}
                labelStyle={{ color: COLORS.text, fontWeight: 600 }}
              />
              <Legend
                wrapperStyle={{
                  paddingTop: 12,
                  color: COLORS.text,
                }}
              />

              <Line
                type="monotone"
                dataKey="typical"
                stroke={COLORS.primary}
                strokeWidth={3}
                dot={false}
                name="Typical day"
              />
              <Line
                type="monotone"
                dataKey="shifted"
                stroke={COLORS.success}
                strokeWidth={3}
                dot={false}
                name="Smoothed day"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <p
          className="mt-4 text-sm"
          style={{ color: COLORS.text }}
        >
          The goal of OurGrid is to help neighbourhoods move from the dark red
          line to the green line: same comfort, fewer overloads, and a calmer
          local grid.
        </p>
      </div>
    </section>
  );
}
