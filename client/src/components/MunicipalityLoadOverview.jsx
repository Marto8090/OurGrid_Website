import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { hour: "00:00", load: 30 },
  { hour: "06:00", load: 45 },
  { hour: "12:00", load: 90 },
  { hour: "18:00", load: 130 },
  { hour: "21:00", load: 110 },
];

export default function MunicipalityLoadOverview() {
  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-md border border-[#2C6EA422]">
      <h2 className="text-lg sm:text-xl font-semibold text-[#1D252C] mb-3">
        Daily transformer load overview
      </h2>

      <p className="text-sm text-[#384450] mb-4">
        Shows how electricity demand rises across the neighbourhood and when congestion risk increases.
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e6ed" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="load" stroke="#2C6EA4" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
