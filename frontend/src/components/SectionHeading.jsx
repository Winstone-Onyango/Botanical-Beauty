export default function SectionHeading({ eyebrow, title, text, centered = false }) {
  return <div className={`mb-9 max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
    {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[.24em] text-sage">{eyebrow}</p>}
    <h2 className="font-display text-3xl leading-tight text-forest sm:text-4xl">{title}</h2>
    {text && <p className="mt-3 leading-7 text-earth/70">{text}</p>}
  </div>
}
