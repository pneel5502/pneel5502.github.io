import { useMemo } from 'react'

/**
 * Slow-drifting translucent hearts, used to give sections an "alive" feel.
 */
export default function FloatingHearts({ count = 10, colorClass = 'text-blush-300' }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 8,
        size: 14 + Math.random() * 20,
        drift: Math.random() * 80 - 40,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className={`absolute animate-drift ${colorClass}`}
          style={{
            left: `${h.left}%`,
            bottom: '-10%',
            fontSize: h.size,
            opacity: 0.5,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            '--drift-x': `${h.drift}px`,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  )
}
