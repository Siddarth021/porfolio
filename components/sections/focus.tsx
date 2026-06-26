'use client'

import {
  Brain,
  Eye,
  Sparkles,
  MessageSquareText,
  FlaskConical,
  Layers,
  Network,
  Cpu,
} from 'lucide-react'
import { motion } from 'motion/react'
import { FOCUS_AREAS } from '@/lib/content'
import { Eyebrow, Reveal, Stagger, StaggerItem } from '@/components/motion'

const icons = [
  Brain,
  Eye,
  Sparkles,
  MessageSquareText,
  FlaskConical,
  Layers,
  Network,
  Cpu,
]

export function Focus() {
  return (
    <section id="focus" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow>Current focus</Eyebrow>
          <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Where my attention lives right now.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            Research-driven engineering across the modern AI stack — from
            clinical models to efficient inference at the edge.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FOCUS_AREAS.map((area, i) => {
            const Icon = icons[i % icons.length]
            return (
              <StaggerItem key={area.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="group h-full rounded-3xl border border-border/70 bg-card p-6 shadow-soft transition-colors hover:border-accent/40"
                >
                  <span className="inline-grid size-11 place-items-center rounded-2xl bg-muted text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-medium tracking-tight">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.blurb}
                  </p>
                </motion.div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
