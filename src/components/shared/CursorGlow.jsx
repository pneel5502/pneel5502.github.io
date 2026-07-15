import { useEffect, useRef } from 'react'

/**
 * A soft glow that follows the cursor with gentle lag.
 * Disabled automatically on touch devices since there's no cursor to follow.
 */
export default function CursorGlow() {
  const dotRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const target = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const handleMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMove)

    let raf
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12
      pos.current.y += (target.current.y - pos.current.y) * 0.12
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen md:block"
      style={{
        background:
          'radial-gradient(circle, rgba(255,176,208,0.25) 0%, rgba(191,163,255,0.15) 40%, transparent 70%)',
      }}
    />
  )
}
