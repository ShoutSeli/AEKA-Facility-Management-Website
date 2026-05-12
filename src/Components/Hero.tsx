import { useEffect, useState } from 'react'

import { ChevronDown, Shield, Clock, Star } from 'lucide-react'

const heroImages = [
  'https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1600',
]

const badges = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Clock, text: '24/7 Emergency' },
  { icon: Star, text: 'Top Rated in Accra' },
]

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image carousel */}
      {heroImages.map((img, i) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            i === activeImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transitionDuration: '1500ms',
          }}
        />
      ))}

      {/* Deep gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-950/90 via-royal-900/80 to-royal-800/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-transparent to-royal-950/40" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-royal-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-4xl">
          {/* Eyebrow tag */}
          <div
            className={`inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 rounded-full px-4 py-1.5 mb-8 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="font-body text-gold-400 text-sm font-medium tracking-widest uppercase">
              Accra's Trusted Facility Partner
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-black text-white mb-6 transition-all duration-700 delay-150 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}
          >
            Expert Facility{' '}
            <span className="gold-text">Maintenance</span>
            <br />
            You Can Count On
          </h1>

          {/* Sub-headline */}
          <p
            className={`font-body gold-text mb-10 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
          >
            From electrical repairs and plumbing to air conditioning, solar, CCTV, and cleaning — AEKA delivers quality, affordable facility solutions for homes, offices, and commercial spaces across Accra.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-14 transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#contact"
              className="shimmer-btn text-royal-900 font-body font-medium px-8 py-4 rounded-full text-base hover:scale-105 transition-transform duration-300 shadow-xl shadow-gold-400/30 animate-pulse-gold"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="border border-white/30 text-white font-body font-medium px-8 py-4 rounded-full text-base hover:bg-white/10 hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Trust badges */}
          <div
            className={`flex flex-wrap gap-5 transition-all duration-700 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {badges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gold-400/15 rounded-full flex items-center justify-center border border-gold-400/30">
                  <Icon size={14} className="text-gold-400" />
                </div>
                <span className="font-body text-white/60 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-gold-400 transition-colors animate-float"
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </a>

      {/* Image dots */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeImage ? 'w-8 h-2 bg-gold-400' : 'w-2 h-2 bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  )
}