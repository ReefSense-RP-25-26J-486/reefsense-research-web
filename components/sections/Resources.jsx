'use client'

import { ExternalLink, FileText, Presentation } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { documents, presentations, resourcesSection } from '@/content'

const scopeColors = {
  Group: { color: '#00d4b4', bg: 'rgba(0,212,180,0.08)', border: 'rgba(0,212,180,0.2)' },
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

function DownloadButton({ url, disabled }) {
  if (disabled || !url || url === '#') {
    return (
      <span
        className="font-mono inline-flex items-center gap-1.5 px-3 py-1.5 whitespace-nowrap"
        style={{
          color: '#2a4a5a',
          border: '1px solid rgba(42,74,90,0.4)',
          borderRadius: '4px',
          fontSize: '10px',
          cursor: 'default',
        }}
      >
        Soon
      </span>
    )
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono inline-flex items-center gap-1.5 px-3 py-1.5 transition-all whitespace-nowrap"
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
  )
}

function ResourceRow({ item }) {
  const isPending = item.status === 'pending'

  return (
    <div
      className="flex flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4 transition-colors"
      style={{
        borderBottom: '1px solid rgba(0,212,180,0.06)',
      }}
      onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(0,212,180,0.03)')}
      onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      {/* Title */}
      <p
        className="font-display font-medium flex-1 min-w-[160px]"
        style={{ color: isPending ? '#3a5a6a' : '#e8f4f8', fontSize: '0.9rem' }}
      >
        {item.label}
      </p>

      {/* Date / status */}
      <p
        className="font-mono"
        style={{
          color: isPending ? '#2a4a5a' : '#7a9db8',
          fontSize: '10px',
          minWidth: '140px',
        }}
      >
        {isPending ? 'Link will be updated soon' : `Submitted on ${item.submittedDate}`}
      </p>

      {/* Scope badges + download buttons grouped per download entry */}
      <div className="flex items-center gap-3 flex-wrap">
        {item.downloads.map((dl, i) => (
          <div key={i} className="flex items-center gap-2">
            <ScopeBadge scope={dl.scope} />
            <DownloadButton url={dl.url} disabled={isPending} />
          </div>
        ))}
      </div>
    </div>
  )
}

function ResourceGroup({ title, icon: Icon, items }) {
  return (
    <div className="mb-12">
      {/* Group header */}
      <div className="flex items-center gap-3 mb-4">
        <Icon size={14} style={{ color: '#00d4b4' }} />
        <p
          className="font-mono"
          style={{ color: '#00d4b4', fontSize: '10px', letterSpacing: '0.15em' }}
        >
          {title}
        </p>
      </div>

      <div
        style={{
          background: '#0a1628',
          border: '1px solid rgba(0,212,180,0.08)',
          borderRadius: '6px',
          overflow: 'hidden',
        }}
      >
        {/* Column headers */}
        <div
          className="flex flex-wrap items-center gap-x-6 px-5 py-3"
          style={{ borderBottom: '1px solid rgba(0,212,180,0.1)' }}
        >
          <p
            className="font-mono flex-1 min-w-[160px]"
            style={{ color: '#2a4a5a', fontSize: '9px', letterSpacing: '0.12em' }}
          >
            DOCUMENT
          </p>
          <p
            className="font-mono"
            style={{ color: '#2a4a5a', fontSize: '9px', letterSpacing: '0.12em', minWidth: '140px' }}
          >
            STATUS
          </p>
          <p
            className="font-mono"
            style={{ color: '#2a4a5a', fontSize: '9px', letterSpacing: '0.12em' }}
          >
            SCOPE &amp; DOWNLOAD
          </p>
        </div>

        {items.map((item) => (
          <ResourceRow key={item.label} item={item} />
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
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label={resourcesSection.sectionLabel}
          title="Resources"
          subtitle="Project documents and presentations. Download links open in a new tab."
        />

        <ResourceGroup
          title="DOCUMENTS"
          icon={FileText}
          items={documents}
        />

        <ResourceGroup
          title="PRESENTATIONS"
          icon={Presentation}
          items={presentations}
        />
      </div>
    </section>
  )
}
