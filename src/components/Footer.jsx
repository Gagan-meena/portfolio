import { profile } from '../data/portfolioData'

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--color-muted)]">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--color-cyan)]">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-cyan)]">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-[var(--color-cyan)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
