import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'

function About() {
  return (
    <section id="about" className="py-24 px-6 border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="01. About" title="About Me" />
        <p className="text-[var(--color-muted)] leading-relaxed text-center">
          {profile.summary} I enjoy building end-to-end systems — from
          retrieval-augmented pipelines and guardrails for LLM agents to
          full-stack web and mobile applications — and I'm particularly
          drawn to the intersection of generative AI and security.
        </p>
      </div>
    </section>
  )
}

export default About
