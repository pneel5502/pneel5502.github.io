import { useMemo } from 'react'

/**
 * A field of soft glowing fireflies that drift upward slowly.
 * Purely decorative, pointer-events disabled so it never blocks clicks.
 */
export default function Fireflies({ count = 18, color = '#ffe9a8' }) {
  const flies = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 10,
        size: 2 + Math.random() * 3,
        drift: Math.random() * 60 - 30,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {flies.map((f) => (
        <span
          key={f.id}
          className="absolute rounded-full animate-drift"
          style={{
            left: `${f.left}%`,
            bottom: '-5%',
            width: f.size,
            height: f.size,
            backgroundColor: color,
            boxShadow: `0 0 6px 2px ${color}`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            '--drift-x': `${f.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
