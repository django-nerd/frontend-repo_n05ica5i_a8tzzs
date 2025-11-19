import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s talk</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Share a bit about your property and we’ll reach out with a tailored walkthrough.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="grid grid-cols-1 gap-4">
              <input required placeholder="Name" className="w-full rounded-md bg-white/10 text-white placeholder-white/60 px-4 py-3 outline-none border border-white/10 focus:border-[#ffb052]" />
              <input required type="email" placeholder="Email" className="w-full rounded-md bg-white/10 text-white placeholder-white/60 px-4 py-3 outline-none border border-white/10 focus:border-[#ffb052]" />
              <input placeholder="Property name" className="w-full rounded-md bg-white/10 text-white placeholder-white/60 px-4 py-3 outline-none border border-white/10 focus:border-[#ffb052]" />
              <textarea required placeholder="Tell us about your needs" rows={5} className="w-full rounded-md bg-white/10 text-white placeholder-white/60 px-4 py-3 outline-none border border-white/10 focus:border-[#ffb052]"></textarea>
            </div>
            <button type="submit" className="mt-5 inline-flex items-center justify-center rounded-md bg-[#ffb052] px-5 py-3 text-slate-900 font-semibold hover:brightness-95 transition">Send inquiry</button>
            {submitted && <p className="mt-3 text-white/80 text-sm">Thanks! We’ll get back to you shortly.</p>}
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <h3 className="text-white font-semibold text-lg">Contact details</h3>
            <p className="mt-2 text-white/70 text-sm">Email: hello@adionea.com</p>
            <p className="text-white/70 text-sm">Phone: +30 210 000 0000</p>
            <div className="mt-6 rounded-xl bg-gradient-to-br from-[#ffb052]/30 to-white/10 p-6 border border-white/10">
              <p className="text-white/80 text-sm">We’re based by the sea and operate across the Mediterranean.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
