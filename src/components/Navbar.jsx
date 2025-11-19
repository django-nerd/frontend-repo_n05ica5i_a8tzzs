import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Programs", href: "#programs" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-[#ffb052] flex items-center justify-center text-white font-bold">A</div>
          <span className="text-xl font-semibold tracking-tight text-white">adionea</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-white/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-4 py-2 rounded-md font-medium transition">
          <Phone className="h-4 w-4" />
          Get in touch
        </a>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/10 hover:bg-white/15 text-white" onClick={() => setOpen((o) => !o)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-4 rounded-lg bg-white/10 backdrop-blur border border-white/15">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-white/90 hover:text-white" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-4 py-2 rounded-md font-medium transition" onClick={() => setOpen(false)}>
              <Phone className="h-4 w-4" />
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
