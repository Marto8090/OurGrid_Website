const COLORS = {
  primary: "#4F2E39",
  accent: "#F4B14A",
  success: "#01AC51",
  bg: "#F9F5F2",
  text: "#1D252C",
};

export default function PeakIndicator() {
  return (
    <section className="w-full max-w-4xl mx-auto px-1 sm:px-0">
      <div
        className="rounded-3xl border shadow-md p-4 sm:p-6 md:p-7 bg-white/90 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
        style={{
          borderColor: COLORS.primary + "20",
        }}
      >
        <h2
          className="text-lg sm:text-xl md:text-2xl font-semibold"
          style={{ color: COLORS.text }}
        >
          Peak vs off-peak hours
        </h2>
        <p
          className="text-xs sm:text-sm md:text-[15px] mt-1 max-w-xl"
          style={{ color: COLORS.text }}
        >
          Times differ per neighbourhood, but most grids see the highest load
          when everyone is home at the same time. That’s where congestion risk
          is highest.
        </p>

        <div className="mt-4 grid gap-3 sm:gap-4 md:grid-cols-2">
          {/* Peak hours card */}
          <div
            className="rounded-2xl p-4 flex items-start gap-3 border"
            style={{
              background: "linear-gradient(135deg, #FFF3D9, #FFE4AD)",
              borderColor: COLORS.accent + "80",
            }}
          >
            <span
              className="h-3 w-3 mt-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: COLORS.accent }}
            />
            <div className="space-y-1">
              <h3
                className="font-semibold text-sm sm:text-base"
                style={{ color: COLORS.text }}
              >
                Peak hours
              </h3>
              <p
                className="text-xs sm:text-sm"
                style={{ color: COLORS.text }}
              >
                Often between <span className="font-semibold">17:00</span> and{" "}
                <span className="font-semibold">20:00</span>. Many homes cook,
                charge EVs and run appliances at once, pushing the transformer
                close to its limit.
              </p>
            </div>
          </div>

          {/* Off-peak hours card */}
          <div
            className="rounded-2xl p-4 flex items-start gap-3 border"
            style={{
              background: "linear-gradient(135deg, #E4F8EE, #C9F0DC)",
              borderColor: COLORS.success + "80",
            }}
          >
            <span
              className="h-3 w-3 mt-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: COLORS.success }}
            />
            <div className="space-y-1">
              <h3
                className="font-semibold text-sm sm:text-base"
                style={{ color: COLORS.text }}
              >
                Off-peak hours
              </h3>
              <p
                className="text-xs sm:text-sm"
                style={{ color: COLORS.text }}
              >
                Daytime or later in the evening. Shifting flexible tasks to
                these slots keeps comfort the same but helps avoid overloads on
                the local grid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
