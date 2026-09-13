import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolioData'

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="03. Experience" title="Work Experience" />
        <div className="space-y-8">
          {experience.map((job) => (
            <div
              key={job.company}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-lg font-semibold">
                  {job.role} <span className="text-[var(--color-cyan)]">@ {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-[var(--color-muted)]">
                  {job.period}
                </span>
              </div>
              <p className="text-sm text-[var(--color-muted)] mb-4">{job.location}</p>
              <ul className="space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-[var(--color-muted)] leading-relaxed">
                    <span className="text-[var(--color-cyan)] mt-1.5 shrink-0 h-1 w-1 rounded-full bg-[var(--color-cyan)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
