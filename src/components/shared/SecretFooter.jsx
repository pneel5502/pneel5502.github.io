import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { burst } from './celebrations.js'

const REQUIRED_CLICKS = 5

export default function SecretFooter() {
  const [clicks, setClicks] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const handleClick = (e) => {
    if (revealed) return
    const next = clicks + 1
    setClicks(next)
    if (next >= REQUIRED_CLICKS) {
      setRevealed(true)
      burst(e.clientX / window.innerWidth, e.clientY / window.innerHeight)
    }
  }

  return (
    <footer className="night-bg relative flex flex-col items-center justify-center gap-3 px-6 py-10 text-center">
      <button
        onClick={handleClick}
        aria-label="A tiny secret"
        className="text-lg text-lavender-300/40 transition hover:text-blush-300"
      >
        ✦
      </button>
      <AnimatePresence>
        {revealed && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-hand text-xl text-lavender-100"
          >
            You found the secret one. I love you more than any of these pages can say.
          </motion.p>
        )}
      </AnimatePresence>
      <p className="mt-2 font-body text-xs text-lavender-200/30">made with love, for you</p>
    </footer>
  )
}
