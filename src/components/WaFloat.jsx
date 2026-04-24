import { YOUR_WA_NUMBER } from '../data/constants'
import { WaIcon } from './Shared'

export default function WaFloat() {
  const msg = encodeURIComponent('Hello Shree Radhey Relocation Services! I would like to get a quote.')
  return (
    <a
      href={`https://wa.me/${YOUR_WA_NUMBER}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <WaIcon />
    </a>
  )
}
