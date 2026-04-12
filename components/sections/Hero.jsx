'use client'

import { ChevronDown } from 'lucide-react'
import { siteConfig } from '@/content'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="hero-noise relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#050d1a' }}
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-coral.jpg')",
          opacity: 0.70,
        }}
      />

      {/* Gradient: dark at bottom, transparent at top — upward light from depths */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, #050d1a 0%, rgba(5,13,26,0.7) 50%, rgba(5,13,26,0.3) 100%)',
        }}
      />

      {/* Faint teal radial glow behind content — underwater light source */}
      <div
        className="absolute"
        style={{
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background:
            'radial-gradient(ellipse at center, rgba(0, 212, 180, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
        {/* Mono label */}
        <p
          className="font-mono mb-6"
          style={{
            color: '#00d4b4',
            fontSize: '11px',
            letterSpacing: '0.15em',
            opacity: 0.9,
          }}
        >
          Research Project · {siteConfig.projectId}
        </p>

        {/* Title */}
        <h1
          className="font-display font-bold mb-6 leading-none"
          style={{
            color: '#e8f4f8',
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            letterSpacing: '-0.02em',
          }}
        >
          {siteConfig.title}
        </h1>

        {/* Tagline */}
        <p
          className="font-sans mb-10 mx-auto leading-relaxed"
          style={{
            color: '#7a9db8',
            fontSize: '1.1rem',
            fontWeight: 300,
            maxWidth: '560px',
            lineHeight: 1.8,
          }}
        >
          {siteConfig.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollTo('about')}
            className="px-7 py-3 font-sans font-medium text-sm transition-all"
            style={{
              background: '#00d4b4',
              color: '#050d1a',
              borderRadius: '6px',
              border: 'none',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 180, 0.4)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Explore the Project
          </button>
          <button
            onClick={() => scrollTo('resources')}
            className="px-7 py-3 font-sans font-medium text-sm transition-all"
            style={{
              background: 'transparent',
              color: '#00d4b4',
              border: '1px solid rgba(0, 212, 180, 0.4)',
              borderRadius: '6px',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#00d4b4'
              e.currentTarget.style.background = 'rgba(0, 212, 180, 0.06)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 212, 180, 0.4)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            View Resources
          </button>
        </div>

        {/* Partner block */}
        {/* <div className="flex flex-col items-center gap-4">
          <p
            className="font-mono"
            style={{ color: '#2a4a5a', fontSize: '10px', letterSpacing: '0.2em' }}
          >
            IN PARTNERSHIP WITH
          </p>
          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-2 px-4 py-2"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
              }}
            >
              <span
                className="font-mono font-medium"
                style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}
              >
                SLIIT
              </span>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2"
              style={{
                background: 'rgba(0, 212, 180, 0.04)',
                border: '1px solid rgba(0, 212, 180, 0.12)',
                borderRadius: '6px',
              }}
            >
              <span
                className="font-mono font-medium"
                style={{ color: 'rgba(0, 212, 180, 0.5)', fontSize: '11px' }}
              >
                CORAL WALL
              </span>
            </div>
          </div>
        </div> */}
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-colors"
        style={{ color: 'rgba(0, 212, 180, 0.4)' }}
        aria-label="Scroll down"
        onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(0, 212, 180, 0.8)')}
        onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(0, 212, 180, 0.4)')}
      >
        <ChevronDown size={24} />
      </button>

      {/* Bottom glow divider */}
      <div
        className="absolute bottom-0 left-0 right-0 glow-divider"
      />
    </section>
  )
}
