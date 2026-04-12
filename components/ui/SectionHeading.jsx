export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="mb-16">
      {label && (
        <p
          className="font-mono text-glow mb-4"
          style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#00d4b4' }}
        >
          {label}
        </p>
      )}
      <h2
        className="font-display text-text-primary mb-4"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#e8f4f8', fontWeight: 600 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="font-sans max-w-2xl"
          style={{ color: '#7a9db8', fontSize: '1.05rem', lineHeight: '1.8' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
