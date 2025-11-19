export default function Programs() {
  const items = [
    {
      title: "Hotel Management",
      desc:
        "End-to-end property operations: reservations, housekeeping, revenue, and guest experience — all in one streamlined workflow.",
      icon: "🏨",
    },
    {
      title: "Beach Bar Management",
      desc:
        "From menu engineering to staff scheduling and POS insights — serve effortlessly with a coastal vibe.",
      icon: "🍹",
    },
    {
      title: "Umbrella Management",
      desc:
        "Smart booking grids, dynamic pricing by row, and real-time availability maps for your sunbeds and cabanas.",
      icon: "⛱️",
    },
  ];

  return (
    <section id="programs" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/2 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Programs</h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            Choose the module that fits your operation, or blend them to orchestrate a seamless guest journey from room to shore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]"
            >
              <div className="text-4xl">{card.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{card.desc}</p>
              <a href="#contact" className="mt-6 inline-flex text-sm font-semibold text-[#ffb052] hover:underline">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
