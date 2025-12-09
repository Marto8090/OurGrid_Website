import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceArea
} from 'recharts';
import { useAudience } from "../context/AudienceContext";

// #region Mock Data
const loadCurveData = [
  { time: '00:00', typical: 30, smoothed: 45 },
  { time: '04:00', typical: 25, smoothed: 40 },
  { time: '08:00', typical: 60, smoothed: 60 },
  { time: '12:00', typical: 50, smoothed: 55 },
  { time: '16:00', typical: 70, smoothed: 65 },
  { time: '18:00', typical: 100, smoothed: 75 },
  { time: '20:00', typical: 85, smoothed: 70 },
  { time: '23:00', typical: 40, smoothed: 50 },
];
// #endregion

export default function Dashboards() {
  const { audience } = useAudience();

  const colors = {
    primary: "#4F2E39",
    secondary: "#2C6EA4",
    bg: "#F9F5F2",
    accent: "#F4B14A",
  };

  return (
    <main className="p-6 min-h-screen" style={{ backgroundColor: colors.bg }}>
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold" style={{ color: colors.primary }}>Dashboards</h1>
        <p className="text-gray-600 text-sm">Audience: {audience || "General Public"}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-4xl">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Daily Load Curve</h2>
        
        {/* Fixed Width/Height to prevent crashes */}
        <div style={{ width: '100%', overflowX: 'auto' }}>
            <LineChart
              width={600}
              height={400}
              data={loadCurveData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Legend verticalAlign="top" height={36}/>
              
              <ReferenceArea x1="16:00" x2="20:00" fill={colors.accent} fillOpacity={0.2} strokeOpacity={0} />

              <Line type="monotone" dataKey="typical" name="Typical Day" stroke={colors.primary} strokeWidth={3} dot={{ r: 4, strokeWidth: 0, fill: colors.primary }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="smoothed" name="Smoothed Day" stroke={colors.secondary} strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4, strokeWidth: 0, fill: colors.secondary }} />
            </LineChart>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-md border-l-4" style={{ borderColor: colors.secondary }}>
          <p className="text-gray-700 leading-relaxed">
            When many households use electricity at the same time, the grid gets stressed. 
            By shifting a few tasks, we <span className="font-bold" style={{ color: colors.secondary }}>smooth out the peak</span>.
          </p>
        </div>
      </div>

    </main>
  );
}