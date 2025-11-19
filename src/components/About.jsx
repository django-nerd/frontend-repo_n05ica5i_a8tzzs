export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Built for the shore. Designed for people.</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            adionea blends hospitality expertise with modern software design. Our approach focuses on clarity, speed, and
            the kind of polish that guests feel from the first touchpoint. Whether you manage a boutique hotel, a busy
            beach bar, or a full stretch of umbrellas, we help your team deliver effortless service.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/60">Turnkey onboarding</p>
              <p className="text-white font-semibold">In weeks, not months</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/60">Operations uplift</p>
              <p className="text-white font-semibold">+Efficiency, -overhead</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/60">Support</p>
              <p className="text-white font-semibold">We’re with you daily</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/60">Scalable</p>
              <p className="text-white font-semibold">From cove to coast</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#ffb052] to-white/40 opacity-20" />
          <div className="absolute inset-6 rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-6">
            <p className="text-white/80">
              “Since switching to adionea, our beach operations run like clockwork. Bookings, bar tabs, and guest
              requests connect in one flow.”
            </p>
            <p className="mt-4 text-white font-semibold">— Marina, GM at BlueCove</p>
          </div>
        </div>
      </div>
    </section>
  );
}
