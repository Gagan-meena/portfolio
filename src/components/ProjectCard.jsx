function ProjectCard({ project, featured }) {
  const { title, subtitle, tech, points, links } = project

  return (
    <article
      className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 transition hover:border-[var(--color-cyan)]/60 hover:-translate-y-0.5 ${
        featured ? 'ring-1 ring-[var(--color-cyan)]/20' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-display text-xl font-semibold">{title}</h3>
          <p className="text-sm text-[var(--color-muted)] mt-1">{subtitle}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {links?.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-muted)] hover:text-[var(--color-cyan)] text-sm font-mono"
            >
              GitHub
            </a>
          )}
          {links?.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-muted)] hover:text-[var(--color-cyan)] text-sm font-mono"
            >
              Demo
            </a>
          )}
        </div>
      </div>

      <ul className="space-y-2.5 mb-5">
        {points.map((point) => (
          <li key={point} className="flex gap-2.5 text-sm text-[var(--color-muted)] leading-relaxed">
            <span className="text-[var(--color-cyan)] mt-1.5 shrink-0 h-1 w-1 rounded-full bg-[var(--color-cyan)]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 text-[var(--color-violet)]"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
