import SectionHeading from './SectionHeading'
import { education } from '../data/portfolioData'

function Education() {
  return (
    <section id="education" className="py-24 px-6 border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="05. Education" title="Education" />
        <div className="space-y-5">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <div>
                <h3 className="font-display font-semibold">{edu.institution}</h3>
                <p className="text-sm text-[var(--color-muted)] mt-1">{edu.degree}</p>
              </div>
              <span className="font-mono text-sm text-[var(--color-cyan)]">
                {edu.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
