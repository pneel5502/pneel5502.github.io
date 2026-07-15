import { motion } from 'framer-motion'
import { Reveal } from '../shared/Reveal.jsx'

export default function DistanceSection() {
  return (
    <section className="night-bg relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="mb-3 inline-block font-body text-sm uppercase tracking-[0.3em] text-lavender-200">
            Chapter Five
          </span>
          <h2 className="font-display text-4xl text-white text-glow md:text-5xl">
            Different Places, Same Heart
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-16 h-24 w-full max-w-md">
          {/* Left glowing point */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-blush-300"
            style={{ boxShadow: '0 0 20px 6px rgba(255,139,184,0.7)' }}
          />
          {/* Right glowing point */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-sky-200"
            style={{ boxShadow: '0 0 20px 6px rgba(174,224,255,0.7)' }}
          />
          {/* Connecting animated line */}
          <svg className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2" viewBox="0 0 400 4" preserveAspectRatio="none">
            <line x1="10" y1="2" x2="390" y2="2" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6">
              <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.5s" repeatCount="indefinite" />
            </line>
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff8bb8" />
                <stop offset="100%" stopColor="#aee0ff" />
              </linearGradient>
            </defs>
          </svg>
          {/* traveling pulse */}
          <motion.div
            className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white"
            style={{ boxShadow: '0 0 10px 4px rgba(255,255,255,0.9)' }}
            animate={{ left: ['2%', '96%', '2%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <Reveal delay={0.3} className="mt-16 space-y-3">
          <p className="font-display text-2xl italic text-lavender-100 md:text-3xl">
            Different places.
          </p>
          <p className="font-display text-2xl italic text-lavender-100 md:text-3xl">Same heart.</p>
          <p className="mx-auto mt-6 max-w-md font-body text-base text-lavender-200/80 md:text-lg">
            Distance can separate us physically, but never emotionally.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
