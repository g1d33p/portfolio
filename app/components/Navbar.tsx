// src/components/Navbar.tsx
// This file defines a reusable navigation bar shown across your site.

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F14]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        {/* Left side: brand */}
        <a href="/" className="font-semibold tracking-tight hover:opacity-90">
          <i>Jeevan Deep</i>
          <span className="ml-2 text-xs font-medium text-white/60">
            AI PM
          </span>
        </a>

        {/* Right side: links */}
        <div className="flex items-center gap-4 text-sm">
          <a href="/" className="text-white/70 hover:text-white">
            Home
          </a>
          <a href="/projects" className="text-white/70 hover:text-white">
            Projects
          </a>
          <a href="/#contact" className="text-white/70 hover:text-white">
            Contact
          </a>

          {/* Resume button (you can replace href later with a real PDF link) */}
          <a
            href="/resume.pdf"
            className="rounded-2xl bg-white px-4 py-2 font-medium text-black hover:opacity-90"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
