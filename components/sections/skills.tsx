'use client'

import { SKILL_GROUPS } from '@/lib/content'
import { Eyebrow, Reveal, Stagger, StaggerItem } from '@/components/motion'

export function Skills() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow>Toolkit</Eyebrow>
          <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            The tools I reach for.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border/70 bg-border/70 shadow-soft sm:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <Reveal key={group.label} className="bg-card">
              <div className="flex h-full flex-col gap-5 p-7 md:p-9">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-heading text-lg font-medium tracking-tight">
                    {group.label}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </div>
                <Stagger className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <StaggerItem key={item}>
                      <span className="inline-block rounded-full border border-border/70 bg-background px-3.5 py-1.5 text-sm text-foreground/85 transition-colors hover:border-accent/50 hover:text-foreground">
                        {item}
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
