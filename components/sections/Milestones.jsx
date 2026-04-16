'use client'

import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { milestones, milestonesSection } from '@/content'

function StatusNode({ status }) {
  if (status === 'completed') {
    return (
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10"
        style={{ background: '#0099aa', boxShadow: '0 0 0 4px rgba(0,153,170,0.15)' }}
      >
        <Check size={14} style={{ color: '#ffffff', strokeWidth: 2.5 }} />
      </div>
    )
  }
  if (status === 'active') {
    return (
      <div className="relative flex-shrink-0 w-8 h-8 z-10">
        <span className="absolute inset-0 rounded-full animate-ping" style={{ background: 'rgba(0,153,170,0.3)' }} />
        <span className="relative w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#0099aa', boxShadow: '0 0 0 3px rgba(0,153,170,0.2)' }}>
          <span className="w-2 h-2 rounded-full bg-white" />
        </span>
      </div>
    )
  }
  return (
    <div className="w-8 h-8 rounded-full flex-shrink-0 z-10" style={{ border: '2px dashed rgba(0,153,170,0.25)', background: 'transparent' }} />
  )
}

function MilestoneCard({ milestone }) {
  const [open, setOpen] = useState(false)

  const statusConfig = {
    completed: { text: 'Completed', color: '#0099aa', bg: 'rgba(0,153,170,0.08)', border: 'rgba(0,153,170,0.2)' },
    active:    { text: 'In Progress', color: '#0d6e7a', bg: 'rgba(13,110,122,0.08)', border: 'rgba(13,110,122,0.2)' },
    upcoming:  { text: 'Upcoming', color: '#5a7a8a', bg: 'rgba(90,122,138,0.07)', border: 'rgba(90,122,138,0.15)' },
  }
  const s = statusConfig[milestone.status]

  return (
    <div
      className="card-hover flex-1 overflow-hidden"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,153,170,0.12)',
        borderRadius: '6px',
      }}
    >
      {/* Header — always visible, clickable */}
      <button
        className="w-full text-left p-5"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono" style={{ color: '#7a9db8', fontSize: '11px' }}>{milestone.date}</span>
              <span
                className="font-mono px-2 py-0.5"
                style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}`, fontSize: '10px', borderRadius: '3px' }}
              >
                {s.text}
              </span>
              {milestone.marks && (
                <span
                  className="font-mono px-2 py-0.5"
                  style={{ color: '#e05a3a', background: 'rgba(224,90,58,0.07)', border: '1px solid rgba(224,90,58,0.2)', fontSize: '10px', borderRadius: '3px' }}
                >
                  {milestone.marks}
                </span>
              )}
            </div>
            <h3 className="font-display font-semibold" style={{ color: '#0d1f2d', fontSize: '0.95rem' }}>
              {milestone.title}
            </h3>
          </div>
          <ChevronDown
            size={16}
            style={{
              color: '#5a7a8a',
              flexShrink: 0,
              marginTop: '2px',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          />
        </div>
      </button>

      {/* Expandable description */}
      {open && (
        <div className="px-5 pb-5">
          <div style={{ borderTop: '1px solid rgba(0,153,170,0.08)', paddingTop: '12px' }}>
            <p className="font-sans" style={{ color: '#3d5566', fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300 }}>
              {milestone.description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 md:py-32 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label={milestonesSection.sectionLabel}
          title="Project Milestones"
          // subtitle="Assessment timeline with marks allocation. Click any milestone to expand details."
        />

        <div className="relative">
          <div
            className="absolute top-4 bottom-4 w-px hidden md:block"
            style={{ left: '15px', background: 'rgba(0,153,170,0.2)' }}
          />
          <div className="flex flex-col gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="pt-0.5"><StatusNode status={m.status} /></div>
                <MilestoneCard milestone={m} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
