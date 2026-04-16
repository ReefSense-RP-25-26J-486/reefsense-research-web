'use client'

import { ExternalLink, FileText, Presentation } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { documents, presentations, resourcesSection } from '@/content'

const scopeColors = {
  Group:      { color: '#0099aa', bg: 'rgba(0,153,170,0.08)',   border: 'rgba(0,153,170,0.2)'   },
  Individual: { color: '#5a7a8a', bg: 'rgba(90,122,138,0.08)',  border: 'rgba(90,122,138,0.2)'  },
}

function ScopeBadge({ scope }) {
  const s = scopeColors[scope] || scopeColors.Group
  return (
    <span
      className="font-mono px-2 py-0.5 whitespace-nowrap"
      style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}`, fontSize: '9px', letterSpacing: '0.08em', borderRadius: '3px' }}
    >
      {scope.toUpperCase()}
    </span>
  )
}

function ResourceCard({ item }) {
  const isPending = item.status === 'pending'

  return (
    <div
      className="card-hover flex flex-col p-5"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,153,170,0.12)',
        borderRadius: '6px',
      }}
    >
      <span
        className="font-mono self-start mb-4 px-2.5 py-1"
        style={{
          color: isPending ? '#94b5be' : '#0099aa',
          background: isPending ? 'rgba(148,181,190,0.08)' : 'rgba(0,153,170,0.08)',
          border: `1px solid ${isPending ? 'rgba(148,181,190,0.25)' : 'rgba(0,153,170,0.2)'}`,
          fontSize: '9px',
          letterSpacing: '0.08em',
          borderRadius: '3px',
        }}
      >
        {isPending ? 'LINK COMING SOON' : `SUBMITTED ${item.submittedDate}`}
      </span>

      <h3
        className="font-display font-semibold flex-1 mb-5"
        style={{ color: isPending ? '#94b5be' : '#0d1f2d', fontSize: '0.9rem' }}
      >
        {item.label}
      </h3>

      <div className="flex flex-col gap-2.5">
        {item.downloads.map((dl, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <ScopeBadge scope={dl.scope} />
            {isPending || !dl.url || dl.url === '#' ? (
              <span
                className="font-mono px-3 py-1.5"
                style={{ color: '#b0cdd5', border: '1px solid rgba(176,205,213,0.5)', borderRadius: '4px', fontSize: '10px' }}
              >
                Soon
              </span>
            ) : (
              <a
                href={dl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono inline-flex items-center gap-1.5 px-3 py-1.5 transition-all"
                style={{ color: '#0099aa', border: '1px solid rgba(0,153,170,0.3)', borderRadius: '4px', fontSize: '10px', letterSpacing: '0.05em' }}
                onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(0,153,170,0.07)')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Download <ExternalLink size={10} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function ResourceGroup({ title, icon: Icon, items }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-5">
        <Icon size={13} style={{ color: '#5a7a8a' }} />
        <p className="font-mono" style={{ color: '#5a7a8a', fontSize: '10px', letterSpacing: '0.15em' }}>{title}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => <ResourceCard key={item.label} item={item} />)}
      </div>
    </div>
  )
}

export default function Resources() {
  return (
    <section id="resources" className="py-24 md:py-32 px-6" style={{ background: '#f4f8f8' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={resourcesSection.sectionLabel}
          title="Resources"
          // subtitle="Project documents and presentations. Download links open Google Drive in a new tab."
        />
        <ResourceGroup title="DOCUMENTS" icon={FileText} items={documents} />
        <div className="glow-divider mb-12" />
        <ResourceGroup title="PRESENTATIONS" icon={Presentation} items={presentations} />
      </div>
    </section>
  )
}
