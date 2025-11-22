import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
  ]

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Logo" className="h-9 w-9" />
          <span className="text-white text-xl font-semibold tracking-tight">AfterService AI</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#get-started" className="ml-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 backdrop-blur border border-white/10 transition-colors">
            Get started
          </a>
        </nav>

        <button aria-label="Toggle menu" className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-4 rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur p-4 space-y-3">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="block text-slate-200/90 hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="#get-started" className="block text-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-white/10">
            Get started
          </a>
        </div>
      )}
    </header>
  )
}
