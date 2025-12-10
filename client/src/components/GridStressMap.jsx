export default function GridStressMap() {
  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-md border border-[#2C6EA422]">
      <h2 className="text-lg sm:text-xl font-semibold text-[#1D252C] mb-4">
        Congestion hotspots (illustrative)
      </h2>

      <div className="border border-[#dce3eb] rounded-lg overflow-hidden shadow-sm">
        <svg
          viewBox="0 0 400 240"
          width="100%"
          height="250"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="400" height="240" fill="#E6F0FA" />

          {/* Roads / grid */}
          <line x1="50" y1="0" x2="50" y2="240" stroke="#c7d6e5" strokeWidth="3" />
          <line x1="150" y1="0" x2="150" y2="240" stroke="#c7d6e5" strokeWidth="3" />
          <line x1="250" y1="0" x2="250" y2="240" stroke="#c7d6e5" strokeWidth="3" />
          <line x1="350" y1="0" x2="350" y2="240" stroke="#c7d6e5" strokeWidth="3" />

          <line x1="0" y1="60" x2="400" y2="60" stroke="#c7d6e5" strokeWidth="3" />
          <line x1="0" y1="120" x2="400" y2="120" stroke="#c7d6e5" strokeWidth="3" />
          <line x1="0" y1="180" x2="400" y2="180" stroke="#c7d6e5" strokeWidth="3" />

          {/* Hotspots */}
          <circle cx="120" cy="95" r="18" fill="#F4B14A" opacity="0.85" />
          <circle cx="275" cy="150" r="25" fill="#2C6EA4" opacity="0.8" />
          <circle cx="200" cy="50" r="14" fill="#4F2E39" opacity="0.8" />

          {/* Labels */}
          <text x="15" y="230" fill="#384450" fontSize="12">
            Illustrative neighbourhood congestion map (not real data)
          </text>
        </svg>
      </div>
    </div>
  );
}
