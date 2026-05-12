import React, { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'

function InstagramIcon({ size = 20 }: { size?: number }) {
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

interface ContactMethod {
  id: string
  label: string
  value: string
  sub: string
  href: string
  color: string
  iconColor: string
  isInstagram?: boolean
  Icon?: React.ElementType
}

const contactMethods: ContactMethod[] = [
  {
    id: 'phone',
    Icon: Phone,
    label: 'Call Us',
    value: '0548 516 539 / 0242 220 224',
    sub: 'Mon–Sat, 7am–8pm',
    href: 'tel:+233548516539',
    color: 'bg-blue-500/10 border-blue-400/30 hover:bg-blue-500/20 hover:border-blue-400',
    iconColor: 'text-blue-400',
  },
  {
    id: 'whatsapp',
    Icon: MessageCircle,
    label: 'WhatsApp',
    value: '0208 644 355',
    sub: 'Fastest response',
    href: 'https://wa.me/233208644355',
    color: 'bg-green-500/10 border-green-400/30 hover:bg-green-500/20 hover:border-green-400',
    iconColor: 'text-green-400',
  },
  {
    id: 'instagram',
    isInstagram: true,
    label: 'Instagram',
    value: '@aekafacilityservices',
    sub: 'Follow our work',
    href: 'https://www.instagram.com/aekafacilityservices?igsh=bmVjMHk4dW9sbWRk',
    color: 'bg-pink-500/10 border-pink-400/30 hover:bg-pink-500/20 hover:border-pink-400',
    iconColor: 'text-pink-400',
  },
  {
    id: 'email',
    Icon: Mail,
    label: 'Email Us',
    value: 'aekafacilityservices@gmail.com',
    sub: 'Reply within 24hrs',
    href: 'mailto:aekafacilityservices@gmail.com',
    color: 'bg-amber-400/10 border-amber-400/30 hover:bg-amber-400/20 hover:border-amber-400',
    iconColor: 'text-amber-400',
  },
]

interface FormState {
  firstName: string
  lastName: string
  phone: string
  service: string
  message: string
}

const INITIAL_FORM: FormState = {
  firstName: '',
  lastName: '',
  phone: '',
  service: '',
  message: '',
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    const { firstName, lastName, phone, service, message } = form
    if (!firstName || !phone) {
      alert('Please fill in at least your name and phone number.')
      return
    }
    const fullName = `${firstName} ${lastName}`.trim()
    const serviceLabel = service || 'Not specified'
    const customerMessage = message || 'No additional message provided.'
    const subject = encodeURIComponent(`Service Request – ${serviceLabel} | ${fullName}`)
    const body = encodeURIComponent(
`Dear AEKA Facility Services,

You have received a new service request through your website. Please find the customer details below:

──────────────────────────────
  CUSTOMER DETAILS
──────────────────────────────
  Full Name   : ${fullName}
  Phone / WA  : ${phone}
  Service     : ${serviceLabel}
──────────────────────────────

  MESSAGE FROM CUSTOMER:
  "${customerMessage}"

──────────────────────────────

Please reach out to the customer at your earliest convenience.

This request was submitted via the AEKA Facility Services website.`
    )
    window.location.href = `mailto:aekafacilityservices@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm(INITIAL_FORM)
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-900 to-royal-950" />
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-gold-400/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 rounded-full px-4 py-1.5 mb-5">
            <span className="font-body text-gold-400 text-sm tracking-widest uppercase font-medium">
              Get In Touch
            </span>
          </div>
          <h2
            className="reveal font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Let's Talk About{' '}
            <span className="gold-text">Your Needs</span>
          </h2>
          <p className="reveal font-body text-white/60 max-w-xl mx-auto text-lg">
            Reach out via any of the channels below. We're always happy to provide
            a free quote or answer any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contactMethods.map((method, i) => {
              return (
                <ContactCard key={method.id} method={method} index={i} />
              )
            })}

            {/* Location card */}
            <div className="reveal sm:col-span-2 glass-card rounded-2xl p-6 border border-gold-400/15">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-400/10 border border-gold-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold-400" />
                </div>
                <div>
                  <p className="font-body font-semibold text-white mb-1">
                    Based in Accra, Ghana
                  </p>
                  <p className="font-body text-white/55 text-sm leading-relaxed">
                    Serving homes, offices, and commercial spaces across Greater
                    Accra and surrounding areas.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Clock size={13} className="text-gold-400" />
                    <span className="font-body text-gold-400 text-xs font-medium">
                      24/7 Emergency Support Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal-right">
            <div className="glass-card rounded-3xl p-8 border border-gold-400/20">
              <h3 className="font-display font-bold text-white text-2xl mb-2">
                Request a Free Quote
              </h3>
              <p className="font-body text-white/50 text-sm mb-7">
                Fill in your details and we'll get back to you within a few hours.
              </p>

              {submitted && (
                <div className="mb-6 flex items-start gap-3 bg-green-500/10 border border-green-400/30 rounded-xl px-4 py-4">
                  <span className="text-green-400 text-lg">✓</span>
                  <div>
                    <p className="font-body text-green-400 font-semibold text-sm">
                      Request sent!
                    </p>
                    <p className="font-body text-white/50 text-xs mt-0.5">
                      Your mail app opened with your details pre-filled. We'll be in touch shortly.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-white/60 text-xs mb-1.5 block uppercase tracking-wider">
                      First Name <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Kwame"
                      className="w-full bg-royal-800/50 border border-white/10 focus:border-gold-400/60 rounded-xl px-4 py-3 text-white placeholder-white/20 font-body text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-white/60 text-xs mb-1.5 block uppercase tracking-wider">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Mensah"
                      className="w-full bg-royal-800/50 border border-white/10 focus:border-gold-400/60 rounded-xl px-4 py-3 text-white placeholder-white/20 font-body text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-white/60 text-xs mb-1.5 block uppercase tracking-wider">
                    Phone / WhatsApp <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+233 XX XXX XXXX"
                    className="w-full bg-royal-800/50 border border-white/10 focus:border-gold-400/60 rounded-xl px-4 py-3 text-white placeholder-white/20 font-body text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="font-body text-white/60 text-xs mb-1.5 block uppercase tracking-wider">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-royal-800/50 border border-white/10 focus:border-gold-400/60 rounded-xl px-4 py-3 text-white/80 font-body text-sm outline-none transition-colors"
                  >
                    <option value="" className="bg-royal-900">Select a service…</option>
                    <option value="Electrical Installation & Repairs" className="bg-royal-900">Electrical Installation & Repairs</option>
                    <option value="Plumbing" className="bg-royal-900">Plumbing</option>
                    <option value="Air Conditioning" className="bg-royal-900">Air Conditioning</option>
                    <option value="Cleaning" className="bg-royal-900">Cleaning</option>
                    <option value="General Building Maintenance" className="bg-royal-900">General Building Maintenance</option>
                    <option value="CCTV Installation" className="bg-royal-900">CCTV Installation</option>
                    <option value="Solar Energy Systems" className="bg-royal-900">Solar Energy Systems</option>
                    <option value="Generator Services" className="bg-royal-900">Generator Services</option>
                    <option value="Other" className="bg-royal-900">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-white/60 text-xs mb-1.5 block uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your facility issue or request…"
                    className="w-full bg-royal-800/50 border border-white/10 focus:border-gold-400/60 rounded-xl px-4 py-3 text-white placeholder-white/20 font-body text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full shimmer-btn text-royal-900 font-body font-bold py-4 rounded-xl text-base hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-gold-400/20"
                >
                  Send Request →
                </button>

                <p className="font-body text-white/30 text-xs text-center">
                  Clicking "Send Request" will open your mail app with your details
                  pre-filled and addressed to AEKA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  method,
  index,
}: {
  method: ContactMethod
  index: number
}) {
  const anchorRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = anchorRef.current
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

  const { Icon, isInstagram, label, value, sub, href, color, iconColor } = method

  return (
    <a
      ref={anchorRef}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={`reveal group flex items-start gap-4 border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${color}`}
    >
      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
        {isInstagram ? (
          <span className={iconColor}>
            <InstagramIcon size={20} />
          </span>
        ) : (
          Icon && <Icon size={20} className={iconColor} />
        )}
      </div>
      <div>
        <p className="font-body text-white/40 text-xs uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="font-body font-semibold text-white text-sm mb-0.5 break-all">
          {value}
        </p>
        <p className="font-body text-white/40 text-xs">{sub}</p>
      </div>
    </a>
  )
}