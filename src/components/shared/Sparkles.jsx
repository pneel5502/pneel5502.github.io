import { useMemo } from 'react'

/**
 * A field of small twinkling dots. Used both as daytime "sparkle dust"
 * and, with a different color, as the night sky's stars.
 */
export default function Sparkles({ count = 40, color = '#ffffff', maxSize = 3 }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 1 + Math.random() * maxSize,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
      })),
    [count, maxSize],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            backgroundColor: color,
            boxShadow: `0 0 ${d.size * 2}px ${color}`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
