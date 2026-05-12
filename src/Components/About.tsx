import { useEffect, useRef } from 'react'

import { CheckCircle2, Users, Award, HeartHandshake } from 'lucide-react'

const highlights = [
  'Skilled, certified, and background-checked technicians',
  'Affordable pricing with no hidden charges',
  'Fast response times — including same-day service',
  'Quality materials and workmanship guaranteed',
  '24/7 emergency support when you need it most',
]

const counters = [
  { value: '500+', label: 'Projects Done' },
  { value: '10+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' },
  { value: '100%', label: 'Satisfaction Goal' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) =>
      observer.observe(el)
    )
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-950 to-royal-900" />

      {/* Gold blob */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="reveal-left relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="AEKA team at work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-royal-950/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 border border-gold-400/30 animate-float shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
                  <Award size={22} className="text-royal-900" />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-lg">Top Rated</p>
                  <p className="font-body text-gold-400 text-sm">Service Provider</p>
                </div>
              </div>
            </div>

            {/* Floating counter badge */}
            <div className="absolute -top-4 -left-4 glass-card rounded-2xl p-4 border border-gold-400/20 animate-float shadow-2xl" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <Users size={20} className="text-gold-400" />
                <div>
                  <p className="font-heading text-gold-400 text-2xl">500+</p>
                  <p className="font-body text-white/60 text-xs">Happy Clients</p>
                </div>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-l-2 border-b-2 border-gold-400/40 rounded-bl-2xl" />
          </div>

          {/* Text side */}
          <div>
            <div className="reveal inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 rounded-full px-4 py-1.5 mb-6">
              <HeartHandshake size={14} className="text-gold-400" />
              <span className="font-body text-gold-400 text-sm tracking-widest uppercase font-medium">
                About AEKA
              </span>
            </div>

            <h2 className="reveal font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}>
              Reliable Facility Care,{' '}
              <span className="gold-text">Built on Trust</span>
            </h2>

            <p className="reveal font-body text-white/65 mb-6 leading-relaxed text-lg">
              AEKA Facility Services is your trusted partner for reliable facility maintenance and technical support in Accra. We've built our reputation on delivering quality work, showing up on time, and treating every client's property with the same care we'd give our own.
            </p>

            <p className="reveal font-body text-white/65 mb-8 leading-relaxed">
              Whether you need a small repair or a full facility overhaul, our skilled team brings the expertise, tools, and professionalism to get the job done right — every time.
            </p>

            {/* Highlights list */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className="reveal flex items-start gap-3"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <CheckCircle2 size={18} className="text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Counters */}
            <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-4">
              {counters.map(({ value, label }) => (
                <div key={label} className="text-center bg-royal-800/40 border border-gold-400/15 rounded-xl py-4 px-2 hover:border-gold-400/40 transition-colors duration-300">
                  <p className="font-heading text-gold-400 text-2xl tracking-wide">{value}</p>
                  <p className="font-body text-white/50 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}