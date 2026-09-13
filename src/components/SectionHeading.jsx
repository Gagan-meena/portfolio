function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <p className="font-mono text-sm text-[var(--color-cyan)] mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-violet)] mx-auto" />
    </div>
  )
}

export default SectionHeading
