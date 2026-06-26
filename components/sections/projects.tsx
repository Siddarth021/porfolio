'use client'

import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { GithubIcon } from '@/components/brand-icons'
import { PROJECTS, type Project } from '@/lib/content'
import { Eyebrow, Reveal, Stagger, StaggerItem } from '@/components/motion'
import { cn } from '@/lib/utils'

export function Projects() {
  const featured = PROJECTS.filter((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="work" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Projects built at the intersection of research and engineering.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            From generative models for medical signals to full-stack products —
            each project carries a problem worth solving.
          </p>
        </Reveal>

        {/* Featured */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {featured.map((project) => (
            <Reveal key={project.name} y={36}>
              <FeaturedCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Rest */}
        <Stagger className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <StaggerItem key={project.name} className="h-full">
              <CompactCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function TechTags({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border/70 bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft transition-colors hover:border-accent/40 md:p-9"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            Featured
          </span>
          <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            {project.name}
          </h3>
          <p className="mt-1 text-muted-foreground">{project.tagline}</p>
        </div>
        <a
          href="#"
          aria-label={`${project.name} on GitHub`}
          className="grid size-10 shrink-0 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <GithubIcon className="size-4" />
        </a>
      </div>

      <dl className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Detail term="Problem" desc={project.problem} />
        <Detail term="Approach" desc={project.approach} />
        <Detail term="Result" desc={project.result} />
      </dl>

      <div className="mt-7 flex items-center justify-between gap-4 border-t border-border/60 pt-6">
        <TechTags tech={project.tech} />
        <span className="flex items-center gap-1 text-sm font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
          Explore <ArrowUpRight className="size-4" />
        </span>
      </div>
    </motion.article>
  )
}

function Detail({ term, desc }: { term: string; desc: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {term}
      </dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-foreground/85">
        {desc}
      </dd>
    </div>
  )
}

function CompactCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      className={cn(
        'group flex h-full flex-col rounded-[1.5rem] border border-border/70 bg-card p-6 shadow-soft transition-colors hover:border-accent/40',
      )}
    >
      <div className="flex items-start justify-between">
        <h3 className="font-heading text-lg font-semibold tracking-tight">
          {project.name}
        </h3>
        <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
        {project.approach}
      </p>
      <div className="mt-5">
        <TechTags tech={project.tech} />
      </div>
    </motion.article>
  )
}
