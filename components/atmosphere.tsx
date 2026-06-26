'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'

/** Thin reading-progress bar fixed to the top of the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent/70"
    />
  )
}

/** A soft warm glow that gently follows the cursor for depth. */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (!fine || reduced) return
    setEnabled(true)

    let frame: number
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() =>
        setPos({ x: e.clientX, y: e.clientY }),
      )
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, oklch(0.62 0.1 52 / 0.06), transparent 70%)`,
      }}
    />
  )
}
