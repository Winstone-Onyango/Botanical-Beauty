import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { ProductCard } from '../components/Cards'
import { fallbackCategories, fallbackProducts } from '../data/site'
import { getData } from '../lib/api'

export default function Products() {
  const [params,setParams] = useSearchParams()
  const [products,setProducts] = useState(fallbackProducts)
  const [categories,setCategories] = useState(fallbackCategories)
  const [search,setSearch] = useState('')
  const selected = params.get('category') || 'all'
  useEffect(()=>{getData('/products/').then(setProducts).catch(()=>{});getData('/categories/').then(setCategories).catch(()=>{})},[])
  const filtered = useMemo(()=>products.filter(p=>(selected==='all'||p.category_name?.toLowerCase()===categories.find(c=>c.slug===selected)?.name?.toLowerCase()||p.category?.toString()===selected) && `${p.name} ${p.brand||''} ${p.description}`.toLowerCase().includes(search.toLowerCase())),[products,selected,search,categories])
  return <div className="section-space"><div className="container-shell"><SectionHeading eyebrow="The catalogue" title="Explore our products" text="Browse beauty essentials across our collections. For product information or availability, get in touch with us." centered/>
    <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-soft md:flex-row"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products..." className="form-input flex-1"/><select value={selected} onChange={e=>setParams(e.target.value==='all'?{}:{category:e.target.value})} className="form-input md:max-w-xs"><option value="all">All categories</option>{categories.map(c=><option key={c.slug} value={c.slug}>{c.name}</option>)}</select></div>
    <p className="mb-5 text-sm text-earth/60">{filtered.length} product{filtered.length===1?'':'s'} displayed</p>
    {filtered.length ? <div className="grid gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 sm:grid-cols-2 lg:grid-cols-4">{filtered.map(p=><ProductCard key={p.id||p.slug} product={p}/>)}</div> : <div className="rounded-2xl bg-white p-12 text-center text-earth/70">No products match your search.</div>}
  </div></div>
}
