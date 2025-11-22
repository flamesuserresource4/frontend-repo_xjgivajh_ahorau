import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Spline 3D scene */}
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(70,30,240,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950/80" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-40 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Live AI voice agents for CX teams
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Automate Support with an AI Voice Agent
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-slate-200/90 max-w-2xl mx-auto">
            Route, resolve, and report customer calls with a natural-sounding AI that plugs into your stack. Faster replies, happier customers, lower costs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#get-started" className="rounded-full bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 font-medium transition-colors">
              Start free
            </a>
            <a href="#demo" className="rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-medium border border-white/10 backdrop-blur transition-colors">
              See demo
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-300/70">No credit card. 5-minute setup.</p>
        </div>
      </div>
    </section>
  )
}
