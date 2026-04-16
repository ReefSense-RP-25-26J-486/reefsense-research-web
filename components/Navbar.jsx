'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/content'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

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

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = href === '#' ? document.body : document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
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
            src="/images/logos/ReefSense wide Logo.png"
            alt="ReefSense"
            style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 transition-colors"
          style={{ color: '#5a7a8a' }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          onMouseOver={(e) => (e.currentTarget.style.color = '#0099aa')}
          onMouseOut={(e) => (e.currentTarget.style.color = '#5a7a8a')}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
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
  )
}
