'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { navLinks, about, methodology, team, milestones, systemOverview, technologies } from '@/content'

// ── Build search index from all content ──────────────────────
function buildIndex() {
  const items = []

  // Sections
  navLinks.forEach((l) => {
    items.push({ title: l.label, snippet: '', section: l.label, href: l.href })
  })

  // About
  items.push({ title: 'Research Problem', snippet: about.researchProblem.slice(0, 120) + '…', section: 'About', href: '#about' })
  items.push({ title: 'Proposed Solution', snippet: about.proposedSolution.slice(0, 120) + '…', section: 'About', href: '#about' })
  about.objectives.forEach((obj) => {
    items.push({ title: obj.slice(0, 60), snippet: obj, section: 'Research Objectives', href: '#about' })
  })
  about.researchGap.forEach((g) => {
    items.push({ title: g.title, snippet: g.description, section: 'Research Gaps', href: '#about' })
  })

  // System overview components
  systemOverview.components.forEach((c) => {
    items.push({ title: c.label, snippet: c.description, section: 'System Architecture', href: '#system' })
  })

  // Methodology
  methodology.forEach((m) => {
    items.push({ title: m.title, snippet: m.description.slice(0, 120) + '…', section: 'Methodology', href: '#methodology' })
    items.push({ title: `${m.title} — Contributor`, snippet: m.contributor, section: 'Methodology', href: '#methodology' })
    m.tools.forEach((t) => {
      items.push({ title: t, snippet: `Used in: ${m.title}`, section: 'Methodology', href: '#methodology' })
    })
  })

  // Technologies
  technologies.forEach((t) => {
    items.push({ title: t.name, snippet: 'Technology used in ReefSense', section: 'Technologies', href: '#methodology' })
  })

  // Milestones
  milestones.forEach((m) => {
    items.push({ title: m.title, snippet: m.description.slice(0, 100) + '…', section: 'Milestones', href: '#milestones' })
  })

  // Team
  team.forEach((m) => {
    items.push({
      title: m.name,
      snippet: m.isSupervisor ? `${m.supervisorTitle} · ${m.position}` : m.role,
      section: 'Team',
      href: '#team',
    })
  })

  return items
}

