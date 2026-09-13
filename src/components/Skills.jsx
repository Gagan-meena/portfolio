import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="04. Skills" title="Technical Skills" />
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="font-mono text-sm text-[var(--color-cyan)] mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] px-3 py-1.5 text-[var(--color-text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
