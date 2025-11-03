export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-[#4a2431] text-white">
      <div className="mx-auto max-w-screen-sm h-14 px-4 flex items-center justify-between">
        {/* Left: logo + brand */}
        <div className="flex items-center gap-2">
          {/* Simple placeholder logo */}
          <svg
            className="h-7 w-7 rounded"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="12" fill="#ffea00" />
            <circle cx="12" cy="12" r="6" fill="#4a2431" />
          </svg>
          <span className="font-semibold text-[#ffea00]">OurGrid</span>
        </div>

        {/* Right: hamburger */}
        <button
          aria-label="Open menu"
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#ffea00] hover:bg-white/10"
        >
          {/* Simple hamburger icon */}
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </header>
  );
}
