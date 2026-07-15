import { motion } from 'framer-motion'

/**
 * Wraps children so they fade + rise into view the first time they
 * cross into the viewport while scrolling.
 */
export function Reveal({ children, delay = 0, y = 30, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center px-6">
      {eyebrow && (
        <span
          className={`mb-3 inline-block font-body text-sm tracking-[0.3em] uppercase ${
            light ? 'text-lavender-200' : 'text-lavender-400'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl ${
          light ? 'text-white text-glow' : 'text-plum-600'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 font-body text-lg ${light ? 'text-lavender-100/80' : 'text-plum-500'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
