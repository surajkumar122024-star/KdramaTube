import Link from "next/link";

const footerLinks = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
  {
    heading: "Browse",
    links: [
      { label: "All dramas", href: "/?category=All" },
      { label: "Korean dramas", href: "/?category=Korean" },
      { label: "Chinese dramas", href: "/?category=Chinese" },
      { label: "Turkish dramas", href: "/?category=Turkish" },
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
    <footer className="mt-20 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-baseline gap-0.5 mb-3">
              <span className="font-display italic text-lg text-[var(--color-text)]">Drama</span>
              <span className="font-display italic text-lg text-[var(--color-accent)]">Verse</span>
            </Link>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed max-w-xs">
              Your curated catalog of Korean, Chinese, and Turkish dramas. Discover stories that move you.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h3 className="text-[var(--color-text)] font-semibold text-sm mb-3">
                {section.heading}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--color-muted)] hover:text-[var(--color-accent)] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[var(--color-muted)]">
          <p>© {year} DramaVerse. All rights reserved.</p>
          <p>Built for drama lovers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
