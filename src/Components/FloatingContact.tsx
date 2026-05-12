import React, { useState } from 'react'
import { Phone, MessageCircle, Mail, X, Headphones } from 'lucide-react'

function InstagramIcon({ size = 16 }: { size?: number }) {
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

interface Contact {
  id: string
  label: string
  href: string
  bg: string
  shadow: string
  isInstagram?: boolean
  Icon?: React.ElementType
}

const contacts: Contact[] = [
  {
    id: 'call',
    Icon: Phone,
    label: 'Call Us',
    href: 'tel:+233548516539',
    bg: 'bg-blue-500',
    shadow: 'shadow-blue-500/40',
  },
  {
    id: 'whatsapp',
    Icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/233208644355',
    bg: 'bg-green-500',
    shadow: 'shadow-green-500/40',
  },
  {
    id: 'instagram',
    isInstagram: true,
    label: 'Instagram',
    href: 'https://www.instagram.com/aekafacilityservices?igsh=bmVjMHk4dW9sbWRk',
    bg: 'bg-gradient-to-br from-purple-500 to-pink-500',
    shadow: 'shadow-pink-500/40',
  },
  {
    id: 'email',
    Icon: Mail,
    label: 'Email',
    href: 'mailto:aekafacilityservices@gmail.com',
    bg: 'bg-amber-500',
    shadow: 'shadow-amber-500/40',
  },
]

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {contacts.map((contact) => {
          const { id, Icon, isInstagram, label, href, bg, shadow } = contact
          return (
            <a
              key={id}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${bg} text-white font-body font-semibold text-sm px-4 py-2.5 rounded-full shadow-lg ${shadow} hover:scale-105 transition-transform duration-200`}
            >
              {isInstagram ? (
                <InstagramIcon size={16} />
              ) : (
                Icon && <Icon size={16} />
              )}
              <span>{label}</span>
            </a>
          )
        })}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 shimmer-btn text-royal-900 rounded-full flex items-center justify-center shadow-xl shadow-gold-400/30 hover:scale-110 transition-transform duration-300 animate-pulse-gold"
      >
        {open ? <X size={22} /> : <Headphones size={22} />}
      </button>
    </div>
  )
}