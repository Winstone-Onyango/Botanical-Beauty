import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { mediaUrl } from '../lib/api'

export function ProductCard({ product }) {
  return <article className="group">
    <Link to={`/products/${product.slug}`} className="image-card block">
      <img src={mediaUrl(product.image)} alt={product.name} loading="lazy"/>
      <span className="image-overlay"><span>View details <ArrowUpRight size={16}/></span></span>
    </Link>
    <p className="mt-4 text-[11px] uppercase tracking-[.18em] text-sage">{product.category_name || product.brand || 'Beauty essential'}</p>
    <h3 className="mt-1 font-display text-xl text-forest">{product.name}</h3>
    {product.size && <p className="mt-1 text-sm text-earth/60">{product.size}</p>}
  </article>
}
export function ServiceCard({ service }) {
  return <article className="overflow-hidden rounded-2xl bg-white shadow-soft">
    {service.image && <img className="aspect-[4/3] w-full object-cover" src={mediaUrl(service.image)} alt={service.name} loading="lazy"/>}
    <div className="p-6"><h3 className="font-display text-2xl text-forest">{service.name}</h3><p className="mt-2 text-sm leading-7 text-earth/70">{service.description}</p>{service.duration && <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-sage">{service.duration}</p>}</div>
  </article>
}
