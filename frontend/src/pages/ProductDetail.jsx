import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WhatsAppLink from '../components/WhatsAppLink'
import { fallbackProducts } from '../data/site'
import { getData, mediaUrl } from '../lib/api'

export default function ProductDetail() {
  const {slug}=useParams()
  const [product,setProduct]=useState(fallbackProducts.find(p=>p.slug===slug))
  const [missing,setMissing]=useState(false)
  useEffect(()=>{getData(`/products/${slug}/`).then(setProduct).catch(()=>setMissing(true))},[slug])
  if(!product && missing) return <div className="container-shell section-space"><SectionHeading title="Product not found" text="This product may have been removed or is not currently available."/><Link to="/products" className="btn-outline">Back to products</Link></div>
  if(!product) return <div className="container-shell section-space">Loading product...</div>
  return <div className="section-space"><div className="container-shell"><Link to="/products" className="mb-8 inline-flex items-center gap-2 text-sm text-sage"><ArrowLeft size={16}/> Back to products</Link><div className="grid gap-12 lg:grid-cols-2"><img src={mediaUrl(product.image)} alt={product.name} className="aspect-square w-full rounded-[2rem] object-cover"/><div className="self-center"><p className="eyebrow">{product.category_name||'Beauty collection'}</p><h1 className="mt-3 font-display text-3xl sm:text-4xl text-forest">{product.name}</h1>{product.brand&&<p className="mt-3 text-sm text-sage">{product.brand}</p>}<p className="mt-6 leading-8 text-earth/75">{product.description}</p>{product.size&&<p className="mt-5 text-sm"><strong className="text-forest">Size:</strong> {product.size}</p>}{product.ingredients_or_details&&<div className="mt-6"><h2 className="font-semibold text-forest">Additional details</h2><p className="mt-2 whitespace-pre-line text-sm leading-7 text-earth/70">{product.ingredients_or_details}</p></div>}<div className="mt-8"><WhatsAppLink message={`Hello, I would like to enquire about ${product.name}.`}>Enquire about this product</WhatsAppLink></div></div></div></div></div>
}
