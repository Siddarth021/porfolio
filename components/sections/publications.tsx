'use client'

import { motion } from 'motion/react'
import { FileText, GraduationCap } from 'lucide-react'
import { PUBLICATIONS } from '@/lib/content'
import { Eyebrow, Reveal } from '@/components/motion'

export function Publications() {
  return (
    <section id="research" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Research & publications</Eyebrow>
            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
              The work taking shape on paper.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            <GraduationCap className="size-4" />
            Google Scholar
          </a>
        </Reveal>

        <ol className="space-y-4">
          {PUBLICATIONS.map((pub, i) => (
            <Reveal key={pub.title} y={28} delay={i * 0.05}>
              <motion.li
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                className="group flex flex-col gap-4 rounded-3xl border border-border/70 bg-card p-7 shadow-soft transition-colors hover:border-accent/40 md:flex-row md:items-center md:gap-7 md:p-8"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-muted text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <FileText className="size-5" strokeWidth={1.6} />
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                      {pub.status}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {pub.venue}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-heading text-lg font-semibold tracking-tight text-balance md:text-xl">
                    {pub.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {pub.note}
                  </p>
                </div>
              </motion.li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
