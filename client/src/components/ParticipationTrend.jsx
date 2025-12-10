import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { month: "Jan", participants: 110 },
  { month: "Feb", participants: 130 },
  { month: "Mar", participants: 155 },
  { month: "Apr", participants: 190 },
];

export default function ParticipationTrend() {
  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-md border border-[#2C6EA422]">
      <h2 className="text-lg sm:text-xl font-semibold text-[#1D252C] mb-3">
        Household participation trend
      </h2>

      <p className="text-sm text-[#384450] mb-4">
        Shows how many households joined energy-shifting challenges over time.
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e6ed" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="participants" fill="#2C6EA4" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
