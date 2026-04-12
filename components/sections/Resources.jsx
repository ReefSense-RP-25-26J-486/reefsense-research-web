'use client'

import { Download, ExternalLink, FileText, Presentation, GitBranch, ArrowDown } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { resources, resourcesSection } from '@/content'

const typeConfig = {
  PDF: { icon: FileText, color: '#ff6b52', bg: 'rgba(255,107,82,0.08)', border: 'rgba(255,107,82,0.25)' },
  PPTX: { icon: Presentation, color: '#7a9db8', bg: 'rgba(122,157,184,0.08)', border: 'rgba(122,157,184,0.25)' },
  GitHub: { icon: GitBranch, color: '#00d4b4', bg: 'rgba(0,212,180,0.06)', border: 'rgba(0,212,180,0.25)' },
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
          subtitle="Download project documents and access the source code."
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {resources.map((res) => {
            const cfg = typeConfig[res.fileType] || typeConfig.PDF
            const Icon = cfg.icon

            return (
              <div
                key={res.label}
                className="card-hover relative flex flex-col justify-between p-6"
                style={{
                  background: '#0a1628',
                  border: '1px solid rgba(0,212,180,0.08)',
                  borderRadius: '6px',
                }}
              >
                {/* File type badge */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="font-mono inline-flex items-center gap-1.5 px-2.5 py-1"
                    style={{
                      color: cfg.color,
                      background: cfg.bg,
                      border: `1px solid ${cfg.border}`,
                      fontSize: '10px',
                      letterSpacing: '0.08em',
                      borderRadius: '3px',
                    }}
                  >
                    <Icon size={11} />
                    {res.fileType}
                  </span>
                </div>

                <div className="flex-1 mb-6">
                  <h3
                    className="font-display font-semibold mb-2"
                    style={{ color: '#e8f4f8', fontSize: '1rem' }}
                  >
                    {res.label}
                  </h3>
                  <p
                    className="font-sans"
                    style={{ color: '#7a9db8', fontSize: '0.875rem', lineHeight: 1.7, fontWeight: 300 }}
                  >
                    {res.description}
                  </p>
                </div>

                {res.type === 'link' ? (
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans font-medium text-sm transition-all px-4 py-2 self-start"
                    style={{
                      color: '#00d4b4',
                      border: '1px solid rgba(0,212,180,0.3)',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(0,212,180,0.08)'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    Visit Repository
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <a
                    href={res.filePath}
                    download
                    className="inline-flex items-center gap-2 font-sans font-medium text-sm transition-all px-4 py-2 self-start"
                    style={{
                      color: '#00d4b4',
                      border: '1px solid rgba(0,212,180,0.3)',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(0,212,180,0.08)'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    Download
                    <ArrowDown size={12} />
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
