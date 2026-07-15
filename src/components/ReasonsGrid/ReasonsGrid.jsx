import { useState } from 'react'
import reasons from '../../data/reasons.js'
import { SectionHeading, Reveal } from '../shared/Reveal.jsx'
import ReasonCard from './ReasonCard.jsx'

export default function ReasonsGrid() {
  return (
    <section className="relative overflow-hidden bg-lavender-50 px-6 py-28">
      <SectionHeading
        eyebrow="Chapter Four"
        title={`${reasons.length} Reasons I Love You`}
        subtitle="Tap each card. There's a small truth waiting behind every one."
      />
      <Reveal delay={0.2} className="mx-auto mt-14 grid max-w-5xl grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-6 md:gap-4">
        {reasons.map((reason, i) => (
          <ReasonCard key={i} reason={reason} index={i} />
        ))}
      </Reveal>
    </section>
  )
}
