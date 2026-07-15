import memories from '../../data/memories.js'
import { SectionHeading } from '../shared/Reveal.jsx'
import TimelineCard from './TimelineCard.jsx'

export default function Timeline() {
  return (
    <section className="relative overflow-hidden bg-blush-50 px-6 py-28">
      <SectionHeading eyebrow="Chapter Three" title="Our Story So Far" subtitle="Every chapter, worth remembering." />

      <div className="relative mx-auto mt-16 max-w-4xl">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blush-300 via-lavender-300 to-sky-200 md:block" />
        <div className="flex flex-col gap-10 md:gap-16">
          {memories.map((m, i) => (
            <TimelineCard key={m.id} memory={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
