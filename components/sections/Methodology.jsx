import SectionHeading from '@/components/ui/SectionHeading'
import Tag from '@/components/ui/Tag'
import { methodology, methodologySection } from '@/content'

function ImagePlaceholder({ filename, alt }) {
  return (
    <div
      className="card-hover w-full overflow-hidden"
      style={{
        aspectRatio: '16/9',
        background: '#050d1a',
        border: '1px solid rgba(0, 212, 180, 0.1)',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        className="font-mono text-center px-4"
        style={{ color: '#2a4a5a', fontSize: '11px', lineHeight: 1.8 }}
      >
        {alt}
        <br />
        <span style={{ color: 'rgba(0,212,180,0.25)' }}>/public/images/{filename}</span>
      </p>
    </div>
  )
}

export default function Methodology() {
  return (
    <section
      id="methodology"
      className="py-24 md:py-32 px-6"
      style={{ background: '#050d1a' }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={methodologySection.sectionLabel}
          title="Methodology"
          subtitle="Five AI-powered components working in concert to address coral reef conservation."
        />

        {/* Vertical timeline layout */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'rgba(0,212,180,0.15)' }}
          />

          <div className="flex flex-col gap-16 md:gap-20">
            {methodology.map((item, i) => {
              const filename = item.imagePath.replace('/images/', '')
              const num = String(i + 1).padStart(2, '0')

              return (
                <div key={item.id} className="flex flex-col md:flex-row gap-8 md:gap-14">
                  {/* Timeline node */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0" style={{ width: '42px' }}>
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center font-mono font-medium z-10"
                      style={{
                        background: '#0a1628',
                        border: '1px solid rgba(0, 212, 180, 0.3)',
                        color: '#00d4b4',
                        fontSize: '11px',
                        letterSpacing: '0.05em',
                        flexShrink: 0,
                      }}
                    >
                      {num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Image */}
                    <div>
                      <ImagePlaceholder filename={filename} alt={item.imageAlt} />
                    </div>

                    {/* Text */}
                    <div>
                      {/* Mobile node number */}
                      <p
                        className="font-mono md:hidden mb-2"
                        style={{ color: '#00d4b4', fontSize: '11px' }}
                      >
                        {num}
                      </p>
                      <h3
                        className="font-display font-semibold mb-1.5 leading-snug"
                        style={{ color: '#e8f4f8', fontSize: '1.25rem' }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="font-mono mb-5"
                        style={{ color: 'rgba(0,212,180,0.5)', fontSize: '11px' }}
                      >
                        {item.contributor}
                      </p>
                      <p
                        className="font-sans mb-6 leading-relaxed"
                        style={{ color: '#7a9db8', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}
                      >
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tools.map((tool) => (
                          <Tag key={tool} label={tool} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
