import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '../shared/Reveal.jsx'
import FloatingHearts from '../shared/FloatingHearts.jsx'

const letterParagraphs = [
  "There are days the distance feels like nothing, and days it feels like everything. Today I just miss you — the ordinary, undramatic kind of missing, where I wish you were simply in the room so I could look over and see you doing something small and unimportant.",
  "I don't say this enough, but I notice you. I notice how hard you try, how much you care, how you keep showing up for the people you love even when no one's asking you to. I appreciate you more than my texts probably let on.",
  "I also know I don't always communicate the way you need me to, and I want to get better at that — at listening first, at not letting silence sit where a conversation should be. You deserve someone who meets you halfway, every time.",
  "Until I can hold your hand instead of just your attention through a screen, I'll keep counting down to the next time I get to see your face in person, not through glass.",
  "So here's the simple truth, on days that are easy and days that aren't: I choose you. Not because it's easy, but because it's you.",
]

export default function LoveLetter() {
  const [open, setOpen] = useState(false)

  return (
    <section className="aurora-bg relative overflow-hidden px-6 py-28">
      <FloatingHearts count={8} />
      <SectionHeading eyebrow="Chapter Two" title="A Letter, Just for You" />

      <div className="relative mx-auto mt-16 flex max-w-2xl items-center justify-center">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="envelope"
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.04, rotate: -1 }}
              whileTap={{ scale: 0.96 }}
              className="group relative w-full max-w-sm cursor-pointer focus:outline-none"
              aria-label="Open the letter"
            >
              <div className="relative aspect-[3/2] w-full">
                {/* envelope body */}
                <div className="glass absolute inset-0 rounded-2xl shadow-xl" />
                {/* envelope flap */}
                <motion.div
                  className="absolute left-0 top-0 h-1/2 w-full origin-top rounded-t-2xl bg-gradient-to-br from-blush-200 to-lavender-200 shadow-md"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                  animate={{ rotateX: [0, 0] }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl transition-transform group-hover:scale-110">💌</span>
                </div>
              </div>
              <p className="mt-6 font-body text-sm tracking-widest text-plum-500 uppercase">
                Tap to open
              </p>
            </motion.button>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, scale: 0.85, rotateX: -15 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass w-full max-w-xl rounded-2xl p-8 shadow-2xl md:p-12"
            >
              <div className="space-y-5">
                {letterParagraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.35, duration: 0.6 }}
                    className="font-hand text-xl leading-relaxed text-plum-600 md:text-2xl"
                  >
                    {p}
                  </motion.p>
                ))}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + letterParagraphs.length * 0.35 + 0.3 }}
                  className="pt-4 text-right font-hand text-2xl text-lavender-400 md:text-3xl"
                >
                  Love,
                  <br />
                  Your Bundi ka Laddu ❤️
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
