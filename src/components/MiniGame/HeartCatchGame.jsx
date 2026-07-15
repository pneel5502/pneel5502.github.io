import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import heartMessages from '../../data/heartMessages.js'
import { burst, celebrate, fireworks } from '../shared/celebrations.js'
import { SectionHeading, Reveal } from '../shared/Reveal.jsx'

const BASKET_WIDTH = 14 // percent of container width

export default function HeartCatchGame() {
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [basketX, setBasketX] = useState(50) // percent
  const [hearts, setHearts] = useState([])
  const [caught, setCaught] = useState([])
  const containerRef = useRef(null)
  const rafRef = useRef(null)
  const spawnRef = useRef(null)
  const idRef = useRef(0)
  const basketXRef = useRef(50)

  useEffect(() => {
    basketXRef.current = basketX
  }, [basketX])

  const moveBasketTo = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = ((clientX - rect.left) / rect.width) * 100
    setBasketX(Math.min(100 - BASKET_WIDTH / 2, Math.max(BASKET_WIDTH / 2, pct)))
  }, [])

  // Keyboard controls
  useEffect(() => {
    if (!started || finished) return
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') setBasketX((x) => Math.max(BASKET_WIDTH / 2, x - 6))
      if (e.key === 'ArrowRight') setBasketX((x) => Math.min(100 - BASKET_WIDTH / 2, x + 6))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [started, finished])

  // Spawn hearts
  useEffect(() => {
    if (!started || finished) return
    spawnRef.current = setInterval(() => {
      idRef.current += 1
      setHearts((h) => [
        ...h,
        {
          id: idRef.current,
          x: 8 + Math.random() * 84,
          y: -8,
          speed: 0.35 + Math.random() * 0.35,
          size: 20 + Math.random() * 14,
        },
      ])
    }, 700)
    return () => clearInterval(spawnRef.current)
  }, [started, finished])

  // Animate falling + collision
  useEffect(() => {
    if (!started || finished) return
    const tick = () => {
      setHearts((prev) => {
        const next = []
        for (const h of prev) {
          const ny = h.y + h.speed
          const caughtNow =
            ny > 82 && ny < 96 && Math.abs(h.x - basketXRef.current) < BASKET_WIDTH / 2 + 3
          if (caughtNow) {
            setCaught((c) => {
              if (c.length >= heartMessages.length) return c
              const rect = containerRef.current?.getBoundingClientRect()
              if (rect) {
                burst((rect.left + (h.x / 100) * rect.width) / window.innerWidth, 0.85)
              }
              const updated = [...c, heartMessages[c.length]]
              if (updated.length >= heartMessages.length) {
                setTimeout(() => {
                  setFinished(true)
                  celebrate()
                  fireworks(5)
                }, 400)
              }
              return updated
            })
            continue // remove this heart
          }
          if (ny < 104) next.push({ ...h, y: ny })
        }
        return next
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [started, finished])

  const reset = () => {
    setHearts([])
    setCaught([])
    setFinished(false)
    setStarted(true)
  }

  return (
    <section className="relative overflow-hidden bg-sky-50 px-6 py-28">
      <SectionHeading
        eyebrow="Chapter Six"
        title="Catch a Little Love"
        subtitle="Move with your arrow keys, mouse, or finger. Catch every heart to unlock something sweet."
      />

      <Reveal delay={0.2} className="mx-auto mt-12 max-w-xl">
        <div
          ref={containerRef}
          onMouseMove={(e) => started && !finished && moveBasketTo(e.clientX)}
          onTouchMove={(e) => started && !finished && moveBasketTo(e.touches[0].clientX)}
          className="glass relative h-[26rem] w-full touch-none overflow-hidden rounded-2xl shadow-lg"
        >
          {!started && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-white/40 backdrop-blur-sm">
              <p className="max-w-xs text-center font-body text-plum-600">
                Catch all {heartMessages.length} hearts to unlock a message from me.
              </p>
              <button
                onClick={() => setStarted(true)}
                className="rounded-full bg-gradient-to-r from-blush-300 to-lavender-300 px-6 py-2 font-body font-semibold text-white shadow-md transition-transform hover:scale-105"
              >
                Start
              </button>
            </div>
          )}

          {finished && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-white/60 p-6 text-center backdrop-blur-sm">
              <span className="text-4xl">🎉</span>
              <p className="font-display text-xl text-plum-600">You caught them all.</p>
              <button
                onClick={reset}
                className="rounded-full border border-lavender-300 px-5 py-1.5 font-body text-sm text-plum-500 transition hover:bg-lavender-100"
              >
                Play again
              </button>
            </div>
          )}

          {/* falling hearts */}
          {hearts.map((h) => (
            <span
              key={h.id}
              className="absolute select-none text-blush-400"
              style={{
                left: `${h.x}%`,
                top: `${h.y}%`,
                fontSize: h.size,
                transform: 'translate(-50%, -50%)',
              }}
            >
              ❤
            </span>
          ))}

          {/* basket */}
          {started && (
            <div
              className="absolute bottom-4 flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-lavender-300 to-blush-300 text-lg shadow-md"
              style={{
                left: `${basketX}%`,
                width: `${BASKET_WIDTH}%`,
                transform: 'translateX(-50%)',
              }}
            >
              🧺
            </div>
          )}
        </div>

        {/* progress + unlocked messages */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {heartMessages.map((_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i < caught.length ? 'bg-blush-400' : 'bg-plum-400/20'
              }`}
            />
          ))}
        </div>

        <div className="mt-6 space-y-2">
          <AnimatePresence>
            {caught.map((msg, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center font-hand text-2xl text-plum-600"
              >
                {msg}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  )
}
