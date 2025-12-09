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
  { scenario: "Before coordination", peakLoad: 2.5, color: "#4F2E39" },
  { scenario: "After coordination", peakLoad: 1.8, color: "#01AC51" },
];

export default function BeforeAfterPeakChart() {
  return (
    <section className="w-full max-w-4xl mx-auto">
      <div
        className="rounded-3xl border shadow-md p-6 md:p-7 bg-white/90 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
        style={{
          borderColor: COLORS.primary + "20",
        }}
      >
        <h2
          className="text-xl md:text-2xl font-semibold"
          style={{ color: COLORS.text }}
        >
          Before and after coordination
        </h2>
        <p
          className="text-sm mt-1 max-w-xl"
          style={{ color: COLORS.text }}
        >
          When enough people shift flexible tasks out of the peak window, the
          maximum load on the transformer drops. This example shows a simplified
          “before vs after” view.
        </p>

        <div className="mt-4" style={{ width: "100%", height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={peakData} barCategoryGap={40}>
              <CartesianGrid
                stroke={COLORS.accent + "35"}
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
                  borderRadius: 16,
                }}
                labelStyle={{ color: COLORS.text, fontWeight: 600 }}
              />
              <Bar
                dataKey="peakLoad"
                name="Peak load"
                radius={[10, 10, 0, 0]}
                // per-bar color
                fill={COLORS.primary}
              >
                {/* You can add a custom shape later if needed */}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <span className="inline-flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#4F2E39" }}
            />
            <span style={{ color: COLORS.text }}>Before coordination</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#01AC51" }}
            />
            <span style={{ color: COLORS.text }}>After coordination</span>
          </span>
        </div>
      </div>
    </section>
  );
}
