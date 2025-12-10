import { motion } from "framer-motion";

export default function GridStressMap() {
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
        <h2 className="text-xl font-semibold mb-3 text-[#1D252C]">
          Congestion hotspots (illustrative)
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="border border-[#dce3eb] rounded-lg overflow-hidden shadow-sm"
        >
          <svg viewBox="0 0 400 240" width="100%" height="250">
            <rect width="400" height="240" fill="#E6F0FA" />

            <line x1="50" y1="0" x2="50" y2="240" stroke="#c7d6e5" strokeWidth="3" />
            <line x1="150" y1="0" x2="150" y2="240" stroke="#c7d6e5" strokeWidth="3" />
            <line x1="250" y1="0" x2="250" y2="240" stroke="#c7d6e5" strokeWidth="3" />
            <line x1="350" y1="0" x2="350" y2="240" stroke="#c7d6e5" strokeWidth="3" />

            <line x1="0" y1="60" x2="400" y2="60" stroke="#c7d6e5" strokeWidth="3" />
            <line x1="0" y1="120" x2="400" y2="120" stroke="#c7d6e5" strokeWidth="3" />
            <line x1="0" y1="180" x2="400" y2="180" stroke="#c7d6e5" strokeWidth="3" />

            <circle cx="120" cy="95" r="18" fill="#F4B14A" opacity="0.85" />
            <circle cx="275" cy="150" r="25" fill="#2C6EA4" opacity="0.8" />
            <circle cx="200" cy="50" r="14" fill="#4F2E39" opacity="0.8" />

            <text x="15" y="230" fill="#384450" fontSize="12">
              Illustrative neighbourhood congestion map (not real data)
            </text>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
