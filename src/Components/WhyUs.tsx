import { useEffect, useRef } from 'react'

import { Clock, DollarSign, ThumbsUp, ShieldCheck, Headphones, Wrench } from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'Fast Response',
    desc: 'We show up on time, every time. Same-day service available for urgent repairs.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    desc: 'No surprises. Get honest, competitive quotes upfront — no hidden fees ever.',
  },
  {
    icon: ThumbsUp,
    title: 'Quality Guaranteed',
    desc: 'We stand behind our work. Every job is done to the highest standard, guaranteed.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Certified',
    desc: 'Our team is fully trained, certified, and background-checked for your peace of mind.',
  },
  {
    icon: Headphones,
    title: '24/7 Emergency Support',
    desc: 'Emergencies don\'t keep office hours. Neither do we. Call us anytime, day or night.',
  },
  {
    icon: Wrench,
    title: 'One-Stop Solution',
    desc: 'Eight+ services under one roof. No need to juggle multiple contractors for your facility needs.',
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) =>
      observer.observe(el)
    )
    return () => observer.disconnect()
  }, [])

  return (
    <section id="whyus" ref={ref} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-royal-950" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(251,191,36,0.15) 0px,
            rgba(251,191,36,0.15) 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 rounded-full px-4 py-1.5 mb-5">
            <span className="font-body text-gold-400 text-sm tracking-widest uppercase font-medium">
              Why Choose Us
            </span>
          </div>
          <h2 className="reveal font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            The <span className="gold-text">AEKA Difference</span>
          </h2>
          <p className="reveal font-body text-white/60 max-w-xl mx-auto text-lg">
            We're not just a service provider — we're your long-term facility partner.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="reveal mt-16 relative rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1400)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-950/95 via-royal-900/90 to-royal-950/80" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-10">
            <div>
              <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-2">
                Ready to get started?
              </h3>
              <p className="font-body text-white/60">
                Contact AEKA today for a free, no-obligation quote.
              </p>
            </div>
            <a
              href="#contact"
              className="shimmer-btn text-royal-900 font-body font-bold px-10 py-4 rounded-full text-base whitespace-nowrap hover:scale-105 transition-transform shadow-xl shadow-gold-400/20"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 100)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  const { icon: Icon, title, desc } = reason

  return (
    <div
      ref={ref}
      className="reveal group glass-card rounded-2xl p-7 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 bg-royal-800 border border-gold-400/30 group-hover:bg-gold-400 group-hover:border-gold-400 rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
        <Icon size={22} className="text-gold-400 group-hover:text-royal-900 transition-colors duration-300" />
      </div>
      <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-gold-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="font-body text-white/55 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}