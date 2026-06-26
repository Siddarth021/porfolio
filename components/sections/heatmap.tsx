'use client'

import { motion } from 'motion/react'

/** Deterministic pseudo-random so server and client render identically. */
function seeded(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const levelClasses = [
  'bg-muted',
  'bg-accent/25',
  'bg-accent/50',
  'bg-accent/75',
  'bg-accent',
]

export function Heatmap({
  weeks = 26,
  label,
}: {
  weeks?: number
  label: string
}) {
  const cols = Array.from({ length: weeks })

  return (
    <div className="w-full">
      <div className="flex gap-[3px] overflow-hidden">
        {cols.map((_, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {Array.from({ length: 7 }).map((__, d) => {
              const idx = w * 7 + d
              const r = seeded(idx + 1)
              const level =
                r > 0.82 ? 4 : r > 0.62 ? 3 : r > 0.4 ? 2 : r > 0.2 ? 1 : 0
              return (
                <motion.span
                  key={d}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: Math.min(w * 0.012 + d * 0.006, 0.8),
                  }}
                  className={`size-2.5 rounded-[3px] ${levelClasses[level]}`}
                />
              )
            })}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-mono text-[11px] text-muted-foreground">
          {label}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          Less
          {levelClasses.map((c, i) => (
            <span key={i} className={`size-2.5 rounded-[3px] ${c}`} />
          ))}
          More
        </span>
      </div>
    </div>
  )
}
