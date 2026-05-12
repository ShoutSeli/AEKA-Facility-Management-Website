import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const services = [
  'Electrical',
  'Plumbing',
  'Air Conditioning',
  'Cleaning',
  'Building Maintenance',
  'CCTV',
  'Solar Energy',
  'Generator Services',
]

export default function Footer() {
  return (
    <footer className="relative bg-royal-950 border-t border-gold-400/15 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gold-400 rounded-lg rotate-45" />
                <img
                  src="/logoCropped.png"
                  alt="AEKA Logo"
                  className="relative w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Your trusted partner for reliable facility maintenance and technical
              support in Accra. Quality, affordable solutions you can count on.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="tel:+233548516539"
                title="Call us"
                className="w-10 h-10 bg-royal-800 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300"
              >
                <Phone size={15} />
              </a>

              <a
                href="https://wa.me/233208644355"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="w-10 h-10 bg-royal-800 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-400/50 transition-all duration-300"
              >
                <MessageCircle size={15} />
              </a>

              <a
                href="https://www.instagram.com/aekafacilityservices?igsh=bmVjMHk4dW9sbWRk"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-10 h-10 bg-royal-800 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-300"
              >
                <InstagramIcon size={15} />
              </a>

              <a
                href="mailto:aekafacilityservices@gmail.com"
                title="Email"
                className="w-10 h-10 bg-royal-800 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-gold-400 hover:border-gold-400/50 transition-all duration-300"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-gold-400 tracking-widest text-sm uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => {
                return (
                  <li key={s}>
                    <a
                      href="#services"
                      className="font-body text-white/45 text-sm hover:text-gold-400 transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-heading text-gold-400 tracking-widest text-sm uppercase mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="font-body text-white/45 text-sm">
                  Accra, Greater Accra, Ghana
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+233548516539"
                    className="font-body text-white/45 text-sm hover:text-gold-400 transition-colors"
                  >
                    0548 516 539
                  </a>

                  <a
                    href="tel:+233242220224"
                    className="font-body text-white/45 text-sm hover:text-gold-400 transition-colors"
                  >
                    0242 220 224
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:aekafacilityservices@gmail.com"
                  className="font-body text-white/45 text-sm hover:text-gold-400 transition-colors break-all"
                >
                  aekafacilityservices@gmail.com
                </a>
              </div>
              <div className="mt-4 p-3 bg-green-500/10 border border-green-400/20 rounded-xl">
                <p className="font-body text-green-400 text-xs font-medium">
                  🟢 24/7 Emergency Line Active
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-sm">
            © {new Date().getFullYear()} AEKA Facility Services. All rights reserved.
          </p>
          <p className="font-body text-white/20 text-xs">
            Crafted with care in Accra, Ghana 🇬🇭
          </p>
        </div>
      </div>
    </footer>
  )
}