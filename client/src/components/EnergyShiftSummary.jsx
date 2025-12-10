import { motion } from "framer-motion";

export default function EnergyShiftSummary() {
  return (
    <section className="w-full max-w-4xl mx-auto px-1 sm:px-0">
      <motion.div
        className="rounded-3xl border shadow-md p-6 bg-gradient-to-br from-[#EAF3FF] via-[#F4F8FF] to-[#FFFFFF]"
        style={{ borderColor: "#2C6EA440" }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h2 className="text-xl font-semibold mb-2 text-[#1D252C]">
          Total energy shifted this month
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-[#384450]"
        >
          Households collectively shifted{" "}
          <span className="font-semibold text-[#2C6EA4]">2,340 kWh</span> away from peak hours,
          reducing stress on the neighbourhood transformer.
        </motion.p>
      </motion.div>
    </section>
  );
}
