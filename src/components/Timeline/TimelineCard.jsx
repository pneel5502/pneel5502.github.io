import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '../shared/Reveal.jsx'

export default function TimelineCard({ memory, index }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rx: py * -10, ry: px * 10 })
  }

  const reset = () => setTilt({ rx: 0, ry: 0 })
  const alignRight = index % 2 === 1

  return (
    <Reveal
      delay={index * 0.05}
      className={`flex w-full ${alignRight ? 'md:justify-end' : 'md:justify-start'}`}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="glass w-full max-w-md rounded-2xl p-5 shadow-lg md:w-[26rem]"
      >
        {/* <div className="mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blush-100 to-lavender-100">
          {memory.image ? (
            <img src={memory.image} alt={memory.title} className="h-full w-full object-cover" />
          ) : (
            <span className="font-body text-sm text-plum-400">Add a photo here</span>
          )}
        </div> */
        <div className="mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blush-100 to-lavender-100">
          <span className="text-center font-display text-2xl tracking-[0.2em] text-plum-500">{memory.date}</span>
        </div>

        }
        {/* <span className="font-body text-xs uppercase tracking-[0.2em] text-lavender-400">
          {memory.date}
        </span> */}
        <h3 className="mt-1 font-display text-2xl text-plum-600">{memory.title}</h3>
        <p className="mt-2 font-body text-sm text-plum-500">{memory.description}</p>
      </motion.div>
    </Reveal>
  )
}
