import { useState, useEffect } from 'react'

import { Menu, X} from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#whyus' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-royal-900/95 backdrop-blur-md shadow-2xl shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-[120px] h-[50px]">
            <img src="/logoCropped.png" alt="AEKA Logo" className="relative w-full h-full object-contain translate-x-2" />
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-base font-medium text-white hover:text-gold-400 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 shimmer-btn text-royal-900 font-body font-medium text-base px-10 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 -translate-x-2"
        >
          Get a Quote
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 -translate-x-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-royal-900/98 backdrop-blur-md px-6 py-4 flex flex-col gap-4 border-t border-gold-400/20">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-white/80 hover:text-gold-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="shimmer-btn text-royal-900 font-body font-semibold text-sm px-6 py-3 rounded-full text-center mt-2"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}