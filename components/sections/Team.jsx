'use client'

import { Link, Mail } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { team, teamSection } from '@/content'

function Photo({ src, name }) {
  return (
    <div
      className="w-full mb-4 overflow-hidden"
      style={{
        aspectRatio: '1/1',
        background: 'rgba(244,248,248,0.5)',
        border: '1px solid rgba(0,153,170,0.1)',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            display: 'block',
          }}
        />
      ) : (
        <p className="font-mono text-center px-3" style={{ color: '#94b5be', fontSize: '10px' }}>
          Photo unavailable
        </p>
      )}
    </div>
  )
}

function SupervisorCard({ member }) {
  return (
    <div
      className="card-hover flex flex-col p-5"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,153,170,0.18)',
        borderRadius: '6px',
      }}
    >
      {/* Supervisor title badge */}
      <span
        className="font-mono self-start mb-3 px-2.5 py-1"
        style={{
          color: '#0099aa',
          background: 'rgba(0,153,170,0.08)',
          border: '1px solid rgba(0,153,170,0.2)',
          fontSize: '10px',
          letterSpacing: '0.08em',
          borderRadius: '3px',
        }}
      >
        {member.supervisorTitle.toUpperCase()}
      </span>

      <Photo src={member.photo} name={member.name} />

      <h3
        className="font-display font-semibold mb-2"
        style={{ color: '#0d1f2d', fontSize: '0.95rem' }}
      >
        {member.name}
      </h3>

      {/* Position & organisation */}
      <p
        className="font-sans mb-0.5"
        style={{ color: '#0d1f2d', fontSize: '0.78rem', fontWeight: 400 }}
      >
        {member.position}
      </p>
      <div className="flex items-center gap-2 flex-1 mb-4">
        {member.orgLogo && (
          <img
            src={member.orgLogo}
            alt={member.organization}
            style={{
              height: '18px',
              width: 'auto',
              objectFit: 'contain',
              flexShrink: 0,
              opacity: 0.75,
            }}
          />
        )}
        <p
          className="font-sans"
          style={{ color: '#5a7a8a', fontSize: '0.78rem', fontWeight: 300 }}
        >
          {member.organization}
        </p>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {member.linkedin && member.linkedin !== '#' && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors"
            style={{ color: '#94b5be', fontSize: '12px' }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#0099aa')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#94b5be')}
          >
            <Link size={12} />
            {member.linkedin.includes('wikipedia') ? 'Wikipedia' : 'LinkedIn'}
          </a>
        )}
      </div>
    </div>
  )
}

function MemberCard({ member }) {
  return (
    <div
      className="card-hover flex flex-col p-5"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,153,170,0.08)',
        borderRadius: '6px',
      }}
    >
      <Photo src={member.photo} name={member.name} />

      <h3
        className="font-display font-semibold mb-0.5"
        style={{ color: '#0d1f2d', fontSize: '0.95rem' }}
      >
        {member.name}
      </h3>

      {member.studentId && (
        <p
          className="font-mono mb-1"
          style={{ color: 'rgba(0,153,170,0.4)', fontSize: '10px', letterSpacing: '0.05em' }}
        >
          {member.studentId}
        </p>
      )}

      <p
        className="font-mono flex-1 mb-4"
        style={{ color: '#0099aa', fontSize: '10px', lineHeight: 1.6 }}
      >
        {member.role}
      </p>

      {/* Links */}
      <div className="flex gap-4">
        {member.linkedin && member.linkedin !== '#' && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors"
            style={{ color: '#94b5be', fontSize: '12px' }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#0099aa')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#94b5be')}
          >
            <Link size={12} />
            LinkedIn
          </a>
        )}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-1.5 transition-colors"
            style={{ color: '#94b5be', fontSize: '12px' }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#0099aa')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#94b5be')}
          >
            <Mail size={12} />
            Email
          </a>
        )}
      </div>
    </div>
  )
}

export default function Team() {
  const supervisors = team.filter((m) => m.isSupervisor)
  const members = team.filter((m) => !m.isSupervisor)

  return (
    <section
      id="team"
      className="py-24 md:py-32 px-6"
      style={{ background: '#f4f8f8' }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={teamSection.sectionLabel}
          title="The Team"
          // subtitle="Researchers bringing together expertise in AI, GIS, and marine conservation."
        />

        {/* Supervisors */}
        <div className="mb-4">
          <p
            className="font-mono mb-5"
            style={{ color: '#94b5be', fontSize: '10px', letterSpacing: '0.15em' }}
          >
            SUPERVISORY PANEL
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supervisors.map((member) => (
              <SupervisorCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 glow-divider" />

        {/* Research group */}
        <div>
          <p
            className="font-mono mb-5"
            style={{ color: '#94b5be', fontSize: '10px', letterSpacing: '0.15em' }}
          >
            RESEARCH GROUP
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
