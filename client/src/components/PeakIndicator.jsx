const COLORS = {
  primary: "#4F2E39",
  accent: "#F4B14A",
  success: "#01AC51",
  bg: "#F9F5F2",
  text: "#1D252C",
};

export default function PeakIndicator() {
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
          Peak vs off-peak hours
        </h2>
        <p
          className="text-sm mt-1 max-w-xl"
          style={{ color: COLORS.text }}
        >
          Exact times differ per neighbourhood, but most grids see the highest
          load in the early evening when everyone comes home, cooks, and charges
          devices.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {/* Peak hours card */}
          <div
            className="rounded-xl p-4 flex items-start gap-3"
            style={{
              backgroundColor: "#FFF7E3",
              border: "1px solid " + COLORS.accent,
            }}
          >
            <span
              className="h-3 w-3 mt-1 rounded-full"
              style={{ backgroundColor: COLORS.accent }}
            />
            <div>
              <h3
                className="font-semibold"
                style={{ color: COLORS.text }}
              >
                Peak hours
              </h3>
              <p className="text-sm" style={{ color: COLORS.text }}>
                Typically between <span className="font-semibold">17:00</span>{" "}
                and <span className="font-semibold">20:00</span>. Using lots of
                power in this window puts the local transformer under the most
                stress.
              </p>
            </div>
          </div>

          {/* Off-peak hours card */}
          <div
            className="rounded-xl p-4 flex items-start gap-3"
            style={{
              backgroundColor: "#E7F8EE",
              border: "1px solid " + COLORS.success,
            }}
          >
            <span
              className="h-3 w-3 mt-1 rounded-full"
              style={{ backgroundColor: COLORS.success }}
            />
            <div>
              <h3
                className="font-semibold"
                style={{ color: COLORS.text }}
              >
                Off-peak hours
              </h3>
              <p className="text-sm" style={{ color: COLORS.text }}>
                Often during daytime or later in the evening. Shifting one or
                two flexible tasks (laundry, EV charging) to these slots reduces
                the peak without reducing comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
