import { site } from '../data/site'
export default function WhatsAppLink({ children = 'Enquire on WhatsApp', message = 'Hello, I would like to make an enquiry.' }) {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
  return <a className="btn-primary" href={href} target="_blank" rel="noreferrer">{children}</a>;
}
