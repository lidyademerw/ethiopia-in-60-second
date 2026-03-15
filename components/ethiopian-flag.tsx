export function EthiopianFlag({ className = "w-6 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 24"
      className={className}
      aria-label="Ethiopian Flag"
    >
      <rect width="36" height="8" y="0" fill="#078930" />
      <rect width="36" height="8" y="8" fill="#FCDD09" />
      <rect width="36" height="8" y="16" fill="#DA121A" />
      <circle cx="18" cy="12" r="6" fill="#0F47AF" />
      <g fill="#FCDD09" transform="translate(18, 12)">
        <polygon points="0,-5 1.18,-1.55 4.76,-1.55 1.79,0.59 2.94,4.05 0,1.91 -2.94,4.05 -1.79,0.59 -4.76,-1.55 -1.18,-1.55" />
      </g>
      <g stroke="#078930" strokeWidth="0.3" fill="none" transform="translate(18, 12)">
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="-3"
            x2="0"
            y2="-5.5"
            transform={`rotate(${i * 30})`}
          />
        ))}
      </g>
    </svg>
  );
}
