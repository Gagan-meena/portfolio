import { profile } from '../data/portfolioData'

function Hero() {
  return (
    <section
      id="top"
      className="relative bg-grid section-glow pt-40 pb-24 px-6 border-b border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Photo placeholder — swap for a real photo: put the file in src/assets and
            replace this div with <img src={photoImg} alt={profile.name} className="w-40 h-40 rounded-full object-cover ..." /> */}
        <div className="shrink-0 w-40 h-40 rounded-full border-2 border-dashed border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] text-xs font-mono bg-[var(--color-surface)]">
          photo
        </div>

        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-[var(--color-cyan)] mb-3">
            Hi, I'm
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {profile.name}
          </h1>
          <h2 className="text-lg sm:text-xl text-[var(--color-muted)] mb-6">
            {profile.role}
          </h2>
          <p className="max-w-2xl text-[var(--color-muted)] leading-relaxed mb-8">
            {profile.summary}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="rounded-md bg-[var(--color-cyan)] px-5 py-2.5 text-sm font-semibold text-[#06121a] hover:brightness-110 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-violet)] hover:text-[var(--color-violet)] transition"
            >
              Get in Touch
            </a>
            <a
              href={profile.resumeFile}
              download
              className="rounded-md border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
