export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9F5F2] text-[#4F2E39] px-6 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Welcome to OurGrid
      </h1>

      <p className="max-w-xl text-lg mb-8">
        This is your public landing page. Use it to explain what grid congestion is,
        how OurGrid helps your neighborhood, and where residents and municipalities
        can start their journey.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/audience"
          className="bg-[#4F2E39] text-[#F4B14A] px-5 py-3 rounded-xl hover:bg-[#3c242e] transition-all"
        >
          Choose your role
        </a>
        <a
          href="#learn-more"
          className="bg-[#01AC51] text-white px-5 py-3 rounded-xl hover:bg-[#019245] transition-all"
        >
          Learn about grid congestion
        </a>
      </div>

      <div
        id="learn-more"
        className="mt-12 max-w-2xl text-sm text-[#4F2E39]/80"
      >
        Here you can later add a short story about peak hours, local transformers,
        and how shifting usage together prevents overloads and blackouts.
      </div>
    </div>
  );
}
