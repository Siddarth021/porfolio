'use client'

import { Code2, Flame, Trophy, Star, GitFork } from 'lucide-react'
import { motion } from 'motion/react'
import { GithubIcon } from '@/components/brand-icons'
import { Eyebrow, Reveal } from '@/components/motion'
import { Heatmap } from '@/components/sections/heatmap'

const leetStats = [
  { label: 'Solved', value: '480+', icon: Code2 },
  { label: 'Contest rating', value: '1742', icon: Trophy },
  { label: 'Max streak', value: '96d', icon: Flame },
]

const difficulty = [
  { label: 'Easy', value: 180, total: 210, tone: 'oklch(0.7 0.13 150)' },
  { label: 'Medium', value: 246, total: 320, tone: 'oklch(0.74 0.13 75)' },
  { label: 'Hard', value: 54, total: 110, tone: 'oklch(0.62 0.18 25)' },
]

const badges = ['50 Days Badge', '100 Days Badge', 'Annual Streak', 'Knight']

const repos = [
  { name: 'ecgan-plus-plus', desc: 'Generative augmentation for ECG signals.', lang: 'Python', stars: 64, forks: 12 },
  { name: 'ecg-disease-classifier', desc: 'SSL + distillation for cardiac diagnosis.', lang: 'Python', stars: 41, forks: 7 },
  { name: 'ai-readme-generator', desc: 'LLM pipeline that writes your docs.', lang: 'TypeScript', stars: 88, forks: 19 },
  { name: 'xploreo', desc: 'Full-stack travel planning platform.', lang: 'TypeScript', stars: 33, forks: 5 },
]

const languages = [
  { name: 'Python', pct: 52, tone: 'oklch(0.62 0.1 52)' },
  { name: 'TypeScript', pct: 24, tone: 'oklch(0.55 0.04 60)' },
  { name: 'C++', pct: 14, tone: 'oklch(0.45 0.02 65)' },
  { name: 'Other', pct: 10, tone: 'oklch(0.8 0.01 70)' },
]

export function Activity() {
  return (
    <section id="activity" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow>In practice</Eyebrow>
          <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Consistency, measured in green squares.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            Daily problem-solving and open-source work — the quiet discipline
            behind the research.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* LeetCode */}
          <Reveal y={32}>
            <article className="flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft md:p-8">
              <header className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-muted">
                    <Code2 className="size-[18px]" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">
                    LeetCode
                  </h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  @siddarth
                </span>
              </header>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {leetStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border/60 bg-background/60 p-4"
                  >
                    <s.icon className="size-4 text-accent" strokeWidth={1.7} />
                    <p className="mt-3 font-heading text-2xl font-semibold tracking-tight">
                      {s.value}
                    </p>
                    <p className="font-mono text-[11px] text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {difficulty.map((d) => (
                  <div key={d.label}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{d.label}</span>
                      <span className="font-mono text-xs text-foreground/80">
                        {d.value}
                        <span className="text-muted-foreground">
                          /{d.total}
                        </span>
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(d.value / d.total) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: d.tone }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Heatmap weeks={24} label="Submissions · last 6 months" />
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-border/70 bg-background/60 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>

          {/* GitHub */}
          <Reveal y={32} delay={0.1}>
            <article className="flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft md:p-8">
              <header className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-muted">
                    <GithubIcon className="size-[18px]" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">GitHub</h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  1,240 contributions
                </span>
              </header>

              <div className="mt-6">
                <Heatmap weeks={24} label="Contributions · last 6 months" />
              </div>

              <div className="mt-6">
                <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Languages
                </p>
                <div className="flex h-2 overflow-hidden rounded-full">
                  {languages.map((l) => (
                    <motion.span
                      key={l.name}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      style={{ backgroundColor: l.tone }}
                      className="h-full"
                    />
                  ))}
                </div>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {languages.map((l) => (
                    <li
                      key={l.name}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <span
                        className="size-2 rounded-full"
                        style={{ backgroundColor: l.tone }}
                      />
                      {l.name} · {l.pct}%
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 border-t border-border/60 pt-5 sm:grid-cols-2">
                {repos.map((r) => (
                  <motion.a
                    key={r.name}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="group rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors hover:border-accent/40"
                  >
                    <p className="font-mono text-sm font-medium text-foreground group-hover:text-accent">
                      {r.name}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {r.desc}
                    </p>
                    <div className="mt-3 flex items-center gap-4 font-mono text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <span
                          className="size-2 rounded-full"
                          style={{
                            backgroundColor:
                              r.lang === 'Python'
                                ? 'oklch(0.62 0.1 52)'
                                : 'oklch(0.55 0.04 60)',
                          }}
                        />
                        {r.lang}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="size-3" /> {r.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="size-3" /> {r.forks}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
