
import { Zap } from 'lucide-react'

const stats = [
  '500+ Projects Completed',
  '24/7 Emergency Support',
  '10+ Years of Excellence',
  'Licensed & Certified Team',
  'Affordable Quality Service',
  'Trusted Across Accra',
  '100% Client Satisfaction',
  'Homes · Offices · Commercial',
]

export default function StatsTicker() {
  const doubled = [...stats, ...stats]

  return (
    <div className="relative bg-gold-400 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((stat, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-8">
            <Zap size={14} className="text-royal-900 flex-shrink-0" />
            <span className="font-heading text-royal-900 tracking-widest text-sm uppercase">
              {stat}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}