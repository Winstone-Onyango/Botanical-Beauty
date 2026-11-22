import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Heart, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { ProductCard, ServiceCard } from '../components/Cards'
import WhatsAppLink from '../components/WhatsAppLink'
import { fallbackCategories, fallbackProducts, fallbackServices, site } from '../data/site'
import { getData, mediaUrl } from '../lib/api'

export default function Home() {
  const [categories,setCategories] = useState(fallbackCategories)
  const [products,setProducts] = useState(fallbackProducts)
  const [services,setServices] = useState(fallbackServices)
  useEffect(() => {
    getData('/categories/').then(setCategories).catch(()=>{})
    getData('/products/?featured=true').then(data => data.length && setProducts(data)).catch(()=>{})
    getData('/services/').then(data => data.length && setServices(data)).catch(()=>{})
  }, [])
  return <>
    <section className="hero-section">
      <div className="container-shell grid items-center gap-10 py-16 lg:grid-cols-[.9fr_1.1fr] lg:py-24">
        <div className="relative z-10">
          <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.25em] text-sage"><Leaf size={16}/> Thoughtful beauty. Everyday confidence.</p>
          <h1 className="max-w-xl font-display text-5xl leading-[1.08] text-forest sm:text-6xl xl:text-7xl">Embrace your <em className="text-sage">natural</em> beauty.</h1>
          <p className="mt-6 max-w-lg leading-8 text-earth/75">{site.description}</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link to="/products" className="btn-primary">Explore products <ArrowRight size={16}/></Link><Link to="/services" className="btn-outline">Discover services</Link></div>
        </div>
        <div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1400" alt="Natural skincare products arranged with botanical elements" className="hero-image"/><div className="hero-note"><span className="font-display text-2xl">A little ritual.</span><span className="mt-1 block text-xs text-earth/65">A moment just for you.</span></div></div>
      </div>
    </section>

    <section className="section-space"><div className="container-shell"><SectionHeading eyebrow="Explore the collection" title="Beauty essentials for every day" text="Explore our range of carefully selected products, from skincare and makeup to fragrance and accessories." centered/>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{categories.slice(0,4).map(cat=><Link key={cat.slug} to={`/products?category=${cat.slug}`} className="category-card"><img src={mediaUrl(cat.image)} alt={cat.name} loading="lazy"/><div><h3 className="font-display text-2xl">{cat.name}</h3><span className="mt-1 inline-flex items-center gap-1 text-xs">Explore <ArrowRight size={13}/></span></div></Link>)}</div>
      <div className="mt-8 text-center"><Link to="/products" className="btn-outline">View all categories</Link></div>
    </div></section>

    <section className="section-space bg-white"><div className="container-shell"><div className="flex flex-wrap items-end justify-between gap-4"><SectionHeading eyebrow="Our selection" title="A few favourites" text="A closer look at selected products from our collection."/><Link to="/products" className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-forest">Browse catalogue <ArrowRight size={16}/></Link></div>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0,4).map(p=><ProductCard key={p.id || p.slug} product={p}/>)}</div>
    </div></section>

    <section className="section-space"><div className="container-shell grid items-center gap-12 lg:grid-cols-2"><img className="aspect-[5/4] w-full rounded-[2rem] object-cover" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200" alt="Relaxing professional facial treatment" loading="lazy"/><div><SectionHeading eyebrow="More than products" title="Make time for a little self-care" text="From makeup and facials to nails, hair styling and lash services, discover thoughtful beauty experiences in one place."/><div className="mb-7 flex flex-wrap gap-2">{['Makeup','Facials','Nails','Hair styling','Lashes & brows'].map(x=><span key={x} className="rounded-full bg-ivory px-4 py-2 text-xs text-forest">{x}</span>)}</div><Link to="/services" className="btn-primary">Explore our services <ArrowRight size={16}/></Link></div></div></section>

    <section className="section-space bg-forest text-ivory"><div className="container-shell grid gap-8 md:grid-cols-3">{[{icon:Leaf,title:'Thoughtful selection',text:'Beauty essentials chosen with care.'},{icon:Heart,title:'A personal touch',text:'A welcoming experience at every visit.'},{icon:Sparkles,title:'Everyday confidence',text:'Little moments that help you feel your best.'}].map(x=><div key={x.title}><x.icon className="mb-5 text-sand" size={28}/><h3 className="font-display text-2xl">{x.title}</h3><p className="mt-2 text-sm leading-7 text-ivory/70">{x.text}</p></div>)}</div></section>

    <section className="section-space"><div className="container-shell rounded-[2rem] bg-[#E9E4D6] px-7 py-14 text-center sm:px-14"><p className="mb-3 text-xs font-bold uppercase tracking-[.24em] text-sage">Let's connect</p><h2 className="font-display text-4xl text-forest sm:text-5xl">Your next beauty moment starts here.</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-earth/70">Have a question about a product or want to learn more about our services? We would love to hear from you.</p><div className="mt-8 flex justify-center"><WhatsAppLink/></div></div></section>
  </>
}
