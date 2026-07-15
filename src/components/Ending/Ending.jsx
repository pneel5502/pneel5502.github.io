import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sparkles from '../shared/Sparkles.jsx'
import Fireflies from '../shared/Fireflies.jsx'
import { fireworks } from '../shared/celebrations.js'

const closingLines = [
  'No matter how many kilometers separate us...',
  'No matter how many little fights we have...',
  "You're still my favorite person.",
  'Today.',
  'Tomorrow.',
  'Always.',
]

export default function Ending({ name = 'Dhvani' }) {
  const [finale, setFinale] = useState(false)

  const handleFinale = () => {
    setFinale(true)
    fireworks(10)
  }

  return (
    <section className="night-bg relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-28 text-center">
      <Sparkles count={100} color="#ffffff" maxSize={2} />
      <Fireflies count={16} />

      {/* moon */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute right-10 top-16 h-20 w-20 rounded-full bg-gold-200 md:right-24 md:top-20 md:h-28 md:w-28"
        style={{ boxShadow: '0 0 60px 20px rgba(255,233,168,0.35)' }}
      />

      <div className="relative z-10 flex flex-col items-center gap-3">
        {closingLines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.35 }}
            className={`font-display italic text-lavender-100 ${
              i >= 2 ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
            } ${i >= 3 ? 'text-glow font-semibold text-white' : ''}`}
          >
            {line}
          </motion.p>
        ))}

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: closingLines.length * 0.35 + 0.4, duration: 0.6 }}
          onClick={handleFinale}
          className="animate-heartbeat mt-10 rounded-full bg-gradient-to-r from-blush-300 via-lavender-300 to-sky-200 px-10 py-5 font-display text-xl text-white shadow-2xl"
          style={{ boxShadow: '0 0 40px 10px rgba(255,139,184,0.5)' }}
        >
          I Love You ❤️
        </motion.button>
      </div>

      <AnimatePresence>
        {finale && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-twilight-950/95 px-6"
          >
            <Sparkles count={140} color="#ffe9a8" maxSize={3} />

            {/* Stars forming a heart shape */}
            <svg viewBox="0 0 200 180" className="absolute h-72 w-72 opacity-90 md:h-96 md:w-96">
              <motion.path
                d="M100,170 C40,120 10,80 10,50 C10,20 35,5 60,5 C80,5 95,15 100,35 C105,15 120,5 140,5 C165,5 190,20 190,50 C190,80 160,120 100,170 Z"
                fill="none"
                stroke="#ffe9a8"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.2, ease: 'easeInOut' }}
              />
            </svg>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.9 }}
              className="text-glow relative z-10 text-center font-display text-4xl text-white md:text-6xl"
            >
              I Love You, {name} ❤️
            </motion.h2>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6 }}
              onClick={() => setFinale(false)}
              className="relative z-10 mt-10 font-body text-sm tracking-widest text-lavender-200/70 underline-offset-4 hover:underline"
            >
              close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