function highlight(text, query) {
  if (!query) return text
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: 'rgba(0,153,170,0.2)', color: '#0099aa', borderRadius: '2px', padding: '0 1px' }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled]     = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery]           = useState('')
  const searchInputRef = useRef(null)
  const searchIndex = useMemo(() => buildIndex(), [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
    const observers = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 50)
    else setQuery('')
  }, [searchOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSearchOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return searchIndex
      .filter((item) =>
        item.title.toLowerCase().includes(q) ||
        item.snippet.toLowerCase().includes(q) ||
        item.section.toLowerCase().includes(q)
      )
      .slice(0, 8)
  }, [query, searchIndex])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = href === '#' ? document.body : document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  const handleResultClick = (href) => {
    setSearchOpen(false)
    setTimeout(() => {
      const target = document.querySelector(href)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-md transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
          borderBottom: '1px solid rgba(0,153,170,0.15)',
          boxShadow: scrolled ? '0 1px 12px rgba(0,80,100,0.07)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center">
            <img
              src="/images/logos/wide_logo.png"
              alt="ReefSense"
              style={{ height: '72px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* Desktop nav + search icon */}
          <div className="hidden md:flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="relative px-4 py-2 text-sm font-sans transition-colors group"
                      style={{
                        color: isActive ? '#0099aa' : '#3d5566',
                        fontWeight: isActive ? 500 : 400,
                      }}
                      onMouseOver={(e) => { if (!isActive) e.currentTarget.style.color = '#0d1f2d' }}
                      onMouseOut={(e) => { if (!isActive) e.currentTarget.style.color = '#3d5566' }}
                    >
                      {link.label}
                      <span
                        className="absolute bottom-0 left-4 right-4 h-px transition-transform duration-200 origin-left"
                        style={{
                          background: '#0099aa',
                          transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        }}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* Search icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="ml-3 p-2 rounded transition-colors"
              style={{ color: '#5a7a8a' }}
              aria-label="Search"
              onMouseOver={(e) => { e.currentTarget.style.color = '#0099aa'; e.currentTarget.style.background = 'rgba(0,153,170,0.07)' }}
              onMouseOut={(e) => { e.currentTarget.style.color = '#5a7a8a'; e.currentTarget.style.background = 'transparent' }}
            >
              <Search size={17} />
            </button>
          </div>

          {/* Mobile right — search + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 transition-colors"
              style={{ color: '#5a7a8a' }}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              className="p-2 transition-colors"
              style={{ color: '#5a7a8a' }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              onMouseOver={(e) => (e.currentTarget.style.color = '#0099aa')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#5a7a8a')}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden px-6 pb-4 backdrop-blur-md"
            style={{
              background: 'rgba(255,255,255,0.98)',
              borderTop: '1px solid rgba(0,153,170,0.1)',
            }}
          >
            <ul className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center gap-3 px-3 py-2.5 text-sm transition-colors"
                      style={{
                        color: isActive ? '#0099aa' : '#3d5566',
                        borderLeft: isActive ? '2px solid #0099aa' : '2px solid transparent',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </nav>

      {/* ── Search Modal ─────────────────────────────── */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4"
          style={{ background: 'rgba(13,31,45,0.45)', backdropFilter: 'blur(4px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false) }}
        >
          <div
            className="w-full max-w-xl overflow-hidden"
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              border: '1px solid rgba(0,153,170,0.18)',
              boxShadow: '0 24px 64px rgba(0,60,80,0.18)',
            }}
          >
            {/* Input row */}
            <div className="flex items-center gap-3 px-4 py-3.5" style={{ borderBottom: '1px solid rgba(0,153,170,0.12)' }}>
              <Search size={16} style={{ color: '#0099aa', flexShrink: 0 }} />
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, components, team members…"
                className="flex-1 font-sans bg-transparent outline-none"
                style={{ color: '#0d1f2d', fontSize: '0.95rem' }}
              />
              {query && (
                <button onClick={() => setQuery('')} style={{ color: '#94b5be' }}>
                  <X size={14} />
                </button>
              )}
              <button
                onClick={() => setSearchOpen(false)}
                className="font-mono text-xs px-2 py-1 rounded"
                style={{ color: '#5a7a8a', background: '#f4f8f8', border: '1px solid rgba(0,153,170,0.15)' }}
              >
                esc
              </button>
            </div>

            {/* Results */}
            {query.trim() && (
              <div style={{ maxHeight: '360px', overflowY: 'auto' }}>
                {results.length === 0 ? (
                  <p className="font-sans px-5 py-8 text-center" style={{ color: '#94b5be', fontSize: '0.9rem' }}>
                    No results for "<strong>{query}</strong>"
                  </p>
                ) : (
                  <ul className="py-2">
                    {results.map((item, i) => (
                      <li key={i}>
                        <button
                          onClick={() => handleResultClick(item.href)}
                          className="w-full text-left flex flex-col gap-0.5 px-5 py-3 transition-colors"
                          style={{ borderBottom: '1px solid rgba(0,153,170,0.06)' }}
                          onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(0,153,170,0.05)')}
                          onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-display font-semibold" style={{ color: '#0d1f2d', fontSize: '0.9rem' }}>
                              {highlight(item.title, query)}
                            </span>
                            <span
                              className="font-mono flex-shrink-0 px-2 py-0.5 rounded-full"
                              style={{ color: '#0099aa', background: 'rgba(0,153,170,0.08)', fontSize: '10px' }}
                            >
                              {item.section}
                            </span>
                          </div>
                          {item.snippet && (
                            <span className="font-sans" style={{ color: '#5a7a8a', fontSize: '0.8rem', lineHeight: 1.5 }}>
                              {highlight(item.snippet, query)}
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Empty state hint */}
            {!query.trim() && (
              <div className="px-5 py-6">
                <p className="font-mono mb-3" style={{ color: '#94b5be', fontSize: '10px', letterSpacing: '0.1em' }}>
                  QUICK JUMP
                </p>
                <div className="flex flex-wrap gap-2">
                  {navLinks.map((l) => (
                    <button
                      key={l.href}
                      onClick={() => handleResultClick(l.href)}
                      className="font-sans px-3 py-1.5 rounded-full text-sm transition-colors"
                      style={{ background: '#f4f8f8', color: '#3d5566', border: '1px solid rgba(0,153,170,0.12)' }}
                      onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(0,153,170,0.08)'; e.currentTarget.style.color = '#0099aa' }}
                      onMouseOut={(e) => { e.currentTarget.style.background = '#f4f8f8'; e.currentTarget.style.color = '#3d5566' }}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
