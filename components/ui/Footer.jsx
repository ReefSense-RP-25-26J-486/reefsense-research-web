'use client'

import { GitBranch, Mail } from 'lucide-react'
import { siteConfig } from '@/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: '#020810',
        borderTop: '1px solid rgba(0, 212, 180, 0.2)',
        boxShadow: '0 -1px 0 0 rgba(0, 212, 180, 0.1), 0 -4px 20px rgba(0, 212, 180, 0.05)',
      }}
      className="py-10 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Left — branding */}
          <div>
            <div className="mb-3">
              <img
                src="/images/logos/ReefSense_text_only.png"
                alt="ReefSense"
                style={{ height: '24px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p
              className="font-mono"
              style={{ color: '#7a9db8', fontSize: '11px', letterSpacing: '0.05em' }}
            >
              {siteConfig.projectId}
            </p>
            <p style={{ color: '#4a6a82', fontSize: '12px', marginTop: '4px' }}>
              {siteConfig.institution}
            </p>
            <p style={{ color: '#4a6a82', fontSize: '12px' }}>{siteConfig.partner}</p>
          </div>

          {/* Right — links */}
          <div className="flex gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors"
              style={{ color: '#7a9db8', fontSize: '13px' }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#00d4b4')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#7a9db8')}
            >
              <GitBranch size={14} />
              GitHub
            </a>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="flex items-center gap-2 transition-colors"
              style={{ color: '#7a9db8', fontSize: '13px' }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#00d4b4')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#7a9db8')}
            >
              <Mail size={14} />
              Contact
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(0, 212, 180, 0.08)',
            paddingTop: '1.5rem',
          }}
        >
          <p
            className="font-mono text-center"
            style={{ color: '#2a4a5a', fontSize: '11px', letterSpacing: '0.04em' }}
          >
            © {year} {siteConfig.title} — {siteConfig.institution}
          </p>
        </div>
      </div>
    </footer>
  )
}
