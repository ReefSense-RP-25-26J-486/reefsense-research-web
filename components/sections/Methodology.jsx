'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import Tag from '@/components/ui/Tag'
import { methodology, methodologySection, technologies } from '@/content'

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 md:py-32 px-6" style={{ background: '#f4f8f8' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={methodologySection.sectionLabel}
          title="Methodology"
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'rgba(0,153,170,0.2)' }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {methodology.map((item, i) => {
              const num = String(i + 1).padStart(2, '0')

              return (
                <div key={item.id} className="flex flex-col md:flex-row gap-8 md:gap-14">
                  {/* Timeline node */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0" style={{ width: '42px' }}>
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center font-mono font-medium z-10"
                      style={{
                        background: '#ffffff',
                        border: '1px solid rgba(0,153,170,0.3)',
                        color: '#0099aa',
                        fontSize: '11px',
                        letterSpacing: '0.05em',
                        flexShrink: 0,
                      }}
                    >
                      {num}
                    </div>
                  </div>

                  {/* Content — text only */}
                  <div className="flex-1 max-w-3xl">
                    <p className="font-mono md:hidden mb-2" style={{ color: '#0099aa', fontSize: '11px' }}>{num}</p>
                    <h3 className="font-display font-semibold mb-1.5 leading-snug" style={{ color: '#0d1f2d', fontSize: '1.2rem' }}>
                      {item.title}
                    </h3>
                    <p className="font-mono mb-5" style={{ color: 'rgba(0,153,170,0.7)', fontSize: '11px' }}>
                      {item.contributor}
                    </p>
                    <p className="font-sans mb-6 leading-relaxed" style={{ color: '#3d5566', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool) => <Tag key={tool} label={tool} />)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Technologies Used ──────────────────────────── */}
        <div className="mt-20">
          <div className="glow-divider mb-12" />

          <p className="font-mono mb-8" style={{ color: '#5a7a8a', fontSize: '10px', letterSpacing: '0.15em' }}>
            TECHNOLOGIES USED
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="card-hover flex flex-col items-center gap-3 p-4"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(0,153,170,0.1)',
                  borderRadius: '8px',
                  width: '110px',
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  style={{ width: '36px', height: '36px', objectFit: 'contain' }}
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <p
                  className="font-sans text-center leading-tight"
                  style={{ color: '#3d5566', fontSize: '11px', fontWeight: 400 }}
                >
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
