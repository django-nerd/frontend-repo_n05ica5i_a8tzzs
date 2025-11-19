import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-900 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-white/90 text-xs mb-4 border border-white/20">Ocean-inspired hospitality solutions</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            adionea — elevating coastal tourism operations
          </h1>
          <p className="mt-5 text-white/80 text-lg sm:text-xl max-w-2xl">
            We streamline hotel, beach bar, and umbrella management with elegant, data-driven tools and concierge-level support.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#programs" className="inline-flex items-center justify-center rounded-md bg-[#ffb052] px-5 py-3 text-slate-900 font-semibold hover:brightness-95 transition">Explore programs</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-3 font-semibold backdrop-blur border border-white/20 hover:bg-white/15 transition">Contact us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
