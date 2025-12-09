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
  primary: "#4F2E39",   // dark reddish – Typical day
  secondary: "#2C6EA4", // optional if you need extra lines later
  accent: "#F4B14A",    // yellow – grid, highlight
  success: "#01AC51",   // green – shifted day
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
      {/* Card wrapper with brand styling */}
      <div
        className="rounded-2xl border shadow-md p-6"
        style={{
          backgroundColor: COLORS.bg,
          borderColor: COLORS.primary + "20", // 12% opacity border
        }}
      >
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2
              className="text-xl font-semibold"
              style={{ color: COLORS.text }}
            >
              Daily Load Curve
            </h2>
            <p
              className="text-sm mt-1 max-w-xl"
              style={{ color: COLORS.text }}
            >
              A typical neighbourhood uses the most electricity between{" "}
              <span className="font-semibold">17:00 and 20:00</span>. That
              creates a steep “evening peak”. When households shift some
              tasks to earlier or later, the peak becomes smaller and the
              transformer is under less stress.
            </p>
          </div>

          {/* Small pill to show this is static/demo data */}
          <span
            className="text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap"
            style={{
              backgroundColor: COLORS.accent + "33",
              color: COLORS.primary,
            }}
          >
            Static example · Not live data
          </span>
        </div>

        {/* Legend chips (on brand) */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <span className="inline-flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: COLORS.primary }}
            />
            <span style={{ color: COLORS.text }}>Typical day (peak load)</span>
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
                  borderRadius: 12,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
                labelStyle={{ color: COLORS.text, fontWeight: 600 }}
              />
              <Legend
                wrapperStyle={{
                  paddingTop: 12,
                  color: COLORS.text,
                }}
              />

              {/* Typical day line */}
              <Line
                type="monotone"
                dataKey="typical"
                stroke={COLORS.primary}
                strokeWidth={3}
                dot={false}
                name="Typical day"
              />

              {/* Shifted usage line – green for “better” */}
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

        {/* Footer explainer */}
        <p
          className="mt-4 text-sm"
          style={{ color: COLORS.text }}
        >
          The goal of OurGrid is to help neighbourhoods move from the dark
          red line to the green line: same comfort, fewer overloads, and a
          calmer local grid.
        </p>
      </div>
    </section>
  );
}
