import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '../shared/Reveal.jsx'
import { fireworks } from '../shared/celebrations.js'

export default function VirtualHug() {
  const [hugging, setHugging] = useState(false)
  const [flyingHearts, setFlyingHearts] = useState([])

  const handleHug = () => {
    setHugging(true)
    setFlyingHearts(
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        left: 45 + Math.random() * 10,
        delay: Math.random() * 0.6,
        drift: Math.random() * 200 - 100,
      })),
    )
    fireworks(2)
    setTimeout(() => setHugging(false), 3400)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush-50 to-lavender-50 px-6 py-28">
      <SectionHeading eyebrow="Chapter Ten" title="Since I Can't Be There Yet" />

      <div className="relative mx-auto mt-14 flex max-w-md flex-col items-center">
        <motion.button
          onClick={handleHug}
          animate={hugging ? { scale: [1, 0.9, 1.05, 1] } : { scale: [1, 1.05, 1] }}
          transition={{ duration: hugging ? 1.2 : 2, repeat: hugging ? 0 : Infinity }}
          className="animate-heartbeat rounded-full bg-gradient-to-r from-blush-300 to-lavender-300 px-10 py-5 font-display text-xl text-white shadow-xl"
        >
          Hug Me ❤️
        </motion.button>

        <AnimatePresence>
          {flyingHearts.length > 0 &&
            hugging &&
            flyingHearts.map((h) => (
              <motion.span
                key={h.id}
                initial={{ opacity: 1, y: 0, x: 0, scale: 0.6 }}
                animate={{ opacity: 0, y: -220, x: h.drift, scale: 1.4 }}
                transition={{ duration: 2.2, delay: h.delay, ease: 'easeOut' }}
                className="pointer-events-none absolute bottom-10 text-2xl text-blush-400"
                style={{ left: `${h.left}%` }}
              >
                ❤
              </motion.span>
            ))}
        </AnimatePresence>

        <AnimatePresence>
          {hugging && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10 text-center font-hand text-2xl text-plum-600"
            >
              Imagine this is me hugging you.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* gentle screen squeeze effect */}
      <AnimatePresence>
        {hugging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-40"
            style={{
              boxShadow: 'inset 0 0 0 0 rgba(255,139,184,0)',
            }}
          >
            <motion.div
              className="h-full w-full"
              initial={{ boxShadow: 'inset 0 0 0px 0px rgba(255,139,184,0)' }}
              animate={{ boxShadow: 'inset 0 0 120px 40px rgba(255,139,184,0.35)' }}
              exit={{ boxShadow: 'inset 0 0 0px 0px rgba(255,139,184,0)' }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
