import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import constellationMessages from '../../data/constellationMessages.js'
import Sparkles from '../shared/Sparkles.jsx'
import { SectionHeading } from '../shared/Reveal.jsx'
import { burst } from '../shared/celebrations.js'

export default function Constellation() {
  const [revealed, setRevealed] = useState({})
  const [active, setActive] = useState(null)

  const handleClick = (i, e) => {
    setRevealed((r) => ({ ...r, [i]: true }))
    setActive(i)
    burst(e.clientX / window.innerWidth, e.clientY / window.innerHeight)
    setTimeout(() => setActive((a) => (a === i ? null : a)), 3200)
  }

  return (
    <section className="night-bg relative overflow-hidden px-6 py-28">
      <Sparkles count={70} color="#ffffff" maxSize={2} />
      <SectionHeading
        light
        eyebrow="Chapter Nine"
        title="A Secret Constellation"
        subtitle="Find the brighter stars. Each one is hiding something."
      />

      <div className="relative mx-auto mt-16 h-[26rem] w-full max-w-3xl">
        {constellationMessages.map((star, i) => (
          <button
            key={i}
            onClick={(e) => handleClick(i, e)}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-3 focus:outline-none"
            style={{ left: `${star.x}%`, top: `${star.y}%` }}
            aria-label="A hidden star"
          >
            <motion.span
              className="block h-3 w-3 rounded-full bg-gold-200"
              style={{ boxShadow: '0 0 12px 4px rgba(255,233,168,0.8)' }}
              animate={
                revealed[i]
                  ? { scale: [1, 1.6, 1] }
                  : { opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }
              }
              transition={{ duration: revealed[i] ? 0.6 : 2.4, repeat: revealed[i] ? 0 : Infinity }}
            />
            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.9 }}
                  animate={{ opacity: 1, y: -8, scale: 1 }}
                  exit={{ opacity: 0, y: -14 }}
                  className="glass-dark absolute left-1/2 top-full z-10 w-48 -translate-x-1/2 rounded-xl px-4 py-3 text-center"
                >
                  <p className="font-hand text-lg text-lavender-100">{star.message}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>

      <p className="mt-8 text-center font-body text-sm text-lavender-200/70">
        {Object.keys(revealed).length} / {constellationMessages.length} stars found
      </p>
    </section>
  )
}
