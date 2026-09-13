import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/gagandeepmeena19', href: profile.linkedin },
  { label: 'GitHub', value: 'github.com/Gagan-meena', href: profile.github },
]

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading eyebrow="06. Contact" title="Let's Connect" />
        <p className="text-[var(--color-muted)] mb-10">
          I'm open to opportunities in ML/GenAI engineering, RAG systems, and
          AI security. Feel free to reach out.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 text-left hover:border-[var(--color-cyan)] transition"
            >
              <p className="font-mono text-xs text-[var(--color-cyan)] mb-1">
                {link.label}
              </p>
              <p className="text-sm text-[var(--color-text)] break-all">
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
