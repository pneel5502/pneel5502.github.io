import { useRef } from 'react'
import { motion } from 'framer-motion'
import dreams from '../../data/dreams.js'
import { SectionHeading } from '../shared/Reveal.jsx'

export default function FutureCarousel() {
  const trackRef = useRef(null)

  return (
    <section className="relative overflow-hidden bg-lavender-50 py-28">
      <SectionHeading
        eyebrow="Chapter Eight"
        title="Future Dreams"
        subtitle="Drag sideways to see what I'm looking forward to."
      />

      <div className="mt-14 overflow-hidden px-6">
        <motion.div
          ref={trackRef}
          className="flex cursor-grab gap-6 active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -(dreams.length * 260), right: 0 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {dreams.map((d, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -2 : 2 }}
              className="glass flex h-64 w-56 flex-shrink-0 flex-col items-center justify-center gap-4 rounded-2xl p-6 text-center shadow-lg"
            >
              <span className="text-5xl">{d.emoji}</span>
              <h3 className="font-display text-xl text-plum-600">{d.title}</h3>
              <p className="font-body text-sm text-plum-500">{d.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
