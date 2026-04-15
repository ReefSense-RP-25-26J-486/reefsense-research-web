import SectionHeading from '@/components/ui/SectionHeading'
import { about } from '@/content'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6" style={{ background: '#050d1a' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={about.sectionLabel}
          title="About the Research"
          // subtitle="Understanding the problem and our approach to solving it."
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left column */}
          <div>
            <div className="mb-10">
              <h3
                className="font-display font-semibold mb-4"
                style={{ color: '#e8f4f8', fontSize: '1.15rem' }}
              >
                The Problem
              </h3>
              <p
                className="font-sans leading-relaxed"
                style={{ color: '#7a9db8', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}
              >
                {about.researchProblem}
              </p>
            </div>

            <div className="mb-10">
              <h3
                className="font-display font-semibold mb-4"
                style={{ color: '#e8f4f8', fontSize: '1.15rem' }}
              >
                Our Solution
              </h3>
              <p
                className="font-sans leading-relaxed"
                style={{ color: '#7a9db8', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}
              >
                {about.proposedSolution}
              </p>
            </div>

            {/* Research gap cards */}
            <div>
              <h3
                className="font-display font-semibold mb-5"
                style={{ color: '#e8f4f8', fontSize: '1.15rem' }}
              >
                Research Gaps Addressed
              </h3>
              <div className="flex flex-col gap-3">
                {about.researchGap.map((gap) => (
                  <div
                    key={gap.title}
                    className="card-hover p-4"
                    style={{
                      background: '#0a1628',
                      borderLeft: '3px solid #00d4b4',
                      borderTop: '1px solid rgba(0,212,180,0.08)',
                      borderRight: '1px solid rgba(0,212,180,0.08)',
                      borderBottom: '1px solid rgba(0,212,180,0.08)',
                      borderRadius: '0 6px 6px 0',
                    }}
                  >
                    <p
                      className="font-display font-semibold mb-1.5"
                      style={{ color: '#e8f4f8', fontSize: '0.875rem' }}
                    >
                      {gap.title}
                    </p>
                    <p
                      className="font-sans"
                      style={{ color: '#7a9db8', fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300 }}
                    >
                      {gap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Objectives */}
          <div>
            <h3
              className="font-display font-semibold mb-7"
              style={{ color: '#e8f4f8', fontSize: '1.15rem' }}
            >
              Research Objectives
            </h3>
            <ol className="flex flex-col gap-6">
              {about.objectives.map((obj, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="font-mono flex-shrink-0 mt-0.5"
                    style={{ color: '#00d4b4', fontSize: '13px' }}
                  >
                    →
                  </span>
                  <p
                    className="font-sans leading-relaxed"
                    style={{ color: '#7a9db8', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}
                  >
                    {obj}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
