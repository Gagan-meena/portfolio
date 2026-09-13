import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolioData'

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="02. Projects" title="Featured Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} featured={i < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
