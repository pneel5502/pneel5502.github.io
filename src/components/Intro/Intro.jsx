import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sparkles from '../shared/Sparkles.jsx'

const typewriterLines = [
  "Long distance isn't easy.",
  "We've had our little fights.",
  'But even after every disagreement...',
  "I'll always choose you.",
]

function Typewriter({ line, onDone }) {
  const [shown, setShown] = useState('')

  useEffect(() => {
    setShown('')
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setShown(line.slice(0, i))
      if (i >= line.length) {
        clearInterval(interval)
        setTimeout(onDone, 1100)
      }
    }, 45)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [line])

  return (
    <span>
      {shown}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Intro({ name = 'Dhvani' }) {
  const [stage, setStage] = useState('title') // title -> hi -> lines -> done
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStage('hi'), 2600)
    return () => clearTimeout(t1)
  }, [])

  useEffect(() => {
    if (stage === 'hi') {
      const t = setTimeout(() => setStage('lines'), 2200)
      return () => clearTimeout(t)
    }
  }, [stage])

  return (
    <section className="night-bg relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Sparkles count={90} color="#ffffff" maxSize={2} />

      {/* Glowing heart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="mb-8 text-5xl text-blush-300 animate-glow"
        style={{ filter: 'drop-shadow(0 0 20px rgba(255,139,184,0.8))' }}
      >
        ❤
      </motion.div>

      <AnimatePresence mode="wait">
        {stage === 'title' && (
          <motion.p
            key="title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1 }}
            className="font-display text-xl italic text-lavender-100 md:text-2xl"
          >
            For someone who means the world to me...
          </motion.p>
        )}

        {stage === 'hi' && (
          <motion.h1
            key="hi"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="text-glow font-display text-4xl text-white md:text-6xl"
          >
            Hi {name} ❤️
          </motion.h1>
        )}

        {stage === 'lines' && (
          <motion.div
            key="lines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[3rem] font-body text-lg text-lavender-100 md:text-2xl"
          >
            <Typewriter
              line={typewriterLines[lineIndex]}
              onDone={() => {
                if (lineIndex < typewriterLines.length - 1) {
                  setLineIndex((i) => i + 1)
                } else {
                  setStage('done')
                }
              }}
            />
          </motion.div>
        )}

        {stage === 'done' && (
          <motion.div
            key="done"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="font-display text-lg italic text-lavender-100 md:text-2xl">
              I'll always choose you.
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-4 text-white/70"
            >
              <span className="text-sm tracking-[0.3em] uppercase">Scroll</span>
              <div className="mx-auto mt-2 h-8 w-5 rounded-full border-2 border-white/50">
                <div className="mx-auto mt-1 h-2 w-1 animate-bounce rounded-full bg-white/70" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
