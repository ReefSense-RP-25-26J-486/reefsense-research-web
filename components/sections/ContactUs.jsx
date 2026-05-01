'use client'

import { useState } from 'react'
import { Mail, MapPin, Building, Send, CheckCircle, AlertCircle, Phone } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { contactSection } from '@/content'

const inputStyle = {
  width: '100%',
  background: '#f4f8f8',
  border: '1px solid rgba(0,153,170,0.2)',
  borderRadius: '6px',
  padding: '10px 14px',
  fontSize: '0.9rem',
  color: '#0d1f2d',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-sans" style={{ color: '#3d5566', fontSize: '0.82rem', fontWeight: 500 }}>
        {label}
      </label>
      {children}
    </div>
  )
}

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleFocus = (e) => (e.target.style.borderColor = '#0099aa')
  const handleBlur  = (e) => (e.target.style.borderColor = 'rgba(0,153,170,0.2)')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(contactSection.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6" style={{ background: '#ffffff' }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label={contactSection.sectionLabel}
          title="Contact Us"
          subtitle="Reach out to the ReefSense research team with questions or collaboration enquiries."
        />

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left — general contact info + member list */}
          <div>
            <h3 className="font-display font-semibold mb-6" style={{ color: '#0d1f2d', fontSize: '1rem' }}>
              General Enquiries
            </h3>

            <div className="flex flex-col gap-4 mb-8">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactSection.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors"
                style={{ color: '#3d5566' }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#0099aa')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#3d5566')}
              >
                <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,153,170,0.08)', border: '1px solid rgba(0,153,170,0.15)' }}>
                  <Mail size={15} style={{ color: '#0099aa' }} />
                </div>
                <span className="font-sans text-sm">{contactSection.email}</span>
              </a>

              <div className="flex items-center gap-3" style={{ color: '#3d5566' }}>
                <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,153,170,0.08)', border: '1px solid rgba(0,153,170,0.15)' }}>
                  <Phone size={15} style={{ color: '#0099aa' }} />
                </div>
                <span className="font-sans text-sm">{contactSection.contactNo}</span>
              </div>

              {/* <div className="flex items-center gap-3" style={{ color: '#3d5566' }}>
                <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,153,170,0.08)', border: '1px solid rgba(0,153,170,0.15)' }}>
                  <MapPin size={15} style={{ color: '#0099aa' }} />
                </div>
                <span className="font-sans text-sm">{contactSection.address}</span>
              </div> */}
            </div>

            {/* Research group member contacts */}
            <h3 className="font-display font-semibold mb-4" style={{ color: '#0d1f2d', fontSize: '1rem' }}>
              Research Group
            </h3>
            <div className="flex flex-col gap-2.5">
              {contactSection.members.map((m) => (
                <div
                  key={m.name}
                  className="card-hover flex items-center justify-between gap-4 px-4 py-3"
                  style={{ background: '#f4f8f8', border: '1px solid rgba(0,153,170,0.10)', borderRadius: '6px' }}
                >
                  <p className="font-display font-medium" style={{ color: '#0d1f2d', fontSize: '0.85rem' }}>
                    {m.name}
                  </p>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${m.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono inline-flex items-center gap-1.5 transition-colors"
                    style={{ color: '#5a7a8a', fontSize: '11px' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#0099aa')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#5a7a8a')}
                  >
                    <Mail size={11} />
                    {m.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            <h3 className="font-display font-semibold mb-6" style={{ color: '#0d1f2d', fontSize: '1rem' }}>
              Send a Message
            </h3>

            {status === 'success' ? (
              <div
                className="flex flex-col items-center justify-center gap-4 py-16 px-6 text-center"
                style={{ background: '#f4f8f8', border: '1px solid rgba(0,153,170,0.15)', borderRadius: '8px' }}
              >
                <CheckCircle size={40} style={{ color: '#0099aa' }} />
                <div>
                  <p className="font-display font-semibold mb-1" style={{ color: '#0d1f2d', fontSize: '1rem' }}>
                    Message sent!
                  </p>
                  <p className="font-sans" style={{ color: '#5a7a8a', fontSize: '0.875rem' }}>
                    We'll get back to you at {form.email || 'your email'} soon.
                  </p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="font-mono transition-colors"
                  style={{ color: '#0099aa', fontSize: '12px', letterSpacing: '0.05em' }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Field label="Your Name">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Kamal Herath"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputStyle}
                  />
                </Field>

                <Field label="Your Email">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. kamalherath@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputStyle}
                  />
                </Field>

                <Field label="Message">
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Your question or message..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  />
                </Field>

                {status === 'error' && (
                  <div
                    className="flex items-center gap-2 px-4 py-3"
                    style={{ background: 'rgba(224,90,58,0.06)', border: '1px solid rgba(224,90,58,0.2)', borderRadius: '6px' }}
                  >
                    <AlertCircle size={14} style={{ color: '#e05a3a', flexShrink: 0 }} />
                    <p className="font-sans" style={{ color: '#e05a3a', fontSize: '0.82rem' }}>
                      Something went wrong. Please try emailing us directly at {contactSection.email}.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 font-sans font-medium transition-all px-6 py-3"
                  style={{
                    background: status === 'sending' ? 'rgba(0,153,170,0.5)' : '#0099aa',
                    color: '#ffffff',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '0.9rem',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                  onMouseOver={(e) => { if (status !== 'sending') e.currentTarget.style.background = '#007d8c' }}
                  onMouseOut={(e) => { if (status !== 'sending') e.currentTarget.style.background = '#0099aa' }}
                >
                  <Send size={15} />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
