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

const peakData = [
  { scenario: "Before coordination", peakLoad: 2.5 },
  { scenario: "After coordination", peakLoad: 1.8 },
];

export default function BeforeAfterPeakChart() {
  return (
    <section className="w-full max-w-4xl mx-auto">
      <div
        className="rounded-2xl border shadow-md p-6"
        style={{
          backgroundColor: COLORS.bg,
          borderColor: COLORS.primary + "20",
        }}
      >
        <h2
          className="text-xl font-semibold"
          style={{ color: COLORS.text }}
        >
          How much can the peak go down?
        </h2>
        <p
          className="text-sm mt-1 max-w-xl"
          style={{ color: COLORS.text }}
        >
          This example shows how a neighbourhood can reduce the peak load when
          enough households shift some of their evening usage.
        </p>

        <div className="mt-4" style={{ width: "100%", height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={peakData} barCategoryGap={40}>
              <CartesianGrid
                stroke={COLORS.accent + "40"}
                strokeDasharray="3 3"
                vertical={false}
              />
              <XAxis
                dataKey="scenario"
                stroke={COLORS.text}
                tick={{ fill: COLORS.text, fontSize: 12 }}
              />
              <YAxis
                stroke={COLORS.text}
                tick={{ fill: COLORS.text, fontSize: 12 }}
                label={{
                  value: "Relative peak load",
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
                }}
                labelStyle={{ color: COLORS.text, fontWeight: 600 }}
              />
              <Bar
                dataKey="peakLoad"
                name="Peak load"
                fill={COLORS.primary}
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <p
          className="mt-4 text-sm"
          style={{ color: COLORS.text }}
        >
          In real pilots, even a 5–10% reduction can already help avoid
          congestion. The exact numbers depend on the neighbourhood, but the
          idea is the same: smaller peaks, less risk.
        </p>
      </div>
    </section>
  );
}
