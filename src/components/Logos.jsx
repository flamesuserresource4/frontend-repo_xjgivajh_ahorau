import { motion } from 'framer-motion'

const logos = [
  { name: 'Stripe', src: 'https://images.unsplash.com/photo-1628699265231-97b2a3e7b9ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJpcGV8ZW58MHwwfHx8MTc2Mzc4MTQ1OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Slack', src: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png' },
  { name: 'HubSpot', src: 'https://images.unsplash.com/photo-1628699265231-97b2a3e7b9ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJpcGV8ZW58MHwwfHx8MTc2Mzc4MTQ1OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Zendesk', src: 'https://images.unsplash.com/photo-1628699265231-97b2a3e7b9ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJpcGV8ZW58MHwwfHx8MTc2Mzc4MTQ1OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Salesforce', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
]

export default function Logos() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center text-slate-300/80 text-sm">Connect your favorite tools</p>
        <div className="mt-6 overflow-hidden">
          <motion.div
            className="flex items-center gap-12 opacity-80"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <img key={`${logo.name}-${idx}`} src={logo.src} alt={logo.name} className="h-8" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
