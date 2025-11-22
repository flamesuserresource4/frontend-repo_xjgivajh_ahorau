import { Sparkles, Phone, Gauge, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Phone,
    title: 'Natural conversations',
    desc: 'Real-time speech and intent understanding handles calls like your best agent.'
  },
  {
    icon: Gauge,
    title: 'Faster resolutions',
    desc: 'Answer instantly, route accurately, and resolve common issues without wait.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-ready',
    desc: 'SOC2-minded practices with audit trails, redaction, and role-based controls.'
  },
  {
    icon: Sparkles,
    title: 'Plug-and-play',
    desc: 'Connect CRM, ticketing, and analytics tools in a few clicks — zero code required.'
  }
]

export default function Features() {
  return (
    <section id="product" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
              <Icon className="h-6 w-6 text-fuchsia-300" />
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
