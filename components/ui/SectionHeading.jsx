export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="mb-16">
      {label && (
        <p
          className="font-mono mb-4"
          style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#0099aa' }}
        >
          {label}
        </p>
      )}
      <h2
        className="font-display mb-4"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#0d1f2d', fontWeight: 600 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="font-sans max-w-2xl"
          style={{ color: '#5a7a8a', fontSize: '1.05rem', lineHeight: '1.8' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
