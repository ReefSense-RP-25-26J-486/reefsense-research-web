import SectionHeading from '@/components/ui/SectionHeading'
import { systemOverview } from '@/content'

export default function SystemOverview() {
  return (
    <section id="system" className="py-24 md:py-32 px-6" style={{ background: '#ffffff' }}>
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
            border: '1px solid rgba(0,153,170,0.15)',
            borderRadius: '8px',
            background: '#ffffff',
          }}
        >
          <img
            src={systemOverview.imagePath}
            alt={systemOverview.imageAlt}
            className="w-full h-auto block"
          />
        </div>

        {/* 4-component cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemOverview.components.map((comp) => (
            <div
              key={comp.label}
              className="card-hover flex flex-col p-5"
              style={{
                background: '#f4f8f8',
                border: '1px solid rgba(0,153,170,0.12)',
                borderTop: '3px solid #0099aa',
                borderRadius: '0 0 6px 6px',
              }}
            >
              <p className="font-mono mb-3" style={{ color: 'rgba(0,153,170,0.6)', fontSize: '10px', letterSpacing: '0.1em' }}>
                {comp.index}
              </p>
              <h3 className="font-display font-semibold mb-3 leading-tight" style={{ color: '#0d1f2d', fontSize: '0.85rem' }}>
                {comp.label}
              </h3>
              <p className="font-sans" style={{ color: '#5a7a8a', fontSize: '0.78rem', lineHeight: 1.7, fontWeight: 300 }}>
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
