'use client'

import { ExternalLink, FileText, Presentation } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { documents, presentations, resourcesSection } from '@/content'

const scopeColors = {
  Group:      { color: '#00d4b4', bg: 'rgba(0,212,180,0.08)',   border: 'rgba(0,212,180,0.2)'   },
  Individual: { color: '#7a9db8', bg: 'rgba(122,157,184,0.08)', border: 'rgba(122,157,184,0.2)' },
}

function ScopeBadge({ scope }) {
  const s = scopeColors[scope] || scopeColors.Group
  return (
    <span
      className="font-mono px-2 py-0.5 whitespace-nowrap"
      style={{
        color: s.color,
        background: s.bg,
        border: `1px solid ${s.border}`,
        fontSize: '9px',
        letterSpacing: '0.08em',
        borderRadius: '3px',
      }}
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
        background: '#0a1628',
        border: '1px solid rgba(0,212,180,0.08)',
        borderRadius: '6px',
      }}
    >
      {/* Submission status badge */}
      <span
        className="font-mono self-start mb-4 px-2.5 py-1"
        style={{
          color: isPending ? '#2a4a5a' : '#00d4b4',
          background: isPending ? 'rgba(42,74,90,0.12)' : 'rgba(0,212,180,0.08)',
          border: `1px solid ${isPending ? 'rgba(42,74,90,0.3)' : 'rgba(0,212,180,0.2)'}`,
          fontSize: '9px',
          letterSpacing: '0.08em',
          borderRadius: '3px',
        }}
      >
        {isPending ? 'LINK COMING SOON' : `SUBMITTED ${item.submittedDate}`}
      </span>

      {/* Title */}
      <h3
        className="font-display font-semibold flex-1 mb-5"
        style={{ color: isPending ? '#3a5a6a' : '#e8f4f8', fontSize: '0.95rem' }}
      >
        {item.label}
      </h3>

      {/* Scope badges + download buttons */}
      <div className="flex flex-col gap-2.5">
        {item.downloads.map((dl, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <ScopeBadge scope={dl.scope} />
            {isPending || !dl.url || dl.url === '#' ? (
              <span
                className="font-mono px-3 py-1.5"
                style={{
                  color: '#2a4a5a',
                  border: '1px solid rgba(42,74,90,0.3)',
                  borderRadius: '4px',
                  fontSize: '10px',
                }}
              >
                Soon
              </span>
            ) : (
              <a
                href={dl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono inline-flex items-center gap-1.5 px-3 py-1.5 transition-all"
                style={{
                  color: '#00d4b4',
                  border: '1px solid rgba(0,212,180,0.3)',
                  borderRadius: '4px',
                  fontSize: '10px',
                  letterSpacing: '0.05em',
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(0,212,180,0.08)')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Download
                <ExternalLink size={10} />
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
        <Icon size={13} style={{ color: '#2a4a5a' }} />
        <p
          className="font-mono"
          style={{ color: '#2a4a5a', fontSize: '10px', letterSpacing: '0.15em' }}
        >
          {title}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ResourceCard key={item.label} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function Resources() {
  return (
    <section
      id="resources"
      className="py-24 md:py-32 px-6"
      style={{ background: '#050d1a' }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={resourcesSection.sectionLabel}
          title="Resources"
          subtitle="Project documents and presentations. Download links open Google Drive in a new tab."
        />

        <ResourceGroup title="DOCUMENTS" icon={FileText} items={documents} />

        <div className="glow-divider mb-12" />

        <ResourceGroup title="PRESENTATIONS" icon={Presentation} items={presentations} />
      </div>
    </section>
  )
}
