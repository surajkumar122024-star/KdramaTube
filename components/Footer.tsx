import Link from "next/link";

const footerLinks = [
  {
    heading: "Browse",
    links: [
      { label: "All Dramas", href: "/?category=All" },
      { label: "Korean Dramas", href: "/?category=Korean" },
      { label: "Chinese Dramas", href: "/?category=Chinese" },
      { label: "Turkish Dramas", href: "/?category=Turkish" },
    ],
  },
  {
    heading: "Discover",
    links: [
      { label: "Featured", href: "/" },
      { label: "Search", href: "/search" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-800/60 bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Drama<span className="text-violet-400">Verse</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Your curated catalog of Korean, Chinese, and Turkish dramas. Discover stories that move you.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
                {section.heading}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-500 hover:text-violet-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
          <p>© {year} DramaVerse. All rights reserved.</p>
          <p>Built for drama lovers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
