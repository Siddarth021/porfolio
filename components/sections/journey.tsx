'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { JOURNEY } from '@/lib/content'
import { Eyebrow, Reveal } from '@/components/motion'

export function Journey() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.7', 'end 0.6'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="journey" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-16 max-w-2xl">
          <Eyebrow>The path here</Eyebrow>
          <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
            A journey from curiosity to research.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            Each step built on the last — code became models, models became
            perception, and perception became research with real stakes.
          </p>
        </Reveal>

        <div ref={ref} className="relative">
          {/* Track */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
          {/* Animated progress line */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[15px] top-2 bottom-2 w-px origin-top bg-accent md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-10 md:space-y-16">
            {JOURNEY.map((step, i) => {
              const right = i % 2 === 1
              return (
                <li key={step.title} className="relative">
                  <Reveal
                    y={32}
                    className={`relative pl-12 md:w-1/2 md:pl-0 ${
                      right
                        ? 'md:ml-auto md:pl-16'
                        : 'md:pr-16 md:text-right'
                    }`}
                  >
                    {/* Node */}
                    <span
                      className={`absolute top-1.5 left-[9px] grid size-3.5 place-items-center rounded-full border-2 border-accent bg-background md:left-auto ${
                        right ? 'md:-left-[7px]' : 'md:-right-[7px]'
                      }`}
                      aria-hidden
                    >
                      <span className="size-1 rounded-full bg-accent" />
                    </span>

                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      {step.year}
                    </span>
                    <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {step.detail}
                    </p>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
