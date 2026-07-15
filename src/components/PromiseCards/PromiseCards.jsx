import { useState } from 'react'
import promises from '../../data/promises.js'
import { SectionHeading, Reveal } from '../shared/Reveal.jsx'

function PromiseCard({ promise, index }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <Reveal delay={index * 0.08}>
      <button
        onClick={() => setFlipped((f) => !f)}
        className="card-3d h-48 w-full max-w-xs focus:outline-none"
        aria-label={`Promise ${index + 1}`}
      >
        <div
          className="card-3d-inner relative h-full w-full"
          style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          <div className="card-face glass absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl p-6 shadow-md">
            <span className="text-2xl">🤍</span>
            <p className="text-center font-body text-sm text-plum-500">{promise.front}</p>
            <span className="mt-2 text-xs text-lavender-400">tap to reveal</span>
          </div>
          <div className="card-face card-face-back absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-lavender-200 to-blush-100 p-6 shadow-md">
            <p className="text-center font-display text-lg text-plum-600">{promise.back}</p>
          </div>
        </div>
      </button>
    </Reveal>
  )
}

export default function PromiseCards() {
  return (
    <section className="relative overflow-hidden bg-blush-50 px-6 py-28">
      <SectionHeading eyebrow="Chapter Seven" title="Promises I'm Making" />
      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {promises.map((p, i) => (
          <PromiseCard key={i} promise={p} index={i} />
        ))}
      </div>
    </section>
  )
}
