import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { getData, mediaUrl } from '../lib/api'

const sample = [
  {id:1,title:'Skincare edit',category:'products',image:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900'},
  {id:2,title:'Beauty essentials',category:'makeup',image:'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900'},
  {id:3,title:'A moment of care',category:'salon',image:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900'},
  {id:4,title:'Nail details',category:'nails',image:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900'},
  {id:5,title:'Fragrance collection',category:'products',image:'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=900'},
  {id:6,title:'Hair styling',category:'hair',image:'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=900'},
]
export default function Gallery() {
  const [items,setItems]=useState(sample)
  const [active,setActive]=useState(null)
  useEffect(()=>{getData('/gallery/').then(data=>data.length&&setItems(data)).catch(()=>{})},[])
  return <section className="section-space"><div className="container-shell"><SectionHeading eyebrow="A visual story" title="The beauty gallery" text="A collection of products, details and beauty moments. Select an image to view it in a larger format." centered/><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">{items.map(item=><button key={item.id} onClick={()=>setActive(item)} className="group overflow-hidden rounded-2xl text-left"><img src={mediaUrl(item.image)} alt={item.title||item.caption||'Beauty gallery photograph'} className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"/><span className="block bg-white p-3 text-sm text-forest">{item.title||item.caption||'Beauty moments'}</span></button>)}</div></div>{active&&<div className="fixed inset-0 z-[60] grid place-items-center bg-forest/90 p-5" onClick={()=>setActive(null)}><button className="absolute right-6 top-6 text-2xl text-white" aria-label="Close gallery">×</button><img src={mediaUrl(active.image)} alt={active.title||'Gallery image'} className="max-h-[85vh] max-w-full rounded-xl object-contain"/></div>}</section>
}
