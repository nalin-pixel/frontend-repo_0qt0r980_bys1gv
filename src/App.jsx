import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Scissors, Sparkles, Palette, Waves, Mail, Instagram, Youtube, ChevronRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Navbar({ onNav }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500" />
          <span className="font-extrabold tracking-tight text-xl">Reels Editing Zone</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button onClick={() => onNav('services')} className="hover:text-fuchsia-600 transition-colors">Services</button>
          <button onClick={() => onNav('work')} className="hover:text-fuchsia-600 transition-colors">Work</button>
          <button onClick={() => onNav('about')} className="hover:text-fuchsia-600 transition-colors">About</button>
          <a href="mailto:hello@reelsediting.zone" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 shadow hover:shadow-md transition-all">
            <Mail size={16} /> Contact
          </a>
        </div>
      </div>
    </div>
  )
}

function Hero({ onNav }) {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Edit. Elevate. Engage.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600"
          >
            Reels Editing Zone is a modern portfolio for short-form video editing—snappy cuts, bold motion graphics, and scroll-stopping visuals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button onClick={() => onNav('work')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white px-5 py-3 shadow-lg shadow-fuchsia-600/20 hover:shadow-xl transition-all">
              <Play size={18} /> View Work
            </button>
            <a href="mailto:hello@reelsediting.zone" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 hover:bg-gray-900 transition-colors">
              <Mail size={18} /> Get a Quote
            </a>
          </motion.div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2"><Sparkles size={16} className="text-fuchsia-600"/> Fast turnaround</div>
            <div className="flex items-center gap-2"><Palette size={16} className="text-blue-600"/> Bold aesthetics</div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative h-[420px] sm:h-[520px] w-full rounded-2xl overflow-hidden border border-white/40 shadow-2xl bg-white/60"
        >
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/50 via-transparent to-white/30" />
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { icon: Scissors, title: 'Reels Editing', desc: 'Snappy cuts, beat syncs, and engaging pacing tailored for IG & YT Shorts.' },
    { icon: Sparkles, title: 'Motion Graphics', desc: 'Animated titles, lower thirds, transitions, and graphic packs.' },
    { icon: Palette, title: 'Color Grading', desc: 'Cinematic looks, stylized treatments, and eye-catching palettes.' },
    { icon: Waves, title: 'Sound Design', desc: 'Punchy SFX and clean mixes that amplify impact and clarity.' },
  ]
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Services</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">Everything you need to turn raw clips into scroll-stopping content.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl border border-white/40 bg-white/60 p-5 shadow hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                <it.icon className="text-fuchsia-600" />
              </div>
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    url: '#',
  }))
  return (
    <section id="work" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">A snapshot of edits that drive retention and tell a story in seconds.</p>
          </div>
          <a href="mailto:hello@reelsediting.zone" className="inline-flex items-center gap-1 font-medium text-fuchsia-700 hover:text-fuchsia-800">
            Get a custom edit <ChevronRight size={18} />
          </a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <motion.a
              key={it.id}
              href={it.url}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-br from-gray-50 to-white shadow"
            >
              <div className="aspect-[4/5] sm:aspect-[4/5] w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-200/40 to-blue-200/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-white/80 backdrop-blur border border-white/60 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Play className="text-fuchsia-700" />
                  </div>
                </div>
              </div>
              <div className="relative p-4 border-t border-white/60">
                <p className="font-medium">{it.title}</p>
                <p className="text-sm text-gray-600">Short-form highlights</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl border border-white/40 bg-white/60 p-8 shadow">
          <h3 className="text-2xl font-bold">About Reels Editing Zone</h3>
          <p className="mt-3 text-gray-600">
            I craft short-form videos that grab attention in the first second and keep viewers watching. From creators and brands to agencies, I help turn raw footage into polished, story-driven content tailored for Instagram, TikTok, and YouTube.
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <li>• Beat-synced edits</li>
            <li>• Advanced keyframing</li>
            <li>• Subtitle styling</li>
            <li>• Trend-aware pacing</li>
          </ul>
          <a href="mailto:hello@reelsediting.zone" className="mt-6 inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 hover:bg-gray-900 transition-colors">
            <Mail size={18} /> Start a project
          </a>
        </div>
        <div className="rounded-2xl border border-white/40 bg-white/60 p-8 shadow">
          <h4 className="font-semibold text-gray-900">Socials</h4>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white px-4 py-2 hover:shadow">
              <Instagram size={18} className="text-fuchsia-700" /> Instagram
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white px-4 py-2 hover:shadow">
              <Youtube size={18} className="text-red-600" /> YouTube
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            Want to see raw-to-reel breakdowns? Check the grid below or request specific samples via email.
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-white/60 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Reels Editing Zone. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="/test" className="text-gray-500 hover:text-gray-900">System Test</a>
          <a href="mailto:hello@reelsediting.zone" className="text-gray-900 font-medium">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const refs = {
    services: useRef(null),
    work: useRef(null),
    about: useRef(null),
  }

  const onNav = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 text-gray-900">
      <Navbar onNav={onNav} />

      <main>
        <Hero onNav={onNav} />

        <div id="services" ref={refs.services}>
          <Services />
        </div>

        <div id="work" ref={refs.work}>
          <Portfolio />
        </div>

        <div id="about" ref={refs.about}>
          <About />
        </div>
      </main>

      <Footer />
    </div>
  )
}
