export default function EnergyShiftSummary() {
  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-md border border-[#2C6EA422]">
      <h2 className="text-lg sm:text-xl font-semibold text-[#1D252C] mb-3">
        Total energy shifted this month
      </h2>

      <p className="text-sm text-[#384450]">
        Households collectively shifted <span className="font-semibold text-[#2C6EA4]">2,340 kWh</span> away from peak hours, reducing stress on the neighbourhood transformer.
      </p>
    </div>
  );
}
