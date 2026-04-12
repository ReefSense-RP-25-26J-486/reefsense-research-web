export default function Tag({ label }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 font-mono"
      style={{
        background: 'rgba(0, 212, 180, 0.08)',
        border: '1px solid rgba(0, 212, 180, 0.25)',
        color: '#00d4b4',
        fontSize: '11px',
        borderRadius: '4px',
        letterSpacing: '0.02em',
      }}
    >
      {label}
    </span>
  )
}
