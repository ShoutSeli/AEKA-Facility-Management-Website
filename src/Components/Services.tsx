import { useEffect, useRef } from 'react'

import {
  Zap,
  Droplets,
  Wind,
  Sparkles,
  Building2,
  Camera,
  Sun,
  Wrench,
} from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Electrical Installation & Repairs',
    desc: 'Complete electrical solutions — from new installations to fault-finding and repairs. Safe, code-compliant, and professionally executed.',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Droplets,
    title: 'Plumbing Services',
    desc: 'Pipe installations, leak repairs, drainage systems, and emergency plumbing — handled with precision and care.',
    image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    desc: 'Installation, servicing, and repair of all AC brands. Keep your space cool and comfortable year-round.',
    image: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Sparkles,
    title: 'Professional Cleaning',
    desc: 'Deep cleaning, post-construction cleaning, and regular maintenance for spotless homes and offices.',
    image: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Building2,
    title: 'General Building Maintenance',
    desc: 'Comprehensive building upkeep — painting, tiling, carpentry, and structural repairs to maintain your property\'s value.',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Camera,
    title: 'CCTV Installation',
    desc: 'Professional surveillance system design, installation, and monitoring setup for your security needs.',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Sun,
    title: 'Solar Energy Systems',
    desc: 'Solar panel installation and maintenance for sustainable, cost-effective energy solutions in Accra.',
    image: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wrench,
    title: 'Generator Services',
    desc: 'Installation, servicing, and emergency repair of generators to ensure uninterrupted power supply.',
    image: 'https://images.pexels.com/photos/3862369/pexels-photo-3862369.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal-950 via-royal-900 to-royal-950" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(251,191,36,0.6) 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 rounded-full px-4 py-1.5 mb-5">
            <span className="font-body text-gold-400 text-sm tracking-widest uppercase font-medium">
              What We Do
            </span>
          </div>
          <h2 className="reveal font-display text-white font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Our <span className="gold-text">Services</span>
          </h2>
          <p className="reveal font-body text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            From a leaking tap to a full solar system — our skilled team handles it all with professionalism, speed, and genuine care.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[0]
  delay: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const { icon: Icon, title, desc, image } = service

  return (
    <div
      ref={cardRef}
      className="reveal group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ minHeight: '320px' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-900/80 to-royal-900/40 group-hover:from-royal-950 group-hover:via-royal-900/90 transition-all duration-500" />
      {/* Gold accent bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col justify-end h-full">
        <div className="mb-4">
          <div className="w-11 h-11 bg-gold-400/15 border border-gold-400/40 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-400 group-hover:border-gold-400 transition-all duration-300">
            <Icon size={20} className="text-gold-400 group-hover:text-royal-900 transition-colors duration-300" />
          </div>
          <h3 className="font-display font-bold text-white text-lg leading-tight mb-2 group-hover:text-gold-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="font-body text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-32 overflow-hidden">
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}