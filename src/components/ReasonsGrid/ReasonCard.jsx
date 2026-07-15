import { useState, useRef } from 'react'
import { burst } from '../shared/celebrations.js'

export default function ReasonCard({ reason, index }) {
  const [flipped, setFlipped] = useState(false)
  const cardRef = useRef(null)

  const handleClick = () => {
    if (!flipped && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      burst((rect.left + rect.width / 2) / window.innerWidth, (rect.top + rect.height / 2) / window.innerHeight)
    }
    setFlipped((f) => !f)
  }

  return (
    <button
      ref={cardRef}
      onClick={handleClick}
      className="card-3d aspect-square w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-300 rounded-xl"
      aria-label={`Reason ${index + 1}`}
    >
      <div
        className="card-3d-inner relative h-full w-full"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        <div className="card-face glass absolute inset-0 flex flex-col items-center justify-center rounded-xl shadow-md">
          <span className="text-2xl text-blush-400">❤</span>
          <span className="mt-1 font-body text-xs text-plum-400">#{index + 1}</span>
        </div>
        <div className="card-face card-face-back absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-lavender-100 to-blush-100 p-3 shadow-md">
          <p className="text-center font-body text-xs leading-snug text-plum-600 md:text-sm">
            {reason}
          </p>
        </div>
      </div>
    </button>
  )
}
