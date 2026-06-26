'use client'

import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Eyebrow, Reveal } from '@/components/motion'

import { SOCIAL_LINKS, CONTACT, BIO, FOOTER } from '@/lib/content'

const iconMap = {
  email: Mail,
  github: GithubIcon,
  linkedin: LinkedinIcon,
} as const

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-soft-lg">
          <div className="bg-grid">
            <div className="flex flex-col gap-10 p-8 md:p-14">
              <div className="max-w-2xl">
                <Eyebrow>{CONTACT.eyebrow}</Eyebrow>
                <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
                  {CONTACT.heading}
                </h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {CONTACT.intents.map((intent) => (
                    <span
                      key={intent}
                      className="rounded-full border border-border/70 bg-background/70 px-3.5 py-1.5 text-sm text-foreground/80"
                    >
                      {intent}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {SOCIAL_LINKS.map((link) => {
                  const IconComp = iconMap[link.platform as keyof typeof iconMap]
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background/70 p-5 transition-colors hover:border-accent/50"
                    >
                      <span className="flex items-center gap-3">
                        <IconComp className="size-4 text-muted-foreground transition-colors group-hover:text-accent" />
                        <span className="flex flex-col">
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            {link.label}
                          </span>
                          <span className="text-sm text-foreground">
                            {link.value}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border/70 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <span className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
            {BIO.shortName}
          </span>
          {BIO.name}
        </span>
        <span className="font-mono text-xs">
          {BIO.education.degree} · {BIO.education.institute} · {BIO.education.grade}
        </span>
        <span className="text-xs">
          {FOOTER.credit} — {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
