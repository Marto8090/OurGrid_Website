import mapImg from "../assets/demo-grid-map.png";

export default function GridStressMap() {
  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-md border border-[#2C6EA422]">
      <h2 className="text-lg sm:text-xl font-semibold text-[#1D252C] mb-4">
        Congestion hotspots (illustrative)
      </h2>

      <img
        src={mapImg}
        alt="Grid stress map demo"
        className="rounded-lg shadow-sm border border-[#dce3eb]"
      />
    </div>
  );
}
