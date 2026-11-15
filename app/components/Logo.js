export default function Logo({ className, color = '#f2f2f2' }) {
  return (
    <svg className={className} viewBox="0 0 112 104" aria-hidden="true">
      <path fill={color} d="M0 0H112V104H107V55A49 49 0 0 0 58 6V104H0Z" />
    </svg>
  )
}
