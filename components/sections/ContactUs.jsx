'use client'

import { Mail, MapPin, Building } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { contactSection } from '@/content'

export default function ContactUs() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label={contactSection.sectionLabel}
          title="Contact Us"
          subtitle="Reach out to the ReefSense research team with questions or collaboration enquiries."
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — general contact info */}
          <div>
            <h3 className="font-display font-semibold mb-6" style={{ color: '#0d1f2d', fontSize: '1rem' }}>
              General Enquiries
            </h3>

            <div className="flex flex-col gap-4 mb-10">
              <a
                href={`mailto:${contactSection.email}`}
                className="flex items-center gap-3 transition-colors group"
                style={{ color: '#3d5566' }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#0099aa')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#3d5566')}
              >
                <div
                  className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,153,170,0.08)', border: '1px solid rgba(0,153,170,0.15)' }}
                >
                  <Mail size={15} style={{ color: '#0099aa' }} />
                </div>
                <span className="font-sans text-sm">{contactSection.email}</span>
              </a>

              <div className="flex items-center gap-3" style={{ color: '#3d5566' }}>
                <div
                  className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,153,170,0.08)', border: '1px solid rgba(0,153,170,0.15)' }}
                >
                  <Building size={15} style={{ color: '#0099aa' }} />
                </div>
                <span className="font-sans text-sm">{contactSection.institution}</span>
              </div>

              <div className="flex items-center gap-3" style={{ color: '#3d5566' }}>
                <div
                  className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,153,170,0.08)', border: '1px solid rgba(0,153,170,0.15)' }}
                >
                  <MapPin size={15} style={{ color: '#0099aa' }} />
                </div>
                <span className="font-sans text-sm">{contactSection.address}</span>
              </div>
            </div>

            {/* Email template block */}
            <div
              className="p-5"
              style={{
                background: '#f4f8f8',
                border: '1px solid rgba(0,153,170,0.12)',
                borderRadius: '6px',
              }}
            >
              <p className="font-mono mb-3" style={{ color: '#5a7a8a', fontSize: '10px', letterSpacing: '0.12em' }}>
                EMAIL TEMPLATE
              </p>
              <pre
                className="font-mono whitespace-pre-wrap"
                style={{ color: '#3d5566', fontSize: '12px', lineHeight: 1.8 }}
              >{`Subject: [ReefSense] Your Subject Here

Dear ReefSense Team,

[Your message here]

Kind regards,
[Your Name]
[Your Institution / Organisation]`}</pre>
            </div>
          </div>

          {/* Right — team member contacts */}
          <div>
            <h3 className="font-display font-semibold mb-6" style={{ color: '#0d1f2d', fontSize: '1rem' }}>
              Research Group Members
            </h3>
            <div className="flex flex-col gap-3">
              {contactSection.members.map((m) => (
                <div
                  key={m.name}
                  className="card-hover flex items-center justify-between gap-4 px-5 py-4"
                  style={{
                    background: '#f4f8f8',
                    border: '1px solid rgba(0,153,170,0.10)',
                    borderRadius: '6px',
                  }}
                >
                  <p className="font-display font-medium" style={{ color: '#0d1f2d', fontSize: '0.9rem' }}>
                    {m.name}
                  </p>
                  <a
                    href={`mailto:${m.email}`}
                    className="font-mono inline-flex items-center gap-1.5 transition-colors"
                    style={{ color: '#5a7a8a', fontSize: '12px' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#0099aa')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#5a7a8a')}
                  >
                    <Mail size={12} />
                    {m.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
