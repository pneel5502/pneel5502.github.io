import confetti from 'canvas-confetti'

const PINK_PALETTE = ['#ff8bb8', '#ffb0d0', '#d8c9ff', '#a67cff', '#aee0ff', '#ffe9a8']

// A quick, contained heart-ish burst — good for small interactions like
// flipping a card or catching a heart in the mini game.
export function burst(originX = 0.5, originY = 0.5) {
  confetti({
    particleCount: 40,
    spread: 60,
    startVelocity: 28,
    origin: { x: originX, y: originY },
    colors: PINK_PALETTE,
    scalar: 0.9,
    ticks: 150,
  })
}

// A bigger celebratory confetti rain — good for completing the mini game.
export function celebrate() {
  const duration = 2200
  const end = Date.now() + duration
  ;(function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.7 },
      colors: PINK_PALETTE,
    })
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.7 },
      colors: PINK_PALETTE,
    })
    if (Date.now() < end) requestAnimationFrame(frame)
  })()
}

// Fireworks — a few staggered bursts from random points, for the biggest
// moments on the site (finishing the game, the final "I Love You" click).
export function fireworks(count = 6) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 90,
        startVelocity: 35,
        spread: 360,
        origin: {
          x: 0.15 + Math.random() * 0.7,
          y: 0.2 + Math.random() * 0.4,
        },
        colors: PINK_PALETTE,
        scalar: 1.1,
        gravity: 0.8,
        ticks: 200,
      })
    }, i * 260)
  }
}
