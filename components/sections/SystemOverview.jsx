import SectionHeading from '@/components/ui/SectionHeading'
import { systemOverview } from '@/content'

export default function SystemOverview() {
  return (
    <section
      id="system"
      className="py-24 md:py-32 px-6"
      style={{ background: '#0a1628' }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={systemOverview.sectionLabel}
          title="System Architecture"
          subtitle={systemOverview.description}
        />

        {/* Architecture diagram */}
        <div
          className="relative mb-14 overflow-hidden"
          style={{
            border: '1px solid rgba(0, 212, 180, 0.15)',
            borderRadius: '8px',
            background: '#ffffff',
          }}
        >
          {/* Dark overlay to blend diagram with dark theme */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{ background: 'rgba(5, 13, 26, 0.12)' }}
          />
          <img
            src={systemOverview.imagePath}
            alt={systemOverview.imageAlt}
            className="w-full h-auto block"
            style={{ display: 'block' }}
          />
        </div>

        {/* Component cards — 5-col flex on desktop, horizontal scroll on mobile */}
        <div
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'thin' }}
        >
          {systemOverview.components.map((comp) => (
            <div
              key={comp.label}
              className="card-hover flex-shrink-0 flex flex-col p-5"
              style={{
                background: '#050d1a',
                border: '1px solid rgba(0, 212, 180, 0.1)',
                borderTop: '3px solid #00d4b4',
                borderRadius: '0 0 6px 6px',
                minWidth: '180px',
                flex: '1 1 180px',
              }}
            >
              <p
                className="font-mono mb-3"
                style={{ color: 'rgba(0,212,180,0.5)', fontSize: '10px', letterSpacing: '0.1em' }}
              >
                {comp.index}
              </p>
              <h3
                className="font-display font-semibold mb-3 leading-tight"
                style={{ color: '#e8f4f8', fontSize: '0.85rem' }}
              >
                {comp.label}
              </h3>
              <p
                className="font-sans"
                style={{ color: '#7a9db8', fontSize: '0.78rem', lineHeight: 1.7, fontWeight: 300 }}
              >
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
