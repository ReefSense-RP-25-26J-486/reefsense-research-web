import { Check } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { milestones, milestonesSection } from '@/content'

function StatusNode({ status }) {
  if (status === 'completed') {
    return (
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10"
        style={{
          background: '#00d4b4',
          boxShadow: '0 0 0 4px rgba(0,212,180,0.15)',
        }}
      >
        <Check size={14} style={{ color: '#050d1a', strokeWidth: 2.5 }} />
      </div>
    )
  }

  if (status === 'active') {
    return (
      <div className="relative flex-shrink-0 w-8 h-8 z-10">
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: 'rgba(0,212,180,0.4)' }}
        />
        <span
          className="relative w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: '#00d4b4',
            boxShadow: '0 0 0 3px rgba(0,212,180,0.2)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-deep-900" style={{ background: '#050d1a' }} />
        </span>
      </div>
    )
  }

  return (
    <div
      className="w-8 h-8 rounded-full flex-shrink-0 z-10"
      style={{
        border: '2px dashed rgba(122,157,184,0.3)',
        background: 'transparent',
      }}
    />
  )
}

function MilestoneCard({ milestone }) {
  const statusConfig = {
    completed: { text: 'Completed', color: '#00d4b4', bg: 'rgba(0,212,180,0.08)', border: 'rgba(0,212,180,0.2)' },
    active: { text: 'In Progress', color: '#e8f4f8', bg: 'rgba(232,244,248,0.06)', border: 'rgba(232,244,248,0.15)' },
    upcoming: { text: 'Upcoming', color: '#7a9db8', bg: 'rgba(122,157,184,0.05)', border: 'rgba(122,157,184,0.15)' },
  }
  const s = statusConfig[milestone.status]

  return (
    <div
      className="card-hover p-5 flex-1"
      style={{
        background: '#0a1628',
        border: '1px solid rgba(0,212,180,0.08)',
        borderRadius: '6px',
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className="font-mono"
          style={{ color: '#7a9db8', fontSize: '11px' }}
        >
          {milestone.date}
        </span>
        <span
          className="font-mono px-2 py-0.5"
          style={{
            color: s.color,
            background: s.bg,
            border: `1px solid ${s.border}`,
            fontSize: '10px',
            borderRadius: '3px',
          }}
        >
          {s.text}
        </span>
      </div>
      <h3
        className="font-display font-semibold mb-2"
        style={{ color: '#e8f4f8', fontSize: '0.9rem' }}
      >
        {milestone.title}
      </h3>
      <p
        className="font-sans"
        style={{ color: '#7a9db8', fontSize: '0.83rem', lineHeight: 1.7, fontWeight: 300 }}
      >
        {milestone.description}
      </p>
    </div>
  )
}

export default function Milestones() {
  return (
    <section
      id="milestones"
      className="py-24 md:py-32 px-6"
      style={{ background: '#0a1628' }}
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label={milestonesSection.sectionLabel}
          title="Project Milestones"
          subtitle="Our research journey from proposal to final submission."
        />

        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute top-4 bottom-4 w-px hidden md:block"
            style={{
              left: '15px',
              background: 'rgba(0,212,180,0.2)',
              boxShadow: '0 0 6px rgba(0,212,180,0.1)',
            }}
          />

          <div className="flex flex-col gap-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-5">
                {/* Node */}
                <div className="pt-0.5">
                  <StatusNode status={m.status} />
                </div>
                {/* Card */}
                <MilestoneCard milestone={m} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
