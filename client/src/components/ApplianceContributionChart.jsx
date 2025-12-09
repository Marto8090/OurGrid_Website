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
          What creates the evening peak?
        </h2>
        <p
          className="text-sm mt-1 max-w-xl"
          style={{ color: COLORS.text }}
        >
          Heavy appliances like EV chargers and heat pumps use a lot of power in
          a short time. When many homes run them at once, the local grid hits
          its limits faster.
        </p>

        <div className="mt-4" style={{ width: "100%", height: 280 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={applianceData}>
              <CartesianGrid
                stroke={COLORS.accent + "40"}
                strokeDasharray="3 3"
              />
              <XAxis
                dataKey="name"
                stroke={COLORS.text}
                tick={{ fill: COLORS.text, fontSize: 12 }}
              />
              <YAxis
                stroke={COLORS.text}
                tick={{ fill: COLORS.text, fontSize: 12 }}
                label={{
                  value: "Share of peak load (%)",
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
                dataKey="share"
                name="Share of peak load"
                fill={COLORS.accent}
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <p
          className="mt-4 text-sm"
          style={{ color: COLORS.text }}
        >
          Shifting just a few of these tasks to earlier in the day can already
          make a visible difference in the neighbourhood peak.
        </p>
      </div>
    </section>
  );
}
