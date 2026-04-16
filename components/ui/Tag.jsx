export default function Tag({ label }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 font-mono"
      style={{
        background: 'rgba(0, 153, 170, 0.08)',
        border: '1px solid rgba(0, 153, 170, 0.25)',
        color: '#0099aa',
        fontSize: '11px',
        borderRadius: '4px',
        letterSpacing: '0.02em',
      }}
    >
      {label}
    </span>
  )
}
