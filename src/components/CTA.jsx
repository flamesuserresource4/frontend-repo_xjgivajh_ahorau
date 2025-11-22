export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-indigo-600/10 to-cyan-500/10 p-10 text-center backdrop-blur">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Launch your AI agent today</h2>
          <p className="mt-3 text-slate-200/90">Start free, integrate in minutes, and scale to millions of calls.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#demo" className="rounded-full bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 font-medium transition-colors">
              Try the demo
            </a>
            <a href="#pricing" className="rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-medium border border-white/10 backdrop-blur transition-colors">
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
