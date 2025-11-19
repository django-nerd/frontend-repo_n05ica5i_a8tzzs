import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,176,82,0.10),transparent_70%)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Programs />
        <About />
        <Contact />
        <footer className="py-10 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} adionea. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a className="text-white/60 hover:text-white text-sm" href="#">Privacy</a>
              <span className="text-white/20">•</span>
              <a className="text-white/60 hover:text-white text-sm" href="#">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
