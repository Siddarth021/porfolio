'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  type MotionValue,
} from 'motion/react'

import { HERO, BIO } from '@/lib/content'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // Mouse parallax: normalized -0.5..0.5 around the section center
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 })
  const py = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 })

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function resetMouse() {
    mx.set(0)
    my.set(0)
  }

  // Depth helpers — larger factor = moves more = feels closer
  const bgX = useTransform(px, (v) => v * -24)
  const bgYm = useTransform(py, (v) => v * -24)

  return (
    <section
      ref={ref}
      id="top"
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Parallax background visual */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <motion.div style={{ x: bgX, y: bgYm }} className="absolute -inset-12">
          <Image
            src={HERO.bgImage.src}
            alt={HERO.bgImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </motion.div>
        {/* Warm daylight wash from the upper-left, matching the window light */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_18%_12%,_color-mix(in_oklch,_var(--color-accent)_16%,_transparent),_transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
        <div className="absolute inset-0 bg-grid opacity-50" />
      </motion.div>

      {/* Floating interface elements (depth layers) */}
      <motion.div
        style={{ opacity: fade }}
        className="pointer-events-none absolute inset-0 z-[1] hidden md:block"
      >
        <FloatingCard
          px={px}
          py={py}
          depth={42}
          drift={14}
          className="left-[8%] top-[24%]"
          delay={0.6}
        >
          <CodeChip />
        </FloatingCard>

        <FloatingCard
          px={px}
          py={py}
          depth={28}
          drift={18}
          className="right-[9%] top-[28%]"
          delay={0.75}
        >
          <CommitChip />
        </FloatingCard>

        <FloatingCard
          px={px}
          py={py}
          depth={56}
          drift={11}
          className="left-[12%] bottom-[20%]"
          delay={0.9}
        >
          <GraphChip />
        </FloatingCard>

        <FloatingCard
          px={px}
          py={py}
          depth={34}
          drift={16}
          className="right-[11%] bottom-[23%]"
          delay={1.05}
        >
          <LayerChip />
        </FloatingCard>
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
          </span>
          {HERO.availability}
        </motion.div>

        <h1 className="font-heading text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl md:text-7xl">
          {BIO.name.split(' ').map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.12 }}
              className="mr-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-sm text-muted-foreground"
        >
          {HERO.roles.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              {i > 0 && (
                <span className="size-1 rounded-full bg-border" aria-hidden />
              )}
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.62 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-foreground/80"
        >
          {BIO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.74 }}
          className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-border/70 bg-card/60 px-6 py-4 shadow-soft backdrop-blur sm:flex-row sm:gap-6"
        >
          {HERO.fields.map((field, i) => (
            <React.Fragment key={field.label}>
              {i > 0 && <Divider />}
              <Field label={field.label} value={field.value} />
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
            <motion.span
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="size-1.5 rounded-full bg-accent"
            />
          </span>
        </div>
      </motion.div>
    </section>
  )
}

function FloatingCard({
  children,
  px,
  py,
  depth,
  drift,
  className,
  delay,
}: {
  children: React.ReactNode
  px: MotionValue<number>
  py: MotionValue<number>
  depth: number
  drift: number
  className?: string
  delay: number
}) {
  const x = useTransform(px, (v) => v * depth)
  const y = useTransform(py, (v) => v * depth)

  return (
    <motion.div
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease, delay }}
      className={`absolute ${className ?? ''}`}
    >
      <motion.div
        animate={{ y: [0, -drift, 0] }}
        transition={{
          duration: 6 + drift / 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="rounded-2xl border border-border/70 bg-card/70 p-3.5 shadow-soft backdrop-blur-md"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function CodeChip() {
  return (
    <div className="w-48">
      <div className="mb-2 flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
        <span className="ml-1 font-mono text-[10px] text-muted-foreground">
          model.py
        </span>
      </div>
      <div className="space-y-1.5 font-mono text-[10px] leading-none text-muted-foreground">
        <p>
          <span className="text-accent">def</span> train(model):
        </p>
        <p className="pl-3">loss = step(batch)</p>
        <p className="pl-3 text-foreground/70">loss.backward()</p>
      </div>
    </div>
  )
}

function CommitChip() {
  return (
    <div className="flex w-44 items-center gap-3">
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-muted font-mono text-[10px] text-foreground/70">
        GS
      </span>
      <div className="min-w-0">
        <p className="truncate font-heading text-xs font-medium">
          refactor: inference loop
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">
          pushed to main · 2m
        </p>
      </div>
    </div>
  )
}

function GraphChip() {
  return (
    <div className="w-40">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        Neural graph
      </p>
      <svg viewBox="0 0 120 60" className="h-14 w-full" aria-hidden>
        {[
          [12, 14],
          [12, 30],
          [12, 46],
        ].map(([x, y], i) => (
          <line
            key={`a${i}`}
            x1={x}
            y1={y}
            x2={60}
            y2={30}
            stroke="var(--color-border)"
            strokeWidth="1"
          />
        ))}
        {[
          [108, 18],
          [108, 42],
        ].map(([x, y], i) => (
          <line
            key={`b${i}`}
            x1={60}
            y1={30}
            x2={x}
            y2={y}
            stroke="var(--color-border)"
            strokeWidth="1"
          />
        ))}
        {[
          [12, 14],
          [12, 30],
          [12, 46],
          [108, 18],
          [108, 42],
        ].map(([x, y], i) => (
          <circle key={`n${i}`} cx={x} cy={y} r="3.5" fill="var(--color-muted-foreground)" opacity="0.5" />
        ))}
        <circle cx="60" cy="30" r="4.5" fill="var(--color-accent)" />
      </svg>
    </div>
  )
}

function LayerChip() {
  return (
    <div className="w-44">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        Layers
      </p>
      <div className="space-y-1.5">
        {['Frame', 'Hero / nav', 'Content'].map((label, i) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-md bg-muted/70 px-2 py-1"
            style={{ marginLeft: i * 8 }}
          >
            <span className="size-2 rounded-[3px] border border-border" />
            <span className="font-mono text-[10px] text-foreground/70">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <span className="font-heading text-sm font-medium">{value}</span>
    </div>
  )
}

function Divider() {
  return <span className="hidden h-8 w-px bg-border sm:block" aria-hidden />
}
